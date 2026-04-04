---
title: "chironpy 0.29 — FIT File Merge Support and 1Hz Resampling"
description: "chironpy 0.29 adds WorkoutData.merge_many() for combining FIT files, with configurable gap handling and automatic 1Hz resampling for Python endurance data."
pubDate: 2026-04-04
image: "/images/chironpy-release-cover.jpg"
tags: ["chironpy", "open-source", "tools"]
---

chironpy 0.29 introduces methods for merging multiple FIT files into a single continuous workout, addressing a common workflow when sessions are split across separate recordings.

## Merging Workouts

The new `WorkoutData.merge_many()` class method accepts a list of separately recorded workouts and combines them into a single continuous `WorkoutData` object. Workouts are sorted by start timestamp, overlapping timestamps favour the later workout, and time gaps are preserved as `NaN` rows after resampling when `interpolate=False`.

```python
merged = WorkoutData.merge_many([warmup, workout, cooldown])
```

For convenience, `WorkoutData.merge()` wraps `merge_many()` when merging a single workout into the current instance.

Both methods support `drop_gaps=True` to shift workouts back-to-back without gap rows, which condenses elapsed time. Note that performance metrics will not account for rest time in this mode, as the gap is removed from the time series.

The `distance` column is forward-filled across gap rows in merged workouts. Distance is cumulative and should not appear as `NaN` during rest periods.

## Setting Start Time

`WorkoutData.set_start_time()` shifts the datetime index of a workout to a specified start time, recomputing the `time` column. This is useful when a file (such as a Strava activity stream) contains no absolute timestamp and needs to be aligned with other workouts before merging.

```python
workout.set_start_time("2026-04-04 10:00:00")
```

## Documentation and Examples

Three new Strava activity-stream example files demonstrate a single session split across three recordings: `strava_17497731832_warm_up.json`, `strava_17497955000_track_workout.json`, and `strava_17498168651_warm_down.json`.

The documentation now includes `docs/features/merge_workouts.ipynb`, an interactive notebook demonstrating `merge_many()`, `merge()`, and `set_start_time()` with these example files. A separate `docs/Example.ipynb` walks through analysing a workout from the Osaka Marathon 2025.

For developers looking to contribute or fork the project, a new `lab/` environment provides Jupyter notebooks for rapid prototyping and local development.

## Build System Update

The `pyproject.toml` build backend has been updated from `poetry.masonry.api` to `poetry.core.masonry.api` to support editable installs via `pip install -e .`.

## Upgrade

Update to chironpy 0.29 via pip:

```bash
pip install --upgrade chironpy
```

## About chironpy

chironpy is Chiron's free and open source Python library for processing and analysing endurance activity data. It standardises inputs from FIT, GPX, TCX, and Strava into a unified structure with 1Hz time-series data. It provides tools like best-effort intervals, elevation and grade analysis, training zone distribution, power metrics (WAP, stress score, W/kg), training stress and rolling/resampling tools — some of the same tooling used to power Chiron's analytics.

Open source is how we give back to the endurance sports data science community. If you work with running or cycling data in Python, <a href="https://chironpy.chironapp.com/">check it out</a>.

## Links

- [chironpy](https://chironpy.chironapp.com/)
- [Changelog](https://chironpy.chironapp.com/changelog/)
- [PyPI Package](https://pypi.org/project/chironpy/)
- [GitHub Repository](https://github.com/chironapp/chironpy)
