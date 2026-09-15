---
name: mortgage-meeting-prep
description: Prepare a short, sourced briefing before a meeting with an external party or a key relationship in a mortgage business - investors and warehouse partners, builders and referral partners, realtors, vendors, and internal production reviews. Use when such a meeting is on the calendar, when the user says "prep me for", "brief me before", or "what do I need to know before" a meeting, or when a morning brief lists an external meeting for the day.
metadata:
  author: Pricilla Ricapa, PRICAPA (pricapa.com)
  version: "1.0"
  shared-at: NEMBC 2026 Power Breakfast, Newport RI, September 16, 2026
  status: template - adapt the bracketed parts to your firm before relying on it
---

# Mortgage Meeting Prep

Turns a calendar entry into a one-screen briefing: who you are meeting, what happened last time, what is open, what is worth asking, and what you must not promise. Every fact in the briefing points to where it came from. Anything the Skill cannot find is listed as missing, never filled in with a guess.

This Skill reads. It does not send, schedule, or change a record anywhere.

## When to use it

- A meeting with anyone outside the company is on the calendar: investor, warehouse or correspondent partner, builder, referral partner, realtor, vendor, auditor.
- A meeting with a name listed under MY IMPORTANT RELATIONSHIPS in the operating manual (the Master AI Chief of Staff Prompt, if the user has one).
- The user asks for prep by name: "prep me for my 9:30 with Northbridge", "what do I need to know before the builder call".
- A morning brief flags an external meeting for today and the user asks for the prep.

Do not use it for casual internal one-on-ones unless asked, and never to assemble a borrower's credit, income, or account details. If a meeting needs a borrower file, point to the file number in the system of record and stop there.

## What it needs

| Input | Where it comes from | Access |
|---|---|---|
| The meeting: title, time, attendees, format | Calendar | read |
| Who the counterparty is: company, role, relationship owner | CRM or pipeline export, the operating manual | read |
| History: the last three interactions in the last twelve months | Email threads, meeting notes (for example Granola), CRM activity | read |
| Open items and promises, ours and theirs | Same sources | read |
| Numbers worth knowing, with dates | Pipeline export, rate sheet (date stamped), reports in the shared drive | read |
| Voice, priorities, decision principles, the do-not-promise list | The operating manual in the Claude Project | read |

Use only the tools listed as connected in the operating manual. If a source is not connected, say so in the briefing instead of working around it.

## Process

1. **Name the objective.** Take it from the invite, the last thread, or the meeting type in the operating manual. If none of those settle it, write the most likely objective and label it an assumption.
2. **Pull the history.** Find the last three interactions with this person or company: dates, what was discussed, what we promised, what they promised. Note the source of each (thread date, note date, CRM entry).
3. **List the open items.** Three groups: ours, theirs, joint. Each with an owner and a date. A promise that was made and not delivered goes first.
4. **Collect the numbers that matter.** Only from sources you can cite, each with a date: pull-through, files in their pipeline, turn times, closing dates, renewal dates. Never compute or quote a rate, price, or fee for the counterparty; those come from pricing, not from this Skill.
5. **Weigh risks and opportunities.** Two or three of each, one line each, specific to this relationship.
6. **Draft two or three questions worth asking.** Questions that only make sense given the history. Not "how is business".
7. **Write the do-not-promise list.** Anything that needs sign-off from operations, pricing, or compliance: delivery dates, lock extensions, exceptions, contract terms, turn times.
8. **Write the briefing** with the template below. One screen. Under 300 words unless the user asks for more.
9. **Escalate before you finish.** If you found a complaint, a regulatory mention, a deadline inside 48 hours, or a number that does not reconcile, put it at the top under "Needs you first" and say it plainly. Do not bury it in the history.

## Output template

```
MEETING PREP · [Counterparty] · [Day, time · format]

OBJECTIVE
[One line. Label "assumption" if inferred.]

WHO
[Name, role, what they care about, who owns the relationship on our side] (source)

LAST TIME
[Date. What was discussed. What we promised. What they promised.] (source)

OPEN ITEMS
Ours: [item, owner, date]
Theirs: [item, date]
Joint: [item, date]

NUMBERS TO KNOW
[Fact] (source, as of date)
[Fact] (source, as of date)

WORTH ASKING
1. ...
2. ...
3. ...

DO NOT PROMISE
[Item] until [who] confirms.

RISKS / OPPORTUNITIES
Risk: ...   Opportunity: ...

NEEDS YOU FIRST
[Only if something is urgent. Otherwise omit the section.]

MISSING
[What could not be found, and where it might be.]
```

## Rules

- **Facts and assumptions stay separate**, and every fact carries its source and date.
- **Never invent.** A gap is reported as "Missing", not smoothed over.
- **No commitments.** A rate, price, fee, lock extension, closing date, or turn time is never written as a promise. Write "[to confirm with pricing]" or "[to confirm with ops]".
- **No borrower personal data in a briefing.** Refer to loan numbers and stages. No credit scores, income, account numbers, or documents. If it lives in the LOS, it stays in the LOS.
- **Read only.** This Skill drafts a briefing. It does not send email, accept invites, move meetings, or update the CRM.
- **Match the owner's voice** as described in the operating manual: short, the point first, no filler.
- **Flag uncertainty** in the line it belongs to, not in a disclaimer at the end.
- **Escalate immediately** (not in the next scheduled run) on: a complaint, anything regulatory, a legal question, a deadline inside 48 hours, a number that cannot be reconciled, a relationship that has gone quiet after a promise.

## Meeting types

