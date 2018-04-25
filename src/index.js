import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
