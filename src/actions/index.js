import axios from "axios";

const URL = "https://reduxblog.herokuapp.com/api/posts"
const MainURL = `${URL}?key=st0539`;

export const ALLPOSTS = "allposts";
export const NEWPOST = "newpost";
export const SHOWPOST = "showpost"
export const DELETEPOST = "deletePost";

export function allposts() {
  const request = axios.get(MainURL);
  return {
    type: ALLPOSTS,
    payload: request
  };
}

export function newpost(values, callback){
  const request = axios.post(MainURL , values)
  .then( () => callback() );

  return {
    type: NEWPOST,
    payload: request
  }
}

export function showpost(id){
  const request = axios.get(`${URL}/${id}?key=st0539`);
return {
  type: SHOWPOST,
  payload: request
}
}

export function deletePost(id,callback ){
  const request = axios.delete(`${URL}/${id}?key=st0539`)
  .then(() => callback() );
  return {
    type: DELETEPOST,
    request: id
  }
}
