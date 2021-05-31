import React from 'react';
import { FooterContainer, FooterCopyRight, FontSize, FooterAlignRow, AlignIconText, FooterDivisionBox, FooterDivisionItem, MapBottom, FooterDivisionTitle, FooterEachDivision, FooterLogoImg } from '../../styles/home/HomeFooterStyle';
import FooterLogo from '../../images/home/Assets Logo_Ubuntu_White.png';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import { Divider } from '@material-ui/core';
import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat:6.441479811936963, lng:3.468315110231486}}
        />    
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const HomeFooter = () => {

    return (
        <>
            <FooterContainer>
                <FooterDivisionBox>
                    <FooterEachDivision>
                        <FooterLogoImg src={FooterLogo} />
                    </FooterEachDivision>

                    <FooterEachDivision>
                        <FooterDivisionTitle>LEGAL</FooterDivisionTitle>
                        <FooterDivisionItem>Terms of Use</FooterDivisionItem>
                        <FooterDivisionItem>Privacy Policy</FooterDivisionItem>
                        <FooterDivisionItem>Cookie Policy</FooterDivisionItem>
                    </FooterEachDivision>

                    <FooterEachDivision>
                        <FooterDivisionTitle>PRODUCTS</FooterDivisionTitle>
                        <FooterDivisionItem>Deposits</FooterDivisionItem>
                        <FooterDivisionItem>Investment</FooterDivisionItem>
                        <FooterDivisionItem>Loans</FooterDivisionItem>
                    </FooterEachDivision>

                    <FooterEachDivision>
                        <FooterDivisionTitle>COMPANY</FooterDivisionTitle>
                        <FooterDivisionItem>What We Do</FooterDivisionItem>
                        <FooterDivisionItem>FAQs</FooterDivisionItem>
                        <FooterDivisionItem>Channels</FooterDivisionItem>
                        <FooterDivisionItem>Careers</FooterDivisionItem>
                    </FooterEachDivision>

                    <FooterEachDivision>
                        <FooterDivisionTitle>CONTACT</FooterDivisionTitle>
                        <FooterDivisionItem>
                            <FooterAlignRow>
                                <AlignIconText><CallRoundedIcon /> </AlignIconText>
                                <AlignIconText>+234 903 4030 559 </AlignIconText>
                            </FooterAlignRow>
                        </FooterDivisionItem>
                        <FooterDivisionItem>
                            <FooterAlignRow>
                                <AlignIconText><MailOutlineIcon /> </AlignIconText>
                                <AlignIconText>contact@assets-mfb.com</AlignIconText>
                            </FooterAlignRow>
                            </FooterDivisionItem>
                        <FooterDivisionItem>
                            <FooterAlignRow>
                                <AlignIconText><PinDropOutlinedIcon /> </AlignIconText> 
                                <AlignIconText><FontSize>17A, Dele Adedeji Street</FontSize></AlignIconText>
                            </FooterAlignRow>
                        </FooterDivisionItem>
                        <FooterDivisionItem>
                            <MapBottom>
                                <WrappedMap 
                                    googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyAlfb2AfNW1rSZce724JPi49llel93pifM&v=3.exp&libraries=geometry,drawing,places"}
                                    loadingElement = {<div style={{height: "100px"}} />}
                                    containerElement={<div style={{height:"100px"}} />}
                                    mapElement={<div style={{height:"100px"}} />}
                                />    
                            </MapBottom>

                        </FooterDivisionItem>
                    </FooterEachDivision>    
                </FooterDivisionBox>
                <Divider />
                <FooterDivisionBox style={{ textAlign: 'center', display: 'block', color:'white' }}>
                    <FooterCopyRight>Assets MFB copyright 2021. All rights reserved.</FooterCopyRight>
                </FooterDivisionBox>
            </FooterContainer>
        </>
    )
};

export default HomeFooter; 