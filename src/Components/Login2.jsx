import { Button, Card, CardContent, Divider, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { blue } from "@mui/material/colors";
import { Avatar, } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';

import { Link, useNavigate } from "react-router-dom";
import firebase from '../firebase';

const style = {
    container:{
        justifyContent: "center", overflowX: 'hidden', marginY: '0px',
        width: '100%',
    },
    box:{
        // backgroundColor:'#ece3e3',
        // height:'98vh',
        width: '100%',
        height: 700, backgroundColor: '#ddd', overflowX: 'hidden', marginY: '0px', py: 5, px: 7 
    },
}

const Login2 = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = async () => {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(result);
        navigate('/')
    }
    return (
        <>
            <Container style={style.container}>
                <Grid container sx={{ justifyContent: "center", borderRadius: 10, overflowX: 'hidden', marginY: '0px' }}>
                    <Grid item lg={6} xs={12} style={style.box}>
                        <Card sx={{ width: "100%" }}>
                            <CardContent sx={{ textAlign: 'center' }} >
                                <img width="80%" src="assets/homePage/logo.png" />
                            </CardContent>
                            <CardContent sx={{ px: 6 }}>

                                <TextField fullWidth="xl" value={email} onChange={e => setEmail(e.target.value)} InputProps={{ disableUnderline: true }} size="small" id="filled-basic" sx={{ background: ' rgba(var(--b3f,250,250,250),1)', color: 'rgba(var(--i1d,38,38,38),1)', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif', fontSize: '14px;', lineHeight: '10px' }} label='Phone number, username, or email"' variant='filled' />

                                <TextField sx={{ marginTop: 1 }} value={password} onChange={e => setPassword(e.target.value)} InputProps={{ disableUnderline: true }} size="small" fullWidth="sm" id="filled-basic" label="Password" variant="filled" />

                                <Button fullWidth sx={{ mt: 1, bgcolor: blue[200], marginTop: 2 }} variant="contained" onClick={e => submitForm()}>Login</Button>
                                {/* <Button fullWidth sx={{ mt: 1, bgcolor: blue[200], marginTop: 2 }} variant="contained" component={Link} to="/home">Login</Button> */}

                                <Divider sx={{ color: "#202020", mt: 4 }}>OR</Divider>
                                <div style={{ width: "100%", textAlign: "center", display: "flex", flexDirection: "column" }}>
                                    <Button variant='text' sx={{ font: 'inherit', erticalAlign: 'baseline', fontSize: '14px', fontWeight: 600 }}><Avatar sx={{ height: '15px', width: '15px', bgcolor: blue[900], px: '6px', py: '6px', mx: 1 }} ><FacebookIcon /></Avatar>Log in with Facebook</Button>
                                    <Button variant='text' sx={{ fontSize: 10, color: blue[900] }}>Forgot Password?</Button>
                                    <Button variant='text' sx={{ fontSize: 10, color: blue[900], marginTop: '1px', paddingTop: '0px' }}>Recover your account</Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ mt: 2, pb: 0 }}>
                            <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Typography>Don't have an account?</Typography>
                                <Button variant='text' sx={{ fontSize: 10, color: "blue", marginTop: '3.5px', fontWeight: 800 }}>Sign up</Button>
                            </CardContent>
                        </Card>

                        <div style={{ width: "100%", textAlign: "center", marginTop: 20, marginBottom: 10 }}>
                            <Typography sx={{ my: 3.5 }}>Get the app.</Typography>

                            <Grid container spacing={5}>
                                <Grid item lg={6}>
                                    <img src="assets/homePage/apple.png" width="100%" />
                                </Grid>
                                <Grid item lg={6}>
                                    <img src="assets/homePage/google.png" width="100%" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Login2;