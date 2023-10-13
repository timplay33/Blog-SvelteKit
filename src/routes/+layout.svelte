<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />
<div class="min-h-screen">
	<slot />
</div>
<Footer />
