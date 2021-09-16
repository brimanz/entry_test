import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h2`
    color: #f5f5f5;
    text-shadow: 1px 1px 1px #000000;
    font-size: 32px;
    margin: 40px 0;
`

const Header = () => {
    return ( 
        <div className="header">
            <Title>Task App</Title>
        </div>
     );
}
 
export default Header;