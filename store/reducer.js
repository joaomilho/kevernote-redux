function updateSelectedNote(state, update){
  return {...state, notes: state.notes.map(note => note.id == state.selectedNoteId ? {...note, ...update} : note)};
}

export default function reducer(state, action) {
  let notes;

  switch (action.type) {
  case 'OPTIMISTIC_ADD':
    let {newNote} = action;
    history.pushState(state, `Kevernote #${newNote.id}`, `/notes/${newNote.id}`);
    return {notes: [{...newNote, status: 'Saving...'}, ...state.notes], selectedNoteId: newNote.id, uid: newNote.id};

  case 'ADD_COMPLETE':
    return updateSelectedNote(state, {status: 'Saved'})

  case 'SELECT':
    history.pushState(state, `Kevernote #${action.id}`, `/notes/${action.id}`);
    return {...state, selectedNoteId: action.id};

  case 'TRASH':
    notes = state.notes.filter(note => note.id != state.selectedNoteId);
    const selectedId = notes.length ? notes[0].id : null;
    return {...state, notes: notes, selectedNoteId: selectedId};

  case 'OPTIMISTIC_UPDATE':
    return updateSelectedNote(state, {...action.update, status: 'Waiting...'})

  case 'OPTIMISTIC_UPDATE':
    return updateSelectedNote(state, {status: 'Saving...'})

  case 'UPDATE_COMPLETE':
    return updateSelectedNote(state, {status: 'Saved'})

  default:
    return state
  }
}
