<script>
	let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl text-base-content" href="/">Tim Heidler</a>
	</div>
	<div class="flex-none">
		{#if screenSize >= 1024}
			<ul class="menu menu-horizontal px-1">
				<li>
					<a class="text-lg" href="/">Home</a>
				</li>
				<li>
					<a class="text-lg" href="/blog/">Blog</a>
				</li>
				<li>
					<a class="text-lg" href="https://github.com/timplay33">GitHub</a>
				</li>
				<li>
					<a class="text-lg" href="/about/">About</a>
				</li>
			</ul>
		{:else}
			<div class="dropdown dropdown-end">
				<div class="w-10 rounded-full">
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16M4"
							/></svg
						>
					</label>
				</div>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a class="text-lg" href="/">Home</a>
					</li>
					<li>
						<a class="text-lg" href="/blog/">Blog</a>
					</li>
					<li>
						<a class="text-lg" href="https://github.com/timplay33">GitHub</a>
					</li>
					<li>
						<a class="text-lg" href="/about/">About</a>
					</li>
				</ul>
			</div>
		{/if}
	</div>
</div>
