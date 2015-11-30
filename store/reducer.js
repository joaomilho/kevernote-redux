import {fromJS} from 'immutable';
import Cursor from 'immutable/contrib/cursor';

export default function reducer(state, action) {

  const cursor = (...position) => Cursor.from(state, position, newState => state = newState);

  const idx = state.get('selectedIdx');

  const selected    = cursor('notes', idx),
        status      = cursor('notes', idx, 'status'),
        selectedIdx = cursor('selectedIdx'),
        notes       = cursor('notes');

  const setNote = () => state.set('note', state.getIn(['notes', idx]))

  switch (action.type) {
  case 'OPTIMISTIC_ADD':
    let {newNote} = action;
    newNote.status = 'Saving...';
    selectedIdx.set(0);
    notes.unshift(fromJS(newNote));
    break;

  case 'ADD_COMPLETE':
    status.set('Saved');
    break;

  case 'ADD_FAILED':
    status.set('Failed');
    break;

  case 'SELECT':
    selectedIdx.set(action.idx);
    break;

  case 'TRASH':
    selectedIdx.set(0);
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

  return setNote();
}
