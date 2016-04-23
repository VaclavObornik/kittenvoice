/**
 * Created by Václav on 23.04.2016.
 */

import { createStore } from 'redux';

function appStateReducer (state = {}) {
    return Object.assign({}, state);
}

const store = createStore(appStateReducer);

export default store;

