import {fromJS} from 'immutable';
import Cursor from 'immutable/contrib/cursor';

export default function reducer(state, action) {

  const cursor = (...position) => Cursor.from(state, position, newData => state = newData);

  const idx = state.get('selected');

  const selected   = cursor('notes', idx);
  const status     = cursor('notes', idx, 'status');
  const selectedId = cursor('selected');
  const notes      = cursor('notes');

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

  case 'UPDATE':
    status.set('Saving...');
    break;

  case 'UPDATE_COMPLETE':
    status.set('Saved');
    break;
  }

  return state;
}
