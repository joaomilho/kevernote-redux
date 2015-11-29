import { request, asyncAction } from './helpers/async'

let add = asyncAction((dispatch, state) =>{
  const id = state.get('notes').first().get('id') + 1;
  const newNote = {id: id, title: `Note #${id}`, body: "Write your note here"};
  dispatch({type: 'OPTIMISTIC_ADD', newNote});

  request('post', '/api/notes', newNote, {
    success: () => dispatch({type: 'ADD_COMPLETE'}),
    error: () => dispatch({type: 'ADD_FAILED'})
  })
})

let trash = asyncAction((dispatch, {selectedNoteId}) => {
  dispatch({type: 'TRASH'});
  request('delete', `/api/notes/${selectedNoteId}`);
})

let timer = null;
let update = asyncAction((dispatch, state, field, value) =>{
  dispatch({type: 'OPTIMISTIC_UPDATE', field, value});

  //if(timer) clearTimeout(timer);
  //dispatch({type: 'UPDATE'});

  //timer = setTimeout(() => {
    //request('put', `/api/notes/${selectedNoteId}`, update, {
      //success: () => dispatch({type: 'UPDATE_COMPLETE'})
    //})
  //}, 2000);
})

let select = idx => ({type: 'SELECT', idx});

export default {
  add:    add,
  trash:  trash,
  select: select,
  update: update
};
