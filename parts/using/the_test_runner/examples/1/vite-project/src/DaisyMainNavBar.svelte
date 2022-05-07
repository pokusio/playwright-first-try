<script>
	export let additionalLoginMenus;
	export let additionalProfileMenus;
	export let additionalLateralMenus;
	export let menuTitle;

	import logo from './assets/svelte.png'
  import loginImage from './assets/almos-bechtold-AJ_Mou1FUS8-unsplash.jpg'

  import LoginForm from './components/login-form.svelte'
</script>

<div class="navbar bg-base-100" data-theme="cupcake">
  <div class="flex-1">
		<img src={logo} alt="Svelte Logo" class="h-16 w-16"/>
    <a class="btn btn-ghost normal-case text-xl">{menuTitle}</a>
  </div>
  <div class="flex-none gap-2">

	  <!-- text search field -->
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>

    <!-- notifications -->
		<div class="navbar-end">
	    <button class="btn btn-ghost btn-circle">
	      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
	    </button>
	    <button class="btn btn-ghost btn-circle">
	      <div class="indicator">
	        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
	        <span class="badge badge-xs badge-primary indicator-item"></span>
	      </div>
	    </button>
	  </div>

		<!-- shopping cart -->
		<div class="dropdown dropdown-end">

      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </label>

      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>

    </div>

		<!-- User's profile menus -->
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>


				{#each additionalProfileMenus as menu}
					<li><a href="{menu.href}">{menu.title}</a></li>
				{/each}

        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>

  </div>
</div>









































<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- - -- -- -- - MENU LOGGED OUT   -- -- -- -- - -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->





<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
				{#each additionalLateralMenus as menu}
					<li class="font-size-2 p-1 mb-2"><a href="{menu.href}">{menu.title}</a></li>
				{/each}
				<a class="btn">Get started</a>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
	  <img src={logo} alt="Svelte Logo" class="h-16 w-16"/>
    <a class="btn btn-ghost normal-case text-xl">{menuTitle}</a>
  </div>

  <div class="navbar-end">

	<div class="navbar-end">
		<a class="btn">Get started</a>
	</div>
		<!-- text search field -->
    <div class="form-control-end">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
		<button class="btn btn-ghost btn-circle">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
		</button>

		<!-- User's profile menus -->
    <div class="dropdown dropdown-end">


		<div class="tooltip" data-tip="Login!">
		  <a tabindex="0" class="btn btn-primary github p-1 text-2xl"><span class="justify-right p-2">Login</span></a>
		</div>
			<!--
			<a tabindex="0" class="btn btn-primary github p-1 justify-left"><i class="fa-solid fa-user justify-left text-2xl"></i></a>
			  <a tabindex="0" class="btn btn-primary github p-1"><i class="fa-solid fa-user justify-left text-2xl"></i><span class="justify-right p-2">Login</span></a>
			-->
			<!--
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
			-->


      <ul tabindex="0" class="mt-1 p-1 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

				<li class="border-dotted border-1 border-white-600 text-white italic">
					<a class="justify-between">
					  With your email:
						<!-- <span class="badge">vault</span> -->
					</a>
				</li>

			  <LoginForm />

				<li class="text-white italic">
          <a class="justify-between">
					  Or with socials:
            <span class="badge not-italic">New</span>
          </a>
        </li>

				{#each additionalLoginMenus as menu}
					<li class="mt-0">
						<div class="tooltip" data-tip="{menu.tooltip}">
							<a href="{menu.href}" class="btn btn-secondary btn-accent btn-outline github w-full" alt="Login with {menu.title}">
							<i class='{menu.iconClass} text-2xl p-3'></i>
							</a>
	          </div>
					</li>
				{/each}


      </ul>
    </div>


  </div>

</div>






<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- - -- -- -- - MENU LOGGED IN -- -- -- -- -- - -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->





<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
				{#each additionalLateralMenus as menu}
					<li class="font-size-2 p-1 mb-2"><a href="{menu.href}">{menu.title}</a></li>
				{/each}
				<a class="btn">Get started</a>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
	  <img src={logo} alt="Svelte Logo" class="h-16 w-16"/>
    <a class="btn btn-ghost normal-case text-xl">{menuTitle}</a>
  </div>

  <div class="navbar-end">

	<div class="navbar-end">
		<a class="btn">Get started</a>
	</div>
		<!-- text search field -->
    <div class="form-control-end">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
		<button class="btn btn-ghost btn-circle">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
		</button>


		<!-- shopping cart -->
		<div class="dropdown dropdown-end">

      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </label>


      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>

    </div>


		<button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>




		<!-- User's profile menus -->
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>


				{#each additionalProfileMenus as menu}
					<li><a href="{menu.href}">{menu.title}</a></li>
				{/each}

        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>


  </div>

</div>
