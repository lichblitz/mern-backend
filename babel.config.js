module.exports = {
	plugins: [
		[
			"module-resolver",
			{
				root: ["."],
				alias: {
					frameworks: "./src/frameworks",
					api: "./src/api",
					domain: "./src/domain",
					application: "./src/application",
				}
			},
		],
	],
};
