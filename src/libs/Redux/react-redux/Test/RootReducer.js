//* LIBRARY
import { combineReducers } from 'redux';

//* REACT-REDUX
import todoReducer from './Reducer';

const rootReducer = combineReducers({
  data: todoReducer,
});
export default rootReducer;
/* + combineReducers là một hàm từ thư viện Redux, dùng để kết hợp các reducer lại với nhau.
   + Vì mỗi state sẽ được một reducer riêng biệt quản lý nên ta phải combine các
   reducer riêng biệt đó lại vs nhau thành một reducer chính để đưa vào createStore
   + Nó nhận vào một object với key là state,value là reducer chịu trách nhiệm quản lý state đó */
