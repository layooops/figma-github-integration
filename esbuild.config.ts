/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import esbuild, { BuildOptions } from 'esbuild';

const isDev = process.env.NODE_ENV === 'development';

const DEFINITIONS: Record<string, string> = {};

const entry = 'src/widget/app/app.tsx';
const outfile = 'dist/widget.js';

const config: BuildOptions = {
  entryPoints: [entry],
  outfile: outfile,
  bundle: true,
  minify: true,
  logLevel: 'debug',
  target: 'es6',
  define: DEFINITIONS,
};

const build = async () => {
  esbuild
    .build(config)
    .then(() => {
      if (isDev) {
        console.log('watching for changes...');
      }
    })
    .catch(() => process.exit(1));

  if (isDev) {
    const context = await esbuild.context(config);
    await context.watch();
  }
};

build();
