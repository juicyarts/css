import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/github';

import '@juicyarts/css/src/index.scss';

const components = {
  wrapper: ({ children }) => <>{children}</>,
  pre: props => {
    const language = props.children.props.className.replace('language-', '');

    return (
      <>
        <LiveProvider code={props.children.props.children.trim()}>
          {!props.children.props.hideEditor && (
            <LiveEditor
              disabled={!props.children.props.live}
              language={language}
              theme={theme}
            />
          )}
          {!props.children.props.hideError && <LiveError />}
          {!props.children.props.hidePreview && (
            <div className="preview m-v-s bg-gray-6">
              <LivePreview className="preview__wrapper" />
            </div>
          )}
        </LiveProvider>
      </>
    );
  }
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
