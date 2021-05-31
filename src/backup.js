import { Card, CardActionArea, CardContent, Divider, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";

import { EachCard, EachCardTitle, LoanCardBottom, CardLeft, LoanCardMiddle, CardRight, EachCardSegment, LayerContainer, LayerContainerLeft, LayerContainerRight, LoanHomeSecondLayer, UserContainer, CardButton, CalculatorCardTitle, CalculatorBox, CalculatorField, CalculatorInfo } from '../../styles/loanHome/LoanHomeStyle';
import DashboardHeader from '../dashboardUtil/DashboardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow:5
        // width: '100%',
        // justifyContent: 'space-between'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const LoadHome = (props, { className, ...rest }) => {

    const classes = useStyles();
    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>item</Paper>
                </Grid>
            </React.Fragment>
        );
    }
    return (
        <>
            <DashboardHeader />
            <UserContainer>
                <LayerContainer>
                    <LayerContainerLeft>                    <Grid container spacing={3} lg={12} md={12} xs={12} sm={12}>

                        <Grid container lg={6} md={6} xs={12} sm={12} spacing={3}>

                            <Grid item lg={4} md={4} xs={12} sm={12}>
                                <EachCard>
                                    <EachCardTitle>Loan Product 1</EachCardTitle>
                                </EachCard>
                            </Grid>

                            <Grid item lg={4} md={4} xs={12} sm={12}>
                                <EachCard>
                                    <EachCardTitle>Loan Product 2</EachCardTitle>
                                </EachCard>
                            </Grid>

                            <Grid item lg={4} md={4} xs={12} sm={12}>
                                <EachCard>
                                    <EachCardTitle>Loan Product 3</EachCardTitle>
                                </EachCard>
                            </Grid>


                            <Grid item lg={12} md={12} xs={12} sm={12}>
                                <EachCard>
                                    <EachCardSegment>
                                        <CardLeft><b style={{ color: 'rgb(30, 50, 100)' }}>Loan Status</b></CardLeft>
                                        <CardRight><b>None:</b> No active loans</CardRight>
                                    </EachCardSegment>
                                    <Divider />
                                    <EachCardSegment>
                                        <CardLeft>Loan Amount</CardLeft>
                                        <CardRight>N0</CardRight>
                                    </EachCardSegment>
                                    <Divider />
                                    <EachCardSegment>
                                        <CardLeft>Due Date</CardLeft>
                                        <CardRight>N0</CardRight>
                                    </EachCardSegment>
                                    <Divider />
                                    <EachCardSegment style={{ textAlign: 'center', height: 'fit-content' }}>
                                        <CardButton>Apply for a Loan</CardButton>
                                    </EachCardSegment>
                                </EachCard>
                            </Grid>
                        </Grid>


                        <Grid container lg={6} md={6} xs={12} sm={12} spacing={3}>
                            <Grid item lg={12} md={12} xs={12} sm={12}>
                                <EachCard>
                                    <EachCardSegment style={{ marginBottom: '-2em' }}>
                                        <h5 style={{ color: 'rgb(30, 50, 100)', textAlign: 'center' }}>Loan Calculator</h5>
                                    </EachCardSegment>

                                    <CalculatorBox>
                                        <CalculatorCardTitle>Loan Amount:</CalculatorCardTitle>
                                        <CalculatorField />
                                    </CalculatorBox>

                                    <CalculatorBox style={{ marginBottom: '2em' }}>
                                        <CalculatorCardTitle>Loan Duration:</CalculatorCardTitle>
                                        <CalculatorField />
                                    </CalculatorBox>

                                    <CalculatorBox>
                                        <CalculatorInfo>Interest Rate : <b style={{ color: 'rgb(30, 50, 100' }}>6.5%</b></CalculatorInfo>
                                        <CalculatorInfo>Monthly Repayment : <b style={{ color: 'rgb(30, 50, 100' }}>N110,000</b></CalculatorInfo>
                                        <CalculatorInfo>Total Repayment : <b style={{ color: 'rgb(30, 50, 100' }}>N550,000</b></CalculatorInfo>
                                    </CalculatorBox>
                                </EachCard>
                            </Grid>
                        </Grid>

                        {/* 
                        <Grid xs={12} lg={6} xl={6} md={6}>

                            <LayerContainerRight>

                            </LayerContainerRight>
                        </Grid> */}

                    </Grid>
                    </LayerContainerLeft>

                </LayerContainer>
                <LoanHomeSecondLayer>

                </LoanHomeSecondLayer>
            </UserContainer>
        </>
    )
};

export default LoadHome;