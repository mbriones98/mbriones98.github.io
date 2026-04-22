<script lang="ts">
  type Tab = { id: string; label: string };

  const tabs: Tab[] = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  let { activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void } = $props();
</script>

<nav class="tab-nav">
  <div class="tab-nav__inner">
    {#each tabs as tab}
      <button
        class="tab-nav__item"
        class:tab-nav__item--active={activeTab === tab.id}
        onclick={() => onTabChange(tab.id)}
      >
        {tab.label}
      </button>
    {/each}
  </div>
</nav>

<style>
  .tab-nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: var(--bg);
    border-bottom: 1px solid var(--border);
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .tab-nav__inner {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--space-lg);
    display: flex;
    gap: var(--space-lg);
  }

  .tab-nav__item {
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    color: var(--muted);
    cursor: pointer;
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: var(--space-sm) 0;
    text-transform: uppercase;
    transition: color var(--transition-fast), border-color var(--transition-fast);
    margin-bottom: -1px;
  }

  .tab-nav__item:hover {
    color: var(--fg);
  }

  .tab-nav__item--active {
    border-bottom-color: var(--accent);
    color: var(--fg);
  }
</style>
