# 🌼 🌼 🌼 The Election control Experiment 🌼 🌼 🌼

---
🌼 🌼 🌼
---

## Purpose

This repo is about trying to use the playwright test tool,; as a very interesting alternative to `Cypress`.


## First try


Playwright is a product which consists of two main parts :
* The test runner : that's for running tests. See https://playwright.dev/docs/intro
* The test library: that's for writing new softwares which execute tests. See https://playwright.dev/docs/library

### Using the Playwright test runner

_Following: https://playwright.dev/docs/intro_

See [the `parts/using/the_test_runner` folder](./parts/using/the_test_runner) Folder for the study of the test runner.

### Using the Playwright Library

_Following: https://playwright.dev/docs/intro_

See [the `parts/using/the_library` folder](./parts/using/the_library) Folder for the study of the test runner.

## References

* https://playwright.dev/


## Git flow initialization

```bash
export WHERE_I_WORK=$(mktemp -d -t "tmp_WHERE_I_WORK_XXXXXX")

git clone git@github.com:pokusio/playwright-first-try.git ${WHERE_I_WORK}

cd ${WHERE_I_WORK}

touch README.md
atom .

git add -A && git commit -m "git flow init: first commit on master" && git push -u origin master

git flow init --defaults && git push -u origin  --all

git flow feature start init_src && git push -u origin HEAD

export COMMIT_MESSAGE="adding daisy ui framework, and a first daisy ui component"

git add -A && git commit -m "${COMMIT_MESSAGE}" && git push -u origin HEAD

```
