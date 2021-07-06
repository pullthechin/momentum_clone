import React from 'react';
import Name from '../components/Name';
import { changeInput, insert } from '../module/name';
import { connect } from 'react-redux';

const NameContainer = ({input, name, onChangeInput, onInsert}) => {
    return <Name input={input} name={name} onChangeInput={onChangeInput} onInsert={onInsert} />
};

const mapStateToProps = ({ name }) => ({
    input: name.input,
    name: name.name
});

const mapDispatchToProps = dispatch => ({
    onChangeInput: input => {
        dispatch(changeInput(input));
    },
    onInsert: text => {
        dispatch(insert(text));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(NameContainer);