// App entry point (owned by this repo, never touched by copier update).
// Shared boot logic: @influenzanet/participant-webapp-kit renderParticipantApp().
import { renderParticipantApp } from "@influenzanet/participant-webapp-kit";
import { pt } from "date-fns/locale";

import "./index.scss";

import * as appConfig from "./configs/appConfig.json";
import * as footerConfig from "./configs/footer.json";
import * as headerConfig from "./configs/header.json";
import * as navbarConfig from "./configs/navbar.json";
import * as pagesConfig from "./configs/pages.json";

// The results page (pages.json, "iframeEmbed") shows /results-proxy/results.html,
// proxied from the gripenetpt-results bucket by nginx/snippets/locations.conf.
renderParticipantApp({
  appConfig,
  footerConfig,
  headerConfig,
  navbarConfig,
  pagesConfig,
  dateLocales: [{ code: "pt", locale: pt, format: "dd/MM/yyyy" }],
});
