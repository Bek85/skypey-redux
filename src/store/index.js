import { createStore } from 'redux';
import { contacts } from '../static-data';
import reducer from '../reducers';

const store = createStore(reducer, { contacts });

export default store;
