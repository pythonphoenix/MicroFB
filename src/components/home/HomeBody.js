import React, { useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import {
    BodyContainer, BodyFirstLayerLeft, BodyFirstLayerLeftBtn, BodyFirstLayerLeftText, BodyFirstLayerLeftTitle, BodyLayerMiddleText, BodyLayerMiddleTitle, BodySecondLayer, BodySecondLayerCardBox, BodyThirdLayer, BodyThirdLayerLeft, BodyThirdLayerLeftDropdown, BodyThirdLayerLeftDropdownDesc, BodyThirdLayerLeftDropdownTitle, BodyThirdLayerLeftTitle, BodyThirdLayerRight, BodyThirdLayerRightBox,
    BodyFourthLayer,
    BodyFirstLayer,
    BodyFirstLayerImg1,
    BodyEachLayerCard,
    BodyEachLayerCardText,
    BodyFourthLayerFirstImgBox,
    BodyFourthLayerSecondImgBox,
    BodyFourthLayerImg,
    BodyFourthLayerLeft,
    BodyFourthLayerRight,
    BodyFourthLayerReview,
    BodyFourthLayerCustName,
    BodyEachLayerCard2,
    BodyEachLayerCard3,
    BodyFourthLayerCustJob,
    BodyFourthLayerBottom,
    BodyFourthLayerBottomImg,
    BodyFirstLayerImgBoxOne,
    BodyFirstLayerImgBoxTwo,
} from '../../styles/home/HomeBodyStyle';
import FirstImg from '../../images/home/pexels-the-lazy-artist-gallery-999267.png';
import SecondImg from '../../images/home/pexels-anna-shvets-3727464.svg';

import ThirdImg from '../../images/home/pexels-jeff-denlea-3714743.png';
import FourthImg from '../../images/home/pexels-jeff-denlea-3714743.png';
import FifthImg from '../../images/home/canaryPointCS_logo-01 Copy.png';

import { EachCardSegment, EachCardCalculator, CalculatorBox, CalculatorCardTitle, CalculatorField, CalculatorInfo, CalculatorSlider } from '../../styles/loanHome/LoanHomeStyle';

const HomeBody = () => {
    AOS.init();

    const [amount, setAmount] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleLoanAmount = (e) => {
        let valAmount = e.target.value;
        if (valAmount.length === 6) {
            valAmount = [valAmount.slice(0, 3), ',', valAmount.slice(3)].join('');
        } else {
            valAmount = [valAmount.slice(0, 1), ',', valAmount.slice(1, 4), ',', valAmount.slice(4)].join('');
        }

        setAmount(valAmount);
    }

    const handleLoanDuration = (e) => {
        setDuration(e.target.value);
    }

    return (
        <>
            <BodyContainer>
                <BodyFirstLayer data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                    <BodyFirstLayerLeft>
                        <BodyFirstLayerLeftTitle>Earn More on Your Savings</BodyFirstLayerLeftTitle>
                        <BodyFirstLayerLeftText>Earn rewards with your savings when you open a <b>My Assets Savings</b> Account with us.</BodyFirstLayerLeftText>
                        <Link to='/account/open/'> <BodyFirstLayerLeftBtn>Open Account</BodyFirstLayerLeftBtn></Link>
                    </BodyFirstLayerLeft>
                    <BodyFirstLayerImgBoxTwo>
                        <BodyFirstLayerImg1 src={SecondImg} />
                    </BodyFirstLayerImgBoxTwo>
                    <BodyFirstLayerImgBoxOne>
                    <BodyFirstLayerImg1 src={FirstImg} />
                    </BodyFirstLayerImgBoxOne>
                </BodyFirstLayer>
                <BodySecondLayer >
                    <BodyLayerMiddleTitle>Our Products</BodyLayerMiddleTitle>
                    <BodyLayerMiddleText>Get the best interest rates in the market on our range of products</BodyLayerMiddleText>
                    <BodySecondLayerCardBox>
                        <BodyEachLayerCard data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear"><BodyEachLayerCardText>Deposits</BodyEachLayerCardText></BodyEachLayerCard>
                        <BodyEachLayerCard2 data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear"><BodyEachLayerCardText>Investment</BodyEachLayerCardText></BodyEachLayerCard2>
                        <BodyEachLayerCard3 data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear"><BodyEachLayerCardText>Loans</BodyEachLayerCardText></BodyEachLayerCard3>
                    </BodySecondLayerCardBox>
                    <div style={{ textAlign: 'center', marginBottom: '1em' }}> <BodyFirstLayerLeftBtn>View Products</BodyFirstLayerLeftBtn></div>
                </BodySecondLayer>

                <BodyThirdLayer>
                    <BodyThirdLayerLeft data-aos="fade-out" data-aos-duration="6000" data-aos-easing="linear">
                        <BodyThirdLayerLeftTitle>Personal and Business Loans</BodyThirdLayerLeftTitle>
                        <BodyThirdLayerLeftDropdown>
                            <BodyThirdLayerLeftDropdownTitle> <ArrowDropDownIcon style={{ color: 'rgb(30, 50, 100)', cursor: 'pointer' }} /> Retail Loans</BodyThirdLayerLeftDropdownTitle>
                            <BodyThirdLayerLeftDropdownDesc>Lorem ipsum dolor sit amet, conse</BodyThirdLayerLeftDropdownDesc>
                        </BodyThirdLayerLeftDropdown>

                        <BodyThirdLayerLeftDropdown>
                            <BodyThirdLayerLeftDropdownTitle> <ArrowDropDownIcon style={{ color: 'rgb(30, 50, 100)', cursor: 'pointer' }} /> Salary Advance Loan (SALO)</BodyThirdLayerLeftDropdownTitle>
                            <BodyThirdLayerLeftDropdownDesc>Lorem ipsum dolor sit amet, conse</BodyThirdLayerLeftDropdownDesc>
                        </BodyThirdLayerLeftDropdown>

                        <BodyThirdLayerLeftDropdown>
                            <BodyThirdLayerLeftDropdownTitle> <ArrowDropDownIcon style={{ color: 'rgb(30, 50, 100)', cursor: 'pointer' }} /> SME Banking</BodyThirdLayerLeftDropdownTitle>
                            <BodyThirdLayerLeftDropdownDesc>Lorem ipsum dolor sit amet, conse</BodyThirdLayerLeftDropdownDesc>
                        </BodyThirdLayerLeftDropdown>

                        <BodyThirdLayerLeftDropdown>
                            <BodyThirdLayerLeftDropdownTitle> <ArrowDropDownIcon style={{ color: 'rgb(30, 50, 100)', cursor: 'pointer' }} /> Trade Finance</BodyThirdLayerLeftDropdownTitle>
                            <BodyThirdLayerLeftDropdownDesc>Lorem ipsum dolor sit amet, conse</BodyThirdLayerLeftDropdownDesc>
                        </BodyThirdLayerLeftDropdown>
                    </BodyThirdLayerLeft>
                    <BodyThirdLayerRight data-aos="fade-in" data-aos-duration="6000" data-aos-easing="linear">
                        <BodyThirdLayerRightBox>
                            <EachCardCalculator style={{ height: 'fit-content', background: '#EFF4FC', borderRadius: '1em'}}>
                                <EachCardSegment style={{ marginBottom: '-2em' }}>
                                    <h4 style={{ color: 'rgb(30, 50, 100)', textAlign: 'center' }}>Loan Calculator</h4>
                                </EachCardSegment>

                                <CalculatorBox>
                                    <CalculatorCardTitle>Loan Amount:</CalculatorCardTitle>
                                    <CalculatorSlider type="range" min="100000" max="1000000" step='100000' onChange={handleLoanAmount} />
                                    <CalculatorField value={'N' + amount} readOnly />
                                </CalculatorBox>

                                <CalculatorBox style={{ marginBottom: '2em' }}>
                                    <CalculatorCardTitle>Loan Duration:</CalculatorCardTitle>
                                    <CalculatorSlider type="range" min="1" max="24" onChange={handleLoanDuration} />
                                    <CalculatorField value={duration + ' Month(s)'} readOnly />
                                </CalculatorBox>

                                <CalculatorBox>
                                    <CalculatorInfo>Interest Rate : <b style={{ color: 'rgb(30, 50, 100' }}>6.5%</b></CalculatorInfo>
                                    <CalculatorInfo>Monthly Repayment : <b style={{ color: 'rgb(30, 50, 100' }}>N110,000</b></CalculatorInfo>
                                    <CalculatorInfo>Total Repayment : <b style={{ color: 'rgb(30, 50, 100' }}>N550,000</b></CalculatorInfo>
                                </CalculatorBox>

                                <CalculatorBox>
                                    <div style={{ textAlign: 'center', marginBottom: '1em' }}> <Link to='/account/open/'><BodyFirstLayerLeftBtn>Apply for a Loan</BodyFirstLayerLeftBtn></Link></div>
                                </CalculatorBox>
                            </EachCardCalculator>
                        </BodyThirdLayerRightBox>
                    </BodyThirdLayerRight>
                </BodyThirdLayer>

                <BodyFourthLayer data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                    <BodyLayerMiddleTitle>Customer Reviews</BodyLayerMiddleTitle>
                    <BodyLayerMiddleText>We make our customers happy</BodyLayerMiddleText>

                    <BodyFourthLayerFirstImgBox data-aos="fade-out" data-aos-duration="6000" data-aos-easing="linear">
                        <BodyFourthLayerLeft>
                            <BodyFourthLayerImg src={ThirdImg} />
                        </BodyFourthLayerLeft>
                        <BodyFourthLayerRight>
                            <BodyFourthLayerReview>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</BodyFourthLayerReview>
                            <BodyFourthLayerCustName>Customer Name</BodyFourthLayerCustName>
                            <BodyFourthLayerCustJob>Customer Ocupation</BodyFourthLayerCustJob>
                        </BodyFourthLayerRight>
                    </BodyFourthLayerFirstImgBox>

                    <BodyFourthLayerSecondImgBox data-aos="fade-in" data-aos-duration="6000" data-aos-easing="linear">
                        <BodyFourthLayerLeft>
                            <BodyFourthLayerImg src={FourthImg} />
                        </BodyFourthLayerLeft>
                        <BodyFourthLayerRight>
                            <BodyFourthLayerReview>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</BodyFourthLayerReview>
                            <BodyFourthLayerCustName>Customer Name</BodyFourthLayerCustName>
                            <BodyFourthLayerCustJob>Customer Ocupation</BodyFourthLayerCustJob>
                        </BodyFourthLayerRight>
                    </BodyFourthLayerSecondImgBox>

                    <BodyFourthLayerBottom>
                        <span>Assets MFB is a member of the Canary Point Corporate Services group</span>
                        <BodyFourthLayerBottomImg src={FifthImg} />
                    </BodyFourthLayerBottom>
                </BodyFourthLayer>
            </BodyContainer>
        </>
    )
};

export default HomeBody; 