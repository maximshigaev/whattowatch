import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { List, Map } from 'immutable';

import { FilmsListContainer } from './FilmsListContainer';
import { filmsActions } from 'domains/films/filmsActions';

Enzyme.configure({adapter: new Adapter()});

describe(`FilmsListContainer:`, () => {
    it(`should dispatch fetchFilmsRequest action after mounting`, () => {
        const mockStore = configureStore();
        const store = mockStore({ films: Map({
            films: List(),
            isFilmsFetching: true,
            filmsError: null
        }) });

        mount(
            <Provider store={store}>
                <FilmsListContainer />
            </Provider>        
        );

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(filmsActions.fetchFilmsRequest());
    });
});