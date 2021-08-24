import Login from '../Login';
import { render, screen } from '@testing-library/react';

// 테스트 가능한 코드 => 관심사의 분리
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {
 it('renders tasks', () => {
  const { container } = render(<Login />);

 });
});