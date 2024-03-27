import React from 'react';

import {
  AppCore,
  AppConfig,
  FooterConfig,
  HeaderConfig,
  NavbarConfig,
  PagesConfig
} from '@influenzanet/case-web-app-core';

import { it } from 'date-fns/locale';

import * as appConfig from './configs/appConfig.json';
import * as footerConfig from './configs/footer.json';
import * as headerConfig from './configs/header.json';
import * as navbarConfig from './configs/navbar.json';
import * as pagesConfig from './configs/pages.json';

const dateLocales = [{ code: 'it', locale: it, format: 'dd/MM/yyyy' }];

let appConfig_: AppConfig = { ...appConfig };
if (process.env.REACT_APP_DEFAULT_INSTANCE) {
  appConfig_.instanceId = process.env.REACT_APP_DEFAULT_INSTANCE;
}

const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppCore
        appConfig={appConfig_}
        headerConfig={headerConfig as HeaderConfig}
        navbarConfig={navbarConfig as NavbarConfig}
        pagesConfig={pagesConfig as PagesConfig}
        footerConfig={footerConfig as FooterConfig}
        dateLocales={dateLocales}
      />
    </React.Fragment>
  );
};

export default App;
