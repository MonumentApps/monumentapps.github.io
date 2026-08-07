# Monument Apps

Public website for Monument Apps, LLC at [monumentapps.com](https://monumentapps.com).

The site is plain HTML and CSS with no framework, dependencies, or build step. GitHub Pages serves it directly from the root of the `main` branch.

## Local preview

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Deployment

Changes deploy automatically after they are pushed to `main`:

```sh
git push origin main
```

GitHub Pages is configured to publish from `main` and `/ (root)`. The root `CNAME` file assigns the custom domain `monumentapps.com`.

## Site structure

```text
index.html              Home page and app listings
privacy/index.html      Privacy Policy
terms/index.html        Terms of Service
cookies/index.html      Cookie Policy
assets/styles.css       Shared site styles
assets/monument-apps-logo.png
assets/favicon.png
```

## Add or update an app

App cards live in the `.app-grid` section of `index.html`. Copy an existing `<article class="app-card">` block and update its category, name, description, status, and destination. Apps that are not available should remain unlinked and clearly marked `Coming Soon`.

## Legal content

Approved policies are stored directly in their respective HTML pages. Preserve the shared header, footer, and `.legal` layout when updating policy text.

## Domain configuration

The apex domain uses GitHub Pages A records, and `www` is a CNAME to `monumentapps.github.io`. Preserve all email-related DNS records when making domain changes. HTTPS is managed through the repository’s **Settings → Pages** screen.
