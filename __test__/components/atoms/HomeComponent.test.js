import { render, screen } from '@testing-library/react';
import Home from '../../../pages/index';

describe('Home', () => {
  it('renders an img', () => {
    render(<Home />);

    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
  });
});
