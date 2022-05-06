<script lang="ts">
  import logo from './assets/svelte.png'
  import loginImage from './assets/almos-bechtold-AJ_Mou1FUS8-unsplash.jpg'
  import Counter from './lib/Counter.svelte'
  import './global.css'; /// Import the global tailwind css dependencies into the App.svelte file inside the script tag.
  import GithubActivityItem from './ActivityItem.svelte';

  import GithubActivityItemsList from './GithubActivityItemsList.svelte';

  const githubActivityItems = [
    { githubProfileName: 'I am red!' },
    { githubProfileName: 'I am blue!' }
  ];

  // tailwind css editor
  let arr_html = [
    {html: 'This is a dummy editor from <a href="https://github.com/fouita/tailwind-editor">tailwind-editor</a>. My intent is to integrate a markdown editor  Click <span class="font-bold">here to edit</span>, Double-Click <span class="font-bold">here to open formating menu!</span>', klass: 'hover:bg-sky-100 border border-gray-300 rounded p-2 text-3xl'}
  ]
  import Editor from 'tailwind-editor'
  let html = '<div><p>just to test that</p><div>'
</script>

<!-- After the script tag, call the TailwindCSS component to apply the overall style setup. -->
<!--
-->

<Editor bind:html={html} {arr_html} editable />

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
  </p><Editor bind:html={html} {arr_html} editable />

  <h1 class="bg-cyan-200">
  Github Activity Items :
  </h1>

  <ul>
    <li><h3>This will be an undefined Github Activity Item : </h3><GithubActivityItem /></li>
  {#each githubActivityItems as item(item.githubProfileName)}
    <GithubActivityItem  githubProfileName={item.githubProfileName}/>
  {/each}
  </ul>


<div class="flex">
<div class="bg-green-100 shadow-lg max-w-lg mx-auto mt-4 content-center justify-center h-full mb-2 p-5 rounded ">
<img src="{loginImage}" alt="Pokus Login Image" class="w-300 h-400 "/>
<h1 class="w-full">Example Tailwind CSS (almost) Responsive form </h1>
<div class="mb-4 text-orange-500 text-xl mt-2 mb-2 py-5">
  <label for="username">Username (email or user alias): </label>
  <input type="text" id="username" name="username" class="border border-gray-300 shadow-inner mb-5 mt-5 mx-auto py-2 px-10 w-full rounded hover:bg-blue-100" />
</div>

<div class="mb-4 text-orange-500 text-xl mt-2 mb-2 py-5">
  <label for="password">Password: </label>
  <input type="password" id="password" name="password" class="border border-gray-300 shadow-inner mb-5 mt-5 mx-auto py-2 px-10 w-full rounded hover:bg-blue-100" />
</div>
<p>(many <a class="text-blue-500" href="https://www.youtube.com/watch?v=D6-g6JgiUIs">thx to @Grafikart ;) !</a> ) </p>

</div>





<div class="text-xl bg-green-100 shadow-lg max-w-lg mx-auto mt-4 content-center justify-center h-full mb-2 p-5 rounded ">
    <div class="bg-sky-100 border border-gray-300 shadow-lg max-w-lg mx-auto mt-4 content-center justify-center h-full mb-2 p-5 rounded ">
    {html}
    </div>
</div>


</div>






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
