import Pp from './img/ll.png'
import * as React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
function Chate() {
    return (
        <Grid container sx={{ justifyContent: "center",overflowY:'scroll' }}>
            <Card sx={{ width: '98%', justify: 'center',my: 2}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={Pp} sx={{ width: '100%', border:'1.5px solid #ddd' ,px:2 }}
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" title='Like'>
                        <FavoriteBorderOutlinedIcon  sx={{ fontSize: 30 }} />
                    </IconButton>
                    <IconButton aria-label="share" title='Comment'>
                        <i class="bi bi-chat"></i>
                    </IconButton>
                    <IconButton aria-label="share" title='Shear'>
                        <SendIcon/>
                    </IconButton>
                    <IconButton aria-label="share" title='Save' sx={{marginLeft:'350px'}}>
                        <BookmarkAddOutlinedIcon/>
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Card>
            
            <Card sx={{ width: '98%', justify: 'center',my: 2}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={Pp} sx={{ width: '100%', border:'1.5px solid #ddd' ,px:2 }}
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" title='Like'>
                        <FavoriteBorderOutlinedIcon  sx={{ fontSize: 30 }} />
                    </IconButton>
                    <IconButton aria-label="share" title='Comment'>
                        <i class="bi bi-chat"></i>
                    </IconButton>
                    <IconButton aria-label="share" title='Shear'>
                        <SendIcon/>
                    </IconButton>
                    <IconButton aria-label="share" title='Save' sx={{marginLeft:'350px'}}>
                        <BookmarkAddOutlinedIcon/>
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Card>
            
            <Card sx={{ width: '98%', justify: 'center',my: 2}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={Pp} sx={{ width: '100%', border:'1.5px solid #ddd' ,px:2 }}
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" title='Like'>
                        <FavoriteBorderOutlinedIcon  sx={{ fontSize: 30 }} />
                    </IconButton>
                    <IconButton aria-label="share" title='Comment'>
                        <i class="bi bi-chat"></i>
                    </IconButton>
                    <IconButton aria-label="share" title='Shear'>
                        <SendIcon/>
                    </IconButton>
                    <IconButton aria-label="share" title='Save' sx={{marginLeft:'350px'}}>
                        <BookmarkAddOutlinedIcon/>
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Card>
            
            <Card sx={{ width: '98%', justify: 'center',my: 2}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={Pp} sx={{ width: '100%', border:'1.5px solid #ddd' ,px:2 }}
                    alt="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" title='Like'>
                        <FavoriteBorderOutlinedIcon  sx={{ fontSize: 30 }} />
                    </IconButton>
                    <IconButton aria-label="share" title='Comment'>
                        <i class="bi bi-chat"></i>
                    </IconButton>
                    <IconButton aria-label="share" title='Shear'>
                        <SendIcon/>
                    </IconButton>
                    <IconButton aria-label="share" title='Save' sx={{marginLeft:'350px'}}>
                        <BookmarkAddOutlinedIcon/>
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Card>
            
                    
        </Grid>
    );
}
export default Chate;
