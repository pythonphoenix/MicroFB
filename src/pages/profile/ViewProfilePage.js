import React from 'react';

import DashboardHeader from '../../components/dashboardUtil/DashboardHeader';
import ViewProfile from '../../components/profile/ViewProfile';
import { PageTransition } from '../../AppStyle';

const ViewProfilePage = () => {

    return (
        <>
            <PageTransition>
                <DashboardHeader />
                <ViewProfile />
            </PageTransition>
        </>
    )
};

export default ViewProfilePage;