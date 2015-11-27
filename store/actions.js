import { request, asyncAction } from './helpers/async'

let add = asyncAction((dispatch, {uid}) =>{
  const id = uid + 1;
  const newNote = {id: id, title: `Note #${id}`, body: "Write your note here"};
  dispatch({type: 'OPTIMISTIC_ADD', newNote});

  request('post', '/api/notes', newNote, {
    success: () => dispatch({type: 'ADD_COMPLETE'})
  })
})

let trash = asyncAction((dispatch, {selectedNoteId}) => {
  dispatch({type: 'TRASH'});

  request('delete', `/api/notes/${selectedNoteId}`);
})

let timer = null;
let update = asyncAction((dispatch, {selectedNoteId}, update) =>{
  dispatch({type: 'OPTIMISTIC_UPDATE', update});

  if(timer) clearTimeout(timer);
  dispatch({type: 'UPDATE'});

  timer = setTimeout(() => {
    request('put', `/api/notes/${selectedNoteId}`, update, {
      success: () => dispatch({type: 'UPDATE_COMPLETE'})
    })
  }, 2000);
})

let select = id => ({type: 'SELECT', id});

export default {
  add:    add,
  trash:  trash,
  select: select,
  update: update
};
