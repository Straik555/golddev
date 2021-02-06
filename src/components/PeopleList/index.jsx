import React from 'react';
import styled from "styled-components";

import {List} from "../../list";
import {customMedia} from "../../styles/theme";

const PeopleListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-items: center;
  max-width: 1280px;
  margin: 0 auto;
`;

const People = styled.div`
  width: 33.3%;
  text-align: center;
  h1{
    font-size: 36px;
    font-family: Ogg-Roman, sans-serif;
    line-height: 51px;
    font-weight: 400;
    margin-top: 0;
    text-align: center;
  }
  
  ${customMedia.lessThan('tablet')`
    width: 50%;
  `}
  ${customMedia.lessThan('mobile')`
    img{
        width: 50%;
    }
    h1{
        font-size: 16px;
    }
  `}
`;

export const PeopleList = () => {
    return (
        <PeopleListWrapper>
            {
                List.map((el, id) =>
                    <People key={id}>
                        <img src={el.image} alt={el.name} />
                        <h1>{el.name}</h1>
                    </People>
                )
            }
        </PeopleListWrapper>
    )
}