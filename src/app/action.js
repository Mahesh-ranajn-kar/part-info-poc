

export const addToRow = (oneRow)=>{
    return {
        type: "ADD_TO_ROW",
        payload: oneRow
    }
}

export const removeFromRow = (key)=>{
    return {
        type: "REMOVE_FROM_ROW",
        payload: key
    }
}