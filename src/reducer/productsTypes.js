import {LOAD_PRODUCTS_TYPES} from '../constants'
import {PONIES_TYPES} from "../entities"

export default (state = null, action) => {
    const {type} = action

    switch (type) {
        case LOAD_PRODUCTS_TYPES:
            return PONIES_TYPES
        default:
            return state
    }
}