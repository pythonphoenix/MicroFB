import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Divider, Grid } from '@material-ui/core';


import { CardButton2, LoanCurrentRoute, CardTextField, LoanSelectField, CardTextFieldName, LoanCurrentSteps, CardTitle, CardSubtitle } from '../../styles/loanHome/LoanBasicStyle';
import { EachCard, LayerContainer, UserContainer } from '../../styles/loanHome/LoanHomeStyle';
import { LoanStepper } from './LoanStepper';


const LoanBasic = () => {

    return (
        <>
            <UserContainer>
                <LayerContainer>
                    <LoanCurrentRoute>Loans {'>'} <span style={{ color: '#1E3264' }}>Loan Application</span></LoanCurrentRoute>

                    <LoanCurrentSteps>
                        <LoanStepper step={0}/>
                    </LoanCurrentSteps>

                    <EachCard>
                        <Container>
                            <Grid container justify="center">
                                <Grid container lg={12} md={12} xs={12} sm={12} spacing={3}>

                                    <Grid item lg={12} md={12} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTitle>Basic Information</CardTitle>
                                        <CardSubtitle>This information is pre-filled from your profile page, update where necessary</CardSubtitle>
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

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>

                                    </Grid>
                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <Link to='/dashboard/info/loan-apply'><CardButton2>Continue</CardButton2></Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </EachCard>
                </LayerContainer>
            </UserContainer>
        </>
    )
};

export default LoanBasic;