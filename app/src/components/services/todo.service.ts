import { omdApiKey } from '../../key';
import store from '../../store';
import { todoActions} from '../../store/actions/todos.actions';
import {Todo} from '../../store/reducers/todos.reducer';
import http from '../utils/http';

export class TodoService {

    setTodoDone(todo:Todo){
        store.dispatch(todoActions.setNewTodo(todo))
    }

    setNewTodo(todo:Todo){
        store.dispatch(todoActions.setTodoDone(todo.id))
    }

    setDeleteTodo(todo:Todo){
        store.dispatch(todoActions.setDeleteTodo(todo))
    }
}