import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BankContainer, BankContainerInner, BankContainerLeft, BankContainerRight, BankContainerTitle, BankForm, BankFormBottom, BankFormInner, BankFormTitle, BankFormBottomText, BankImg1, BankImg2, BankImg3 } from '../../styles/account/BankBodyStyle';
import AcctImg1 from '../../images/account/pexels-ismail-seghosime-5671470.png';
import AcctImg2 from '../../images/account/pexels-international-fund-for-animal-welfare-5487069.png';
import AcctImg3 from '../../images/account/pexels-picha-stock-3894377.png';
import { CardTextField, CardTextFieldName } from '../../styles/loanHome/LoanBasicStyle';
import { CardLoadingButton } from '../../styles/loanHome/LoanHomeStyle';
import { CircularProgress } from '@material-ui/core';

import OpenAccountAPI from '../../adapters/account/OpenAccountAPI';

const BankOpen = () => {

    // const { handleSubmit, control, errors: fieldsErrors, reset } = useForm({ mode: "onChange" });
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [buttonIcon, setButtonIcon] = useState(false);

    const onSubmit = formInput => {
        setButtonIcon(true);

        let getResp = OpenAccountAPI(formInput);

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
                                <BankFormTitle>Account Opening Form</BankFormTitle>
                                <form
                                    noValidate
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <CardTextFieldName style={{ marginBottom: '0.5em' }}>First Name</CardTextFieldName>
                                    <CardTextField type='text' name='firstname' placeholder='First Name' {...register("firstname", { required: true, minLength: 5 })} />
                                    {errors.firstname && <span style={{ color: 'red', fontSize: '0.9em' }}>This field is required & cannot be short</span>}


                                    <CardTextFieldName style={{ marginTop: '0.5em' }}>Last Name</CardTextFieldName>
                                    <CardTextField type='text' name='lastname' placeholder='Last Name' {...register("lastname", { required: true, minLength: 5 })} />
                                    {errors.lastname && <span style={{ color: 'red', fontSize: '0.9em' }}>This field is required & cannot be short</span>}


                                    <CardTextFieldName style={{ marginTop: '0.5em' }}>Email</CardTextFieldName>
                                    <CardTextField type='email' name='email' placeholder='Email Address' {...register("email", { required: true, minLength: 5 })} />
                                    {errors.email && <span style={{ color: 'red', fontSize: '0.9em' }}>This field is required & cannot be short</span>}

                                    <CardTextFieldName style={{ marginTop: '0.5em' }}>Password</CardTextFieldName>
                                    <CardTextField type='password' name='password' placeholder='Password' {...register("password", { required: true, minLength: 8 })} />
                                    {errors.password && <span style={{ color: 'red', fontSize: '0.9em' }}>This field requires minium of 8 characters</span>}

                                    <CardTextFieldName style={{ marginTop: '0.5em' }}>Phone Number</CardTextFieldName>
                                    <CardTextField type='text' name='phonenumber' placeholder='Phone Number' {...register("phonenumber", { required: true, minLength: 5 })} />
                                    {errors.phonenumber && <span style={{ color: 'red', fontSize: '0.9em' }}>This field is required & cannot be short</span>}

                                    <CardTextFieldName style={{ marginTop: '0.5em' }}>BVN</CardTextFieldName>
                                    <CardTextField type='number' name='bvn' placeholder='BVN' {...register("bvn", { required: true, minLength: 10 })} />
                                    {errors.bvn && <span style={{ color: 'red', fontSize: '0.9em' }}>This field is required & cannot be less than 11 characters</span>}

                                    <BankFormBottom>
                                        {/* <CardButton type='submit'>Submit </CardButton> */}
                                        <CardLoadingButton type='submit' disabled={buttonIcon}>Submit {buttonIcon && (<CircularProgress fontSize='small' />)} </CardLoadingButton>

                                    </BankFormBottom>
                                </form>
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

export default BankOpen;