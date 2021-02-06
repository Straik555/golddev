import React from 'react';
import styled from "styled-components";

import {PeopleList} from "../../components/PeopleList";
import {PageWrapper} from "../../components/PageWrapper";
import {LiveCuration} from "../../components/LiveCuration";
import {customMedia} from "../../styles/theme";
import {SliderWrapper} from '../../components/Slider'

const HomeTitle = styled.h1`
  margin-top: 0;
  text-align: center;
  font-family: Ogg-Roman, sans-serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  padding: 30px 15px 0;
  
  ${customMedia.lessThan("mobile")`
    font-size: 25px;
    line-height: 30px;
  `}
`;

export const Home = () => {
    return (
        <PageWrapper>
            <LiveCuration />
            <SliderWrapper />
            <HomeTitle>Watch Recent Live Curations</HomeTitle>
            <PeopleList />
        </PageWrapper>
    )
}
