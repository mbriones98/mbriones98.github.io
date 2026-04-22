<script lang="ts">
	import TabNav from '$lib/components/ui/TabNav.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';

	let activeTab = $state('about');
</script>

<TabNav {activeTab} onTabChange={(tab) => (activeTab = tab)} />

<main>
	{#if activeTab === 'about'}
		<About />
	{:else if activeTab === 'projects'}
		<Projects />
	{:else if activeTab === 'contact'}
		<Contact />
	{/if}
</main>

<style>
	main {
		min-height: calc(100vh - var(--nav-height));
	}
</style>
