<script>
	import { enhance } from '$app/forms';
	export let data;
	console.log(data);

	let form = {
		name: '',
		email: '',
		message: ''
	};
</script>

<svelte:head>
	<title>Contact | Tim Heidler</title>
</svelte:head>

<div class="grid place-items-center">
	<form id="contact" method="POST" use:enhance name="Contact Form" class="text-center sm:w-2/5">
		<h1 class="text-4xl font-bold">Contact</h1>
		<p>or contact via mail at <a href="mailto:tim@heidler.site" class="underline text-accent">tim@heidler.site</a></p>
		<input class="hidden" name="hpfield" />
		<p class="py-1">
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Name"
				class="input input-bordered w-full"
				bind:value={form.name}
				disabled
			/>
		</p>
		<p class="py-1">
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Email"
				class="input input-bordered w-full"
				bind:value={form.email}
				disabled
			/>
		</p>
		<p class="py-1">
			<textarea
				name="message"
				id="message"
				placeholder="Your Message"
				class="textarea textarea-bordered w-full textarea-lg px-4 pt-1 h-96"
				bind:value={form.message}
				disabled
			/>
		</p>
		<span class="text-red-700">Form at the moment not available, please use the email provided above</span>
		<p>
			<button class="btn btn-primary my-1" disabled>Submit</button>
		</p>
	</form>
</div>

