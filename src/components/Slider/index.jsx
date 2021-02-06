import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import live from '../../assets/live.svg';
import photo from '../../assets/photo.svg';
import liveSmall from '../../assets/liveSmall.svg'
import {customMedia} from "../../styles/theme";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  background: red;
  .slick-next, .slick-prev{
    display: none!important;
  }
  .slick-dots {
    bottom: 0;

    li {
      margin: 0;
      button: {
        display: none;
      };
      button::before {
        width: 9px;
        height: 9px;
        border-radius: 100%;
        box-sizing: border-box;
        font-size: 11.5px;
        opacity: 1;
        background: transparent;
        color: transparent;
        line-height: 18px;
        border: 1.5px solid black;
      }
      
    }
    li.slick-active {
      button::before {
        width: 9px;
        height: 9px;
        border-radius: 100%;
        box-sizing: border-box;
        font-size: 11.5px;
        opacity: 1;
        background: black;
        line-height: 18px;
        border: 1.5px solid black;
      }
    }
  }
  
`;

const SliderBlock = styled.div`
  display: flex !important;
  background: #F4BAB5;
  box-sizing: border-box;
  padding: 10px 15px 45px;
  position: relative;
  ${customMedia.lessThan('tablet')`
    padding-top: 30px;
  `}
  ${customMedia.lessThan('mobile')`
    flex-direction: column;
    padding-top: 10px;
  `}
`;

const SliderLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 45%;
  position: relative;
  ${customMedia.lessThan('tablet')`
    width: 35%;
  `}
  ${customMedia.lessThan('mobile')`
    width: 100%;
    align-items: center;
  `}
`;

const SliderRight = styled.div`
  width: 55%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 30px;
  p{
    margin-top: 0;
    max-width: 300px;
    padding-bottom: 20px;
    font-family: TradeGothicLTStd-Extended, sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 27px;
    text-align: center;
  }
  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 34px;
    border: 1px solid #000000;
    
    span{
      font-family: TradeGothicLTStd-BoldExt, sans-serif;
      font-size: 16px;
      line-height: 21px;
    }
  }
  .absolute{
    position: absolute;
    top: 120px;
    text-align: center;
    font-size: 20px;
    line-height: 37px;
    font-family: TradeGothicLTStd-BoldExt, sans-serif;
    h1{
      margin-top: 0;
      font-family: Ogg-Roman, sans-serif;
      font-size: 61px;
      line-height: 63px;
      font-weight: normal;
    }
  }
  ${customMedia.lessThan('desktop')`
    width: 65%;
    .absolute{
        top: 120px;
        h1{
            font-size: 51px;
            line-height: 63px;
        }
    }
  `}
  ${customMedia.lessThan('tablet')`
    p{
        padding-top: 90px;
    }
    .absolute{
        top: 20px;
        font-size: 16px;
        h1{
            margin-top: 0;
            font-size: 35px;
            line-height: 63px;
        }
    }
  `}
  ${customMedia.lessThan('mobile')`
    width: 100%;
    p{
        padding-top: 15px;
    }
    .absolute{
        top: 20px;
        h1{
            margin-top: 0;
            font-size: 25px;
            line-height: 53px;
        }
    }
    .content{
        background: #000000;
        color: #ffffff;
    }
  `}
`;

const SliderImg = styled.div`
  background: url(${live}) center no-repeat;
  padding-left: 10px;
  width: 451px;
  height: 451px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    padding-right: 27px;
    width: 215px;
    height: 215px;
  }
  .live{
    position: absolute;
    bottom: 20px;
    max-width: 100%;
    display: flex;
    justify-items: center;
    &_block{
      margin-right: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 156px;
      height: 22px;
      border: 1px solid #000000;
      border-radius: 10px;
      span{
        width: 7px;
        height: 7px;
        border-radius: 100%;
        background: #B3F695;
      }
      p{
        padding-left: 15px;
        font-family: TradeGothicLTStd-BoldExt, sans-serif;
        font-size: 11px;
        line-height: 15px;
      } 
    }
  }
  ${customMedia.lessThan('tablet')`
    background: url(${liveSmall}) center no-repeat;
    padding-left: 25px;
    width: 247px;
    height: 247px;
    img{
        width: 118px;
        height: 118px;
    }
    .live{
        bottom: 50px;
    }
  `}
  ${customMedia.lessThan('mobile')`
    margin-top: 80px;
    align-items: center;
    .live{
        bottom: 0;
    }
  `}
`;

export const SliderWrapper = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Wrapper>
            <Slider {...settings}>
                <SliderBlock>
                    <SliderLeft>
                        <SliderImg>
                            <img src={photo} alt=""/>
                            <div className={'live'}>
                                <div className={'live_block'}>
                                    <span></span>
                                    <p>LIVE RECORDING</p>
                                </div>
                            </div>
                        </SliderImg>
                    </SliderLeft>
                    <SliderRight>
                        <p>Enter the wonderous world of Showfields.
                            Our mission is to create a better way for
                            customers to discover, engage and shop
                            emerging brands and artists of tomorrow.
                        </p>
                        <div className={'content'}>
                            <span>
                                RSVP
                            </span>
                        </div>
                        <div className={'absolute'}>
                            A LIVE CURATION WITH
                            <h1>
                                Maristella González
                            </h1>
                        </div>
                    </SliderRight>
                </SliderBlock>
                <SliderBlock>
                    <SliderLeft>
                        <SliderImg>
                            <img src={photo} alt=""/>
                            <div className={'live'}>
                                <div className={'live_block'}>
                                    <span></span>
                                    <p>LIVE RECORDING</p>
                                </div>
                            </div>
                        </SliderImg>
                    </SliderLeft>
                    <SliderRight>
                        <p>Enter the wonderous world of Showfields.
                            Our mission is to create a better way for
                            customers to discover, engage and shop
                            emerging brands and artists of tomorrow.
                        </p>
                        <div className={'content'}>
                            <span>
                                RSVP
                            </span>
                        </div>
                        <div className={'absolute'}>
                            A LIVE CURATION WITH
                            <h1>
                                Maristella González
                            </h1>
                        </div>
                    </SliderRight>
                </SliderBlock>
                <SliderBlock>
                    <SliderLeft>
                        <SliderImg>
                            <img src={photo} alt=""/>
                            <div className={'live'}>
                                <div className={'live_block'}>
                                    <span></span>
                                    <p>LIVE RECORDING</p>
                                </div>
                            </div>
                        </SliderImg>
                    </SliderLeft>
                    <SliderRight>
                        <p>Enter the wonderous world of Showfields.
                            Our mission is to create a better way for
                            customers to discover, engage and shop
                            emerging brands and artists of tomorrow.
                        </p>
                        <div className={'content'}>
                            <span>
                                RSVP
                            </span>
                        </div>
                        <div className={'absolute'}>
                            A LIVE CURATION WITH
                            <h1>
                                Maristella González
                            </h1>
                        </div>
                    </SliderRight>
                </SliderBlock>
            </Slider>
        </Wrapper>
    )
}