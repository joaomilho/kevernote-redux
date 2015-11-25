import store from './store';

export let add         = ()      => store.dispatch({type: 'ADD'})
export let trash       = ()      => store.dispatch({type: 'TRASH'})
export let select      = (id)    => store.dispatch({type: 'SELECT', id: id})
export let updateTitle = (title) => store.dispatch({type: 'UPDATE', update: {title: title}})
export let updateBody  = (body)  => store.dispatch({type: 'UPDATE', update: {body: body}})
