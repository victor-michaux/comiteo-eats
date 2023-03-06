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
        "no-trailing-spaces": [ "error", {
            "skipBlankLines": true,
            "ignoreComments": true
        }],
        "indent": ["error", 4],
        "vue/html-indent": ["error", 4],
        "vue/singleline-html-element-content-newline": "off",
        "vue/multiline-html-element-content-newline": "off",
        "vue/max-attributes-per-line": ["error", {
            "singleline": 10,
            "multiline": 10
        }],
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
