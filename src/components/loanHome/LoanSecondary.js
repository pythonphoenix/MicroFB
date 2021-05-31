import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Divider, Grid } from '@material-ui/core';

import { LoanCurrentRoute, CardTextField, CardTextFieldName, LoanCurrentSteps, CardTitle, CardSubtitle } from '../../styles/loanHome/LoanBasicStyle';
import { EachCard, LayerContainer, UserContainer } from '../../styles/loanHome/LoanHomeStyle';
import { CardButton3, CardButton4 } from '../../styles/loanHome/LoanInfoStyle';
import { LoanStepper } from './LoanStepper';

const LoanSecondary = () => {

    return (
        <>
            <UserContainer>
                <LayerContainer>
                    <LoanCurrentRoute>Loans {'>'} <span style={{ color: '#1E3264' }}>Loan Application</span></LoanCurrentRoute>

                    <LoanCurrentSteps>
                        <LoanStepper step={2} />
                    </LoanCurrentSteps>

                    <EachCard>
                        <Container>
                            <Grid container justify="center">
                                <Grid container lg={12} md={12} xs={12} sm={12} spacing={3}>

                                    <Grid item lg={12} md={12} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTitle>Secondary Information</CardTitle>
                                        <CardSubtitle>This information can be edited from your profile page.</CardSubtitle>
                                        <Divider />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Next of Kin Name</CardTextFieldName>
                                        <CardTextField />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Next of Kin Relationship</CardTextFieldName>
                                        <CardTextField />
                                    </Grid>

                                    <Grid item lg={12} md={12} xs={12} sm={12} style={{ marginTop: '2em', marginBottom: '-1.5em' }}>
                                        <Divider />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Next of Kin Email</CardTextFieldName>
                                        <CardTextField type='email' />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Next of Kin Phone Number</CardTextFieldName>
                                        <CardTextField type='text' />
                                    </Grid>

                                    <Grid item lg={12} md={12} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Next of Kin Address</CardTextFieldName>
                                        <CardTextField type='text' />
                                    </Grid>

                                    <Divider />

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Spouse/Family Phone Number</CardTextFieldName>
                                        <CardTextField type='text' />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Colleague's Phone Number</CardTextFieldName>
                                        <CardTextField type='text' />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Lorem Ipsum</CardTextFieldName>
                                        <CardTextField type='text' />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Lorem Ipsum</CardTextFieldName>
                                        <CardTextField type='text' />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-2em' }}>
                                        <Link to='/dashboard/info/loan-apply/'><CardButton3>Previous</CardButton3></Link>
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-2em' }}>
                                        <CardButton4>Submit</CardButton4>
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

export default LoanSecondary;