---
name: morning-brief-design
description: Design a leader's weekday morning brief once, then run it every morning. Design mode interviews the user and writes a brief spec (sections, sources, thresholds, delivery, voice). Run mode reads the connected calendar, inbox, pipeline export, and meeting notes, cross-references them, and drafts the brief in the agreed sections with every claim traced to a source. Use when the user asks to design, set up, change, or run a morning brief, daily brief, or CEO brief, or when a scheduled task named "morning brief" fires.
metadata:
  author: Pricilla Ricapa, PRICAPA (pricapa.com)
  version: "1.0"
  shared-at: NEMBC 2026 Power Breakfast, Newport RI, September 16, 2026
  status: template - the thresholds and sections are defaults for a mortgage business; edit them in design mode
---

# Morning Brief · design it once, run it every weekday

A morning brief is the smallest useful thing an AI Chief of Staff can do, and the one most people get wrong: they ask for "a summary of my day" and get a list of everything. This Skill has two modes. **Design** writes down what your brief is, what it reads, and when something is urgent. **Run** produces the brief every morning from that spec, and never adds a claim it did not read.

The brief is drafted for one reader: the person whose calendar and inbox it reads. Nothing it produces goes outside the company without that person sending it.

## Mode 1 · Design

Use this mode on the first run, or whenever the user says "redesign my brief", "change my brief", "my brief is too long".

Ask these questions, one at a time, and stop when you have enough. Do not ask what you can read from the operating manual (the Master AI Chief of Staff Prompt) if the user has one.

1. What time do you read it, and on what? (Phone at 6:45, laptop at 8:00. This sets length and format.)
2. What are your top three priorities this quarter? (The brief ranks against these, not against recency.)
3. Which sources can it read? Calendar, inbox, pipeline export or CRM, meeting notes, a shared drive folder, an ops channel. List only what is connected, with its access level.
4. What counts as urgent in your business? Offer the defaults in the thresholds table and let the user edit them.
5. What must never be in the brief? (Borrower personal data, anything from a folder you name, pricing you have not approved.)
6. Which meetings do you want prepared, and to what depth?
7. How should it reach you? Email to your own inbox, a message to yourself, or a document in a folder.
8. How long? (Default: what you would read in two minutes with coffee, about 250 words.)
9. What do you never want to read? (Filler, "I hope this helps", a rotating checklist of the same items every day.)

Then write `brief-spec.md` with these headings and show it to the user for approval:

```
# Brief spec · [Name]
Read at: [time, device]
Priorities this quarter: 1. ... 2. ... 3. ...
Sources (connected, access level): ...
Sections, in order: ...
Thresholds: (table)
Never include: ...
Meeting prep depth: ...
Delivery: ...
Length: ...
Voice: ...
Escalation: what interrupts the schedule and reaches the user immediately
Review date: [90 days out]
```

Produce one sample brief from synthetic data so the user can react to the shape before the schedule is set. Nothing is scheduled until the user says the sample looks right.

## Mode 2 · Run

Runs every weekday at the agreed time from a scheduled task, or on demand ("run my brief", "brief me").

1. **Load the spec** and the operating manual from the Claude Project. If either is missing, say so and run with the defaults below, labeled as defaults.
2. **Read the calendar** for today and tomorrow: every meeting, who is in it, and open blocks worth protecting for focused work.
3. **Read the inbox** for threads waiting on the user: external senders first, then anything older than two business days without a reply, then anything that mentions a name under important relationships.
4. **Read the pipeline export or CRM**: locks expiring inside 72 hours, files with no status change in more than five business days, closings this week, anything with a deadline.
5. **Read the meeting notes and the ops channel** since the last run: decisions, promises, complaints, anything that changed a date.
6. **Cross-reference.** The brief exists for what no single source shows: the file that is stuck and whose loan officer is out and whose builder emailed twice. Look for those before writing anything.
7. **Pick three to five priorities for today,** each because something read this run makes it time-sensitive. Say why in one line. Say what was deprioritized and why.
8. **Write the brief** in the agreed sections, in order, and nothing else.
9. **Verify** with the checklist below.
10. **Deliver** the way the spec says. If a meeting prep is due today, run the `mortgage-meeting-prep` Skill and link or attach the result.

## Default sections (mortgage)

Use these until design mode replaces them.

```
MORNING BRIEF · [Company] · [Weekday, date, time]

WHAT CHANGED SINCE YESTERDAY
[Two to four lines. Only things that changed. Source in parentheses.]

WHAT MATTERS TODAY
[Three to five items, ranked, each tied to a priority, each with a reason.]

NEEDS YOU FIRST
[Approvals waiting in Drafts. Decisions only you can make. Anything that crossed a threshold.]

TODAY'S MEETINGS
[Each meeting: who, what is at stake, what to bring. Link the prep if one exists.]

WATCH LIST
[Locks expiring inside 72 hours. Files idle more than five business days. Deadlines this week.]

WAITING ON YOU
[External threads without a reply, oldest first.]

WHAT CAN WAIT
[And until when.]

DEPRIORITIZED, AND WHY
[One or two lines. The reasoning is the part the reader trusts.]

SOURCES READ
[Calendar, inbox, pipeline export (as of time), notes. Name anything that failed or came back empty.]
```

## Default thresholds

Edit in design mode. Each row says what the trigger is and where it lands in the brief.

