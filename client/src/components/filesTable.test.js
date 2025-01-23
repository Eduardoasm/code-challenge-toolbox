import React from 'react'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import FilesTable from './FilesTable';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Files Table', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      secretFiles: [],
    });
  });

  it('Show the spinner when no have data', async () => {
    render(
      <Provider store={store}>
        <FilesTable />
      </Provider>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

 it('render table when data exists', () => {
    const mockData = [{
      file: 'test.txt',
      lines: [
        { text: 'Hello', number: 1, hex: '0x1' },
      ]
    }];

    store = mockStore({
      secretFiles: mockData
    });

    render(
      <Provider store={store}>
        <FilesTable />
      </Provider>
    );

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByText('File Name')).toBeInTheDocument();
    expect(screen.getByText('test.txt')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('0x1')).toBeInTheDocument();
  });
  
  it('transform and display multiple rows correctly', () => {
    const mockData = [{
      file: 'test.txt',
      lines: [
        { text: 'Line1', number: 1, hex: '0x1' },
        { text: 'Line2', number: 2, hex: '0x2' }
      ]
    }];
  
    store = mockStore({
      secretFiles: mockData
    });
  
    render(
      <Provider store={store}>
        <FilesTable />
      </Provider>
    );
  
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3); // header + 2 data rows
    expect(screen.getAllByText('test.txt')).toHaveLength(2);
  });
  
});