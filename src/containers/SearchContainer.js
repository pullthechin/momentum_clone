import React from 'react';
import Search from '../components/Search';
import { connect } from 'react-redux';
import { setGoogle, setNaver, changeInput, toggle } from '../module/search';

const SearchContainer = ({ url, name, input, setGoogle, setNaver, onChangeInput, onToggle, display }) => {
    return (
        <Search url={url} name={name} input={input} setGoogle={setGoogle} setNaver={setNaver} onChangeInput={onChangeInput} onToggle={onToggle} display={display} />
    );
};

const mapStateToProps = ({ search }) => ({
    url: search.links.url,
    name: search.links.name,
    input: search.input,
    display: search.display
});

const mapDispatchToProps = dispatch => ({
    setGoogle: () => {
        dispatch(setGoogle());
    },
    setNaver: () => {
        dispatch(setNaver());
    },
    onChangeInput: input => {
        dispatch(changeInput(input));
    },
    onToggle: () => {
        dispatch(toggle());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);