import React from 'react';

import ReactDOM from 'react-dom/client';

import { convertToFileLink } from './ConvertToFileLink';

const href = 'https://file.link/test-svr/test-directory/';

const LinkConverter = convertToFileLink(() => <a href={href}>Hello, GROWI</a>);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LinkConverter
      href={href}
    >Hello, GROWI</LinkConverter>
  </React.StrictMode>,
);