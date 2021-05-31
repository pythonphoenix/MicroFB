import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Divider, Grid } from '@material-ui/core';

import { LoanCurrentRoute, CardTextField, LoanSelectField, CardTextFieldName, LoanCurrentSteps, CardTitle, CardSubtitle } from '../../styles/loanHome/LoanBasicStyle';
import { EachCard, LayerContainer, UserContainer } from '../../styles/loanHome/LoanHomeStyle';
import { CardButton3, CardButton4, CardTextFieldDisabled } from '../../styles/loanHome/LoanInfoStyle';
import { LoanStepper } from './LoanStepper';

const LoanInfo = () => {

    return (
        <>
            <UserContainer>
                <LayerContainer>
                    <LoanCurrentRoute>Loans {'>'} <span style={{ color: '#1E3264' }}>Loan Application</span></LoanCurrentRoute>

                    <LoanCurrentSteps>
                        <LoanStepper step={1} />
                    </LoanCurrentSteps>

                    <EachCard>
                        <Container>
                            <Grid container justify="center">
                                <Grid container lg={12} md={12} xs={12} sm={12} spacing={3}>

                                    <Grid item lg={12} md={12} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTitle>Loan Information</CardTitle>
                                        <CardSubtitle>Fill in the details for your loan request.</CardSubtitle>
                                        <Divider />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Loan Type</CardTextFieldName>
                                        <CardTextField />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Loan Amount</CardTextFieldName>
                                        <CardTextField />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Loan Duration</CardTextFieldName>
                                        <LoanSelectField>
                                            <option>..</option>
                                            <option>..</option>
                                        </LoanSelectField>
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Interest Rate</CardTextFieldName>
                                        <CardTextFieldDisabled disabled />
                                    </Grid>

                                    <Grid item lg={12} md={12} xs={12} sm={12} style={{ marginBottom: '-1.5em' }}>
                                        <CardTextFieldName>Loan Repayment</CardTextFieldName>
                                        <CardTextFieldDisabled disabled />
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-2em' }}>
                                        <Link to='/dashboard/info/loan/'><CardButton3>Previous</CardButton3></Link>
                                    </Grid>

                                    <Grid item lg={6} md={6} xs={12} sm={12} style={{ marginBottom: '-2em' }}>
                                        <Link to='/dashboard/info/secondary/'><CardButton4>Continue</CardButton4></Link>
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

export default LoanInfo;