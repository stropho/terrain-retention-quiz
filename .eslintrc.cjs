module.exports = {
	extends: ["standard", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	env: {
		es6: true,
		node: true,
	},
	plugins: ["import", "prettier"],
	rules: {
		camelcase: ["error", { properties: "never", ignoreDestructuring: true }],
		"consistent-return": "error",
		"no-else-return": "error",
		"no-unused-vars": [
			"error",
			{
				vars: "all",
				args: "after-used",
				argsIgnorePattern: "^_",
				ignoreRestSiblings: true,
			},
		],
		"no-var": "error",
		"prefer-object-spread": "error",
		radix: "error",

		"import/no-unresolved": ["error"],
	},
};
