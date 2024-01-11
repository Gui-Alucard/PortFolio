module.exports = {
	singleQuote: true,
  semi: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  pluginSearchDirs: ["."],
  tailwindConfig: './tailwind.config.js',
}