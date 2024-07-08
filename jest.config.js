module.exports = {
	rootDir: process.cwd(),
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	transformIgnorePatterns: [],
	testEnvironment: "jsdom",
	transform: {
		".*\\.(tsx?|jsx?)$": [
			"@swc/jest",
			{
				jsc: {
					transform: {
						react: {
							runtime: "automatic"
						}
					}
				}
			}
		]
	},
	setupFilesAfterEnv: [
		"<rootDir>/src/setupTests.ts"
	],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
          "<rootDir>mocks/fileMock.js",
		"\\.(css|scss|sass)$": "identity-obj-proxy"
	}
};