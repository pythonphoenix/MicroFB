import React from 'react';

import DashboardHeader from '../../components/dashboardUtil/DashboardHeader';
import LoanBasic from '../../components/loanHome/LoanBasic';

import { PageTransition } from '../../AppStyle';

const LoanBasicInfoPage = () => {

    return (
        <>
            <PageTransition>
                <DashboardHeader />
                <LoanBasic />
            </PageTransition>
        </>
    )
};

export default LoanBasicInfoPage;