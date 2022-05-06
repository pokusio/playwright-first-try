
_Following: https://playwright.dev/docs/intro_


## First Example

In [the `parts/using/the_test_runner/examples/1` folder](./parts/using/the_test_runner/examples/1) Folder, we will generate an example fronty end app.

For this app, we will set tests using Playright test runner capabilities.

What i want, is to evaluate how Playwright behaves when i am in a TDD spirit.

### Creating a first app

First, I will follow a tutorial to create an app with technologies i like, and mostly i chose very recent (May 2022) technologies : I want to learn Playwright for the future apps i will be developing, and I want to evaluate how adapted to modern technologies Playwright is.

Ok, wo i chose https://www.section.io/engineering-education/svelte-with-vite-typescript-and-tailwind-css/

* I need `nodejs` installed

* step 1 :
```bash
pwd

mkdir -p ./parts/using/the_test_runner/examples/1

cd parts/using/the_test_runner/examples/1

npm init vite@latest

# ---
# Interactive, leave all to defaults, when mandatory choice: Choose Svelte as framework option, then svelte-ts variant

cd vite-project/ && npm i && npm run dev

# ---
# Ctrl + C to stop the dev server

cd ../../../../../
pwd
```

### Adding first Playwright Tests


### Adding more code

Ok, we have our app, we have simpel tests, now let's play TDD:
* we will create an issue for every feature we want
* we will add a new issue for every fix we need
* we will create a new Github milestone for a set of issue made of features, and fixes, which all make up a consistent functional scope.

We will decompose every issue into tasks lists (taht are automatically marked as done or todo by github)



The features will be :

* all users :
  * register
  * login
  * logout
* super admin features :
  * CRUD super admin users
  * list users, search users, for each user display the detailed infos page fro that users, display statistics about that user, all the user's dashboard.
  * block a user: the user is not deleted, but all its permissions are dismissed:
    * if the user tries to login, he cannot use any features, he is not allowed to login anymore, the error message just says authentication denied
    * if the user tries to register again using the same email address, and if the user
  * force user's password re-init
  * revoke all users Oauth2 token
* every super admin is an admin user
* admin features :
  * create a new vote/election process: for that election, (+ all CRUD op son an election / vote)
  * visualize the leaflet map of all voting locations, and all users attacheed to each voting locations, with all details on each user
* basic user features :
  * search votes/election processes (and see their detailed status) :
    * using a text search field
    * using a drop down list for french "Régions",
    * using a drop down list for french "Départements",
    * using a drop down list for french Cities,
    * using a calendar to select two dates, and search all votes/elections with an event in the provided date time span
    * all drop donw list can be used simultenaously with the text filed
    * Instead of all drop down lists, we can use leaflet maps to select either Départements, régions, cities
  * for a given election/vote:
    * visualize all docuements that explain the details of the control process:
      * recommandations for curtesy
      * recommandations explaining  :
        * a detailed and exhaustive description of the control process you will have to conduct,
        * a general description of the law principles involved with this election control: exaplanation on how and why the law defines those rights for each citizen.
        * a detailed legal / juridical guide for the control process :
          * how each step of the control process is allowed by the law
          * for each step, a set of referenecs to the law a given, and a full explanation is given on, how those laws allow you to perfomr this step in a control process of the election/vote process
        * legal resources : a reference list of all leglal resources mentioned into the

## References

*
