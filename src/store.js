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

function update(state = initialState, action) {
  let notes;

  switch (action.type) {
  case 'ADD':
    const id = state.uid + 1;
    const newNote = {id: id, title: `Note ${id}`, body: "Write here"};
    return {notes: [newNote, ...state.notes], selectedNoteId: id, uid: id};

  case 'SELECT':
    return {...state, selectedNoteId: action.id};

  case 'TRASH':
    notes = state.notes.filter(note => note.id != state.selectedNoteId);
    const selectedId = notes.length ? notes[0].id : null;
    return {...state, notes: notes, selectedNoteId: selectedId};

  case 'UPDATE':
    notes = state.notes.map(note => note.id == state.selectedNoteId ? {...note, ...action.update} : note);
    return {...state, notes: notes};

  default:
    return state
  }
}

const finalCreateStore = compose(devTools())(createStore);
const store = finalCreateStore(update);
export default store;
