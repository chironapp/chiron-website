---
title: "Open Source is Endurance Too: Introducing chironpy"
pubDate: 2025-05-23
tags: ["chironpy", "training-load", "updates", "tools"]
description: "It’s been a while since we shared an update—but we’re excited to finally introduce something we’ve been building quietly in the background."
image: "./chironpy-python-endurance-sports-library.png"
---

It’s been a while since we shared an update—but we’re excited to finally introduce something we’ve been building quietly in the background.

🎉 Meet [**`chironpy`**, a Python library for analysing endurance sports data](https://chironapp.github.io/chironpy/)—designed by endurance athletes, for endurance athletes.

To advance innovation in endurance sport, we maintain `chironpy`, an open-source endurance sports analysis library for Python. This project reflects our commitment to fostering collaboration and innovation within the endurance sports science and developer communities.

`chironpy` was developed to support the Chiron platform in analysing and processing workout data, providing a foundation for performance insights and training management. However, we think the library will be a useful tool for coaches, data scientists, athletes, and developers interested in endurance sports analysis.

`chironpy` supports formats like `.fit`, `.gpx`, `.tcx`, and even direct Strava API imports. It wraps this data in a familiar pandas-like interface with a standardised structure, allowing you to:

- Smooth and clean activity data

- Calculate meaningful metrics (e.g., elevation gain, pace, power, heart rate zones)

- Find best intervals by time or distance

- Visualize and transform your workouts however you want

We originally forked the excellent but no-longer-maintained [`sweatpy`](https://github.com/GoldenCheetah/sweatpy) project, and reoriented it toward running and general endurance training.

You can install it now in `python 3.11` and later:

```
pip install chironpy
```

And explore the code and docs on [GitHub](https://chironapp.github.io/chironpy/).

This is just the beginning—we're working toward a full `Workout` object that includes athlete context, training zones, and stress/load modeling. If you're curious, we’d love your feedback or contributions.

Open source is endurance too. Thanks for sticking with us.

— Clive and the Chiron team

---
