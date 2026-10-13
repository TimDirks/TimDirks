import antfu from '@antfu/eslint-config';

export default antfu({
    stylistic: {
        indent: 4,
        quotes: 'single',
        semi: true,
    },
}, {
    rules: {
        curly: ['error', 'all'],
        'node/prefer-global/process': 0,
        'style/block-spacing': ['error', 'never'],
        'style/brace-style': ['error', '1tbs'],
        'style/object-curly-spacing': ['error', 'never'],
        'style/quote-props': ['error', 'as-needed'],
        'vue/attributes-order': ['error', {
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'SLOT',
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'ATTR_DYNAMIC',
                'ATTR_STATIC',
                'ATTR_SHORTHAND_BOOL',
                'EVENTS',
                'CONTENT',
            ],
            alphabetical: true,
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: 1,
        }],
    },
});
