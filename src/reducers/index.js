import UserReducer from './users'
import PostsReducer from './posts'
import TodosReducer from './toDos'
import CommentsReducer from "./comments";

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    users: UserReducer,
    posts: PostsReducer,
    todos: TodosReducer,
    comments: CommentsReducer
})

export default allReducers