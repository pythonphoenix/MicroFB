import React from 'react';

import BankingFooter from '../../components/account/BankingFooter';
import BankingHeader from '../../components/account/BankingHeader';
import BankLogin from '../../components/account/BankLogin';

import { PageTransition } from '../../AppStyle';
const BankLoginPage = () => {

    return (
        <>
            <PageTransition>
                <BankingHeader />
                <BankLogin />
                <BankingFooter />
            </PageTransition>
        </>
    )
};

export default BankLoginPage;