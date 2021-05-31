import React, { useState } from 'react';

import { useForm } from "react-hook-form";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BankContainer, BankContainerInner, BankContainerLeft, BankContainerRight, BankContainerTitle, BankForm, BankFormBottom, BankFormInner, BankFormTitle, BankFormBottomText, BankImg1, BankImg2, BankImg3 } from '../../styles/account/BankBodyStyle';
import AcctImg1 from '../../images/account/pexels-ismail-seghosime-5671470.png';
import AcctImg2 from '../../images/account/pexels-international-fund-for-animal-welfare-5487069.png';
import AcctImg3 from '../../images/account/pexels-picha-stock-3894377.png';
import { CardTextField, CardTextFieldName } from '../../styles/loanHome/LoanBasicStyle';
import { CardLoadingButton } from '../../styles/loanHome/LoanHomeStyle';
import { Link } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';

import LoginAccountAPI from '../../adapters/account/LoginAccountAPI';

const BankLogin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [buttonIcon, setButtonIcon] = useState(false);

    const onSubmit = formInput => {
        setButtonIcon(true);

        let getResp = LoginAccountAPI(formInput);

        getResp.then(({ isError, errorMessage, data }) => {

            if (isError) {
                console.log('err', errorMessage);
                setButtonIcon(false);
                toast.error(errorMessage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                console.log('suc', data);

                setButtonIcon(false);
                toast(data.msg, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        })
    }

    return (
        <>
            {/* --- Import the Toastify component here --- */}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

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
                                <BankFormTitle>Internet Banking Portal</BankFormTitle>
                                <form
                                    noValidate
                                    onSubmit={handleSubmit(onSubmit)}
                                >

                                    <CardTextFieldName>Email</CardTextFieldName>
                                    <CardTextField type='text' name='email' placeholder='Email' {...register("email", { required: true })} />
                                    {errors.email && <span style={{ color: 'red', fontSize: '0.9em' }}>This field is required</span>}


                                    <CardTextFieldName>Password</CardTextFieldName>
                                    <CardTextField type='password' name='password' placeholder='Password' {...register("password", { required: true })} />
                                    {errors.password && <span style={{ color: 'red', fontSize: '0.9em' }}>This field is required</span>}

                                    <BankFormBottom>
                                        <CardLoadingButton type='submit' disabled={buttonIcon}>Login {buttonIcon && (<CircularProgress fontSize='small' />)} </CardLoadingButton>
                                        <BankFormBottomText>
                                            <Link to='' style={{ textDecoration: 'none' }}>Forgot Password?</Link>
                                        </BankFormBottomText>
                                    </BankFormBottom>
                                </form>
                            </BankFormInner>
                        </BankForm>

                        <BankFormBottom style={{ marginTop: '1em' }}>
                            <Link to='/account/open/' style={{ textDecoration: 'none' }}> <BankFormBottomText>New to Assets MFB? <span style={{ color: '#5482F7' }}>Open an Account here</span></BankFormBottomText></Link>
                        </BankFormBottom>
                    </BankContainerRight>
                </BankContainerInner>
            </BankContainer>
        </>
    )
};

export default BankLogin;