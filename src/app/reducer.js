

export const partInfoRow = (state, action)=>{
    switch(action.type){
        case "ADD_TO_ROW":
            return [...state, action.payload];
        case "REMOVE_FROM_ROW":
            return state.filter((row)=>row.key !== action.payload + "");
        default:
            return [];
    }
}