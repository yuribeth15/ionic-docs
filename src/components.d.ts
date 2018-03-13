/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';


import {
  CardLink as CardLink
} from './components/card-link/card-link';

declare global {
  interface HTMLCardLinkElement extends CardLink, HTMLStencilElement {
  }
  var HTMLCardLinkElement: {
    prototype: HTMLCardLinkElement;
    new (): HTMLCardLinkElement;
  };
  interface HTMLElementTagNameMap {
    "card-link": HTMLCardLinkElement;
  }
  interface ElementTagNameMap {
    "card-link": HTMLCardLinkElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "card-link": JSXElements.CardLinkAttributes;
    }
  }
  namespace JSXElements {
    export interface CardLinkAttributes extends HTMLAttributes {
      hasIcon?: boolean;
      title?: string;
      url?: string;
    }
  }
}


import {
  CodeBlock as CodeBlock
} from './components/code-block/code-block';

declare global {
  interface HTMLCodeBlockElement extends CodeBlock, HTMLStencilElement {
  }
  var HTMLCodeBlockElement: {
    prototype: HTMLCodeBlockElement;
    new (): HTMLCodeBlockElement;
  };
  interface HTMLElementTagNameMap {
    "code-block": HTMLCodeBlockElement;
  }
  interface ElementTagNameMap {
    "code-block": HTMLCodeBlockElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "code-block": JSXElements.CodeBlockAttributes;
    }
  }
  namespace JSXElements {
    export interface CodeBlockAttributes extends HTMLAttributes {
      language?: string;
    }
  }
}


import {
  CodePreview as CodePreview
} from './components/code-preview/code-preview';

declare global {
  interface HTMLCodePreviewElement extends CodePreview, HTMLStencilElement {
  }
  var HTMLCodePreviewElement: {
    prototype: HTMLCodePreviewElement;
    new (): HTMLCodePreviewElement;
  };
  interface HTMLElementTagNameMap {
    "code-preview": HTMLCodePreviewElement;
  }
  interface ElementTagNameMap {
    "code-preview": HTMLCodePreviewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "code-preview": JSXElements.CodePreviewAttributes;
    }
  }
  namespace JSXElements {
    export interface CodePreviewAttributes extends HTMLAttributes {
      markup?: string;
    }
  }
}


import {
  CtrlDropdown as CtrlDropdown
} from './components/ctrl-dropdown/ctrl-dropdown';

declare global {
  interface HTMLCtrlDropdownElement extends CtrlDropdown, HTMLStencilElement {
  }
  var HTMLCtrlDropdownElement: {
    prototype: HTMLCtrlDropdownElement;
    new (): HTMLCtrlDropdownElement;
  };
  interface HTMLElementTagNameMap {
    "ctrl-dropdown": HTMLCtrlDropdownElement;
  }
  interface ElementTagNameMap {
    "ctrl-dropdown": HTMLCtrlDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ctrl-dropdown": JSXElements.CtrlDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface CtrlDropdownAttributes extends HTMLAttributes {
      autoClose?: boolean;
      autoCloseDelay?: number;
      items?: any[];
      onSelect?: Function;
      renderer?: Function;
      setInitial?: Function;
    }
  }
}


import {
  DocLoader as DocLoader
} from './components/doc-loader/doc-loader';

declare global {
  interface HTMLDocLoaderElement extends DocLoader, HTMLStencilElement {
  }
  var HTMLDocLoaderElement: {
    prototype: HTMLDocLoaderElement;
    new (): HTMLDocLoaderElement;
  };
  interface HTMLElementTagNameMap {
    "doc-loader": HTMLDocLoaderElement;
  }
  interface ElementTagNameMap {
    "doc-loader": HTMLDocLoaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "doc-loader": JSXElements.DocLoaderAttributes;
    }
  }
  namespace JSXElements {
    export interface DocLoaderAttributes extends HTMLAttributes {
      path?: string;
    }
  }
}


import {
  IonicDocs as IonicDocs
} from './components/ionic-docs/ionic-docs';

declare global {
  interface HTMLIonicDocsElement extends IonicDocs, HTMLStencilElement {
  }
  var HTMLIonicDocsElement: {
    prototype: HTMLIonicDocsElement;
    new (): HTMLIonicDocsElement;
  };
  interface HTMLElementTagNameMap {
    "ionic-docs": HTMLIonicDocsElement;
  }
  interface ElementTagNameMap {
    "ionic-docs": HTMLIonicDocsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ionic-docs": JSXElements.IonicDocsAttributes;
    }
  }
  namespace JSXElements {
    export interface IonicDocsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  NewTabIcon as NewTabIcon
} from './components/new-tab-icon/new-tab-icon';

declare global {
  interface HTMLNewTabIconElement extends NewTabIcon, HTMLStencilElement {
  }
  var HTMLNewTabIconElement: {
    prototype: HTMLNewTabIconElement;
    new (): HTMLNewTabIconElement;
  };
  interface HTMLElementTagNameMap {
    "new-tab-icon": HTMLNewTabIconElement;
  }
  interface ElementTagNameMap {
    "new-tab-icon": HTMLNewTabIconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "new-tab-icon": JSXElements.NewTabIconAttributes;
    }
  }
  namespace JSXElements {
    export interface NewTabIconAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteContent as SiteContent
} from './components/site-content/site-content';

