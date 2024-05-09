import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  rootDir: __dirname,
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/server/**/*.spec.ts"], // Matches all test files ending with .spec.ts inside the server folder
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // Add any additional configuration options as needed
};

export default config;
