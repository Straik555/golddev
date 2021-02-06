import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {Icon} from "react-icons-kit";
import {cross} from 'react-icons-kit/icomoon/cross';
import styled, {css, createGlobalStyle} from 'styled-components';
import {ic_dehaze} from 'react-icons-kit/md/ic_dehaze'

import {customMedia} from "../../styles/theme";
import {LINK} from "../../Link";

const BodyOverflow = createGlobalStyle`
  body {
    ${customMedia.lessThan("tablet")`
    max-height: 100%;
    overflow:hidden;
  `}
  }
`;

const Overlay = styled.div`
  display:none;

  ${customMedia.lessThan("tablet")`
    display:block;
    flex: 1;
  `}
`;


const Hamburger = styled(Icon).attrs({
    icon: ic_dehaze,
    size: 28,
})`
  display: none !important;
  cursor: pointer;
  position: absolute;
  top: 30px;
  margin-left: 10px;

  ${customMedia.lessThan("tablet")`
    display: flex !important;
  `}
  ${customMedia.lessThan("smallMobile")`
    top: 45px;
  `}
`;

const MenuWrap = styled.div`
  display: flex;
  padding: 35px 0 45px;
  justify-content: center;
  ${customMedia.lessThan("tablet")`
    position: fixed;
    top: 0;
    left: 0;
    button: 0;
    z-index: 100;
    transition: 0.3s;
    transform: translateX(-101%);
    height: 100%;
    padding: 0;
  `}

  ${({open}) => open && css`
    ${customMedia.lessThan("tablet")`
    transform: translateX(0);
  `}
  `}
`;

const MenuList = styled.div`
 
  ${customMedia.lessThan("tablet")`
    width: 250px;
    background: aliceblue;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
  `}
`;

const MenuLink = styled(NavLink)`
  background: transparent;
  color: rgba(0, 0, 0, 0.808);
  text-decoration: none;
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  position: relative;
  font-family: TradeGothicLTStd-Extended, sans-serif;

  :before{
    position: absolute;
    content: '';
    top: 90%;
    left: 50%;
    height: 2px;
    background: rgb(255, 118, 118);
    width: 0%;
    border-radius: 50%;
    transition: width 0.3s ease-in-out;
    transform: translateX(-50%);

  }
  :hover{
    :before{
      width: 100%;
    }
  }

  &.active{
    color: #E92819;
    ${customMedia.lessThan("tablet")`
        background: rgba(255, 118, 118, 0.2);
    `}
  }

  ${customMedia.lessThan("tablet")`
      :before{
          display: none;
      }
  `}
`;

const CloseMenu = styled(Icon).attrs({
    icon: cross,
    size: 20
})`
  display: none !important;
  position: absolute;
  top: 18px;
  right: 10px;
  cursor: pointer;

  ${customMedia.lessThan("tablet")`
    display: block !important;
  `}
`;

export const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Hamburger onClick={() => setOpen(true)} />
            <MenuWrap open={open}>
                {open && <BodyOverflow />}
                <Overlay onClick={() => setOpen(false)}/>
                <MenuList>
                    <CloseMenu onClick={() => setOpen(false)} />
                    {
                        LINK.map((el, id) =>
                            <MenuLink
                                key={id}
                                to={el.route}
                                onClick={() => setOpen(false)}
                            >
                                {el.name}
                            </MenuLink>
                        )
                    }
                </MenuList>
            </MenuWrap>
        </div>
    )
}
