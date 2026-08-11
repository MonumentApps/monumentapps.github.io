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
index.html                   Home page and app listings
upto/index.html              UpTo product page
privacy/index.html           Privacy Policy
privacy/upto/index.html      UpTo Privacy Policy
privacy/studiotrackr/index.html  StudioTrackr Privacy Policy
terms/index.html             Terms of Service
guidelines/index.html        Community Guidelines
cookies/index.html           Cookie Policy
assets/styles.css            Shared site styles
assets/analytics.js          Analytics loader (skips legal pages)
assets/monument-apps-logo.png
assets/favicon.png
```

### Product pages

`upto/index.html` is the app's public home page, and Google OAuth verification depends on
it. Google requires the app name on the OAuth consent screen to match the app name shown on
the **Application home page** URL registered for the project, so that field points at
`https://monumentapps.com/upto/` and the page leads with `UpTo` in its `<title>` and `<h1>`.
Renaming the app, moving this page, or burying the name breaks verification — change the
consent screen at the same time.

## Add or update an app

App cards live in the `.app-grid` section of `index.html`. Copy an existing `<article class="app-card">` block and update its category, name, description, status, and destination. Apps that are not available should remain unlinked and clearly marked `Coming Soon`.

## Legal content

Approved policies are stored directly in their respective HTML pages. Preserve the shared header, footer, and `.legal` layout when updating policy text.

## Domain configuration

The apex domain uses GitHub Pages A records, and `www` is a CNAME to `monumentapps.github.io`. Preserve all email-related DNS records when making domain changes. HTTPS is managed through the repository’s **Settings → Pages** screen.
