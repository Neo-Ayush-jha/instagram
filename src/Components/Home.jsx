import Chate from "./Chate.jsx";
import Massages from './Massages.jsx';
import { Avatar, Grid, Stack, Typography } from "@mui/material";


function Home(){
    return(
        <>
            <Grid sx={{backgroundColor:'#ddd',borderBottom:'2px solid black'}} >
                <Grid  sx={{flexGrow:12}}>
                    <Stack direction={'row'} sx={{overflowX:'scroll',marginBottom:1,mt:3}}>
                    {Massages.map((value)=>(
                        <>
                        <Avatar  alt="Remy Sharp" sx={{mx:0.8,width:'10%', height:'50px'}} className='gradient-border-bg' title={value.name} src={value.av} />
                        {/* <Typography>{value.name}</Typography> */}
                        </>
                        ))}
                        </Stack>
                </Grid>
            </Grid>
            <Chate/>
        </>
    )
}
export default Home;