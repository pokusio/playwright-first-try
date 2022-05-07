<script>
	export let additionalLoginMenus;
	export let additionalProfileMenus;
	export let additionalLateralMenus;
	export let menuTitle;

	import logo from './assets/svelte.png'
  import loginImage from './assets/almos-bechtold-AJ_Mou1FUS8-unsplash.jpg'

  import LoginForm from './components/login-form.svelte'



	// ---
	// toggle user profile menu
  // pokus profile context menu
  // style="display: none;" on:click={toggleUserProfileMenu}>
	// ---



 // ------------------------------------------------------------------------------------------------------ //
 // ------------------------------------------------------------------------------------------------------ //
 // Create functions for toggle [user profile menu] using the [display] css variable value
 // ------------------------------------------------------------------------------------------------------ //
 // ------------------------------------------------------------------------------------------------------ //

 /**
	* => if and only if seconds are not 00, Sets the value of variable 'display' to decremented value, if and only if seconds are strictly greater than 0 <=> if and only if seconds are not exactly 0
	* => if and only if seconds are exactly 00, then :
	*       1./ Set the value of property 'display' value to `block`
	*       2./ Decrement Minutes by invoking decrementMinutes
	*/
 function toggleUserProfileMenu () {
	 console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)
	 console.log(` << << << << <<  [ function toggleUserProfileMenu() ] >> >> >> >> >>  `)
	 console.log(` << << << << << << [ =========================== ] >> >> >> >> >> >>  `)

	 // Get the HTML element for the [User Profile Menu]
	 var toggle_user_profile_menu_elmt = document.querySelector('.pokus.profile.context.menu');

	 // ---
	 // Get the value, to check it is an integer between zero and 59
	 var toggle_user_profile_menu_elmt_cs = getComputedStyle(toggle_user_profile_menu_elmt);
	 var displayValueAsString = toggle_user_profile_menu_elmt_cs.getPropertyValue('display');
	 // Log the value of the display variable
	 console.log(`[function toggleUserProfileMenu()] >> Voici l'élément [seconds] sélectionné, dont le [display] vaut [${displayValueAsString}] : ` + JSON.stringify(toggle_user_profile_menu_elmt, " ", 4 ))

	 if (isNatural(displayValueAsString)) {
		 var secondsValueAsInt = parseInt(displayValueAsString)
		 if (secondsValueAsInt != 0) {
			 toggle_user_profile_menu_elmt.style.setProperty('display', `none`);
		 } else {
			 toggle_user_profile_menu_elmt.style.setProperty('display', `block`);
		 }
	 }
	 console.log(`[function toggleUserProfileMenu()] >> AFTER DECREMENTING SECONDS, INSPECTING NEW COUNTDOWN : `)
	 inspectCountdown()
}






</script>








<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -- - -- RESPONSIVE MENU [ - 2 - ] -- -- -- - -->
<!-- -- - -- - - - [ LOGGED OUT ]  - - -- -- -- - -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->





<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->




<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-10 w-10 sm:w-8 lg:w-10" src="/src/assets/logos/notop/ccd.logo.notop.svg" alt="{menuTitle}">
          <img class="hidden lg:block h-10 w-10 sm:w-8 lg:w-10" src="/src/assets/logos/notop/ccd.logo.notop.svg" alt="{menuTitle}">
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>





						<!-- Get started button  -->
						<a class="btn">Get started</a>

						<!-- text search field -->
						<input type="text" placeholder="Search" class="input input-bordered" />
						<button class="btn btn-ghost btn-circle">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
						</button>









          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">






				<!-- notifications cart -->
				<div class="dropdown dropdown-end">

					<label tabindex="0" class="btn btn-ghost btn-circle">
						<div class="indicator">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
							<span class="badge badge-xs badge-primary indicator-item"></span>
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

        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button type="button" class="bg-gray-800 flex text-sm w-8 sm:w-6 lg:w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-10 w-10 sm:w-8 lg:w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div class="pokus profile context menu origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" style="display: none;" on:click={toggleUserProfileMenu}>
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>


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
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>


			<!-- Get started button  -->
			<a class="btn block ">Get started</a>


			<a href="#" class="cursor-default pointer-events-none block">
						<!-- text search field -->
						<input type="text" placeholder="Search" class="input input-bordered" />
						<button class="btn btn-ghost btn-circle  cursor-pointer pointer-events-auto block">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
						</button>
			</a>

    </div>
  </div>
</nav>














<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -- - -- RESPONSIVE MENU [ - 2 - ] -- -- -- - -->
<!-- -- - -- - - - [ LOGGED IN ] - - - -- -- -- - -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->
<!-- -------------------------------------------- -->


<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-10 w-10 sm:w-8 lg:w-10" src="/src/assets/logos/notop/ccd.logo.notop.svg" alt="{menuTitle}">
          <img class="hidden lg:block h-10 w-10 sm:w-8 lg:w-10" src="/src/assets/logos/notop/ccd.logo.notop.svg" alt="{menuTitle}">
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>


						<!-- Get started button  -->
						<a class="btn">Get started</a>

						<!-- text search field -->
						<input type="text" placeholder="Search" class="input input-bordered" />
						<button class="btn btn-ghost btn-circle">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
						</button>

          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


								<!-- notifications cart -->
								<div class="dropdown dropdown-end">

						      <label tabindex="0" class="btn btn-ghost btn-circle">
										<div class="indicator">
							        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
							        <span class="badge badge-xs badge-primary indicator-item"></span>
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





        <!-- Profile dropdown -->
        <div class="ml-3 relative">
          <div>
            <button type="button" class="bg-gray-800 flex text-sm w-8 sm:w-6 lg:w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-10 w-10 sm:w-8 lg:w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div class="pokus profile context menu origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" style="display: none;" on:click={toggleUserProfileMenu}>
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
						{#each additionalProfileMenus as menu}
							<a href="{menu.href}" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-{menu.index}">{menu.title}</a>
						{/each}
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>


			<!-- Get started button  -->
			<a class="btn block ">Get started</a>


			<a href="#" class="cursor-default pointer-events-none block">
						<!-- text search field -->
						<input type="text" placeholder="Search" class="input input-bordered" />
						<button class="btn btn-ghost btn-circle  cursor-pointer pointer-events-auto block">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
						</button>
			</a>





    </div>
  </div>
</nav>
