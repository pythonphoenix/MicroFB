import React from 'react';

import DashboardHeader from '../../components/dashboardUtil/DashboardHeader';
import LoanInfo from '../../components/loanHome/LoanInfo';
import { PageTransition } from '../../AppStyle';

const LoanInfoPage = () => {

    return (
        <>
            <PageTransition>
                <DashboardHeader />
                <LoanInfo />
            </PageTransition>
        </>
    )
};

export default LoanInfoPage;