# Jiki Anatomy Lab

English–Hausa anatomy learning site with an interactive heart atlas, 2,234-part male BodyParts3D reference, and 956-part female Human Reference Atlas lesson.

## Run locally

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000. No build step is required. Deploy `dist` as the static output directory.

The 3D assets are included and require WebGL2. Model downloads are approximately 33 MB for the male lesson and 29 MB for the female lesson. Female bone and muscle coverage is partial. See attribution files under `dist/models` and licences under `dist/vendor` for third-party terms.

Hausa summaries await educator review. Educational study aid, not a clinical or surgical guide.
