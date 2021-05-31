import React from 'react';

import DashboardHeader from '../../components/dashboardUtil/DashboardHeader';
import LoanSecondary from '../../components/loanHome/LoanSecondary';
import { PageTransition } from '../../AppStyle';

const LoanSecondaryPage = () => {

    return (
        <>
            <PageTransition>
                <DashboardHeader />
                <LoanSecondary />
            </PageTransition>
        </>
    )
};

export default LoanSecondaryPage;