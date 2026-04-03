"""
Creates the issue body for a chironpy release blog post.
Called by the generate-chironpy-blog-post.yml workflow.

Env vars:
  VERSIONS      — resolved version string, e.g. "v0.3.0" or "v0.3.0 - v0.3.1"
  PUB_DATE      — ISO date string, e.g. "2026-04-03"
  SLUG          — directory slug, e.g. "chironpy-0-3-0"
  EXTRA_CONTEXT — optional free-text context from the workflow trigger
"""

import os
import pathlib

VERSIONS = os.environ["VERSIONS"]
PUB_DATE = os.environ["PUB_DATE"]
SLUG = os.environ["SLUG"]
EXTRA_CONTEXT = os.environ.get("EXTRA_CONTEXT", "").strip() or "None"

CHANGELOG_URL = "https://raw.githubusercontent.com/chironapp/chironpy/main/docs/changelog.md"
CHIRONPY_REPO = "https://github.com/chironapp/chironpy"

# ── Write issue body (agent instructions) ────────────────────────────────────

issue_body = f"""\
# chironpy Release Blog Post Generator

You are generating a blog post for the Chiron marketing website (chironapp.com/blog).

**Your task:** create `src/content/blog/{SLUG}/index.md` with the frontmatter and full post body, then open a pull request to `main`.

Use this frontmatter skeleton:

```markdown
---
title: ""
description: ""
pubDate: {PUB_DATE}
image: "/images/chironpy-release-cover.svg"
tags: ["chironpy", "open-source"]
---
```

---

## Voice

Write in clear, technical third-person. Direct and factual — written for practitioners who work with endurance data in Python. No hype, no "exciting new features", no "we're thrilled to announce". State what changed and why it matters.

---

## Release details

- **Version(s):** {VERSIONS}
- **pubDate:** {PUB_DATE}
- **Extra context:** {EXTRA_CONTEXT}

---

## Changelog

Fetch the changelog from:

```
{CHANGELOG_URL}
```

Extract only the section(s) for `{VERSIONS}`. If a range is given (e.g. `v0.3.0 - v0.3.1`), cover both releases in a single post.

Do not invent features not present in the changelog.

---

## SEO requirements

- **Title:** specific and searchable — include "chironpy", version number(s), and the most significant feature keyword (e.g. *"chironpy 0.28 — FIT File Merge Support and 1Hz Resampling"*)
- **Meta description:** exactly 150–160 characters, keyword-rich, no hype
- **Target keywords** to weave naturally into the body (no keyword-stuffing): `chironpy`, `Python endurance data`, `FIT file Python`, `running data analysis Python`, `open source running analytics`, plus specific feature terms from the changelog

---

## Output format

Fill in the frontmatter fields and write the body:

```markdown
---
title: "<specific searchable title>"
description: "<150-160 char meta description>"
pubDate: {PUB_DATE}
image: "/images/chironpy-release-cover.svg"
tags: ["chironpy", "open-source"]
---

<full blog post body here>
```

### Body structure

1. **Opening paragraph** — one or two sentences summarising the release scope
2. **What's new** — a section per significant change or feature; use subheadings (`##`) and code examples where relevant
3. **Upgrade** — brief instructions: `pip install --upgrade chironpy`
4. **About chironpy** — include this section verbatim:

   > chironpy is Chiron's open source Python library for processing and analysing endurance activity data. It standardises inputs from FIT, GPX, TCX, and Strava into a unified structure with 1Hz time-series data, and handles the metrics and resampling that power Chiron's training analysis.
   >
   > Open source is how we give back to the endurance sports data science community. If you work with running or cycling data in Python, [check it out](https://chironpy.chironapp.com/).

5. **Links** — changelog (https://chironpy.chironapp.com/changelog/), GitHub ({CHIRONPY_REPO}), PyPI (https://pypi.org/project/chironpy/)

Keep the post between 400–700 words. No em-dash padding. No bullet-point walls.
"""

pathlib.Path("/tmp/issue_body.md").write_text(issue_body)
print("Wrote issue body: /tmp/issue_body.md")
