import { TIPOS } from "../data/Tipos";
import { SELECT_TIPO } from "../actions/Tipo.action";

const initialState = {
    tipos: TIPOS,
    selected: null
};

const TipoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TIPO:
            const IndexTipos = state.tipos.findIndex(c => c.id === action.tipoID);
            if (IndexTipos === -1) return state;
            return {...state, selected: state.tipos[IndexTipos]};
        default:
            return state 
    }
}

export default TipoReducer;
