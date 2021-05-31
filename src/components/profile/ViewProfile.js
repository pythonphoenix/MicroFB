import React from 'react';

import { Link } from 'react-router-dom';
import { Divider, Grid } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';

import { CardTextField, CardTextFieldName } from '../../styles/loanHome/LoanBasicStyle';
import { EachCard, LayerContainer, UserContainer } from '../../styles/loanHome/LoanHomeStyle';
import { CardButton3, CardButton4, CardTextFieldDisabled } from '../../styles/loanHome/LoanInfoStyle';
import { ProfileCardInner, ProfileCardInnerLeft, ProfileCardInnerRight, ProfileCardSubtitle, ProfileCardTitle, ProfileInfoCardLeft, ProfileInfoCardRight, ProfilePageDivider, ProfilePageTitle } from '../../styles/profile/ProfileStyle';
import { UserImg } from '../../styles/dashboardUtil/dashboardHeaderStyle';
import dummyImg from '../../images/home/homeFirst.jpg';

const ViewProfile = () => {

    return (
        <>
            <UserContainer>
                <LayerContainer>
                    <ProfilePageTitle>Your Profile</ProfilePageTitle>
                    <ProfilePageDivider> <Divider /></ProfilePageDivider>

                    <Grid container spacing={4} justify="center">
                        <Grid item lg={4} md={4} xs={12} sm={12}>

                            <Grid container spacing={3}>
                                <Grid item lg={12} md={12} xs={12} sm={6}>
                                    <EachCard style={{ height: '45vh' }}>
                                        <ProfileCardInner style={{ display: 'flex' }}>
                                            <ProfileInfoCardLeft>
                                                <UserImg src={dummyImg} />
                                                <CardButton3>Update Photo</CardButton3>
                                            </ProfileInfoCardLeft>
                                            <ProfileInfoCardRight>
                                                <ProfileCardTitle>John Adeniyi</ProfileCardTitle>
                                                <ProfileCardSubtitle>mail@mail.com</ProfileCardSubtitle>
                                                <ProfileCardSubtitle>07076837583</ProfileCardSubtitle>

                                            </ProfileInfoCardRight>
                                        </ProfileCardInner>
                                    </EachCard>
                                </Grid>

                                <Grid item lg={12} md={12} xs={12} sm={6}>
                                    <EachCard style={{ height: '45vh' }}>
                                        <ProfileCardInner style={{ marginBottom: '1.5em' }}>
                                            <ProfileCardTitle>Account Details</ProfileCardTitle>
                                            <ProfileCardSubtitle>Your account number will be auto-generated</ProfileCardSubtitle>

                                            <CardTextFieldName>Account Type <InfoOutlinedIcon style={{ fontSize: '1em', color: '#5482F7' }} /></CardTextFieldName>
                                            <CardTextField type='text' />

                                            <CardTextFieldName>Account Number</CardTextFieldName>
                                            <CardTextFieldDisabled disabled />
                                        </ProfileCardInner>
                                    </EachCard>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item lg={8} md={8} xs={12} sm={12}>
                            <Grid item lg={12} md={12} xs={12} sm={12}>
                                <EachCard>
                                    <Link to='/dashboard/profile/onboarding/'>
                                        <ProfileCardInner>
                                            <ProfileCardInnerLeft>
                                                <ProfileCardTitle>Basic Information </ProfileCardTitle>
                                                <ProfileCardSubtitle>Review and edit your basic information</ProfileCardSubtitle>
                                            </ProfileCardInnerLeft>
                                            <ProfileCardInnerRight>
                                                <ArrowRightOutlinedIcon />
                                            </ProfileCardInnerRight>
                                            <Divider />
                                        </ProfileCardInner>
                                    </Link>
                                    <ProfileCardInner>
                                        <ProfileCardInnerLeft>
                                            <ProfileCardTitle>Next of Kin Information </ProfileCardTitle>
                                            <ProfileCardSubtitle>Review and edit your next of kin information</ProfileCardSubtitle>
                                        </ProfileCardInnerLeft>
                                        <ProfileCardInnerRight>
                                            <ArrowRightOutlinedIcon />
                                        </ProfileCardInnerRight>
                                        <Divider />
                                    </ProfileCardInner>

                                    <ProfileCardInner>
                                        <ProfileCardInnerLeft>
                                            <ProfileCardTitle>Employment Information </ProfileCardTitle>
                                            <ProfileCardSubtitle>Review and edit your employment information</ProfileCardSubtitle>
                                        </ProfileCardInnerLeft>
                                        <ProfileCardInnerRight>
                                            <ArrowRightOutlinedIcon />
                                        </ProfileCardInnerRight>
                                        <Divider />
                                    </ProfileCardInner>

                                    <ProfileCardInner>
                                        <Link to='/dashboard/banking/'>
                                            <ProfileCardInnerLeft>
                                                <ProfileCardTitle>Banking Information </ProfileCardTitle>
                                                <ProfileCardSubtitle>Review  your banking information</ProfileCardSubtitle>
                                            </ProfileCardInnerLeft>
                                            <ProfileCardInnerRight>
                                                <ArrowRightOutlinedIcon />
                                            </ProfileCardInnerRight>
                                        </Link>
                                    </ProfileCardInner>

                                </EachCard>
                            </Grid>

                            <Grid container spacing={3}>
                                <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-2em' }}>
                                </Grid>
                                <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-2em' }}>
                                    <CardButton4>Submit</CardButton4>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                </LayerContainer>
            </UserContainer>
        </>
    )
};

export default ViewProfile;