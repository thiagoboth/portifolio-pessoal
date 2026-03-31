import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import nextjs from 'eslint-config-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extends do Next e TypeScript
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...nextjs,
  // Extende o prettier por último PARA DESABILITAR regras conflitantes
  prettierConfig,
  // Ativa o plugin prettier e a regra de erro
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // Pastas e arquivos a serem ignorados
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];

export default eslintConfig;
