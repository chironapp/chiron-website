---
title: "Building in Closed Beta: What Chiron's First Athletes Are Testing"
pubDate: 2026-05-19
tags: ["updates", "beta", "athletes"]
description: "Chiron is in closed beta with a small group of competitive runners. Here's what we've been building and why we're starting with athletes before coaches."
---

Plan - Adapt - Perform.

That slogan isn't aspirational. It describes the sequence we're working to validate in closed beta right now, with a small group of competitive Australian runners putting Chiron through its paces.

This isn't a press release. It's a practical update on what we've shipped, what's working, and where we're headed.

## Where We Are

Chiron is in closed beta. A small group of competitive runners — people who take their training seriously — have access via invitation and are testing the core athlete experience on iOS. No general waitlist opens have happened. We're not at that stage yet.

The reason for keeping the group tight is deliberate. The athlete-facing product needs to earn trust before we add coach tools on top. Coaches will assign this to their athletes. If the athlete experience isn't solid, the whole thing falls over regardless of what the coaching interface looks like.

## What We've Been Building

The past several weeks have been the most productive of the project.

**Onboarding** was the first major piece. Athletes who receive an invitation now move through a structured setup flow: personal details, a profile photo, connecting their Strava account, and setting a target event. The final screen confirms everything is in place. It's not flashy — it just gets someone from zero to a working account without hand-holding.

**Strava sync** is central to how Chiron works. Runs import automatically after a session, and a recent fix resolved an issue where some activity recordings weren't being associated correctly on import. The sync is more reliable as a result, which matters when training insights depend on data accuracy.

**Schedule and calendar accuracy** were addressed through a set of database migrations that corrected how workout dates are stored. Previously, timestamp precision was causing some activities to appear on the wrong day in the agenda. That's now fixed — planned workouts and completed activities sit where they're supposed to.

**Workout detail** got a significant redesign. Tapping into a completed workout now shows a properly structured summary: key metrics clearly laid out, a tabular breakdown of the session, and a banner when a scheduled workout wasn't completed. For athletes comparing what they planned against what they actually ran, this screen now tells that story clearly.

**Performance insights** added a PB Progression card backed by your workout history — a view of how your times at key distances are trending over time. Alongside training volume totals and activity type breakdowns, it gives a real picture of whether the training block is moving in the right direction.

**Push notifications and in-app messaging** shipped this week. When a coach sends a coaching request, the athlete receives a push notification that deep-links directly to the request. Workout comments are live — athletes and coaches can annotate completed workouts, and the relevant person is notified when a comment lands. There's a notifications screen on the home tab that collects all of this in one place. These features exist because training at this level is a conversation, not just data collection.

## Why Athletes First

The sequencing is intentional.

Chiron's long-term value is in the coach-athlete relationship — a coach designing a training block, the athlete executing it, both reading from the same data. But that only works if the athlete product stands on its own. An athlete using Chiron without a coach attached should still get genuine value: a clear picture of their training, reliable Strava sync, and insights that reflect where their fitness actually is.

Once we've validated that the core loop works — athlete onboards, syncs their training, sees meaningful feedback — the coach layer makes sense. Not before.

## What's Next

When the current athlete cohort has tested the core experience to a standard we're satisfied with, Chiron opens to coaches. Coach-athlete workflow, training assignment, and athlete monitoring. Australian market initially.

If you're a competitive runner or coach and want to be notified when access opens more broadly, the waitlist is below. No fake urgency — we'll send one email when it's actually ready.

— Clive  
Founder, Chiron

[Join the beta waitlist →](/contact/)
