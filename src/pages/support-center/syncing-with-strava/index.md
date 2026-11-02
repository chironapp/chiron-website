---
layout: ../../../layouts/SupportArticleLayout.astro
title: "Syncing Your Training with Strava"
description: "Connect Strava, sync new activities automatically and import your training history."
category: Getting Started
tags: [strava, sync, import]
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

Go to **More › Settings › Connected Apps › Strava** and disconnect. New activities stop syncing. Training already in Chiron stays on your schedule. <!-- CONFIRM: imported activities are retained after disconnect -->

## Several activities from one session

If you split a session into several Strava activities, for example a warm-up, the main set and a cool-down, you can combine them. See [Merging Workouts](/support-center/merging-workouts/).
