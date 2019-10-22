import React from 'react'
import "./TodosCard.css"



class TodosCard extends React.Component {
    render() {
        const completed = this.props.todo.completed
        let string = ""
         if(completed === true){
             string = "Yes"
         } else {
             string = "No"
         }
    

    return(
        <div className="TodosCard" >
             <div className="card-body">      
                <p className="Todos-title">Title: {this.props.todo.title}</p>
                <p className="Todos-body">Completed: {string}</p>  
            </div>
        </div>

        
    )
    }
}

export default TodosCard