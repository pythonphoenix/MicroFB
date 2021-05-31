import React from 'react';

import BankingFooter from '../../components/account/BankingFooter';
import BankingHeader from '../../components/account/BankingHeader';
import BankLoan from '../../components/account/BankLoan';

import { PageTransition } from '../../AppStyle';

const BankLoanPage = () => {

    return (
        <>
            <PageTransition>
                <BankingHeader />
                <BankLoan />
                <BankingFooter />
            </PageTransition>
        </>
    )
};

export default BankLoanPage;