  <script type="ts">
    import type { ActivityContent } from "models/github";
    import logo from "./assets/svelte.png";

    export let githubProfileName;

    var activityContent: ActivityContent = {
      profileName: `${githubProfileName}`, /// "profile2",
      profileUrl: "https://github.com/pokusio",
      time: "4 days ago",
      repo: {
        name: "pokusio/playwright-first-try",
        url: "https://github.com/pokusio/playwright-first-try",
        description: "This Repository contains multiple svelte project to learn how to use https://playwright.dev testing technologies",
        language: "Typescript / Svelte / Taliwind CSS",
        stars: 278222589,
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
