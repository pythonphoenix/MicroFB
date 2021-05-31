import React from 'react';
import { BankHeader, BankHeaderLogo, BankHeaderLogoBox } from '../../styles/account/BankHeaderStyle';
import Logo from '../../images/home/Assets Logo_Ubuntu.png';

const BankingHeader = () => {
    return (
        <>
            <BankHeader>
                <BankHeaderLogoBox>
                    <BankHeaderLogo src={Logo} />
                </BankHeaderLogoBox>
            </BankHeader>
        </>
    )
};

export default BankingHeader;