import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import Header from "./Header.jsx";
import Home from "./Home.jsx";


function RightHeader(props){
    return( 
        <>
            <Container sx={{justifyContent:"center"}}>
                <Grid container sx={{justifyContent:"center",marginTop:2,borderRadius:10,overflowY:'scroll'}}>
                    <Grid item lg={6} xs={12} sx={{height:700,backgroundColor:'#ddd',overflowY:'scroll'}}>
                        <Header/>
                        <Home/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default RightHeader;