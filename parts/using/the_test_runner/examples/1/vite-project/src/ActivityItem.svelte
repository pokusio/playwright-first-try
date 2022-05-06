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
<div class="flex">
  <div class="p-3 m-3 text-zinc-500">
    <div class="flex flex-row items-center">
      <img class="h-8 w-8 rounded-full bg-gray-200" src={logo} alt="hero" />
      <h4 class="p-2 text-zinc-500 font-thin">
        <a class="p-2 text-cyan-500 font-extrabold" href={activityContent.profileUrl}>{activityContent.profileName}</a>
        started the repo
        <a class="p-2 text-cyan-500 font-extrabold" href={activityContent.repo.url}>{activityContent.repo.name}</a>
      </h4>
      <p class="text-white text-sm">{activityContent.time}</p>
    </div>
    <div class="ml-8 p-5 rounded-lg bg-white border border-black text-black-500">
      <a class="text-lg  text-black-500 font-extrabold" href={activityContent.repo.url}>{activityContent.repo.name}</a>
      <p class="p-2 text-black-500">{activityContent.repo.description}</p>

      <div class="flex flex-row items-center mt-4  text-black-500">
        <div class="w-3 h-3 bg-red-600 rounded-full ml-1 mr-1 text-black-500" />
        <p class="mr-5 text-black-500">{activityContent.repo.language}</p>
        <img
          src="https://img.icons8.com/material-outlined/24/000000/star--v2.png"
          alt="star"
        />
        <p class="ml-1 mr-5 text-black-500">{activityContent.repo.stars}</p>
        <p class="mr-5 text-black-500">Updated {activityContent.repo.updatedDate}</p>
      </div>
    </div>
  </div>
</div>
