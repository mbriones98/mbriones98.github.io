<script lang="ts">
  type ContactLink = {
    label: string;
    value: string;
    href: string;
  };

  const links: ContactLink[] = [
    {
      label: 'Email',
      value: 'tallmatt5198@gmail.com',
      href: 'mailto:tallmatt5198@gmail.com',
    },
    {
      label: 'GitHub',
      value: 'github.com/MattBriones',
      href: 'https://github.com/MattBriones',
    },
  ];
</script>

<section class="section section--contact">
  <h2 class="contact__heading">Get in touch</h2>
  <p class="contact__intro">
    I'm always open to interesting conversations. Reach out through any of the channels below.
  </p>

  <ul class="contact__list">
    {#each links as link}
      <li class="contact__item">
        <span class="contact__label">{link.label}</span>
        <a class="contact__value" href={link.href}>{link.value} ↗</a>
      </li>
    {/each}
  </ul>
</section>

<style>
  .section--contact {
    animation: fadeIn var(--transition-med) both;
    padding: var(--space-xl) var(--space-lg);
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .contact__heading {
    margin-bottom: var(--space-lg);
  }

  .contact__intro {
    color: #c8c4be;
    font-size: 1.125rem;
    margin-bottom: var(--space-xl);
  }

  .contact__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .contact__item {
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-lg) 0;
    gap: var(--space-lg);
  }

  .contact__item:last-child {
    border-bottom: 1px solid var(--border);
  }

  .contact__label {
    color: var(--muted);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .contact__value {
    color: var(--fg);
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-weight: 700;
    letter-spacing: -0.01em;
    transition: color var(--transition-fast);
  }

  .contact__value:hover {
    color: var(--accent);
  }
</style>
