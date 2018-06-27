export function counterIncrement(count) {
    return {
      type: 'INCREMENT_COUNTER',
      payload: count
    };
}

export function counterDecrement(count) {
    return {
        type: 'DECREMENT_COUNTER',
        payload: count
    }
}