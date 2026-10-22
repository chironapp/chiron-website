---
layout: ../../../layouts/SupportArticleLayout.astro
title: Race event public registration form
description: Let entrants register themselves on a page hosted by Chiron, straight onto your start list.
category: Club racing
tags: [clubs, racing, events, registration, start list]
related:
  - create-and-manage-a-race-event
  - create-and-manage-a-club
---

Chiron can host a registration page for each of your race events. Entrants fill in a short form, and their entry goes straight onto your start list — no copying names across from another system.

## Turn on the registration page

1. Open your event in Chiron and tap **Edit**.
2. Set **Registration** to **Chiron registration page**, and save.
3. When you're ready to take entries, set the event's **Status** to **Registration Open**.

The page address is `events.chironapp.com/events/{event id}/register`. The event screen shows it under **Registration**, with **Copy link** so you can share it by email or on social media. Entrants can also tap **Register Now** on your event's public page.

The other registration options are **No registration link** and **My own registration link**, for clubs that use their own form — see [Create and manage a race event](/support-center/create-and-manage-a-race-event#registration).

## What entrants see

The form asks for:

- First name, last name and email
- Sex, and month and year of birth — only when your event records sex or age category (set under **Participant Data** on the event form)

It never asks for a bib number: Chiron assigns the next available bib automatically. A quick security check helps keep out spam sign-ups, and the form links to Chiron's Terms and Privacy Policy.

After registering, the entrant is taken to your event's start list with a "You're registered" confirmation.

<!-- TODO screenshot: /images/support-center/club-racing/chiron-public-registration-form.png
<figure>
  <img
    src="/images/support-center/club-racing/chiron-public-registration-form.png"
    alt="The Chiron public registration form for a race event with first name, last name, email, sex and date of birth fields and a Register button"
  />
  <figcaption>The public registration form entrants fill in</figcaption>
</figure>
-->

## When registration isn't available

- **Registration is closed** — entrants see "Registration for this event is closed." whenever the status is anything other than Registration Open.
- **Already registered** — someone with the same name and email (or, when you record age category, the same name and date of birth) already on your start list can't register again.
- **Contact organiser** — if your club has a public contact set, entrants see a "Contact organiser" link they can use if they need help. Add one on your [club's details](/support-center/create-and-manage-a-club).

## Managing registrations

Self-registered entrants appear on your start list alongside everyone else, marked as public registrations. You can edit or delete them like any other entry. If your event is part of a series, new entrants are linked to the series automatically.
