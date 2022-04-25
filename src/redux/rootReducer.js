// import {combineReducers, createStore} from 'redux';
import {combineReducers, createStore} from 'redux' ;
import {BaiTapDatVeReducer} from './BaiTapDatVeReducer'

// store tổng ứng dụng
const rootReducer = combineReducers ({
    BaiTapDatVeReducer // state bai tap dat ve
})

// const rootReducer = combineReducers ({
//     // các state ứng dụng đặt ở đây
//     gioHangState:gioHangReducer, 
//     // nhiều state
//     XucXacReducer:XucXacReducer


// })
export const store  = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



