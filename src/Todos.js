import React from 'react' 

const Todos = ({todos, deleteTodo, completeTodo}) => {

    const buttonStyle = {
        cursor: 'pointer',
        margin: "0px 15px",
    };

    const actionStyle = {
        float: 'right'
    }


    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span
                    style={{
                        textDecoration: todo.isCompleted ? 'line-through' : 'none'
                    }}
                    >{todo.content}</span>
                    <div style={actionStyle}>
                        { todo.isCompleted ? 
                        <i style={buttonStyle}
                        title="Mark as uncompleted"
                        className="material-icons"
                        onClick={() => completeTodo(todo.id)}
                        >clear</i>
                        :
                        <i style={buttonStyle}
                        title="Mark as completed"
                        className="material-icons"
                        onClick={() => completeTodo(todo.id)}
                        >done</i>
                        }
                        <i style={buttonStyle} 
                        title="Delete Todo"
                        className="material-icons"
                        onClick={() => deleteTodo(todo.id)}
                        >delete</i>
                    </div> 
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left </p>
    );
    
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos