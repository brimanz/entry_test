import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import styled from '@emotion/styled';


const Enter = styled.input`
    color: #f5f5f5;
    padding: 10px;
    background: none;
    margin: 0 15px;
    border: 1px solid #f5f5f5;
    border-radius: 4px;
`; 

const Buton = styled.button`
    color: #f5f5f5;
    padding: 10px;
    background: #000000;;
    border-radius: 4px;
    width: 80px;
    border: none;

    :hover{
        box-shadow: 1px 1px 1px #f5f5f5;
    }
`; 


const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    //using component functions
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    //using useEffect hook
    useEffect(() =>{
        if(editTodo){
            setInput(editTodo.title);
        } else{
            setInput("");
        }
    },[setInput, editTodo])

    const onInputChange = e =>{
        setInput(e.target.value);
    }

    const onFormSubmit = e =>{
        e.preventDefault();
        if(!editTodo){
            setTodos([
                ...todos,
                {id: uuidv4(),
                 title: input, 
                 completed: false   
            }]);
            setInput("");
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };

    return ( 
        <form
            onSubmit={onFormSubmit}
        >
            <Enter 
                type="text"
                placeholder="Enter a task please..." 
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <Buton
                type="submit"
                className="button-add"
            >
                {editTodo ? "OK" : "Add"}
            </Buton>
        </form>
     );
}
 
export default Form;