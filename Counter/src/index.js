import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Counter from './components/Counter';
import counter from './reducers/counter';

const rootEl = document.getElementById('app');
const store = createStore(counter);
function render(){
  ReactDOM.render(
    <Counter
        value = {store.getState()}
        onIncrement = {() => store.dispatch({type: 'INCREMENT'}) }
        onDecrement = {() => store.dispatch({type: 'DECREMENT'}) }
    />, rootEl);
}

render();

store.subscribe(render);
