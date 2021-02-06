import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

import {Menu} from '../Menu';
import search from '../../assets/Header/search.svg';
import shop from '../../assets/Header/shop.svg';
import favorite from '../../assets/Header/favorite.svg';
import title from '../../assets/title.svg';
import {customMedia} from "../../styles/theme";

const HeaderWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  background: #DDDDDD;
  height: 27px;
  h1{
    font-family: TradeGothicLTStd-Extended, sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: 7px;
  }
  ${customMedia.lessThan("smallMobile")`
  padding: 0 20px;
  height: auto;
    h1{ 
        width: 100%;
        line-height: 13px;
    }
  `}
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px;
  img{
    padding-right: 10px;
  }
`;

const LinkImg = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  
  img{
    width: 25%;
    min-width: 181px;
  }
`;

export const Header = () => {
    return (
        <HeaderWrapper>
            <Title>
                <h1>
                    COVID-19: Learn what we’re doing to keep the community and our staff safe.
                </h1>
            </Title>
            <Icons>
                <img src={search} alt=""/>
                <img src={shop} alt=""/>
                <img src={favorite} alt=""/>
            </Icons>
            <LinkImg to={'/'}>
                <img src={title} alt=""/>
            </LinkImg>
            <Menu />
        </HeaderWrapper>
    )
}