import authReduser from "./authReduser";
import { reducer as formReducer} from "redux-form";
import streamReduser from "./streamReduser";

const { combineReducers } = require("redux");


export default combineReducers({
    auth: authReduser,
    form: formReducer,
    streams: streamReduser
});