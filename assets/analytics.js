/**
 * Analytics loader for the Monument Apps marketing pages.
 *
 * The guard below is the reason this file exists. Our legal pages are opened from inside the
 * apps — UpTo's Settings links to the privacy policy and terms in an in-app browser — and the
 * UpTo policy tells the reader that the app carries no third-party tracker. A page making that
 * claim while loading Google Analytics reads as a contradiction, whatever the fine print says.
 *
 * So the exclusion lives here rather than in a habit of not pasting a snippet. Even if this
 * file is later included site-wide, or a marketing template grows to cover a legal page, no
 * tracker loads on the paths below.
 *
 * Adding a vendor: put its snippet inside `start()`, below the guard. Nothing above it.
 */
(function () {
  "use strict";

  // Paths that must never load a tracker. Matches the directory and anything beneath it, so
  // /privacy/, /privacy/upto/, and any product policy added later are all covered.
  var EXCLUDED = [
    /^\/privacy(\/|$)/,
    /^\/terms(\/|$)/,
    /^\/guidelines(\/|$)/,
    /^\/cookies(\/|$)/
  ];

  function isExcluded(path) {
    for (var i = 0; i < EXCLUDED.length; i++) {
      if (EXCLUDED[i].test(path)) return true;
    }
    return false;
  }

  // Exported for verification; the guard itself does not depend on it.
  window.__monumentAnalytics = { isExcluded: isExcluded };

  if (isExcluded(window.location.pathname)) return;

  function start() {
    // ---------------------------------------------------------------------
    // No analytics vendor is configured yet. Add snippets here.
    //
    // Before switching either of these on, three things need to be true:
    //   1. A consent banner exists. Analytics cookies are non-essential, so ePrivacy requires
    //      opt-in from EU and UK visitors *before* the cookie is set — this function should
    //      not run until that consent is given.
    //   2. The Cookie Policy and the studio Privacy Policy name the vendor. Both already
    //      name Google Analytics and Amplitude, so adding either needs no policy change.
    //   3. Nothing here is added to the apps. This file is for websites. Putting analytics
    //      inside UpTo changes its App Store privacy answers and its privacy manifest.
    // ---------------------------------------------------------------------
  }

  start();
})();
