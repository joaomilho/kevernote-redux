import { bindActionCreators } from 'redux'

const actions = {
  add:         ()    => ({type: 'ADD'}),
  trash:       ()    => ({type: 'TRASH'}),
  select:      id    => ({type: 'SELECT', id: id}),
  update:      value => ({type: 'UPDATE', update: value}),
}

export default function (dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}