declare global {
  interface HTMLSiteContentElement extends SiteContent, HTMLStencilElement {
  }
  var HTMLSiteContentElement: {
    prototype: HTMLSiteContentElement;
    new (): HTMLSiteContentElement;
  };
  interface HTMLElementTagNameMap {
    "site-content": HTMLSiteContentElement;
  }
  interface ElementTagNameMap {
    "site-content": HTMLSiteContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-content": JSXElements.SiteContentAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteContentAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  EcosystemDropdown as EcosystemDropdown
} from './components/site-header/ecosystem-dropdown';

declare global {
  interface HTMLEcosystemDropdownElement extends EcosystemDropdown, HTMLStencilElement {
  }
  var HTMLEcosystemDropdownElement: {
    prototype: HTMLEcosystemDropdownElement;
    new (): HTMLEcosystemDropdownElement;
  };
  interface HTMLElementTagNameMap {
    "ecosystem-dropdown": HTMLEcosystemDropdownElement;
  }
  interface ElementTagNameMap {
    "ecosystem-dropdown": HTMLEcosystemDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ecosystem-dropdown": JSXElements.EcosystemDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface EcosystemDropdownAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  FrameworkDropdown as FrameworkDropdown
} from './components/site-header/framework-dropdown';

declare global {
  interface HTMLFrameworkDropdownElement extends FrameworkDropdown, HTMLStencilElement {
  }
  var HTMLFrameworkDropdownElement: {
    prototype: HTMLFrameworkDropdownElement;
    new (): HTMLFrameworkDropdownElement;
  };
  interface HTMLElementTagNameMap {
    "framework-dropdown": HTMLFrameworkDropdownElement;
  }
  interface ElementTagNameMap {
    "framework-dropdown": HTMLFrameworkDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "framework-dropdown": JSXElements.FrameworkDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface FrameworkDropdownAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteHeader as SiteHeader
} from './components/site-header/site-header';

declare global {
  interface HTMLSiteHeaderElement extends SiteHeader, HTMLStencilElement {
  }
  var HTMLSiteHeaderElement: {
    prototype: HTMLSiteHeaderElement;
    new (): HTMLSiteHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "site-header": HTMLSiteHeaderElement;
  }
  interface ElementTagNameMap {
    "site-header": HTMLSiteHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-header": JSXElements.SiteHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteHeaderAttributes extends HTMLAttributes {
      currentSection?: string;
    }
  }
}


import {
  SiteMenu as SiteMenu
} from './components/site-menu/site-menu';

declare global {
  interface HTMLSiteMenuElement extends SiteMenu, HTMLStencilElement {
  }
  var HTMLSiteMenuElement: {
    prototype: HTMLSiteMenuElement;
    new (): HTMLSiteMenuElement;
  };
  interface HTMLElementTagNameMap {
    "site-menu": HTMLSiteMenuElement;
  }
  interface ElementTagNameMap {
    "site-menu": HTMLSiteMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-menu": JSXElements.SiteMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteMenuAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SitePreviewApp as SitePreviewApp
} from './components/site-preview-app/site-preview-app';

declare global {
  interface HTMLSitePreviewAppElement extends SitePreviewApp, HTMLStencilElement {
  }
  var HTMLSitePreviewAppElement: {
    prototype: HTMLSitePreviewAppElement;
    new (): HTMLSitePreviewAppElement;
  };
  interface HTMLElementTagNameMap {
    "site-preview-app": HTMLSitePreviewAppElement;
  }
  interface ElementTagNameMap {
    "site-preview-app": HTMLSitePreviewAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-preview-app": JSXElements.SitePreviewAppAttributes;
    }
  }
  namespace JSXElements {
    export interface SitePreviewAppAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteSearch as SiteSearch
} from './components/site-search/site-search';

declare global {
  interface HTMLSiteSearchElement extends SiteSearch, HTMLStencilElement {
  }
  var HTMLSiteSearchElement: {
    prototype: HTMLSiteSearchElement;
    new (): HTMLSiteSearchElement;
  };
  interface HTMLElementTagNameMap {
    "site-search": HTMLSiteSearchElement;
  }
  interface ElementTagNameMap {
    "site-search": HTMLSiteSearchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "site-search": JSXElements.SiteSearchAttributes;
    }
  }
  namespace JSXElements {
    export interface SiteSearchAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  TabGroup as TabGroup
} from './components/tab-group/tab-group';

declare global {
  interface HTMLTabGroupElement extends TabGroup, HTMLStencilElement {
  }
  var HTMLTabGroupElement: {
    prototype: HTMLTabGroupElement;
    new (): HTMLTabGroupElement;
  };
  interface HTMLElementTagNameMap {
    "tab-group": HTMLTabGroupElement;
  }
  interface ElementTagNameMap {
    "tab-group": HTMLTabGroupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "tab-group": JSXElements.TabGroupAttributes;
    }
  }
  namespace JSXElements {
    export interface TabGroupAttributes extends HTMLAttributes {
      tabs?: string;
    }
  }
}


import {
  TableOfContents as TableOfContents
} from './components/table-of-contents/table-of-contents';

declare global {
  interface HTMLTableOfContentsElement extends TableOfContents, HTMLStencilElement {
  }
  var HTMLTableOfContentsElement: {
    prototype: HTMLTableOfContentsElement;
    new (): HTMLTableOfContentsElement;
  };
  interface HTMLElementTagNameMap {
    "table-of-contents": HTMLTableOfContentsElement;
  }
  interface ElementTagNameMap {
    "table-of-contents": HTMLTableOfContentsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "table-of-contents": JSXElements.TableOfContentsAttributes;
    }
  }
  namespace JSXElements {
    export interface TableOfContentsAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
