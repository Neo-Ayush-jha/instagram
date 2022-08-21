import { Grid } from "@mui/material";
import {  Container } from "@mui/system";
import Header from "./Header.jsx";
import Home from "./Home.jsx";


function RightHeader(props){
    return( 
        <>
            <Container sx={{justifyContent:"center",mx:'0px',px:'0px',}}>
                <Grid container sx={{justifyContent:"center",mx:'0px',px:'0px',overflowY:'scroll'}}>
                    <Grid item  sx={{height:700,backgroundColor:'#ddd',overflowY:'scroll'}}>
                        <Header/>
                        <Home/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default RightHeader;