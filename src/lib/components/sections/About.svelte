<script lang="ts">
  const skills = ['TypeScript', 'SvelteKit', 'React', 'Node.js', 'Python', 'CSS'];
</script>

<section class="section section--about">
  <div class="about__hero">
    <p class="about__eyebrow">Hello, I'm</p>
    <h1 class="about__name">Matt Briones</h1>
    <p class="about__tagline">I build things for the web.</p>
  </div>

  <div class="about__body">
    <p>
      I'm a software engineer who cares about clean code, good design, and building
      products that actually work. I'm interested in the intersection of engineering
      and user experience.
    </p>
  </div>

  <div class="about__skills">
    <h3 class="about__skills-heading">Things I work with</h3>
    <ul class="about__skills-list">
      {#each skills as skill}
        <li class="about__skill-tag">{skill}</li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .section--about {
    animation: fadeIn var(--transition-med) both;
    padding: var(--space-xl) var(--space-lg);
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .about__eyebrow {
    color: var(--muted);
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: var(--space-sm);
    text-transform: uppercase;
  }

  .about__name {
    color: var(--fg);
    margin-bottom: var(--space-md);
  }

  .about__tagline {
    color: var(--accent);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 700;
    max-width: none;
    margin-bottom: var(--space-xl);
  }

  .about__body {
    margin-bottom: var(--space-xl);
    font-size: 1.125rem;
    color: #c8c4be;
  }

  .about__skills-heading {
    color: var(--muted);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: var(--space-md);
    text-transform: uppercase;
  }

  .about__skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    list-style: none;
  }

  .about__skill-tag {
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: 2px;
    color: var(--fg);
    font-size: 0.875rem;
    font-weight: 600;
    padding: var(--space-xs) var(--space-md);
    transition: border-color var(--transition-fast);
  }

  .about__skill-tag:hover {
    border-color: var(--accent);
  }
</style>
