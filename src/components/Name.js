import React from 'react';
import styled from 'styled-components';

const NameWrap = styled.div`
    font-size: 54px;
    margin-top: 15px;
    color: white;
`;

const NameForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
`;

const NameInput = styled.input`
    width: 500px;
    height: 60px;
    font-size: 36px;
    color: white;
    font-weight: 500;
    padding-left: 20px;
    box-sizing: border-box;
    background: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid white;

    &:focus {
        outline: none;
    }
`;

const Name = ({input, name, onChangeInput, onInsert}) => {
    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }

    const onChange = e => {
        onChangeInput(e.target.value);
    };

    return (
        <NameWrap>
            <NameForm onSubmit={onSubmit}>
                <span>{name === null ? "What is your name?" : `Nice to Meet You! ${name}`}</span>
                {name === null && <NameInput type="text" value={input} onChange={onChange} />}
            </NameForm>
        </NameWrap>
    );
};

export default Name;