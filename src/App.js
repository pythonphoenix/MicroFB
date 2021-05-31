import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PageTransition } from './AppStyle';
import { AccountLoginPage, AccountOpenPage, AccountLoanPage } from './pages/account';
import InternetBankingPage from './pages/banking/InternetBankingPage';

import { HomePage } from './pages/home';
import { LoanBasicInfoPage, LoanHomePage, LoanInfoPage, LoanSecondaryPage } from './pages/loanHome';
import { SetupProfilePage, ViewProfilePage } from './pages/profile';

const App = () => {
  return (
    <div className="App">
      <Router>
        <PageTransition>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/dashboard/info/basic/" component={LoanHomePage} />
            <Route exact path="/dashboard/info/loan/" component={LoanBasicInfoPage} />
            <Route exact path="/dashboard/info/loan-apply/" component={LoanInfoPage} />
            <Route exact path="/dashboard/info/secondary/" component={LoanSecondaryPage} />
          
            <Route exact path="/account/login/" component={AccountLoginPage} />
            <Route exact path="/account/open/" component={AccountOpenPage} />
            <Route exact path="/account/loan/" component={AccountLoanPage} />

            <Route exact path="/dashboard/banking/" component={InternetBankingPage} />

            <Route exact path="/dashboard/profile/onboarding/" component={SetupProfilePage} />
            <Route exact path="/dashboard/*" component={ViewProfilePage} />

          </Switch>
        </PageTransition>
      </Router>
    </div>
  );
};

export default App;
