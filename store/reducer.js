import {fromJS} from 'immutable';
import Cursor from 'immutable/contrib/cursor';

export default function reducer(state, action) {

  const idx = state.get('selected');
  const selected = Cursor.from(state, ['notes', idx], newData => state = newData);
  const status = Cursor.from(state, ['notes', idx, 'status'], newData => state = newData);
  const selectedId = Cursor.from(state, ['selected'], newData => state = newData);
  const notes = Cursor.from(state, ['notes'], newData => state = newData);

  switch (action.type) {
  case 'OPTIMISTIC_ADD':
    let {newNote} = action;
    newNote.status = 'Saving...';
    //history.pushState(state, `Kevernote #${newNote.id}`, `/notes/${newNote.id}`);
    selectedId.set(0);
    notes.unshift(fromJS(newNote));
    break;

  case 'ADD_COMPLETE':
    status.set('Saved');
    break;

  case 'ADD_FAILED':
    status.set('Failed');
    break;

  case 'SELECT':
    selectedId.set(action.idx);
    break;

  case 'TRASH':
    selectedId.set(0);
    notes.delete(idx);
    break;

  case 'OPTIMISTIC_UPDATE':
    selected.update(action.field, () => action.value);
    break;

  case 'UPDATE_COMPLETE':
    status.set('Saved');
    break;
  }

  return state;
}
