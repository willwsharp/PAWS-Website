var root = __dirname;

module.exports = {
	context: root,
	entry: "./src/main.js",
	output: {
		path: root + "/dist",
		filename: "bundle.js"
	}
};