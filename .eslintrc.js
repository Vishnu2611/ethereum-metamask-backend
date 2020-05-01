module.exports = {
	'env': {
		'es6': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018
	},
	'rules': {
		'indent': [
			'error',
			4
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-unused-vars': [
			'error',
			{ args: 'none' }
		],
		'no-console': 'off',
        'curly': 'error',
        'eqeqeq': 'error',
		'no-var': 'error',
		'no-tabs': 'error',
		'no-throw-literal': 'error',
		'strict': 'error',
		'dot-notation': 'error',
		'no-use-before-define': 'error',
		'no-useless-call': 'error',
		'no-with': 'error',
		'no-tabs': 'error',
		'operator-linebreak': 'error',
        'yoda': 'error',
		'quote-props': ['error', 'as-needed']
    }
};