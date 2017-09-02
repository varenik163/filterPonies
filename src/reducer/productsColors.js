import {LOAD_PRODUCTS_COLORS} from '../constants'
import {PONIES_COLORS} from "../entities"

export default (state = null, action) => {
    const {type} = action

    switch (type) {
        case LOAD_PRODUCTS_COLORS:
            return PONIES_COLORS
        default:
            return state
    }
}