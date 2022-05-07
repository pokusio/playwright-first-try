<script>
	import DangerAlert from './danger-alert.svelte';

	let showAlert = false;
	$: toggleAlert = () => (showAlert = !showAlert);
</script>
{#if showAlert}
		<DangerAlert />
	{/if}
<div class="card shadow-2xl bg-base-100 mt-5">

	<div class="card-body">
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label" for="email">
				<span class="label-text hover:text-accent hover:font-extrabold">Email</span>
			</label>
			<input type="text" id="email" name="email" placeholder="email" class="input input-bordered" />
		</div>
		<div class="form-control">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label" for="password">
				<span class="label-text hover:text-accent hover:font-extrabold">Password</span>
			</label>
			<input type="password"  id="password" name="password"  placeholder="password" class="input input-bordered" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label class="label">
				<a href="/" class="label-text-alt">Forgot password?</a>
			</label>
		</div>
		<div class="form-control mt-6 text-white-500">
			<input type="button" value="Login" class="btn btn-outline btn-accent" on:click={toggleAlert} />
		</div>
    <div class="form-control mt-6 text-white-500">
      <input type="button" value="Register" class="btn btn-outline btn-accent" on:click={toggleAlert} />
    </div>
	</div>
</div>
