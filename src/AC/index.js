import {LOAD_PRODUCTS, LOAD_PRODUCTS_COLORS, LOAD_PRODUCTS_TYPES, FILTER_PONIES } from '../constants'

export function loadProducts() {
    return {
        type: LOAD_PRODUCTS
    }
}

export function loadProductsColors() {
    return {
        type: LOAD_PRODUCTS_COLORS
    }
}

export function loadProductsTypes() {
    return {
        type: LOAD_PRODUCTS_TYPES
    }
}

export function applyPoniesPageFilter(type, color, is_new) {
    return {
        type: FILTER_PONIES,
        payload:{kind: type, color, is_new}
    }
}