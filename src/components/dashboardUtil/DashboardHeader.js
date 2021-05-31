import React from 'react';

import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import NoteRoundedIcon from '@material-ui/icons/NoteRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import dummyImg from '../../images/home/homeFirst.jpg';
import Logo from '../../images/home/Assets Logo_Ubuntu.png';
import { UserEachMenuIcons, UserFullname, UserHeader, UserHeaderLeft, UserHeaderLogo, UserHeaderMenuIcon, UserHeaderMsgIcon, UserHeaderRight, UserImg, UserLastLogin, UserProfileBox } from '../../styles/dashboardUtil/dashboardHeaderStyle';

//  AddBoxRounded, , MeetingRoomRounded
const useStyles = makeStyles({
    list: {
        width: 270,
        height: '100%',
        background: 'white'
    },
    fullList: {
        width: 'auto',
    },
});


const middleIcons = [
    {
        name: 'Account',
        link: '/dashboard/profile/',
        icon: <AccountBoxRoundedIcon />
    }, {
        name: 'Loans',
        link: '/dashboard/info/basic/',
        icon: <MonetizationOnRoundedIcon />
    },
    {
        name: 'Debit Card',
        link: '/',
        icon: <CreditCardRoundedIcon />
    },
    {
        name: 'Statement',
        link: '/',
        icon: <NoteRoundedIcon />
    },
    {
        name: 'Log out',
        link: '/auth/logount/',
        icon: <PowerSettingsNewRoundedIcon />
    }];



const DashboardHeader = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        bottom: false, left: false
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <UserProfileBox>
                <UserImg src={dummyImg} />
                <UserFullname>John Adeniyi</UserFullname>
                <UserLastLogin>Last Login : 00:00am 6th March, 2021</UserLastLogin>
            </UserProfileBox>
            <Divider />
            <List>
                {middleIcons.map((eachIcon) => (
                    <UserEachMenuIcons key={eachIcon.name}>
                        <Link to={eachIcon.link} style={{ textDecoration: 'none' }} key={eachIcon.name}>
                            <ListItem button key={eachIcon.name}>
                                <ListItemIcon style={{ color: 'rgba(5,5,5,0.5)', marginRight: '-0.5em' }}>{eachIcon.icon}</ListItemIcon>
                                <ListItemText primary={eachIcon.name} style={{ color: 'rgba(5,5,5,0.7)', marginBottom: '0em' }} />
                            </ListItem>
                        </Link>
                    </UserEachMenuIcons>
                ))}
            </List>
        </div>
    );

    return (

        <>
            <UserHeader>
                <UserHeaderLeft>
                    <UserHeaderMenuIcon>
                        <MenuIcon onClick={toggleDrawer('left', true)} style={{ cursor: 'pointer' }} />
                    </UserHeaderMenuIcon>
                </UserHeaderLeft>
                <UserHeaderRight>
                    <UserHeaderMsgIcon>
                        <MailOutlineIcon />
                        <UserHeaderLogo src={Logo} />
                    </UserHeaderMsgIcon>
                </UserHeaderRight>
            </UserHeader>

            <React.Fragment key='left'>
                <SwipeableDrawer
                    anchor='left'
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>
        </>
    )
};

export default DashboardHeader;