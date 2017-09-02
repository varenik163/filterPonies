import {FILTER_PONIES} from '../constants'

export default (state = {}, action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_PONIES:
            return {...payload}
        default:
            return state
    }
}