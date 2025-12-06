import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import pluginImport from 'eslint-plugin-import';
import pluginNewlineDestructuring from 'eslint-plugin-newline-destructuring';
import pluginLookbehind from 'eslint-plugin-lookbehind-assertions';

const booleanPrefixes = ['is', 'should', 'has', 'can', 'did', 'will', 'are', 'without', 'with'];

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    {
        // Note: there should be no other properties in this object
        ignores: ["eslint.config.mjs", "postcss.config.mjs"],
    },
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
        'eslint.config.mjs'
    ]),
    {
        languageOptions: {
            parserOptions: {
                project: 'tsconfig.json',
            }
        }
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2020,
                NodeJS: true,
                PaymentFormSdk: true,
                gtag: true,
                React: true,
                JSX: true,
                Component: true,
            },
        },
        settings: {
            'import/resolver': {
                node: true,
                typescript: true,
            },
        },
        plugins: {
            '@stylistic': stylistic,
            'import': pluginImport,
            'newline-destructuring': pluginNewlineDestructuring,
            'lookbehind-assertions': pluginLookbehind,
        },
        rules: {
            'curly': ['error', 'all'],
            'no-debugger': 'error',
            'no-restricted-syntax': [
                'error', {
                    selector: ':matches(ExportAllDeclaration)',
                    message: 'Exporting all declarations is disallowed. Instead, pick required ones only.',
                },
            ],
            'no-shadow': 'off',
            'no-undef': 'error',
            'import/no-anonymous-default-export': 'off',
            'import/no-cycle': 'error',
            'import/no-duplicates': 'error',
            'import/order': [
                'error',
                {
                    groups: [
                        [
                            'builtin',
                            'external'
                        ],
                        'internal',
                        'parent',
                        'sibling',
                        'index'
                    ],
                    'newlines-between': 'always',
                }
            ],
            'import/no-unresolved': 'error',
            'lookbehind-assertions/no-lookbehind-assertions-regexp': 'error',
            'newline-destructuring/newline': [
                'error',
                {
                    items: 6,
                    itemsWithRest: 5,
                    maxLength: 120,
                },
            ],

            '@stylistic/array-bracket-newline': ['error', { multiline: true }],
            '@stylistic/array-element-newline': ['error', 'consistent', { multiline: true }],
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/brace-style': ['error'],
            '@stylistic/comma-dangle': [
                'error',
                {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'always-multiline',
                    exports: 'always-multiline',
                    functions: 'never',
                    generics: 'ignore',
                },
            ],
            '@stylistic/comma-spacing': ['error', { before: false, after: true }],
            '@stylistic/indent': ['error', 4, { SwitchCase: 1 }],
            '@stylistic/jsx-quotes': ['error', 'prefer-double'],
            '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
            '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
            '@stylistic/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
            '@stylistic/no-multi-spaces': ['error'],
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
            '@stylistic/no-trailing-spaces': ['error'],
            '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/object-property-newline': [
                'error',
                {
                    allowAllPropertiesOnSameLine: true,
                },
            ],
            '@stylistic/padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: ['const', 'let'], next: ['block-like', 'if', 'expression', 'export'] },
                { blankLine: 'always', prev: ['block-like', 'if', 'expression', 'export'], next: ['const', 'let'] },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: ['return', 'multiline-expression', 'multiline-block-like', 'multiline-const', 'multiline-let']
                },
                {
                    blankLine: 'always',
                    prev: ['return', 'multiline-expression', 'multiline-block-like', 'multiline-const', 'multiline-let'],
                    next: '*'
                },
            ],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/space-infix-ops': ['error'],
            '@stylistic/switch-colon-spacing': ['error', { before: false, after: true }],
            '@stylistic/member-delimiter-style': 'error',

            '@typescript-eslint/no-unused-vars': [
                'error', {
                    'argsIgnorePattern': '^_',
                    'varsIgnorePattern': '^_',
                    'caughtErrorsIgnorePattern': '^_',
                },
            ],
            '@typescript-eslint/no-empty-function': ['error', { allow: ['methods', 'arrowFunctions'] }],
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/no-restricted-types': 'error',
            '@typescript-eslint/no-empty-interface': [
                'error', {
                    allowSingleExtends: true,
                },
            ],
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
            '@typescript-eslint/no-unnecessary-condition': 'off',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/ban-ts-comment': 'warn',
            '@typescript-eslint/no-unsafe-call': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/restrict-template-expressions': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/no-invalid-void-type': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
            '@typescript-eslint/prefer-for-of': 'error',
            '@typescript-eslint/comma-dangle': 'off',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'function',
                    format: ['camelCase', 'PascalCase'],
                },
                {
                    selector: 'variable',
                    format: null,
                    filter: {
                        regex: '^_$',
                        match: true,
                    },
                },
                {
                    selector: 'variable',
                    types: ['boolean'],
                    format: null,
                    filter: {
                        regex: '^_$',
                        match: true,
                    },
                },
                {
                    selector: 'variable',
                    format: ['camelCase'],
                },
                {
                    selector: 'variable',
                    modifiers: ['const'],
                    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                },
                {
                    selector: 'variable',
                    types: ['boolean'],
                    format: ['camelCase'],
                    filter: {
                        regex: '^(disabled|error|checked|inView)$',
                        match: true,
                    },
                },
                {
                    selector: 'variable',
                    types: ['boolean'],
                    format: ['PascalCase'],
                    prefix: booleanPrefixes,
                    filter: {
                        regex: '^[A-Z].*',
                        match: false,
                    },
                },
                {
                    selector: 'variable',
                    types: ['boolean'],
                    format: ['UPPER_CASE'],
                    prefix: booleanPrefixes.map(prefix => `${prefix.toUpperCase()}_`),
                    filter: {
                        regex: '^[a-z].*',
                        match: false,
                    },
                },
            ],
        },
    },
]);

export default eslintConfig;
