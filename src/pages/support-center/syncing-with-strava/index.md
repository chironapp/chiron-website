---
layout: ../../../layouts/SupportArticleLayout.astro
title: "Syncing Your Training with Strava"
description: "Connect Strava, sync new activities automatically, import your training history and avoid duplicate activities."
category: Getting Started
tags: [strava, sync, import, duplicates]
related:
  - completing-a-workout
  - merging-workouts
  - getting-started
---

Chiron uses Strava to bring in your completed activities. Once connected, every new activity you upload to Strava from your watch or phone syncs to Chiron automatically. There's nothing to log by hand.

## Connect Strava

You'll be offered this during onboarding. To connect later:

1. Go to **More › Settings › Connected Apps**.
2. Tap **Strava**.
3. Tap connect and sign in to Strava. Approve the permissions Chiron asks for.
4. You're returned to Chiron, and the Strava screen shows your connection status.

On your first sync, Chiron imports up to three years of your Strava history. Note the activity summary data usually arrives within fifteen minutes but the pace, heart rate data, fastest efforts, may take several hours on first sync, depending on Strava's rate limits. 

## How new activities sync

New Strava activities arrive in the background, usually within a few minutes of appearing on Strava. Chiron then:

- **completes a planned workout** if you had one planned on the same day for the same activity type, or
- **adds a new completed workout** to your schedule if you didn't.

See [Completing a Workout](/support-center/completing-a-workout/) for more on how matching works.

## Import older activities manually

If activities are missing, or you want history from further back:

1. Go to **More › Settings › Connected Apps › Strava**, or in the **Schedule** tab tap **+**, then **Import**, and choose Strava.
2. Choose the date range to import.
3. Start the import.

Large date ranges can take several minutes. When it's done, Chiron shows how many activities were received, imported and skipped. Activities already in Chiron are skipped, so it's safe to run an import more than once.

## If Strava needs reconnecting

If your Strava authorisation expires, Chiron shows **Reconnect Strava**. Tap it and sign in to Strava again. Your existing training stays as it is.

## Disconnect Strava

Go to **More › Settings › Connected Apps › Strava** and disconnect. New activities stop syncing. Training already in Chiron stays on your schedule.

## The same activity from more than one source

If one session reaches Chiron twice, for example Strava syncs your run and you also upload the FIT file from your watch, or you recorded the session on two devices, Chiron keeps one workout and discards the copy. Your schedule doesn't show the session twice.

Chiron treats an activity as the same session when it's the same activity type and both its start time and its moving time are within two minutes of an activity already on your schedule. When a copy is discarded:

- the workout already on your schedule stays exactly as it was
- no second workout is created, and no planned workout is completed by the copy
- the copy's file isn't kept, and the same activity won't be imported again later

If you upload a FIT file for a session that's already on your schedule, Chiron tells you **This activity is already in your schedule** before you save, and won't import it. If you change the start time on the import screen, Chiron checks again when you save. [CONFIRM: where the FIT file import is opened from, e.g. **Schedule › + › Import**, and whether it's live in the production app]

> **[SCREENSHOT: FIT file import screen showing "This activity is already in your schedule. Choose a different file to import." for a run already synced from Strava — iOS]**

Sessions on the same day that start at different times, such as runs either side of a shoe change, aren't treated as copies. Each arrives as its own workout, and you can still merge them.

## Several activities from one session

If you split a session into several Strava activities, for example a warm-up, the main set and a cool-down, you can combine them. See [Merging Workouts](/support-center/merging-workouts/).
