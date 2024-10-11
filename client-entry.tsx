import config from './package.json';
import { convertToFileLink } from './src/ConvertToFileLink';
import { Options, Func, ViewOptions } from './types/utils';

declare const growiFacade: {
  markdownRenderer?: {
    optionsGenerators: {
      customGenerateViewOptions: (path: string, options: Options, toc: Func) => ViewOptions,
      generateViewOptions: (path: string, options: Options, toc: Func) => ViewOptions,
      generatePreviewOptions: (path: string, options: Options, toc: Func) => ViewOptions,
      customGeneratePreviewOptions: (path: string, options: Options, toc: Func) => ViewOptions,
    },
  },
};

const activate = (): void => {
  if (growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }

  const { optionsGenerators } = growiFacade.markdownRenderer;

  // For page view
  optionsGenerators.customGenerateViewOptions = (...args) => {
    const options = optionsGenerators.generateViewOptions(...args);
    const A = options.components.a;
    options.components.a = convertToFileLink(A); // Wrap the default component
    return options;
  };

  // For preview
  optionsGenerators.customGeneratePreviewOptions = (...args) => {
    const preview = optionsGenerators.generatePreviewOptions(...args);
    const A = preview.components.a;
    preview.components.a = convertToFileLink(A); // Wrap the default component
    return preview;
  };
};

const deactivate = (): void => {
};

// register activate
if ((window as any).pluginActivators == null) {
  (window as any).pluginActivators = {};
}
(window as any).pluginActivators[config.name] = {
  activate,
  deactivate,
};
