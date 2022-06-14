import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { AppBar, Avatar,  Stack, Tooltip, Toolbar,IconButton} from '@mui/material';
const Header = () => {
    return (
        <Box sx={{width:'100%',height: {xl:'80px',md:'50px',sm:'30px'}}}>
            <AppBar position="static" sx={{ bgcolor: '#ddd',width: {xl:'100%',md:'50%',xs:'100%'}, paddingY: 0.5,boxShadow:'none',borderBottom:'2px solid black'}}>
                <Toolbar variant="dense" direction="row" sx={{flexGrow:12}}>
                    <Stack  sx={{flexGrow:8}}>
                        <Avatar sx={{background:'none'}} title='Post'><CameraAltOutlinedIcon sx={{color:'black', fontSize:30}}/></Avatar>
                    </Stack>
                    <Box >
                        <IconButton aria-label="share"  title="Search">
                            <SearchIcon sx={{ color: '#51585c', }} />
                        </IconButton>
                        <IconButton aria-label="share"  title="Massages">
                            <i class="bi bi-send"></i>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header;