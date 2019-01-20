import * as types from "./actionTypes";

export function numberClick(number) {
    return {
        type: types.NUMBER_CLICK,
        number
    }

}

export function decimalClick() {
    return {
        type: types.DECIMAL_CLICK
    }
    
}

export function equalClick() {
    return {
        type: types.EQUAL_CLICK
    }
}

export function operatiorClick(operator) {
    return {
        type: types.OPERATOR_CLICK,
        operator
    }
}