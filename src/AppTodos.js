import React from 'react'

import TodosCard from './TodosCard'



class AppTodos extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false, 
            todos: []
        }
    }

    buildList = (data)=>{
        console.log(data)
        this.setState({
            todos: data,
            isLoaded: true
        })
    }

    componentDidMount() {
        console.log('Posts did mount')
        let url = `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.userId}`
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error:error})
        })
    }
           
        render(){
            const {error, isLoaded, todos} = this.state
            const todosList = todos.map(todo => (
                <TodosCard key={todo.id} todo = {todo} id={todo.id}/>
              
            )
            )

            if(error){
            return <div>Error: {error.message}</div>
        } else if(!isLoaded){
            return <div>Loading...</div>
        } else {
                  return(
                <section className="todo-list">
                {todosList}
            </section>
                

            )
            }
        }
    }
    

    export default AppTodos