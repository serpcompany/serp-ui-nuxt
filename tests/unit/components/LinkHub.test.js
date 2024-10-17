import { render, screen } from '@testing-library/vue';

import LinkHub from '@/components/LinkHub.vue';
import { describe, expect } from 'vitest';

describe('LinkHub', () => {
  it('renders a heading', () => {
    render(LinkHub, {
      props: {
        headline: 'Categories',
        tags: [
          { name: 'Tag1', slug: 'tag1' },
          { name: 'Tag2', slug: 'tag2' },
        ],
      },
    });

    const headline = screen.getByText(/categories/i);
    expect(headline).toBeInTheDocument();
  });
});
