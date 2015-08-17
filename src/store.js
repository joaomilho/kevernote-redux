import { createStore, compose } from 'redux';
import { devTools } from 'redux-devtools';

const initialState = {
  notes: [
    {
      id: 1,
      title: "Note 1",
      body: "Bar"
    }
  ],
  selectedNoteId: 1,
  uid: 1
};

function updateNote(state, update) {
  return state.notes.map((note) => {
    if(note.id == state.selectedNoteId)
      return {...note, ...update};
    else
      return note;
  });
}

function update(state = initialState, action) {
  switch (action.type) {
  case 'ADD':
    const id = state.uid + 1;

    return {
      notes: [{id: id, title: `Note ${id}`, body: "Write here"}, ...state.notes],
      selectedNoteId: id,
      uid: id
    };

  case 'SELECT':
    return {
      ...state,
      selectedNoteId: action.id
    };

  case 'DELETE':
    const notes = state.notes.filter(note => note.id != state.selectedNoteId);
    const selectedId = notes.length ? notes[0].id : null;
    return {
      ...state,
      notes: notes,
      selectedNoteId: selectedId
    };

  case 'UPDATE':
    return {
      ...state,
      notes: updateNote(state, action.update)
    };

  default:
    return state
  }
}

const finalCreateStore = compose(devTools(), createStore);
const store = finalCreateStore(update);
export default store;
