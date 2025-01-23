import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import NavBar from '../components/NavBar';
import { fetchSecretFiles } from '../redux/actions-files';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../redux/actions-files', () => ({
  fetchSecretFiles: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));


describe('NavBar', () => {
  let store;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    store = mockStore({});
    useDispatch.mockReturnValue(mockDispatch);
    fetchSecretFiles.mockImplementation(() => ({ type: 'FETCH_SECRET_FILES' }));
  });

  it('Render NavBar', async () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
  
    expect(screen.getByText('React Test App')).toBeInTheDocument();
  });
  
  it('Dispatch fetchSecretFiles when search button is clicked', () => {
    const setSearch = jest.fn()
    const search = 'test'

    render(
      <Provider store={store}>
        <NavBar setSearch={setSearch} search={search} />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: search },
    });

    fireEvent.submit(screen.getByRole('button', { name: /search/i }));

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(fetchSecretFiles(search));
  })
})