| Trigger | Where it goes |
|---|---|
| Rate lock expiring within 72 hours | Needs you first |
| File with no status change in more than 5 business days | Watch list |
| Loan officer or processor out, files uncovered | Needs you first |
| External email unanswered for more than 2 business days | Waiting on you |
| Meeting with an investor, partner, or anyone under important relationships | Today's meetings, with prep |
| A complaint, a regulatory mention, a legal question | Escalate immediately, outside the schedule |
| A number that does not reconcile between two sources | Needs you first, with both numbers shown |
| Anything not tied to a current priority | What can wait, or Deprioritized |

## Rules

- **Every claim traces to something read this run.** No invented meetings, threads, files, or numbers. When in doubt, leave it out and note it under Sources read.
- **Exact sections, nothing padded in.** An empty section says "nothing today" rather than filler.
- **Draft, never send.** Anything for someone outside the company is left in Drafts with a placeholder for every number, date, or promise.
- **Calendar:** a solo focus block may be placed directly. Never book, move, or cancel a meeting that involves another person; pose it as a question in the brief.
- **No borrower personal data.** Loan numbers and stages only. Nothing from a folder the spec excludes.
- **Rank by the priorities, not by who emailed last.** Say what was deprioritized.
- **Escalate outside the schedule** when a threshold marked "immediately" is crossed. Do not wait for tomorrow's brief.
- **Say when a source failed.** A connector that lost access or returned nothing is reported in the brief, not silently skipped.

## Verification checklist (run before delivering)

- [ ] Every line in "What changed" and "Watch list" has a source in parentheses.
- [ ] The sections match the spec, in order, with nothing added.
- [ ] No meeting involving another person was changed.
- [ ] No number, date, or promise appears in a draft to an external party without a placeholder.
- [ ] Anything that crossed an "immediately" threshold was escalated, not just listed.
- [ ] Sources that failed or came back empty are named.
- [ ] Length is within the spec.

## Delivery

- **Email to the user's own inbox.** The one output that can go out without a separate review step, because the reader and the reviewer are the same person.
- **A message to the user** in the channel the spec names.
- **A document** in the folder the spec names, one file per day.

## Schedule

In Claude Cowork, create a scheduled task that runs on weekdays at the time in the spec, with this prompt:

```
Run the morning-brief-design Skill in run mode. Read the brief spec and the operating manual in this project, read the connected sources, and deliver today's brief the way the spec says. Leave anything external in Drafts.
```

Anthropic's help center describes scheduled tasks as a way to delegate work to Claude Cowork by creating tasks that run automatically on a recurring basis, or on demand. They are available on paid plans, and they run while the computer is awake and the Claude Desktop app is open; a skipped run is rerun once the app is back. Plan the read time accordingly.

## Example · a synthetic Monday

From the NEMBC 2026 talk. Harborline Mortgage, Dana Whitaker, Northbridge Capital, loan 4471 and every name and number are invented.

```
MORNING BRIEF · Harborline Mortgage · Monday, 7:02 AM

WHAT CHANGED SINCE YESTERDAY
Northbridge moved the 9:30 to video and added their credit lead, Maria Okafor. (calendar)
Rates moved 12 bps on Friday's close. (rate sheet, Sept 12)

WHAT MATTERS TODAY
1. Loan 4471: lock expires Wednesday, no status change in six days, the LO is out until Tuesday. (pipeline export 6:40 AM; calendar)
2. Northbridge at 9:30: the monthly report we promised on July 22 has not gone out. (July 22 notes; sent mail)
3. Ops asked whether to extend a lock on 4471; that is your call. (ops channel, Sunday)

NEEDS YOU FIRST
Two drafts in Drafts: a note to Tom Reyes about 4471, and a request to underwriting. One lock-extension question from ops.

TODAY'S MEETINGS
9:30 Northbridge Capital, video, 45 min. Prep attached. Do not promise a report date until ops confirms.
11:00 Production stand-up. Bring the watch list.
2:00 Vendor call, LOS renewal. Renewal is due the 30th; nothing to decide today.

WATCH LIST
Locks expiring inside 72 hours: 4471 (Wed). Files idle more than five days: 4471, 4488. Closings this week: 3.

WAITING ON YOU
Reyes Builders, Sept 11, status email. Two intro requests, Sept 9 and 10.

WHAT CAN WAIT
LOS renewal (due the 30th). Three intros. The conference recap.

DEPRIORITIZED, AND WHY
Marketing's rate-sheet redesign: not tied to a Q3 priority. Parked until Thursday.

SOURCES READ
Calendar (today, tomorrow), Gmail (unread and waiting threads), pipeline export as of 6:40 AM, Granola notes since Friday. Slack ops channel read; no failures.
```

## Customize this Skill

- [ ] Run design mode once and save the spec into the Claude Project next to the operating manual.
- [ ] Replace the default thresholds with the ones your operations lead agrees with.
- [ ] Decide the delivery channel and the read time.
- [ ] Set the first review date; briefs drift when priorities change and nobody updates the spec.

## Install

1. Create a folder named `morning-brief-design` and save this file inside it as `SKILL.md`. The folder name and the `name` field must match.
2. In the Claude apps: zip the folder (the folder itself is the root of the zip), open Customize > Skills, choose Create skill, upload the zip, and enable it. In Claude Code, place the folder under `~/.claude/skills/`. Skills also run in Claude Cowork.
3. Say "design my morning brief". Approve the sample. Then schedule it.

Specification: agentskills.io. Scheduled tasks: support.claude.com, "Scheduled tasks in Claude Cowork". This file is a template shared at a conference talk; it is not legal or compliance advice. Your counsel and your vendor review decide what data may be connected.