Edit this list to match your firm. Each line says what the briefing must contain for that type.

- **Investor, warehouse, or correspondent partner:** pull-through, delivery and purchase timelines, exceptions in flight, the last pricing conversation, anything we owe them. Do not promise: pricing, exception approvals, delivery dates.
- **Builder or referral partner:** their files by stage, closing dates, anything stuck, what they complained about last time, who on our side owns each file. Do not promise: closing dates, lock extensions.
- **Realtor partner:** pre-approvals outstanding, turn times on their files, communication gaps since the last contact. Do not promise: turn times.
- **Vendor (LOS, CRM, POS, pricing engine):** renewal date, open tickets, usage, what the contract says (point to the document; do not summarize terms as advice). Do not promise: renewal, budget.
- **Internal production review:** pipeline by stage, locks expiring inside 72 hours, files idle for more than five business days, capacity (who is out, who is covering). Do not promise: anything on behalf of pricing or compliance.

## Examples

Both examples use synthetic data from the NEMBC 2026 talk. Harborline Mortgage, Northbridge Capital, Reyes Builders and every name and number here are invented.

### Example 1 · Investor check-in

Input: calendar entry "Q3 check-in · Northbridge Capital · 9:30 · video · 45 min · 3 attendees". Email thread of July 22. Meeting notes of July 22. Pipeline export as of Monday 6:40 AM.

Output:

```
MEETING PREP · Northbridge Capital · Monday 9:30 · video

OBJECTIVE
Quarterly check-in; they want to see progress on builder-file pull-through. (invite + July 22 notes)

WHO
Sam Keller, VP Credit (relationship owner: Dana). New attendee: Maria Okafor, credit lead, first meeting with us. (calendar; July 22 thread)

LAST TIME
July 22. They flagged pull-through on builder files and asked for a monthly report. We said yes. (July 22 notes)

OPEN ITEMS
Ours: monthly pull-through report, promised July 22, not sent. Owner: ops.
Theirs: updated delivery calendar for Q4, promised on the same call.
Joint: none.

NUMBERS TO KNOW
Builder files in pipeline: 23, of which 4 past their original closing date. (pipeline export, Mon 6:40 AM)
Pull-through on builder files, last 90 days: 71%. (ops dashboard, Sept 12)

WORTH ASKING
1. Would a weekly pipeline snapshot replace the monthly report?
2. Is there appetite to widen the box for non-QM builder files?
3. What does Maria need from us in her first 30 days?

DO NOT PROMISE
A delivery date on the report until ops confirms it. Any non-QM pricing.

RISKS / OPPORTUNITIES
Risk: the unsent report is the first thing they will raise.   Opportunity: the weekly snapshot costs us nothing once the pipeline scout runs.

MISSING
No Granola note for the August call; the CRM shows the call happened. Ask Dana what was said.
```

### Example 2 · Builder check-in

Input: calendar entry "Reyes Builders · Tuesday 2:00 · at their office". Threads from the last 60 days. Pipeline export.

Output:

```
MEETING PREP · Reyes Builders · Tuesday 2:00 · in person

OBJECTIVE
Monthly pipeline review. Tom Reyes asked last month for faster updates on files near closing. (Aug 14 thread)

WHO
Tom Reyes, owner. Relationship owner on our side: Luis (LO), out until Tuesday. (CRM)

LAST TIME
August 14. Tom asked for one weekly status email per file. We agreed. Two of six weeks were missed. (thread dates Aug 21, Aug 28, Sept 11)

OPEN ITEMS
Ours: status emails, weekly, missed Sept 4 and Sept 11. Owner: Luis.
Theirs: appraisal access on lot 12, requested Sept 2.
Joint: closing date on file 4471, which depends on the rate lock expiring Wednesday.

NUMBERS TO KNOW
Reyes files in pipeline: 6. One (4471) has had no status change in six days. (pipeline export, Mon 6:40 AM)

WORTH ASKING
1. Does Tom want status emails to go to his office manager as well?
2. Which two lots close next, in his view?

DO NOT PROMISE
A lock extension on 4471 until pricing confirms. A closing date on any file.

NEEDS YOU FIRST
File 4471: lock expires Wednesday, no status change in six days, and the LO is out. Decide who covers it today.

MISSING
The appraisal access request has no reply in the thread. Check with processing.
```

## Customize this Skill

- [ ] Replace the meeting types with yours and write the do-not-promise line for each.
- [ ] Add your systems under "What it needs": LOS name, CRM, where meeting notes live.
- [ ] Paste the do-not-promise list your pricing and compliance leads agree with.
- [ ] Set the length limit (300 words is a starting point).
- [ ] Add two real, redacted briefings your team considers good, in place of the synthetic examples.
- [ ] Name who reviews this Skill quarterly, and the date of the first review.

## Install

1. Create a folder named `mortgage-meeting-prep` and save this file inside it as `SKILL.md`. The folder name and the `name` field must match.
2. In the Claude apps: zip the folder (the folder itself is the root of the zip), then open Customize > Skills, choose Create skill, upload the zip, and enable it. In Claude Code, place the folder under `~/.claude/skills/`. Skills also run in Claude Cowork.
3. Test it: "Prep me for my 9:30 with [company]". Read Claude's reasoning to confirm the Skill was picked up, then adjust the description if it was not.

Specification: agentskills.io. Anthropic's overview: platform.claude.com/docs/en/agents-and-tools/agent-skills/overview. This file is a template shared at a conference talk; it is not legal or compliance advice. Your counsel and your vendor review decide what data may be connected.
