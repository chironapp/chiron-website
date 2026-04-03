"""
Creates the blog post stub file and PR body for a chironpy release.
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

# ── 1. Create stub index.md ──────────────────────────────────────────────────

stub_dir = pathlib.Path(f"src/content/blog/{SLUG}")
stub_index = stub_dir / "index.md"

if stub_index.exists():
    raise SystemExit(
        f"::error::Stub file already exists: {stub_index}. "
        "Delete it first or choose a different slug to avoid overwriting an existing post."
    )

stub_dir.mkdir(parents=True, exist_ok=True)

stub = f"""\
---
title: ""
description: ""
pubDate: {PUB_DATE}
image: "/images/chironpy-release-cover.svg"
tags: ["chironpy", "open-source"]
---
"""

stub_index.write_text(stub)
print(f"Wrote stub: {stub_index}")

# ── 2. Write PR body (agent instructions) ────────────────────────────────────

pr_body = f"""\
# chironpy Release Blog Post Generator

You are generating a blog post for the Chiron marketing website (chironapp.com/blog).

**Your task:** populate `src/content/blog/{SLUG}/index.md` — the stub file already exists with the frontmatter skeleton. Fill in the empty frontmatter fields and write the full body below the `---` closing delimiter.

---

## Voice

Write in clear, technical third-person. Direct and factual — written for practitioners who work with endurance data in Python. No hype, no "exciting new features", no "we're thrilled to announce". State what changed and why it matters.

---

## Release details

- **Version(s):** {VERSIONS}
- **pubDate:** {PUB_DATE} *(already set in the stub — do not change)*
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

Fill in the frontmatter fields in the stub:

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
4. **Links** — changelog ({CHANGELOG_URL}), GitHub ({CHIRONPY_REPO}), PyPI (https://pypi.org/project/chironpy/)

Keep the post between 400–700 words. No em-dash padding. No bullet-point walls.
"""

pathlib.Path("/tmp/pr_body.md").write_text(pr_body)
print("Wrote PR body: /tmp/pr_body.md")
