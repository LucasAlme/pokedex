import { createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage
}

const INITIAL_STATE = {
    isLogin: false,
    token: '',
   
}

function global(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_ISLOGIN':
            return { ...state, isLogin: action.value }
            break;
        case 'UPDATE_TOKEN':
            return { ...state, token: action.value }
            break;
        default:
            return state;
            break;
    }
}

const persistedReducer = persistReducer(persistConfig, global);


const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };