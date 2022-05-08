<script lang="ts">
  // import logo from './assets/svelte.png'
  // import logo from './assets/logos/notop/ccd.logo.notop.svg'
  // import logo from './assets/logos/notop/ccd.logo.notop.64x64.png'
  import logo from './assets/logos/notop/ccd.logo.notop.svg'
  import bigLogo from './assets/logos/cce.logo.boxy-svg.png'


  import loginImage from './assets/almos-bechtold-AJ_Mou1FUS8-unsplash.jpg'
  import Counter from './lib/Counter.svelte'
  import './global.css'; /// Import the global tailwind css dependencies into the App.svelte file inside the script tag.
  import GithubActivityItem from './ActivityItem.svelte';
  import DaisyCountDown from './DaisyCountDown.svelte';
  import DaisyCarousel from './DaisyCarousel.svelte';

  import GithubActivityItemsList from './GithubActivityItemsList.svelte';
  import DaisyMainNavBar from './DaisyMainNavBar.svelte';

  const githubActivityItems = [
    { githubProfileName: 'I am red!' },
    { githubProfileName: 'I am blue!' }
  ];

  const electionCitizenControlProfileMenus = [
    {
      title: 'Additional menu 1 (Tekton.dev)',
      href: 'https://tekton.dev'
    },
    {
      title: 'Additional menu 2 (Playwright.dev)',
      href: 'https://playwright.dev'
    }
  ];

  const electionCitizenControlLateralMenus = [
    {
      title: 'Kubernetes Additional Lateral menu 1',
      href: 'https://kubernetes.io'
    },
    {
      title: 'Hashicorp Additional Lateral menu 2',
      href: 'https://hashicorp.io'
    }
  ];

  const additionalLoginMenus = [
    {
      title: 'Github',
      iconClass: 'justify-left h-12 w-12 mx-1 rounded-full fill-current text-white text-xl fa-brands fa-github',
      tooltip: 'Login with Github',
      href: 'https://api.controlecitoyen.com/oauth/github'
    },
    {
      title: 'Google',
      iconClass: 'justify-left h-12 w-12 mx-1 rounded-full fill-current text-white text-xl fa-brands fa-google',
      tooltip: 'Login with Google',
      href: 'https://api.controlecitoyen.com/oauth/github'
    },
    {
      title: 'Gitlab',
      iconClass: 'justify-left h-12 w-12 mx-1 rounded-full fill-current text-white text-xl fa-brands fa-gitlab',
      tooltip: 'Login with Gitlab',
      href: 'https://api.controlecitoyen.com/oauth/gitlab'
    },
    {
      title: 'Instagram',
      iconClass: 'justify-left h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-instagram',
      tooltip: 'Login with Instagram',
      href: 'https://api.controlecitoyen.com/oauth/instagram'
    },
    {
      title: 'Facebook',
      iconClass: 'justify-left h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-facebook-f',
      tooltip: 'Login with Facebook',
      href: 'https://api.controlecitoyen.com/oauth/facebook'
    },
    {
      title: 'Twitter',
      iconClass: 'justify-left h-12 w-12 mx-1 rounded-full fill-current text-white text-xl fa-brands fa-twitter',
      tooltip: 'Login with Twitter',
      href: 'https://api.controlecitoyen.com/oauth/twitter'
    },
    {
      title: 'Envelope',
      iconClass: 'justify-left h-12 w-12 mx-1 rounded-full fas fill-current text-white text-xl fa-envelope',
      tooltip: 'Login with Envelope',
      href: 'https://api.controlecitoyen.com/oauth/envelope'
    },
    {
      title: 'Telegram',
      iconClass: 'justify-left h-12 w-12 mx-1 rounded-full fill-current text-white text-xl fa-brands fa-telegram',
      tooltip: 'Login with Telegram',
      href: 'https://api.controlecitoyen.com/oauth/telegram'
    },
    {
      title: 'Twitch',
      iconClass: 'justify-left h-12 w-12 mx-1 rounded-full fill-current text-white text-xl fa-brands fa-twitch',
      tooltip: 'Login with Twitch',
      href: 'https://api.controlecitoyen.com/oauth/twitch'
    },
    {
      title: 'Dribble',
      iconClass: 'justify-left h-12 w-12 mx-1 rounded-full fill-current text-white text-xl fa-brands fa-dribbble',
      tooltip: 'Login with Dribble',
      href: 'https://api.controlecitoyen.com/oauth/dribble'
    }
  ]


</script>
<!-- After Script tag, we configure head and html tag -->
<!--
-->
<svelte:window lang="en" data-theme="elections_legislatives_theme" />
<svelte:head>
	<title>🌼 The Election control Experiment 🌼</title>
  <meta charset="UTF-8" />
	<meta name="robots" content="noindex nofollow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.ico" />
	<html lang="en" data-theme="elections_legislatives_theme" />
  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
  <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
</svelte:head>


<DaisyMainNavBar additionalProfileMenus={electionCitizenControlProfileMenus} additionalLateralMenus={electionCitizenControlLateralMenus} additionalLoginMenus={additionalLoginMenus} menuTitle="The Citizen's Election Control Platform" />


<main >

<div class="block mx-auto">
<img src={bigLogo} alt="Svelte Logo" class="mx-auto" />
<h1>Bienvenue!</h1>

<Counter />
<p>
  Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
  apps.
</p>

<p>
  Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
  the officially supported framework, also powered by Vite!
</p>
</div>

