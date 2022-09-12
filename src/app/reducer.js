

export const partInfoRow = (state, action)=>{
    switch(action.type){
        case "ADD_TO_ROW":
            return [...state, action.payload];
        default:
            return [];
    }
}