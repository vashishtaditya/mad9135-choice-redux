import React from 'react'



class TodosCard extends React.Component {
    render() {
    return(
        <div className="TodosCard" >
             <div className="card-body">      
                <p className="Todos-title">{this.props.todo.title}</p>
                <p className="Todos-body">{this.props.todo.completed}</p>  
            </div>
        </div>

        
    )
    }
}

export default TodosCard