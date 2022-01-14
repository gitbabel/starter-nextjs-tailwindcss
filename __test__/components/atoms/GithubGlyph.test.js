import { render } from '@testing-library/react';
import GithubGlyph from '../../../components/atoms/GithubGlyph';

describe('GithubGlyph', () => {
  it('renders an svg', () => {
    render(<GithubGlyph />);

    const svg = document.querySelector('svg');

    expect(svg).toBeInTheDocument();
  });
});
