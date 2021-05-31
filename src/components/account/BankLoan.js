import React from 'react';

import { BankContainer, BankContainerInner, BankContainerLeft, BankContainerRight, BankContainerTitle, BankForm, BankFormBottom, BankFormInner, BankFormTitle, BankFormBottomText, BankImg1, BankImg2, BankImg3 } from '../../styles/account/BankBodyStyle';
import AcctImg1 from '../../images/account/pexels-ismail-seghosime-5671470.png';
import AcctImg2 from '../../images/account/pexels-international-fund-for-animal-welfare-5487069.png';
import AcctImg3 from '../../images/account/pexels-picha-stock-3894377.png';
import { CardTextField, CardTextFieldName } from '../../styles/loanHome/LoanBasicStyle';
import { CardButton } from '../../styles/loanHome/LoanHomeStyle';
import { Link } from 'react-router-dom';

const BankLoan = () => {

    return (
        <>
            <BankContainer>
                <BankContainerTitle>Welcome to AMFB</BankContainerTitle>
                <BankContainerInner>
                    <BankContainerLeft>
                        <BankImg1 src={AcctImg1} />
                        <BankImg2 src={AcctImg2} />
                        <BankImg3 src={AcctImg3} />
                    </BankContainerLeft>
                    <BankContainerRight>
                        <BankForm>
                            <BankFormInner>
                                <BankFormTitle>Loan Application Form</BankFormTitle>

                                <CardTextFieldName>First Name</CardTextFieldName>
                                <CardTextField type='text' placeholder='First Name' />

                                <CardTextFieldName>Last Name</CardTextFieldName>
                                <CardTextField type='text' placeholder='Last Name' />

                                <CardTextFieldName>Email</CardTextFieldName>
                                <CardTextField type='text' placeholder='Email Address' />

                                <CardTextFieldName>Phone Number</CardTextFieldName>
                                <CardTextField type='text' placeholder='' />

                                <CardTextFieldName>Date of Birth</CardTextFieldName>
                                <CardTextField type='date' />

                                <CardTextFieldName>Employer Sector</CardTextFieldName>
                                <CardTextField type='' />

                                <CardTextFieldName>Loan Amount</CardTextFieldName>
                                <CardTextField type='' />

                                <CardTextFieldName>Loan Tenor (Months)</CardTextFieldName>
                                <CardTextField type='' />

                                <BankFormBottom>
                                    <CardButton>Submit</CardButton>
                                </BankFormBottom>
                            </BankFormInner>
                        </BankForm>

                        <BankFormBottom style={{ marginTop: '1em' }}>
                            <Link to='/account/login/' style={{ textDecoration: 'none' }}> <BankFormBottomText>Already have an account? <span style={{ color: '#5482F7' }}>Login</span></BankFormBottomText></Link>
                        </BankFormBottom>
                    </BankContainerRight>
                </BankContainerInner>
            </BankContainer>
        </>
    )
};

export default BankLoan;