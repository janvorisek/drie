import path from "path";
import { Plugin } from "vite";
import { IndexSearch } from "./md-index-builder";
import { Options } from "./types";

export interface SearchData {
  PREVIEW_LOOKUP: string;
  INDEX_DATA: string;
  Options: Options;
}

const DEFAULT_OPTIONS: Options = {
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
};

export function SearchPlugin(inlineOptions?: Partial<any>): Plugin {
  // eslint-disable-next-line no-unused-vars
  const options = {
    ...DEFAULT_OPTIONS,
    ...inlineOptions,
  };

  let config: any;
  const virtualModuleId = "virtual:search-data";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "vite-plugin-search",
    enforce: "pre",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    config: () => ({
      resolve: {
        alias: { "./VPNavBarSearch.vue": path.resolve(__dirname, "./Search.vue") },
      },
    }),

    async resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(this, id) {
      if (id === resolvedVirtualModuleId) {
        //if (!config.build.ssr) {
          //so we don't compute index search twice
          let index = await IndexSearch(config.root, options);
          return index;
        //}
        //console.log('b')
        return `const INDEX_DATA = { "version": "2.3.9", "fields": ["b", "a"], "fieldVectors": [], "invertedIndex": [], "pipeline": ["stemmer"] };
				const PREVIEW_LOOKUP = {};
				const Options = ${JSON.stringify(options)};
				const data = { INDEX_DATA, PREVIEW_LOOKUP, Options };
				export default data;`;
      }
    },
  };
}
