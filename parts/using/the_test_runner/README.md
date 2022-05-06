
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

cd ../../../../../../

pwd
```

* step 2, add Tailwind CSS :


```bash

cd parts/using/the_test_runner/examples/1/vite-project/



npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

npx svelte-add@latest tailwindcss && pnpm i


# ---
# Add the src/models/github.ts
#
mkdir -p ./src/models/
cat <<EOF>./src/models/github.ts
  export interface ActivityContent {
  	profileName: string;
  	profileUrl: string;
  	time: string;
  	repo: Repository
  }

  interface Repository {
  	name: string;
  	url: string;
  	description: string;
  	language: string;
  	stars: number;
  	updatedDate: string;
  }
EOF

# ---
# Add the ./src/ActivityItem.svelte source file
cat <<EOF>./src/ActivityItem.svelte
  <script type="ts">
    import type { ActivityContent } from "models/github";
    import logo from "./assets/svelte.png";

    export let githubProfileName;

    var activityContent: ActivityContent = {
      profileName: \`\${githubProfileName}\`, /// "profile2",
      profileUrl: "https://github.com/eternaldevgames",
      time: "4 days ago",
      repo: {
        name: "eternaldevgames/svelte-projects",
        url: "https://github.com/eternaldevgames/svelte-projects",
        description: "This Repository contains multiple svelte project to learn",
        language: "Svelte",
        stars: 2,
        updatedDate: "Oct 15",
      },
    };
  </script>

  <div class="p-3 m-3">
    <div class="flex flex-row items-center">
      <img class="h-8 w-8 rounded-full bg-gray-200" src={logo} alt="hero" />
      <h4 class="p-2">
        <a href={activityContent.profileUrl}>{activityContent.profileName}</a>
        started the repo
        <a href={activityContent.repo.url}>{activityContent.repo.name}</a>
      </h4>
      <p class="text-gray-500 text-sm">{activityContent.time}</p>
    </div>
    <div class="ml-8 p-5 rounded-lg bg-white border border-black">
      <a class="text-lg" href={activityContent.repo.url}
        >{activityContent.repo.name}</a
      >
      <p>{activityContent.repo.description}</p>

      <div class="flex flex-row items-center mt-4">
        <div class="w-3 h-3 bg-red-600 rounded-full ml-1 mr-1" />
        <p class="mr-5">{activityContent.repo.language}</p>
        <img
          src="https://img.icons8.com/material-outlined/24/000000/star--v2.png"
          alt="star"
        />
        <p class="ml-1 mr-5">{activityContent.repo.stars}</p>
        <p class="mr-5">Updated {activityContent.repo.updatedDate}</p>
      </div>
    </div>
  </div>
EOF



# --
# Modify the default src/App.svelte

rm src/App.svelte

cat <<EOF>./src/App.svelte
<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import TailwindCss from './global.css'; /// Import the global tailwind css dependencies into the App.svelte file inside the script tag.
  import GithubActivityItem from './ActivityItem.svelte';

  import GithubActivityItemsList from './GithubActivityItemsList.svelte';

  const githubActivityItems = [
    { githubProfileName: 'I am red!' },
    { githubProfileName: 'I am blue!' }
  ];
</script>

<!-- After the script tag, call the TailwindCSS component to apply the overall style setup. -->
<!--
<TailwindCss />
-->


<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Hello Typescript!</h1>

  <Counter />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>

  <h1>
  	Github Activity Items :
  </h1>

  <ul>
    <li><h3>This will be an undefined Github Activity Item : </h3><GithubActivityItem /></li>
  {#each githubActivityItems as item(item.githubProfileName)}
    <GithubActivityItem  githubProfileName={item.githubProfileName}/>
  {/each}
  </ul>









</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
EOF


# -->>>>> FINALLY RUN IT!
npm i && npm run dev
# ---
# Ctrl + C to stop the dev server

cd ../../../../../../

pwd


```

* step 3, Run IT ! :

```bash

cd parts/using/the_test_runner/examples/1/vite-project/

pnpm i && npm i
# -->>>>> FINALLY RUN IT!
npm run dev
# ---
# Ctrl + C to stop the dev server

cd ../../../../../../

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
