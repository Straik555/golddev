import React from "react";
import styled from "styled-components";

import enter from '../../assets/Footer/1.svg';
import find from '../../assets/Footer/2.svg';
import {customMedia} from "../../styles/theme";

const FooterWrapper = styled.div`
  width: 100%;
  background: #DDDDDD;
`;

const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 1280px;
  margin: 0 auto;
  
  ${customMedia.lessThan('mobile')`  
    flex-direction: column-reverse;
  `}
`;

const FooterLeft = styled.div`
  width: 70%;
  box-sizing: border-box;
  padding: 70px 25px 70px 15px;
  display: flex;
  justify-content: space-between;
  
  h1, p{
    font-family: TradeGothicLTStd-BoldExt, sans-serif;
    font-weight: normal;
    font-size: 11px;
    line-height: 17px;
  }
  p{
    line-height: 12px;
  }
  .img{
    display: none;
  }
  ${customMedia.lessThan('mobile')`
    width: 100%;
    padding: 15px 15px 70px 15px;
    margin-top: -70px;
  `}
  ${customMedia.lessThan('smallMobile')`
    flex-direction: column;
    align-items: center;
    padding: 15px 0 30px;
    div{
        width: 100%;
        border-top: 1px solid black;
        h1{
            padding-left: 20px;
        }
        p{
            display: none;
        }   
    }
    .us{
        display: none;
    }
    .img{
        display: flex;
        justify-content: center;
        padding-top: 10px;
    }
  `}
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  box-sizing: border-box;
  padding: 70px 15px 70px 25px;
  
  .text{
    h1{
      display: flex;
      margin-bottom: 0;
      font-family: TradeGothicLTStd-BoldExt, sans-serif;
      font-weight: normal;
      font-size: 11px;
      line-height: 14px;
    }
    div{
      padding-top: 20px;
      img{
        width: 100%;
      }
    }
  }
  ${customMedia.lessThan('mobile')`
    width: 100%;
    padding: 30px 15px 15px 15px;
    align-items: center;
    .text{
        div{
            img{
                width: 254px;
            }
        }
    }
  `}
`;

export const Footer = () => {
    return (
        <FooterWrapper>
            <Content>
                <FooterLeft>
                    <div>
                        <h1>ABOUT SHOWFIELDS</h1>
                        <p>
                            About
                        </p>
                        <p>
                            Contact
                        </p>
                        <p>
                            FAQ
                        </p>
                        <p>
                            Privacy Policy
                        </p>
                    </div>
                    <div>
                        <h1>VISIT US</h1>
                        <p>
                            Locations
                        </p>
                        <p>
                            Store Appointments
                        </p>
                        <p>
                            Virtual Appointments
                        </p>
                    </div>
                    <div>
                        <h1>PARTNER WITH US</h1>
                        <p>
                            Artists
                        </p>
                        <p>
                            Brand Parternships
                        </p>
                        <p>
                            Careers
                        </p>
                    </div>
                    <div className={'us'}>
                        <h1>FIND US</h1>
                        <p>
                            Instagram
                        </p>
                        <p>
                            Pinterest
                        </p>
                        <p>
                            Facebook
                        </p>
                        <p>
                            Twitter
                        </p>
                    </div>
                    <div className="img">
                        <img src={find} alt=""/>
                    </div>
                </FooterLeft>
                <FooterRight>
                    <div className="text">
                        <h1>
                            STAY IN THE KNOW! SUBSCRIBE
                        </h1>
                        <h1>
                            TO OUR NEWSLETTER. PLUS, RECEIVE
                        </h1>
                        <h1>
                            10% OFF YOUR FIRST ORDER.
                        </h1>
                        <div>
                            <img src={enter} alt=""/>
                        </div>
                    </div>
                </FooterRight>
            </Content>
        </FooterWrapper>
    )
}