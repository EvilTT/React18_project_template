import { pathsToModuleNameMapper } from 'ts-jest'
import fs from 'fs'
import path from 'path'

const { compilerOptions } = JSON.parse(
	fs.readFileSync(path.resolve('tsconfig.json'), 'utf-8')
)
export default {
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/src'],
	transform: {
		'\\.(ts|tsx)?$': 'ts-jest',
	},
	moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'node'],
	testPathIgnorePatterns: ['/node_modules/', '/public/', '/build/'],
	testRegex: '(<rootDir>.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
	moduleDirectories: ['<rootDir>/src', 'node_modules'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
		...pathsToModuleNameMapper(compilerOptions.paths, {
			prefix: '<rootDir>/',
		}),
	},
	bail: true,
	coverageDirectory: '<rootDir>/coverage',
	errorOnDeprecated: true,
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
