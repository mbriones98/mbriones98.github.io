import type { Component } from 'svelte';
import { Mail } from '@lucide/svelte';
import Github from '$lib/assets/Github.svelte';
import Linkedin from '$lib/assets/Linkedin.svelte';

export type ContactType = 'email' | 'linkedin' | 'github';

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: Component<any>;
};

export const contactLinks: Record<ContactType, ContactLink> = {
  email: {
    label: 'Email',
    value: 'mdbriones98@gmail.com',
    href: 'mailto:mdbriones98@gmail.com',
    icon: Mail,
  },
  linkedin: {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mbriones98',
    href: 'https://www.linkedin.com/in/matthew-briones-sde/',
    icon: Linkedin,
  },
  github: {
    label: 'GitHub',
    value: 'github.com/mbriones98',
    href: 'https://github.com/mbriones98',
    icon: Github,
  },
};
