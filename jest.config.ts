/* eslint-disable */
import { swcAngularJestTransformer } from '@jscutlery/swc-angular';

export default {
  displayName: 'jest-angular-swc-class-reproduction',
  preset: './jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: './coverage/jest-angular-swc-class-reproduction',
  transform: {
    //'^.+\\.(ts|mjs|js)$': swcAngularJestTransformer(),
    '^.+\\.(ts|mjs|js|html)$':
      [
        'jest-preset-angular',
        {
          tsconfig: '<rootDir>/tsconfig.spec.json',
          stringifyContentPathRegex: '\\.(html|svg)$',
        },
      ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/*(*.)@(spec|test).[jt]s?(x)',
  ],
};