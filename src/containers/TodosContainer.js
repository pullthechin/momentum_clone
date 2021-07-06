import React from 'react';
import Todos from '../components/Todos';
import { changeInput, toggle, insert, remove } from '../module/todos';
import { connect } from 'react-redux';

const TodosContainer = ({ input, todos, onChangeInput, onToggle, onInsert, onRemove }) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onToggle={onToggle}
            onInsert={onInsert}
            onRemove={onRemove}
        />
    );
};

const mapStateToProps = ({ todos }) => ({
    input: todos.input,
    todos: todos.todos
});

const mapDispatchToProps = dispatch => ({
    onChangeInput: input => {
        dispatch(changeInput(input));
    },
    onToggle: id => {
        dispatch(toggle(id));
    },
    onInsert: text => {
        dispatch(insert(text));
    },
    onRemove: id => {
        dispatch(remove(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);