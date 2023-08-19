import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'


const feeling = (state = 0, action) => {
    if(action.type === 'FEELING'){
        return action.payload;
    }
    return state;
}

const understanding = (state = 0, action) => {
    if(action.type === 'UNDERSTANDING'){
        return action.payload
    }
    return state
}

const support = (state = 0, action) => {
    if(action.type === 'SUPPORT'){
        return action.payload
    }
    return state
}

const feedback  = (state = '', action) => {
    if(action.type === 'FEEDBACK'){
        return action.payload
    }
    return state
}


const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        feedback
    }),
    applyMiddleware(
        logger
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
