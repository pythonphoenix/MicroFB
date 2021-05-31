import React from 'react';

import { Link } from 'react-router-dom';
import { Divider, Grid } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { EachCard, EachCardTitle, CardLeft, CardRight, EachCardSegment, LayerContainer, UserContainer, CardButton, CardDataSegment, CardSelectSort } from '../../styles/loanHome/LoanHomeStyle';
import DashboardHeader from '../dashboardUtil/DashboardHeader';

const InternetBanking = (props) => {

    const columns = [
        { field: 'id', headerName: 'Transaction ID', width: 200 },
        { field: 'amount', headerName: 'Amount', width: 200 },
        { field: 'type', headerName: 'Type', width: 200 },
        { field: 'desc', headerName: 'Description', width: 250 },
        { field: 'date', headerName: 'Date', width: 200 }

    ];

    const rows = [
        { id: 885468346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885468347, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885468349, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885468346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885468346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885438346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 882468346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885568346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 885468346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 895468346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 899468346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 891468346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
        { id: 895478346, amount: 'N50,000', type: 'Credit', desc: 'MicroLoan', date: '04/28/2018' },
    ];

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
                                        <Link to='/dashboard/info/loan/' style={{ textDecoration: 'none' }}><EachCardTitle>Apply for a Loan</EachCardTitle></Link>
                                    </EachCard>
                                </Grid>

                                <Grid item lg={4} md={4} xs={12} sm={12}>
                                    <EachCard>
                                        <EachCardTitle>Transfer Money</EachCardTitle>
                                    </EachCard>
                                </Grid>

                                <Grid item lg={4} md={4} xs={12} sm={12}>
                                    <EachCard>
                                        <EachCardTitle>Bill Payment</EachCardTitle>
                                    </EachCard>
                                </Grid>
                            </Grid>

                            <Grid container style={{ marginTop: '2em' }}>
                                <Grid item lg={12} md={12} xs={12} sm={12}>
                                    <EachCard style={{ height: '46.5vh' }}>
                                        <EachCardSegment>
                                            <CardLeft><b style={{ color: 'rgb(30, 50, 100)' }}>Profile</b></CardLeft>
                                        </EachCardSegment>
                                        <Divider />
                                        <EachCardSegment>
                                            <CardLeft>Account Type</CardLeft>
                                            <CardRight>My Assets Savings</CardRight>
                                        </EachCardSegment>
                                        <Divider />
                                        <EachCardSegment>
                                            <CardLeft>Account Number</CardLeft>
                                            <CardRight>90482749374</CardRight>
                                        </EachCardSegment>
                                        <Divider />
                                        <EachCardSegment>
                                            <CardLeft>Available Balance</CardLeft>
                                            <CardRight><b style={{ fontWeight: 'bolder' }}>N500,000</b></CardRight>
                                        </EachCardSegment>
                                        <Divider />
                                        <EachCardSegment>
                                            <CardLeft>BVN</CardLeft>
                                            <CardRight>7582927463847</CardRight>
                                        </EachCardSegment>
                                    </EachCard>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item lg={6} md={6} xs={12} sm={12}>

                            <Grid item lg={12} md={12} xs={12} sm={12}>

                                <EachCard style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
                                    <CardButton style={{ height: '4em', marginTop: '0em', float: 'right' }}>Update KYC</CardButton>
                                </EachCard>

                                <EachCard style={{ height: '47vh', marginTop: '1em', float: 'left' }}>

                                    <EachCardSegment>
                                        <CardLeft><b style={{ color: 'rgb(30, 50, 100)' }}>Loan Status</b></CardLeft>
                                    </EachCardSegment>
                                    <Divider />
                                    <EachCardSegment>
                                        <CardLeft>You have no active loans</CardLeft>
                                    </EachCardSegment>
                                </EachCard>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container style={{ marginTop: '2em' }}>
                        <Grid item lg={12} md={12} xs={12} sm={12}>
                            <EachCard>
                                <EachCardSegment>
                                    <CardLeft><b style={{ color: 'rgb(30, 50, 100)' }}>Transactions: <span style={{ color: '#9EA0A5', marginLeft: '0.5em' }}>300 total</span></b></CardLeft>
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

export default InternetBanking;