import { Avatar, Grid, Stack } from "@mui/material";
import Chate from "./Chate.jsx";



function Home(){
    return(
        <>
            <Grid sx={{backgroundColor:'#ddd',borderBottom:'2px solid black'}} >
                <Grid  sx={{flexGrow:12}}>
                    <Stack direction={'row'} sx={{overflowX:'scroll',marginBottom:1}}>
                        <Avatar alt="Remy Sharp" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Agnes Walker" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/4.jpg" />
                        <Avatar alt="Trevor Henderson" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/5.jpg" />
                        <Avatar alt="Remy Sharp" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Agnes Walker" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/4.jpg" />
                        <Avatar alt="Trevor Henderson" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/5.jpg" />
                        <Avatar alt="Remy Sharp" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Agnes Walker" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/4.jpg" />
                        <Avatar alt="Trevor Henderson" sx={{mx:0.8,width:'10%', height:'50px'}} src="/static/images/avatar/5.jpg" />
                    </Stack>
                </Grid>
            </Grid>
            <Chate/>
        </>
    )
}
export default Home;