---
layout: ../../../layouts/SupportArticleLayout.astro
title: "Uploading an Activity File"
description: "Add a completed activity to your schedule from a FIT file when it hasn't synced from Strava."
category: Completed Training
tags: [upload, fit, import, activity, completed]
related:
  - syncing-with-strava
  - completing-a-workout
  - merging-workouts
---

Most activities reach Chiron automatically through [Strava](/support-center/syncing-with-strava/). If an activity never synced, for example your watch doesn't connect to Strava or one upload failed, you can upload the activity file yourself. Chiron reads the file, lets you check the details, and adds it to your schedule like any synced activity.

Chiron accepts **.fit** files up to **5MB**. Most watches and platforms, such as Garmin Connect, can export an activity as a FIT file.

## Upload a file

1. In the **Schedule** tab, tap **+**, then **Import**. On desktop web, open **Add** and choose **Import** [CONFIRM: exact label of the import option in the expanded web Add dialog].
2. On **Import into Schedule**, choose **Upload activity file**.
3. Tap **Choose file** and select your .fit file.
4. Wait while Chiron reads the file. The first upload can take up to 30 seconds.

> **[SCREENSHOT: Upload activity file screen before a file is chosen, showing the 5MB note and Choose file button — iOS]**

## Check the details

Once the file is read, Chiron shows what it found under **From your file**: the activity type, duration and distance (or **Not recorded** if the file has no distance).

Below that you can edit:

- **Title** — filled in from the file where possible. If you leave it blank, Chiron uses the default title for the activity type, for example "Endurance Run".
- **Description** — optional.
- **Start date** and **Start time** — filled in from the file. On web, type the time as `HH:mm`.

The start date and time you save decide which day the activity lands on, so correcting the time also corrects the day.

If Chiron couldn't read a timezone from the file, you'll see a note asking you to check the start time before saving.

Picked the wrong file? Tap **Choose a different file**.

> **[SCREENSHOT: Upload activity file screen after a file is read, showing the From your file summary, Title, Description, Start date and Start time — iOS]**

## Save the activity

Tap **Save activity**. Chiron shows **Activity imported** and opens the new workout.

Just like a synced activity, an uploaded activity:

- **completes a planned workout** if you had one on the same day for the same activity type, or
- **adds a new completed workout** if you didn't.

See [Completing a Workout](/support-center/completing-a-workout/) for how matching works. Pace, heart rate and other detail from the file can take a little longer to appear on the workout. You don't need to upload it again.

If the workout isn't ready to open straight away, you're returned to the schedule and the activity appears there once it's processed.

## Upload several files on desktop web

On desktop web, tick **Upload another when done** before you save. The screen resets after each save so you can upload the next file, and the box stays ticked.

> **[SCREENSHOT: Upload activity file screen on desktop web showing Cancel, Upload another when done and Save activity in the header]**

## If something goes wrong

- **"That is not a .fit file"** — only FIT files are supported. Export the activity as a FIT file and try again.
- **"The file could not be read"** — the file may be damaged or incomplete. Try exporting it again, or choose another file.
- **"We couldn't reach the service that reads activity files"** — this is a connection problem, not a problem with your file. Try again in a moment.
- **"This activity is already in your schedule"** — you've already uploaded this file, so it won't be added twice.

Still stuck? [Contact support](/support-center/contact/).

## Uploaded activities and Strava

Uploaded activities don't offer **View on Strava**, because they didn't come from Strava. If the same activity later syncs from Strava as well, you may end up with two activities on that day [CONFIRM: is a Strava copy of an uploaded activity de-duplicated?]. You can tidy them up with [Merging Workouts](/support-center/merging-workouts/) or by deleting one.
