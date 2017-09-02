import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import products from './products'
import productsTypes from './productsTypes'
import productsColors from './productsColors'
import poniesFilter from './poniesFilter'

export default combineReducers({
    router: routerReducer,
    products,
    productsColors,
    productsTypes,
    poniesFilter
})