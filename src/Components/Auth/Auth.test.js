import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import AuthProvider, { AuthContext } from '../../Context/Auth/Auth';
import Login from '../Login/Login';

describe('Auth Integration', () => {
  test('contains auth values', () => {
    render(
      <AuthProvider>
        <AuthContext>
          {
            ({isLoggedIn, user, error}) => (
              <>
                <p data-testid="isLoggedIn">{isLoggedIn.toString()}</p>
                <p data-testid="user">{typeof(user)}</p>
              </>
            )
          }
        </AuthContext>
      </AuthProvider>
    );

    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('false');
    expect(screen.getByTestId('user')).toHaveTextContent('object');
  })

  test('allows logins', () => {
    render(
      <AuthProvider>
        <AuthContext>
          {
            ({isLoggedIn, user}) => (
              <>
              <Login/>
                <p data-testid="isLoggedIn">{isLoggedIn.toString()}</p>
                <p data-testid="user">{`${user.capabilities}`}</p>
              </>
            )
          }
        </AuthContext>
      </AuthProvider>
    );
    
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const button = screen.getByText('Login');

    fireEvent.change(usernameInput, {target: {value: 'User'}});
    fireEvent.change(passwordInput, {target: {value: 'user'}});
    fireEvent.change(button);

    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('true');
    expect(screen.getByTestId('user')).toHaveTextContent('object');

    let authorized = screen.getByTestId('test-read');
    let notAuthorized = screen.getByTestId('test-delete');

    expect(authorized).toHaveTextContent('I am authorized to read!');

  })
})