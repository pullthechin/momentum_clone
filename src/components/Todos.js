import React from 'react';
import styled from 'styled-components';

// styled-components

const TodosWrap = styled.div`
    position: fixed;
    right: 25px;
    bottom: 25px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    width: 350px;
    height: 300px;
    border-radius: 10px;
`;

const TodosForm = styled.form`
    position: fixed;
    bottom: 35px;
    display: flex;
    width: 350px;
    padding: 0 20px;
    box-sizing: border-box;
    height: 40px;
`;

const FormInput = styled.input`
    border: none;
    flex-grow: 1;
    box-sizing: border-box;
    font-size: 18px;
    color: white;
    font-weight: 700;
    background: none;

    &:focus {
        outline: none;
    }
    
    &::placeholder {
        color: white;
        font-weight: 700;
        opacity: .75;
    }
`;

const TodoItemsWrap = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    top: 25px;
    padding-left: 20px;
    box-sizing: border-box;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        background: none;
        width: 10px;
    };
    &::-webkit-scrollbar-thumb {
        background: none;
        border-radius: 10px;
        width: 3px;
    }
`;


const TodoItemWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    &::last-child {
        margin-bottom: 0;
    }
`;

const TodoItemInput = styled.input`
    margin: 0;
    position: relative;
    bottom: 1px;
    cursor: pointer;
`;

const TodoItemSpan = styled.span`
    margin-left: 10px;
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
`;

// components
const TodoItem = ({ todo, onToggle }) => {
    return (
        <TodoItemWrap>
            <TodoItemInput type="checkbox" checked={todo.done} onClick={() => onToggle(todo.id)} readOnly={true} />
            <TodoItemSpan style={{ textDecoration: todo.done === true ? 'line-through' : 'none' }}>{todo.text}</TodoItemSpan>
        </TodoItemWrap>
    );
};

const Todos = ({ input, todos, onChangeInput, onToggle, onInsert }) => {

    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    };

    const onChange = e => {
        onChangeInput(e.target.value);
    };

    return (
        <TodosWrap>
            <TodoItemsWrap>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} onToggle={onToggle} />
                ))}
            </TodoItemsWrap>
            <TodosForm onSubmit={onSubmit}>
                <FormInput placeholder="New Todo" onChange={onChange} value={input} />
            </TodosForm>
        </TodosWrap>
    );
};

export default Todos;