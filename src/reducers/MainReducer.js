import _ from "lodash";
import { ALLPOSTS , SHOWPOST , DELETEPOST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETEPOST:
    return  _.omit(state, action.payload);

    case ALLPOSTS:
     return _.mapKeys(action.payload.data, "id");

     case SHOWPOST:
     return { ...state, [action.payload.data.id]: action.payload.data };



   default:
     return state;
  }
}
