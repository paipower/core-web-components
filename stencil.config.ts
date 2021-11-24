import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import dotenv from 'rollup-plugin-dotenv';

export const config: Config = {
  namespace: 'pai-core-web-components',
  globalScript: 'src/global.ts',
  globalStyle: 'src/global.scss',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
  ],
  plugins: [sass(), dotenv()],
};
