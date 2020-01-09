![Snyk logo](https://snyk.io/style/asset/logo/snyk-print.svg)

***

Snyk helps you find, fix and monitor for known vulnerabilities in your dependencies, both on an ad hoc basis and as part of your CI (Build) system.

| :information_source: This repository is only a plugin to be used with the Snyk CLI tool. To use this plugin to test and fix vulnerabilities in your project, install the Snyk CLI tool first. Head over to [snyk.io](https://github.com/snyk/snyk) to get started. |
| --- |


# Snyk Gradle CLI Plugin

This plugin provides dependency metadata for Gradle projects that use `gradle` and have a `build.gradle` file.


# Support

❌ Not supported
❓ No issues expected but not regularly tested
✅ Supported and verified with tests

## Supported OS

| OS     |  Supported |
|--------|------------|
| Windows| ✅          |
| Linux  | ✅          |
| OSX    | ️✅          |

## Supported Node versions

| Node  |  Supported |
|-------|------------|
| 6     | ✅          |
| 8     | ✅          |
| 10    | ✅          |
| 12    | ✅          |

## Supported Java & Gradle versions

| Java / Gradle  |2.*|3.*|4.*|5.*|6.0|
|----------------|---|---|---|---|---|
| 8 (LTS)        | ✅ | ✅ | ✅ | ✅ | ✅ |
| 9              | ❌ | ❌ | ❓ | ❓ | ❓ |
| 10             | ❌ | ❌ | ❓ | ❓ | ❓ |
| 11 (LTS)       | ❌ | ❌ | ✅ | ✅ | ✅ |
| 12             | ❌ | ❌ | ❓ | ✅ | ️✅ |
| 13             | ❌ | ❌ | ✅ | ❌ | ✅ |


# Supported Snyk command line arguments:

* `--gradle-sub-project=foo` return dependencies for a specific subproject (by default, return only the
  dependencies for the top-level project)

Additional command line arguments:

- `--all-sub-projects` for "multi project" configurations, test all sub-projects.

- `--configuration-matching=<string>` Resolve dependencies using only configuration(s) that match the provided Java regular expression, e.g. '^releaseRuntimeClasspath$'.

- `--configuration-attributes=<string>` Select certain values of configuration attributes to resolve the dependencies. E.g.: 'buildtype:release,usage:java-runtime'

## Under the hood

See `lib/init.gradle` for the Groovy script injected in Gradle builds to gather and resolve the dependencies.
