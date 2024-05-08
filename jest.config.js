module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/test'],
	testMatch: [
		'**/?(*.)+(spec|test).[tj]s?(x)'
	],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporters: ["text", "lcov"],
};

