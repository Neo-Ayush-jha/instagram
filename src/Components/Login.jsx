import { Button, Card, CardContent, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const style ={
    box:{
        justifyContent:"center",borderRadius:5,overflowX:'hidden',marginY:'0px' , width: {xl:'90%',lg:'30%',md:'50%',sm:'100%'}
    },
    mobileBg:{
        backgroundSize:"cover",
        backgroundColor:"transparent",
        backgroundImage:"url('assets/homePage/mobile.png')",
        height:720,
        width:'569px',
        // width:{xl:'550px',lg:'350px',md:'350px',sm:'375px'},
        marginRight:'0px',
        marginY:'0px',
    },
    // step 5
        slider:{
        margin:"27px 0 0 113px",
        position:"relative",
        width: {xl:'90%',lg:'30%',md:'50%',sm:'100%'}
    },
    screenshort:{
        height: "90vh",
        left: 70,
        position: "absolute",
        top: 32,
        MarginY:0,
        width: {xl:'90%',lg:'30%',md:'50%',sm:'100%'}
    }
}

const Login = ()=>{
    const images = ["screenshots1.png","screenshots2.png","screenshots3.png"]
    const [counter,setCounter] = useState(0);
    useEffect(()=>{
        const internalData = setInterval(()=>{
            counter = (counter ==2)? setCounter(0) :setCounter(counter + 1)
        },2000)
        return () => clearInterval(internalData)
    },[counter])
    return(
        <>
        {/* <Button >-></Button> */}

            <Container sx={{justifyContent:"center",overflowX:'hidden',marginY:'0px' , width: {xl:'90%',lg:'30%',md:'50%',sm:'100%'}}}>
                <Grid container style={style.box}>
                    <Grid item lg={6} xs={12} sx={{height:700,backgroundColor:'#ddd', width: {xl:'90%',lg:'30%',md:'50%',sm:'100%'},overflowX:'hidden',marginY:'0px'}}>
                        <Paper elevation={0} sx={style.mobileBg}  >
                            <div style={style.slider}>
                                <img src={`assets/homePage/${images[counter]}`} 
                                style={style.screenshort} />
                            </div>
                        </Paper>
                        <div style={{width:"100%",textAlign:"center",display:"flex",flexDirection:"column",margin:0}}>
                                    <Button component={Link} to="/login2" variant='text'>Login </Button>
                            <Button component={Link} to="/SingUp"  variant="text" sx={{p:0,m:0,textAlign:'center'}}>SingUp</Button>
                            </div>
                    </Grid>




                </Grid>
            </Container>
        </>
    )
}
export default Login;