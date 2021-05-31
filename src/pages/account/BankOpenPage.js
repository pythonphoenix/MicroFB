import React from 'react';

import BankingFooter from '../../components/account/BankingFooter';

import BankingHeader from '../../components/account/BankingHeader';
import BankOpen from '../../components/account/BankOpen';

import { PageTransition } from '../../AppStyle';

const BankOpenPage = () => {

    return (
        <>
            <PageTransition>
                <BankingHeader />
                <BankOpen />
                <BankingFooter />
            </PageTransition>
        </>
    )
};

export default BankOpenPage;