import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import Settings, {SettingsContext} from '../../Context/Settings/Settings';

describe('ToDo Component Tests', ()  => {
  test('render a header element as expected', () => {
    render(
      <Settings>
              <Header />
      </Settings>
    );

    let header = screen.getByTestId('todo-header');
    let h1 = screen.getByTestId('todo-h1');

    expect(header).toBeTruthy();
    expect(h1).toBeInTheDocument();
    expect(true).toBeTruthy();
  })
})
