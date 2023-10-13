<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>Tim Heidler</title>
	<meta
		name="description"
		content="This is my blog! I use this space to document my adventures in development, sharing how I’ve overcome issues
	I’ve run into, useful resources, and more."
	/>
</svelte:head>

<Header />
<div class="min-h-screen">
	<slot />
</div>
<Footer />
