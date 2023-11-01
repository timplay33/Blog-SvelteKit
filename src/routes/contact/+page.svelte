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
		<input class="hidden" name="hpfield" />
		<p class="py-1">
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Name"
				class="input input-bordered w-full"
				bind:value={form.name}
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
			/>
		</p>
		<p class="py-1">
			<textarea
				name="message"
				id="message"
				placeholder="Your Message"
				class="textarea textarea-bordered w-full textarea-lg px-4 pt-1 h-96"
				bind:value={form.message}
			/>
		</p>
		<p>
			<button class="btn btn-primary my-1">Submit</button>
		</p>
	</form>
</div>

