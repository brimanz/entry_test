import React from 'react';
import styled from '@emotion/styled';



const noList = styled.li`
    list-style: none;
`;

const Enter = styled.input`
    color: #f5f5f5;
    padding: 10px;
    background: none;
    margin: 0 15px;
    border: 1px solid #f5f5f5;
    border-radius: 4px;
    margin: 15px 0px 0px -80px;
    :hover{
        box-shadow: 1px 1px 1px #f5f5f5;
    }
`; 

const ButtonComplete = styled.button`
    color: #f5f5f5;
    background: limegreen;
    font-weight: bold;
    padding: 5px;
    border: none;
    margin: 15px;
    border-radius: 4px;
    box-shadow: 1px 1px 1px #000000;
    :hover{
        box-shadow: 1px 1px 1px #f5f5f5;
    }
`; 

const ButtonEdit = styled.button`
    color: #000000;
    background: lightblue;
    font-weight: bold;
    padding: 5px;
    border: none;
    margin: 15px;
    border-radius: 4px;
    width: 70px;
    box-shadow: 1px 1px 1px #000000;

    :hover{
        box-shadow: 1px 1px 1px #f5f5f5;
    }
`;

const ButtonDelete = styled.button`
    color: #f5f5f5;
    background: red;
    font-weight: bold;
    padding: 5px;
    border: none;
    margin: 15px;
    border-radius: 4px;
    width: 70px;
    box-shadow: 1px 1px 1px #000000;

    :hover{
        box-shadow: 1px 1px 1px #f5f5f5;
    }
`;

const TodosList = ({todos, setTodos, setEditTodo}) => {

    //using component functions
    const handleDelete = ({id}) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = todo =>{
        setTodos(
            todos.map((item) =>{
                if(item.id === todo.id){
                    return{...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) =>{
        const findTodo = todos.find((todo) => todo.id ===id);
        setEditTodo(findTodo);
    }

    return (
        <div>
            {todos.map((todo) => (
                <noList
                    className="list-item"
                    key={todo.id}
                >
                    <Enter 
                        type="text"
                        value={todo.title}
                        className={`list ${todo.completed ? "complete" : ""}`} 
                        onChange={e => e.preventDefault()}
                    />
                    <div>
                        <ButtonComplete 
                            className="button-complete task-button"
                            onClick={() =>handleComplete(todo)}
                        >complete
                            <i className="fa fa-check-circle"></i>
                        </ButtonComplete>
                        <ButtonEdit 
                            className="button-edit task-button"
                            onClick={() => handleEdit(todo)}
                        >edit
                            <i className="fa fa-edit"></i>
                        </ButtonEdit>
                        <ButtonDelete 
                            className="button-delete task-button"
                            onClick={() =>handleDelete(todo)}
                        >delete
                            <i className="fa fa-trash"></i>
                        </ButtonDelete>
                    </div>
                </noList>
            )
            )}
        </div> 
     );
}
 
export default TodosList;