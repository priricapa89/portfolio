# Claude Community Boston — signup form setup

The form on `/claude-community-boston` posts to `/api/community`, which runs on the
server (Netlify function). That handler forwards the submission to a Google Apps
Script web app, which appends a row to a Google Sheet.

The webhook URL and the shared token never reach the browser. They live in
environment variables.

## 1. Create the sheet

Create a Google Sheet named something like `Claude Community Boston — Signups`.
Put these headers in row 1, in this order:

```
Timestamp | Name | Email | LinkedIn | Building | Workflow | Wants to meet | Future events | Source
```

## 2. Add the Apps Script

In the sheet: **Extensions → Apps Script**. Replace the contents of `Code.gs`
with this, then set `SHARED_TOKEN` to a long random string of your choosing.

```javascript
const SHARED_TOKEN = "put-a-long-random-string-here";

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);

    if (body.token !== SHARED_TOKEN) {
      return ContentService.createTextOutput(
        JSON.stringify({ ok: false, error: "unauthorized" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      body.submittedAt || new Date().toISOString(),
      body.name || "",
      body.email || "",
      body.linkedin || "",
      body.building || "",
      body.workflow || "",
      body.meet || "",
      body.future || "",
      body.source || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy it

**Deploy → New deployment → Web app**

- Execute as: **Me**
- Who has access: **Anyone**

"Anyone" is required because Netlify's server calls it without a Google login.
The shared token is what actually protects it: a request without the right token
is rejected before anything is written.

Copy the deployment URL. It looks like
`https://script.google.com/macros/s/AKfyc.../exec`.

## 4. Set the environment variables

Locally, in `.env` (already gitignored):

```
COMMUNITY_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfyc.../exec
COMMUNITY_SHEETS_TOKEN=the-same-long-random-string
```

On Netlify: **Site configuration → Environment variables**, add the same two,
then redeploy so the function picks them up.

## 5. Check it

Submit the form once on the live site and confirm a row appears in the sheet.

If the variables are missing, the form doesn't fail silently: it tells the person
the signup isn't connected yet and gives them an email address instead. Nothing
is lost, but nothing is recorded either, so set the variables before sharing the
QR code.

## Changing the Apps Script later

Every edit needs **Deploy → Manage deployments → edit → New version**, or the
live URL keeps running the old code.
