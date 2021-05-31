import React from 'react';

import DashboardHeader from '../../components/dashboardUtil/DashboardHeader';
import SetupProfile from '../../components/profile/SetupProfile';
import { PageTransition } from '../../AppStyle';

const SetupProfilePage = () => {

    return (
        <>
            <PageTransition>
                <DashboardHeader />
                <SetupProfile />
            </PageTransition>
        </>
    )
};

export default SetupProfilePage;