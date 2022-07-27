// noinspection NpmUsedModulesInstalled

import esbuild from 'esbuild';
import process from 'process';
import builtins from 'builtin-modules';
import { relative } from 'path';
import { rm } from 'fs/promises'
import { exec } from 'child_process';
import { copy } from 'esbuild-plugin-copy';
import { config } from 'dotenv';

config({ path: '.env.local' });
config({ path: '.env' });

const { OUT_DIR } = process.env;

await rm('dist', { force: true, recursive: true })
if (!relative(OUT_DIR, process.cwd()).startsWith('..')) {
  exec(process.platform === 'win32'? `mklink /J dist ${OUT_DIR}` : `ln -s ${OUT_DIR} dist`)
}


const banner =
`/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository https://github.com/mokeyish/obsidian-enhancing-export .
*/
`;

const prod = (process.argv[2] === 'production');

esbuild.build({
  banner: {
    js: banner,
  },
  entryPoints: ['src/main.ts',],
  entryNames: '[name]',
  bundle: true,
  external: [
    'obsidian', 
    'electron', 		
    '@codemirror/autocomplete',
    '@codemirror/closebrackets',
    '@codemirror/collab',
    '@codemirror/commands',
    '@codemirror/comment',
    '@codemirror/fold',
    '@codemirror/gutter',
    '@codemirror/highlight',
    '@codemirror/history',
    '@codemirror/language',
    '@codemirror/lint',
    '@codemirror/matchbrackets',
    '@codemirror/panel',
    '@codemirror/rangeset',
    '@codemirror/rectangular-selection',
    '@codemirror/search',
    '@codemirror/state',
    '@codemirror/stream-parser',
    '@codemirror/text',
    '@codemirror/tooltip',
    '@codemirror/view',
    ...builtins],
  loader: { '.json': 'file', '.lua': 'binary' },
  inject: prod ? undefined : [ './src/hmr.ts' ],
  format: 'cjs',
  watch: !prod,
  target: 'es2021',
  logLevel: 'info',
  sourcemap: prod ? false : 'inline',
  // sourcemap: 'both',
  // sourceRoot: 'src',
  minify: prod,
  treeShaking: true,
  tsconfig: 'tsconfig.json',
  plugins: [
    copy({
      assets: [
        { from: ['./manifest.json'], to: './', },
        { from: ['./styles.css'], to: './', },
      ]
    })
  ],
  outdir:  'dist',
}).catch(() => process.exit(1));