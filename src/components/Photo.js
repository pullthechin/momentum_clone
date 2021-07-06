import React from 'react';
import styled from 'styled-components';

const ImageWrap = styled.div`
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    background: gray;
`;

const Image = styled.img`
    object-fit: cover;
    filter: brightness(90%); 
    width: 100%;
    height: 100%;
`;

const ContentWrap = styled.div`
    position: fixed;
    bottom: 25px;
    left: 25px;
    color: white;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
`;

const ContentAuthor = styled.span`
    margin-bottom: 10px;
`;

const Photo = ({ data }) => {
    return (
        <ImageWrap>
            {data && <Image src={data && data.urls.full} alt="background-image"/>}
            <ContentWrap>
                <ContentAuthor>{data && data.user.name}</ContentAuthor>
                <span>{data && data.location.name}</span>
            </ContentWrap>
        </ImageWrap>
    );
};

export default Photo;