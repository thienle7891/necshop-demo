import { SET_TABLE, ADD_TABLE } from "./constants";
import storageTables from "./localStorage/storageTables";
import storageFoods from "./localStorage/storageFoods";
import storageDrinks from "./localStorage/storageDrinks";

const initState = {
    
    foods: storageFoods.getFoods(),
    drinks: storageDrinks.getDrinks(),
    table: '',
    tables: storageTables.getTables(),


};

function reducer (state, action) {
    switch (action.type) {
        case SET_TABLE:
            return {
                ...state,
                table: action.payload,
            }
        case ADD_TABLE:
            return {
                ...state,
                tables: [...state.tables, action.payload]
            }
        default:
            throw new Error("Invalid action")
    }
};

export { initState }
export default reducer;