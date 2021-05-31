import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Divider, Grid } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { EachCard, EachCardTitle, CardLeft, CardRight, EachCardSegment, LayerContainer, UserContainer, CardButton, CalculatorCardTitle, CalculatorBox, CalculatorField, CalculatorInfo, CardDataSegment, CardSelectSort, CalculatorSlider } from '../../styles/loanHome/LoanHomeStyle';
import DashboardHeader from '../dashboardUtil/DashboardHeader';

const LoadHome = (props) => {

    const columns = [
        { field: 'id', headerName: 'Loan ID', width: 200 },
        { field: 'loanAmount', headerName: 'Loan Amount', width: 200 },
        { field: 'type', headerName: 'Type', width: 200 },
        { field: 'desc', headerName: 'Description', width: 250 },
        { field: 'date', headerName: 'Date', width: 200 }

    ];

    const rows = [
        { id: 885468346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885468347, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885468349, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885468346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885468346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885438346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 882468346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885568346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885468346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 895468346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 899468346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 891468346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 895478346, loanAmount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
    ];

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
            <DashboardHeader />
            <UserContainer>
                <LayerContainer>

                    <Grid container spacing={4} justify="center">
                        <Grid item lg={6} md={6} xs={12} sm={12}>

                            <Grid container spacing={3}>
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
                            </Grid>

                            <Grid container style={{ marginTop: '2em' }}>
                                <Grid item lg={12} md={12} xs={12} sm={12}>
                                    <EachCard style={{ height: '46.5vh' }}>
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
                                            <Link to='/dashboard/info/loan/'><CardButton>Apply for a Loan</CardButton></Link>
                                        </EachCardSegment>
                                    </EachCard>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item lg={6} md={6} xs={12} sm={12}>
                            <Grid item lg={12} md={12} xs={12} sm={12}>
                                <EachCard style={{ height: '60vh' }}>
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
                                        <CalculatorSlider type="range" min="1" max="12" onChange={handleLoanDuration} />
                                        <CalculatorField value={duration + ' Month(s)'} readOnly />
                                    </CalculatorBox>

                                    <CalculatorBox>
                                        <CalculatorInfo>Interest Rate : <b style={{ color: 'rgb(30, 50, 100' }}>6.5%</b></CalculatorInfo>
                                        <CalculatorInfo>Monthly Repayment : <b style={{ color: 'rgb(30, 50, 100' }}>N110,000</b></CalculatorInfo>
                                        <CalculatorInfo>Total Repayment : <b style={{ color: 'rgb(30, 50, 100' }}>N550,000</b></CalculatorInfo>
                                    </CalculatorBox>
                                </EachCard>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container style={{ marginTop: '2em' }}>
                        <Grid item lg={12} md={12} xs={12} sm={12}>
                            <EachCard>
                                <EachCardSegment>
                                    <CardLeft><b style={{ color: 'rgb(30, 50, 100)' }}>Loan History</b></CardLeft>
                                    <CardRight><b>Sort by:</b> <CardSelectSort>
                                        <option>All</option></CardSelectSort></CardRight>
                                </EachCardSegment>
                                <Divider />
                                <CardDataSegment>
                                    <DataGrid rows={rows} columns={columns} pdateSize={10} checkboxSelection />
                                </CardDataSegment>
                            </EachCard>
                        </Grid>
                    </Grid>

                </LayerContainer>
            </UserContainer>
        </>
    )
};

export default LoadHome;