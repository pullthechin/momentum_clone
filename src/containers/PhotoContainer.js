import React from 'react';
import { connect } from 'react-redux';
import { getPhoto } from '../module/photo';
import Photo from '../components/Photo';

const { useEffect } = React;

const PhotoContainer = ({ data, getPhoto}) => {
    useEffect(() => {
        getPhoto();
    }, [getPhoto]);
    return (
        <Photo data={data} />
    );
};

const mapStateToProps = ({ photo }) => ({
    data: photo.data
});

const mapDispatchToProps = dispatch => ({
    getPhoto: () => {
        dispatch(getPhoto());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer);