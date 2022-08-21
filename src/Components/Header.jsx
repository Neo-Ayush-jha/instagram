import React from 'react'
import { Box } from '@mui/system';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Avatar, Stack, Toolbar, IconButton, Typography, InputAdornment, Input } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import firebase from '../firebase';

const Header = () => {
    const navigate = useNavigate();
    const userSignOut = async ()=>{
        const result = await firebase.auth().signOut();
        navigate('/login'); 
    }
    return (
        <Box sx={{ width: '100%', height: { xl: '80px', md: '50px', sm: '30px' } }}>
            <AppBar position="static" sx={{ bgcolor: '#ddd', width: { xl: '100%', md: '50%', xs: '100%' }, paddingY: 0.5, boxShadow: 'none', borderBottom: '2px solid black' }}>
                <Toolbar variant="dense" direction="row" sx={{ flexGrow: 12 }}>
                    <Stack sx={{ flex: 1.5 }}>
                        <Avatar sx={{ background: 'none' }} title="Post some thing "><CameraAltOutlinedIcon sx={{ color: 'black', fontSize: 30 }} /></Avatar>
                    </Stack>
                    <Typography sx={{ flex: 2 }}>
                        <img src="assets/homePage/logo.png" width="70%" style={{ marginTop: 15 }} />
                    </Typography>
                    <Box sx={{ flex: 1 }}>
                    <svg aria-label="Messenger"  style={{mt:0.1}} color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 1.131a10.487 10.487 0 00-10.87 10.57 10.194 10.194 0 003.412 7.771l.054 1.78a1.67 1.67 0 002.342 1.476l1.935-.872a11.767 11.767 0 003.127.416 10.488 10.488 0 0010.87-10.57 10.487 10.487 0 00-10.87-10.57zm5.786 9.001l-2.566 3.983a1.577 1.577 0 01-2.278.42l-2.452-1.84a.63.63 0 00-.759.002l-2.556 2.049a.659.659 0 01-.96-.874L8.783 9.89a1.576 1.576 0 012.277-.42l2.453 1.84a.63.63 0 00.758-.003l2.556-2.05a.659.659 0 01.961.874z"></path></svg>
                        {/* <Avatar sx={{ background: 'none' }} title="Post some thing "><LogoutIcon sx={{ color: 'black', fontSize: 30 }} /></Avatar> */}
                        <button onClick={()=> userSignOut()} title="LogOut "  title="LogOut your account"  style={{padding:'0px' ,marginLeft:8}}><LogoutIcon  sx={{ color: 'black'}} /></button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header;