import React from 'react';

import { Avatar, Divider, Grid } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import { CardSubtitle, CardTitle, LoanSelectField, CardTextField, CardTextFieldName } from '../../styles/loanHome/LoanBasicStyle';
import { EachCard, LayerContainer, UserContainer } from '../../styles/loanHome/LoanHomeStyle';
import { CardButton3, CardButton4, CardTextFieldDisabled } from '../../styles/loanHome/LoanInfoStyle';
import { ProfileAvatar, ProfileCardInner, ProfileCardSubtitle, ProfileCardTitle, ProfileInfoCardLeft, ProfileInfoCardRight, ProfilePageDivider, ProfilePageTitle } from '../../styles/profile/ProfileStyle';

const SetupProfile = () => {

    return (
        <>
            <UserContainer>
                <LayerContainer>
                    <ProfilePageTitle>Profile Setup</ProfilePageTitle>
                    <ProfilePageDivider> <Divider /></ProfilePageDivider>

                    <Grid container spacing={4} justify="center">
                        <Grid item lg={4} md={4} xs={12} sm={12}>

                            <Grid container spacing={3}>
                                <Grid item lg={12} md={12} xs={12} sm={6}>
                                    <EachCard style={{ height: '45vh' }}>
                                        <ProfileCardInner style={{ display: 'flex' }}>
                                            <ProfileInfoCardLeft>
                                                <ProfileAvatar>
                                                    <Avatar style={{ width: '100%', height: '100%' }} />
                                                </ProfileAvatar>
                                                <CardButton3>Upload Photo</CardButton3>
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
                            <EachCard>
                                <ProfileCardInner>
                                    <Grid container spacing={3}>
                                        <Grid item lg={12} md={12} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTitle>Basic Information</CardTitle>
                                            <CardSubtitle>This information can be edited from your profile page</CardSubtitle>
                                            <Divider />
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>First Name</CardTextFieldName>
                                            <CardTextField />
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Last Name</CardTextFieldName>
                                            <CardTextField />
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Email</CardTextFieldName>
                                            <CardTextField />
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Phone Number</CardTextFieldName>
                                            <CardTextField />
                                        </Grid>

                                        <Grid item lg={12} md={12} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Home Address</CardTextFieldName>
                                            <CardTextField />
                                        </Grid>

                                        <Grid item lg={12} md={12} xs={12} sm={12} style={{ marginTop: '2em', marginBottom: '-1.5em' }}>
                                            <Divider />
                                        </Grid>

                                        <Grid item lg={4} md={4} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Title</CardTextFieldName>
                                            <LoanSelectField>
                                                <option>Mr</option>
                                                <option>Mrs</option>
                                            </LoanSelectField>
                                        </Grid>

                                        <Grid item lg={4} md={4} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Date of Birth</CardTextFieldName>
                                            <CardTextField type='date' />
                                        </Grid>

                                        <Grid item lg={4} md={4} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Middle Name</CardTextFieldName>
                                            <CardTextField />
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>State of Origin</CardTextFieldName>
                                            <LoanSelectField>
                                                <option>Ondo</option>
                                            </LoanSelectField>
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Local Government of Origin</CardTextFieldName>
                                            <LoanSelectField>
                                                <option>..</option>
                                            </LoanSelectField>
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Nationality</CardTextFieldName>
                                            <LoanSelectField>
                                                <option>Nigerian</option>
                                            </LoanSelectField>
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>BVN</CardTextFieldName>
                                            <CardTextField />
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Gender</CardTextFieldName>
                                            <LoanSelectField>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </LoanSelectField>
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                            <CardTextFieldName>Marital Status</CardTextFieldName>
                                            <LoanSelectField>
                                                <option>Married</option>
                                                <option>Single</option>
                                                <option>Divorced</option>
                                            </LoanSelectField>
                                        </Grid>

                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-2em' }}>
                                        </Grid>
                                        <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-2em' }}>
                                            <CardButton4>Save & Continue</CardButton4>
                                        </Grid>

                                    </Grid>
                                </ProfileCardInner>
                            </EachCard>

                        </Grid>
                    </Grid>

                </LayerContainer>
            </UserContainer>
        </>
    )
};

export default SetupProfile;