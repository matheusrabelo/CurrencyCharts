import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// initialState is important because we can use server-side rendering
function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            reduxImmutableStateInvariant())
        );
}

export default configureStore;
