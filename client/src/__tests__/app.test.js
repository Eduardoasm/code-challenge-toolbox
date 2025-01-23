import React from 'react'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import NavBar from '../components/NavBar';
import FilesTable from '../components/FilesTable';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Render App', () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({});
  });

  it('Render the NavBar and FilesTable', () => {
    render(
      <Provider store={store}>
        <NavBar />
        <FilesTable />
      </Provider>
    );
      
    expect(screen.getByText('React Test App')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  })
})