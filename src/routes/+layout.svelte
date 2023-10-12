<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>Tim Heidler</title>
</svelte:head>

<Header />
<div class="min-h-screen">
	<slot />
</div>
<Footer />
