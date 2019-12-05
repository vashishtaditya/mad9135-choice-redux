import React from 'react'
import {connect} from 'react-redux'
import TodosCard from './TodosCard'
import fetchTodos from './actions/toDos';

class AppTodos extends React.Component {
    
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            error: null,
            isLoaded: false, 
            todos: []
        }
    }

    buildList = (data)=>{
        console.log(data)
       this.props.onFetchTodos(data)
    }

    componentDidMount() {
        console.log('Posts did mount')
        let url = `https://jsonplaceholder.typicode.com/todos?userId=${this.props.match.params.userID}`
        console.log(this.props.todos.length)
        if (this.props.todos.length === 0) {
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error:error})
        })
    }
    }
    
        render () {
            const {todos} = this.props
            const todosList = todos.map(todo => (
                <TodosCard key={todo.id} todo = {todo} id={todo.id}/>
              
            )
            )

           
                  return(
                      <div>
                          <nav className="nav">
                              <h1>ToDos</h1>
                          </nav>
                <section className="todo-list">
                {todosList}
            </section>
            </div>
              

            )
            }
        }    

    const mapStateToProps = state => {
       
        return state
    }

    const mapActionsToState = {
        onFetchTodos: fetchTodos
    }

    
export default connect(mapStateToProps, mapActionsToState)(AppTodos)