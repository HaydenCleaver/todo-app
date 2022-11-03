import '@testing-library/jest-dom';
import {screen, render} from '@testing-library/react';
import Settings, {SettingsContext} from './Settings';

describe('Settings Context', () => {
  test('initializes global state', () => {
    render(
      <Settings>
        <SettingsContext.Consumer>
          {
            ({hideStatus, itemNumber, sortField}) => {
              <ul>
                <li data-testid='hide-status'>{hideStatus.toString()}</li>
                <li data-testid='item-number'>{itemNumber}</li>
                <li data-testid='sort-field'>{sortField}</li>
              </ul>
            }
          }
        </SettingsContext.Consumer>
      </Settings>
    )
    let hideStatusList = screen.getByTestId('hide-status');
    let itemNumberList = screen.getByTestId('item-number');
    let sortFieldList = screen.getByTestId('sort-field');

    expect(hideStatusList).toHaveTextContent('false');
    expect(itemNumberList).toHaveTextContent('4');
    expect(sortFieldList).toHaveTextContent('difficulty')
  })
})