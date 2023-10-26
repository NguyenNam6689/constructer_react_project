//* LIBRARY
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

// Tạo store chứa reducer mà trong đó đa số là của rootReducer và một số là của ...middleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
// Dùng để giúp biến store xuất ra ngoài, lúc đó ở các chỗ khác có thể import dô mà dùng
export default store;
