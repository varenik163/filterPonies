import {LOAD_PRODUCTS} from '../constants'
import {PONIES} from "../entities"

export default (state = {}, action) => {
    const {type} = action

    switch (type) {
        case LOAD_PRODUCTS:
            return {
                data: PONIES
            }
        default:
            return state
    }
}