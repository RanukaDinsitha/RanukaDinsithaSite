// Lib Imports For HTML5 Files.

const scripts = [
	// System Imports
	'https://unpkg.com/react@18/umd/react.development.js',
	'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
	'https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js',
	'https://cdn.jsdelivr.net/npm/jquery@3.6.4/src/core.min.js',
	'https://unpkg.com/babel-standalone@6/babel.min.js',
	'https://unpkg.com/@babel/standalone/babel.min.js',
	'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js',
	'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css',
	'https://unpkg.com/htmx.org@1.9.4',
	'https://cdn.jsdelivr.net/npm/eslint@8.47.0/conf/config-schema.min.js',
	'https://cdn.jsdelivr.net/npm/stylelint@15.10.3/lib/index.min.js',
	'https://cdn.jsdelivr.net/npm/astro@2.10.12/astro.js',
	'https://cdn.jsdelivr.net/npm/solid-js@1.7.11/dist/solid.js',
	'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js',
	'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/index.min.js',
	'https://cdn.jsdelivr.net/npm/typescript@5.1.6/lib/typescript.js',
	'https://cdn.jsdelivr.net/npm/next@13.4.19/dist/server/next.min.js',
	'https://cdn.jsdelivr.net/npm/next@13.4.19/font/google/target.min.css',
	'https://cdn.jsdelivr.net/npm/vite@4.4.9/dist/node/chunks/dep-c423598f.js',
	'https://cdn.jsdelivr.net/npm/svelte@4.2.0/src/runtime/index.min.js',
        'https://backbonejs.org/backbone.js',
	'https://cdn.jsdelivr.net/npm/svelte@4.2.0/',
	"https://cdn.jsdelivr.net/npm/solid-js@1.7.11/",
	'https://cdn.jsdelivr.net/npm/astro@2.10.12/'
]

scripts.forEach((src) => {
	const script = document.createElement('script')
	script.src = src
	script.crossOrigin = 'anonymous'
	document.head.appendChild(script)
})

