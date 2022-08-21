import { Button, Divider } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Avatar,  Card, CardContent,  Grid, TextField } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';

import firebase from "../firebase";
import {Link, useNavigate} from 'react-router-dom';
import { useState } from "react";

const css = {
    container:{
        height:'150vh',
        width: {xl:'90%',lg:'30%',md:'50%',sm:'100%'},
        backgroundColor:'#aaa',
        flex:1,
        justifyContent:'center',
        // alignItems:'center',
        display:'flex',
    },
    box:{
        backgroundColor:'#ece3e3',
        height:'98vh',
        width: {xl:'90%',lg:'30%',md:'50%',sm:'100%'},
        marginTop:'3%',
        border:'1px solid lightgrey',
    },
    body:{
        padding:10,
    },
    logo:{
        width:'50%',
        marginLeft:'25%',
        marginTop:'10px',
    },
    loginHeading:{
        color:'rgba(var(--f52,142,142,142),1)',
        textAlign:'center',
        funtSize:18,
        fontWight:800,
        fontSize: '17px',
        lineHeight: '20px',
        margin: '0 30px 10px',
    },
    fbButton:{
        textAlign:'center',
        margin:'0px',
        padding:'0px',
    },
    fb:{
        margin:'5px',
        padding:'0px',
    },
    cardContent:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},
    input:{width:'100%',flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:'12%',marginTop:'5%'},
    inputField:{
        width:'60%',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:'2px',
        padding:10,
        border:'2px solid #aaa',
        borderRadius:2
    },
    text:{
        width:"100%",
        textAlign:"center",
        display:"flex",
        flexDirection:"column", 
        color:'rgba(var(--f52,142,142,142),1)',
        textAlign:'center',
        funtSize:18,
        fontWight:800,
        fontSize: '17px',
        lineHeight: '20px',
    },
    singupButton:{
        backgroundColor:'rgba(var(--d69,0,149,246),.3)',
        color:'#hhh',
        width:"68%",
        textAlign:"center",
        display:"flex",
    },
    cards:{
        backgroundColor:'#ece3e3',
        height:60,
        width:'100%',
        border:'1px solid lightgrey',
        marginTop:'8%',
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    pickBox:{
        backgroundColor:'red',
        height:'600',
        width:'100%',
        border:'1px solid lightgrey',
        width:'100%',
        display:'inline',
        margin:'0px',
        color:'#ddd',
        textAlign:"center",
        // marginTop:20,
        // marginBottom:10
    },
    pick1:{
        width:'40%',
        display:'inline'
    },
    pick2:{
        width:'40%',
        display:'inline'
    },
}

function SingUp () {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    const submitForm = async ()=>{
        const result = await firebase.auth().createUserWithEmailAndPassword(email,password);
        console.log(result);
        navigate('/home')
    }
    return(
        <>
            <div style={css.container}>
                <div style={css.box}>
                    <div style={css.body}>
                        <div style={css.logo}>
                            <img width="100%" src="assets/homePage/logo.png"/>
                        </div>
                        <div style={css.loginHeading}>
                            Sing Up to see photos and videos from your friends.
                        </div>
                        <div style={css.fbButton}>
                            <Button variant="contained"><i class="bi bi-facebook" style={css.fb}></i> Log in with Facebook</Button>
                        </div>
                        <Divider sx={{color:"#202020",mt:2}}>OR</Divider>
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
                            <div style={css.text}>
                                <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                            </div>
                            <div style={css.text}>
                                <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                            </div>
                    </div>
                    <div style={css.cards}>
                        <div sx={css.cardContent}>
                            <p>Don't have an account? <spam><Button variant='text'>Sign up</Button></spam></p>
                            
                        </div>
                    </div>
                    <div style={css.pickBox}>
                        <p sx={{my:3.5}}>Get the app.</p>
                            <div style={css.pick1}>
                                <img src="assets/homePage/apple.png" width="45%"/>
                            </div>
                            <div style={css.pick2}>
                                <img src="assets/homePage/google.png" width="45%"/>
                            </div>
                        <div >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingUp;