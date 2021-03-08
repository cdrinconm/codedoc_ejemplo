
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/vc'                      // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Vc'                          // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'cdrinconm',                  // --> your github username (where your repo is hosted)
      repo: 'vc',                         // --> your github repo name
    }
  },
});
