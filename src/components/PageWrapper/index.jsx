import React from 'react';
import styled from "styled-components";

import {Header} from "../Header";
import {Footer} from "../Footer";

const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperChildren = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: block;
`;

export const PageWrapper = ({children}) => {
    return (
        <Wrapper>
           <Header />
            <WrapperChildren>
                {children}
            </WrapperChildren>
            <Footer />
        </Wrapper>
    )
}