<div class="block mx-auto w-full">


  <DaisyCountDown days="15" hours="10" minutes="24" seconds="53" />


</div>

<div class="flex mx-auto">


  <DaisyCarousel />


</div>

<div class="block">
  <h1 class="bg-cyan-200">
  Github Activity Items :
  </h1>

  <ul class="text-zinc-500 mx-auto">
    <li class="text-zinc-500"><h3 class="text-zinc-500">This will be an undefined Github Activity Item : <GithubActivityItem /></li>
  {#each githubActivityItems as item(item.githubProfileName)}
    <GithubActivityItem  githubProfileName={item.githubProfileName}/>
  {/each}
  </ul>



</div>
<div class="flex">
  <div class="bg-green-100 shadow-lg max-w-lg mx-auto mt-4 content-center justify-center h-200  m-5 p-3 rounded ">
  <img src="{loginImage}" alt="Pokus Login Image" class="w-300 h-100 "/>
  <h1 class="w-full">Example Tailwind CSS (almost) Responsive form </h1>
    <div class="mb-4 text-orange-500 text-xl mt-2 mb-2 py-5">
      <label for="username">Username (email or user alias): </label>
      <input type="text" id="username" name="username" class="border border-gray-300 shadow-inner mb-5 mt-5 mx-auto py-2 px-10 w-full rounded hover:bg-blue-100" />
    </div>

    <div class="text-orange-500 text-xl m-5 p-3 rounded">
      <label for="password">Password: </label>
      <input type="password" id="password" name="password" class="border border-gray-300 shadow-inner mb-5 mt-5 mx-auto py-2 px-10 w-full rounded hover:bg-blue-100" />
    </div>

    <p>(many <a class="text-blue-500" href="https://www.youtube.com/watch?v=D6-g6JgiUIs">thx to @Grafikart ;) !</a> ) </p>

  </div>

</div>
<div class="flex">
<div class="bg-green-100 w-full m-5 p-3 rounded justify-center"  data-theme="forest">
  <img src="{loginImage}" alt="Pokus Logo Image for Daisy UI  Example form" class="mx-auto w-full h-400 "/>
  <h1>Daisy UI components</h1>
  <div class="example form made with daisy ui p-5">
    <button class="p-3 mt-3 btn">Button made with daisy ui</button>
    <button class="p-3 mt-3 btn btn-primary">Button</button>
    <button class="p-3 mt-3 btn btn-primary w-64 rounded-full">Button primary</button>
    <button class="p-3 mt-3 btn btn-secondary w-64 rounded-full">Button secondary</button>
    <button class="p-3 mt-3 btn btn-warning w-64 rounded-full"> Button warning</button>
    <button class="p-3 mt-3 btn btn-accent btn-outline">Daisy UI Button using accent n outline</button>
    <button class="btn rounded-full">One</button>
    <button class="btn rounded-none px-16">Two</button>
    <hr class="m-5" />

    <article class="prose prose-slate"><!-- the prose css class comes from tailwind typography plugin -->
      <h1 class="justify-center">Garlic bread with cheese: What the science tells us</h1>
      <p>This HTML Article uses the prose css class, which comes from tailwind typography plugin</p>
      <p>
        Ok, let's try now HTML list elements.
      </p>
      <p>
        here is a simple list, inside an HTML paragraph <code><p></p></code> :
      </p>
        <ul class="text-justify">
          <li>first list item</li>
          <li>second list item</li>
          <li>third list item</li>
          <li>fourth list item</li>
        </ul>
        <p>
          here is a nested list, inside an HTML paragraph <code><p></p></code> :
        </p>
          <ul class="text-justify">
            <li>first higher level list item</li>
            <li>second higher level list item</li>
            <li>third higher level list item</li>
            <li>fourth higher level list item</li>
            <ul class="text-justify">
              <li>first nested list item</li>
              <li>second nested list item</li>
              <li>third nested list item</li>
              <li>fourth nested list item</li>
              <ul class="text-justify">
                <li>first nested-in-nested list item</li>
                <li>second nested-in-nested list item</li>
                <li>third nested-in-nested list item</li>
                <li>fourth nested-in-nested list item</li>
              </ul>
            </ul>
          </ul>

      <p></p>
      <p></p>
      <p>For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.</p>
      <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
      <!-- ... -->
    </article>


    <div class="w-2/3 h-screen mx-auto flex items-center">
  		<div class="bg-white p-6 rounded-lg">
  			<div class="flex my-2">
  				<i style="background-color: #3B5998;"
                  class="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-white text-2xl fa-facebook-f"></i>
  				<i style="background-color:#dd4b39"
                  class="flex items-center justify-center h-12 w-12 mx-1 fas fill-current text-white text-2xl fa-envelope"></i>
  				<i style="background-color:#125688;"
                  class="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-white text-2xl fa-instagram"></i>
  				<i style="background-color:#55ACEE;"
                  class="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-white text-2xl fa-twitter"></i>
  			</div>

  			<div class="flex my-2">
  				<i style="background-color: #3B5998;"
                  class="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-facebook-f"></i>
  				<i style="background-color:#dd4b39"
                  class="flex items-center justify-center h-12 w-12 mx-1 rounded-full fas fill-current text-white text-xl fa-envelope"></i>
  				<i style="background-color:#125688;"
                  class="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-instagram"></i>
  				<i style="background-color:#55ACEE;"
                  class="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-twitter"></i>
  			</div>
  		</div>
  	</div>




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
