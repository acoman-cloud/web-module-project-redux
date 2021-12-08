export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = 'ADD_MOVIE';

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
export const addMovie = (info)=>{
    return({type:ADD_MOVIE, payload:{title:info.title,director:info.director,genre:info.genre,metascore:parseInt(info.metascore),description:info.description, id:Date.now()}})
}