module.exports = {
    parser: "vue-eslint-parser",
    env: {
        "browser": true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended',
    ],
    rules: {
        "indent": ["error", 4],
        "vue/html-indent": ["error", 4],
        "vue/html-self-closing": ["warn", {
            "html": {
                "void": "always",
                "normal": "never",
                "component": "any"
            }
        }],
        "max-len": ["error", 240],
        "vue/component-tags-order": ["error", {
            "order": ["template", "script", "style"]
        }],
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [
                    "state"
                ]
            }
        ],
        "object-curly-newline": ["error", {
            "ObjectPattern": { "multiline": true },
        }]
    },
}
