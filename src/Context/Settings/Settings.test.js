import '@testing-library/jest-dom';
import {screen, render, fireEvent} from '@testing-library/react';
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
  });

  test('changed state works as expected', () => {
    render(
      <Settings>
        <SettingsContext.Consumer>
          {
            ({hideStatus, itemNumber, sortField, setHideStatus, setItemNumber, setSortField}) => {
              <ul>
                <li data-testid='hide-status'>{hideStatus.toString()}</li>
                <li data-testid='item-number'>{itemNumber}</li>
                <li data-testid='sort-field'>{sortField}</li>
                <button onClick={() => setHideStatus(true)}>ONE</button>
                <button onClick={() => setItemNumber(true)}>TWO</button>
                <button onClick={() => setSortField(true)}>THREE</button>
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

    let buttonOne = screen.getByText('ONE')
    let buttonTwo = screen.getByText('TWO')
    let buttonThree = screen.getByText('THREE')
    fireEvent.click(buttonOne);
    fireEvent.click(buttonTwo);
    fireEvent.click(buttonThree);
  });

})