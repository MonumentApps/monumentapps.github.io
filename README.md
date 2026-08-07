# Monument Apps website

Static website for Monument Apps LLC, intended for GitHub Pages at `https://monumentapps.com`.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. The site uses only HTML and CSS; there is no build step or dependency install.

## Create and push the GitHub repository

After creating an empty repository in the Monument Apps organization, push this repository:

```sh
gh auth login
gh repo create Monument-Apps/monumentapps.github.io --public --source=. --remote=origin --push
```

If the organization slug differs from its display name, replace `Monument-Apps` with the exact GitHub organization name. If the remote already exists, use `git push -u origin main` instead.

## Enable GitHub Pages

In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save. GitHub will publish the site from the repository root.

## Custom domain and DNS

The included `CNAME` file requests `monumentapps.com`. In **Settings → Pages → Custom domain**, enter `monumentapps.com` and enable HTTPS after DNS is working.

Verify GitHub’s current custom-domain documentation before changing DNS. Typically, the apex domain uses `A` records for GitHub Pages’ published IP addresses, while `www` uses a `CNAME` pointing to `Monument-Apps.github.io` (use the exact organization/repository hostname shown by GitHub). Keep any existing mail-related records intact.

## Add another app

Copy the `<article class="app-card">…</article>` block in `index.html`, update its name, description, category, status, and destination. Keep unreleased apps visibly marked as “Coming Soon” and do not link to unavailable destinations.

## Legal policies

Replace the marked `LEGAL CONTENT TO BE INSERTED HERE` block and `[DATE TO BE INSERTED]` in `privacy/index.html`, `terms/index.html`, and `cookies/index.html` with the approved policy text.

## Logo and favicon

Add the final logo at `assets/monument-apps-logo.png`. The header hides the image automatically if it is not present and falls back to the text brand. A small inline SVG favicon placeholder is included at `assets/favicon.svg`; replace it there or update the favicon links when a final icon is available.
