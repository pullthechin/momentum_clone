import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ClockWrap = styled.div`
    font-size: 1050%;
    font-weight: 700;
    color: white;
`;

const Clock = () => {
    const [time, setTime] = useState(moment());
    useEffect(() => {
        setInterval(() => {
            setTime(moment());
        }, 1000);
    }, []);    

    return (
        <ClockWrap>
            {time.format('HH:mm')}
        </ClockWrap>
    );
};

export default Clock;