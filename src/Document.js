import { AfterRoot, AfterData } from '@jaredpalmer/after';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
 
export default class Document extends React.Component {
  static getInitialProps({ assets, data, renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    
    return {
      assets,
      data,
      ...page,
      styleTags,
    };
  }
 
 render() {
    const {
      assets,
      data,
      helmet,
      styleTags,
    } = this.props;
    const bodyAttrs = helmet.bodyAttributes.toComponent();
    const htmlAttrs = helmet.htmlAttributes.toComponent();
 
    return (
      <html {...htmlAttrs}>
        <head>
          <title>{process.env.RAZZLE_DEFAULT_SITE_TITLE}</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {styleTags /** styled-components styleTags */}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data}/>
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}
