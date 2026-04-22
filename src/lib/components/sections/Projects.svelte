<script lang="ts">
  type Project = {
    name: string;
    description: string;
    tags: string[];
    url?: string;
  };

  const projects: Project[] = [
    {
      name: 'Personal Site',
      description: 'This site. A single-page application built with SvelteKit, TypeScript, and plain CSS.',
      tags: ['SvelteKit', 'TypeScript', 'CSS'],
    },
    {
      name: 'Project Two',
      description: 'A placeholder for your next great project. Replace this with something real.',
      tags: ['React', 'Node.js'],
      url: '#',
    },
    {
      name: 'Project Three',
      description: 'Another placeholder. What have you built that you are proud of?',
      tags: ['Python', 'API'],
      url: '#',
    },
  ];
</script>

<section class="section section--projects">
  <h2 class="projects__heading">Projects</h2>
  <div class="projects__grid">
    {#each projects as project}
      <article class="project-card">
        <div class="project-card__header">
          <h3 class="project-card__name">
            {#if project.url}
              <a href={project.url}>{project.name}</a>
            {:else}
              {project.name}
            {/if}
          </h3>
          {#if project.url}
            <a class="project-card__link-icon" href={project.url} aria-label="View project">↗</a>
          {/if}
        </div>
        <p class="project-card__desc">{project.description}</p>
        <ul class="project-card__tags">
          {#each project.tags as tag}
            <li class="project-card__tag">{tag}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
</section>

<style>
  .section--projects {
    animation: fadeIn var(--transition-med) both;
    padding: var(--space-xl) var(--space-lg);
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .projects__heading {
    margin-bottom: var(--space-xl);
  }

  .projects__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--space-lg);
  }

  .project-card {
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: var(--space-lg);
    transition: border-color var(--transition-fast), transform var(--transition-fast);
  }

  .project-card:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .project-card__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
  }

  .project-card__name {
    font-size: 1.125rem;
  }

  .project-card__name a {
    color: var(--fg);
  }

  .project-card__name a:hover {
    color: var(--accent);
  }

  .project-card__link-icon {
    color: var(--muted);
    font-size: 1.25rem;
    line-height: 1;
    flex-shrink: 0;
    transition: color var(--transition-fast);
  }

  .project-card__link-icon:hover {
    color: var(--accent);
  }

  .project-card__desc {
    color: #c8c4be;
    font-size: 0.9rem;
    margin-bottom: var(--space-md);
  }

  .project-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    list-style: none;
  }

  .project-card__tag {
    background-color: var(--bg);
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--muted);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 2px var(--space-sm);
    text-transform: uppercase;
  }
</style>
