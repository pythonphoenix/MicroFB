import React from 'react';
import LoadHome from '../../components/loanHome/LoanHome';
import { PageTransition } from '../../AppStyle';

const LoanHomePage = () => {

    return (
        <>
            <PageTransition>
                <LoadHome />
            </PageTransition>
        </>
    )
};

export default LoanHomePage;