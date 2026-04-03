---
title: "chironpy 0.28.2 — Enhanced FIT Field Support and Developer Documentation"
description: "chironpy 0.28.2 adds support for enhanced_speed and enhanced_altitude fields in Garmin FIT files, plus improved onboarding resources for contributors."
pubDate: 2026-04-03
image: "/images/chironpy-release-cover.svg"
tags: ["chironpy", "open-source"]
---

chironpy 0.28.2 brings support for enhanced FIT file fields and improved documentation for developers working with the library.

## Enhanced FIT Field Support

Garmin devices now record `enhanced_speed` and `enhanced_altitude` in their FIT files, providing higher-resolution data than legacy fields. This release adds both fields to the `DataTypeEnum`, allowing chironpy to correctly parse modern Garmin activity files. These enhanced fields are automatically normalized into the standard `WorkoutData` columns (`speed`, `altitude`) during processing.

The library's example configuration has been updated to reflect this change. The Osaka Marathon 2025 dataset now references the correct column names (`enhanced_speed`, `enhanced_altitude`) in `examples/index.yml`, ensuring consistent data handling across workflows.

## Improved Developer Experience

This release includes several additions to make contributing to chironpy more straightforward.

A new `lab/` directory provides Jupyter notebooks for rapid prototyping and onboarding. Two notebooks are included: `getting_started.ipynb` walks through core API usage, while `osaka_marathon.ipynb` demonstrates real-world running data analysis with the Osaka Marathon 2025 FIT file. Both are documented in `CONTRIBUTING.md` to help new contributors explore the library's internals.

The documentation site now includes `docs/Example.ipynb`, an interactive notebook showcasing the Osaka Marathon dataset directly in the navigation. The release workflow has also been documented in `CONTRIBUTING.md` under a new Releasing section.

`WorkoutData.from_file()` now accepts an `ExampleData` object directly, removing the need to pass `.path` explicitly when working with example datasets.

## Upgrade

Update to chironpy 0.28.2 via pip:

```bash
pip install --upgrade chironpy
```

## About chironpy

chironpy is Chiron's open source Python library for processing and analysing endurance activity data. It standardises inputs from FIT, GPX, TCX, and Strava into a unified structure with 1Hz time-series data, and handles the metrics and resampling that power Chiron's training analysis.

Open source is how we give back to the endurance sports data science community. If you work with running or cycling data in Python, <a href="https://chironpy.chironapp.com/">check it out</a>.

## Links

- [chironpy](https://chironpy.chironapp.com/)
- [Changelog](https://chironpy.chironapp.com/changelog/)
- [PyPI Package](https://pypi.org/project/chironpy/)
