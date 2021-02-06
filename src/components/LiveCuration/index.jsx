import React from "react";
import styled, {css} from 'styled-components';

import {customMedia} from "../../styles/theme";
import upcoming from '../../assets/upcoming.svg';
import upcomingSmall from '../../assets/upcomingSmall.svg';

const LiveCurationWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 25px 35px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  ${({theme}) => css`
      background: ${theme.colors.titleMenuActive};
  `}
  
  h1{
    font-family: Ogg-Roman, sans-serif;
    font-size: 61px;
    line-height: 63px;
    ${({theme}) => css`
      color: ${theme.colors.titleWhite}
    `}
  }
  p{
    box-sizing: border-box;
    font-family: TradeGothicLTStd-Extended, sans-serif;
    font-size: 16px;
    line-height: 27px;
    margin: 0;
    max-width: 600px;
    text-align: center;
    ${({theme}) => css`
      color: ${theme.colors.titleWhite}
    `}
  }
  ${customMedia.lessThan("mobile")`
    h1{
        font-size: 25px;
    };
    p{
        line-height: 25px;
        max-width: 100%;
    };
  `}
`;
const UpcomingWrapper = styled.div`{
    width: 100%;
    background-origin: content-box;
    background: url(${upcoming}) center no-repeat;
    background-size: contain;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  
    h1{
      font-size: 36px;
      line-height: 40px;
      font-weight: normal;
      font-family: Ogg-Roman, sans-serif;
    }
    ${customMedia.lessThan('mobile')`
        h1{
            font-size: 25px;
        }
    `}
    ${customMedia.lessThan('smallMobile')`
        background: url(${upcomingSmall}) no-repeat;
        background-size: 100%;
        height: 100px;
        background-position: top center;
       
    `}
}`;

export const LiveCuration = () => {
    return(
        <>
            <LiveCurationWrapper>
                <h1>Live Curations</h1>
                <p>Our weekly live curations are one-of-a-kind live shopping events hosted
                    by tastemakers from around the globe. We invite you to their worlds to give
                    you an interactive and informative shopping experience. These curations feature
                    hand-picked products and art from the most interesting misson-driven,
                    design-oriented, innovative brands and artists in our community. </p>
            </LiveCurationWrapper>
            <UpcomingWrapper>
                <h1>Upcoming Curations</h1>
            </UpcomingWrapper>
        </>
    )
}