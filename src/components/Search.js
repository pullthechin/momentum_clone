import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import styled, { css } from 'styled-components';
import google from '../img/google.png';
import naver from '../img/naver.jpeg';

const iconStyle = {
    fontSize: '30px',
    color: 'white',
    marginRight: '10px',
    position: 'absolute',
    bottom: '7px'
};

const SearchWrap = styled.div`
    height: 40px;
    position: fixed;
    top: 25px;
    left: 25px;
`;

const SearchForm = styled.form`
    height: 100%;
    display: flex;
    position: relative;
`;

const SearchInput = styled.input`
    background: transparent;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 2px solid white;
    font-size: 20px;
    color: white;
    font-weight: 500;
    width: 350px;
    padding-left: 40px;
    padding-right: 45px;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`;

const PopupButton = styled.button`
    background: transparent;
    width: 36px;
    height: 36px;
    position: absolute;
    bottom: 3px;
    right: 0;
`;

const SearchButton = styled.button`
    background: transparent;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
`;


const SearchImage = styled.img`
    width: 100%;
`;

const Popup = styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: 120px;
    position: absolute;
    right: 0;
    top: 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 15px;

    ${props => {
        if(props.display === 'true') {
            return css`
                display: block;
            `;
        } else {
            return css`
                display: none;
            `;    
        }
    }}
`;

const TitleSpan = styled.span`
    font-size: 16px;
    color: white;
    font-weight: 500;
`;

const Span = styled.span`
    font-size: 18px;
    color: white;
    font-weight: 500;
    margin-left: 20px;
`;

const Search = ({ url, name, input, setGoogle, setNaver, onChangeInput, onToggle, display }) => {
    const [state, setLink] = useState('google');

    const onChange = (e) => {
        onChangeInput(e.target.value);
    };

    return (
    <SearchWrap>
        <SearchForm method="get" action={url}>
            <MdSearch style={iconStyle} />
            <SearchInput type="text" name={name} value={input} onChange={onChange} />
        </SearchForm>
        <PopupButton type="button" onClick={() => onToggle()}>
                <SearchImage src={state === 'google' ? google : naver} />
        </PopupButton>
        <Popup display={display.toString()}>
            <TitleSpan>search with</TitleSpan>
            <SearchButton type="button"
                onClick={() => {
                    setGoogle();
                    onToggle();
                    setLink('google');
            }}>
                <SearchImage src={google} />
                <Span>Google</Span>
            </SearchButton>
            <SearchButton type="button"
                onClick={() => {
                    setNaver();
                    onToggle();
                    setLink('naver');
            }}>
                <SearchImage src={naver} />
                <Span>Naver</Span>
            </SearchButton>
        </Popup>
    </SearchWrap>
    );
};

export default Search;