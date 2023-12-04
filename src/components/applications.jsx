import { Card, CardContent, CardMedia, Grid, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import fynatrackImg from '../assets/fynatrack/FynatrackIcon.png'
import { Android } from "@mui/icons-material";

const cardSX = {
    maxWidth: 345,
    backgroundColor: '#2e2e2e',
    transition: '200ms',
    '&:hover': {
        backgroundColor: '#4d4d4d',
        boxShadow: 20
    }
}

export default function Applications() {

    const navigate = useNavigate();

    const GoToApplication = (id) => {
        switch(id) {
            case 'fynatrack': navigate('/kamisoftware/fynatrack'); break;
            default: break;
        }
    }

    return (
        <div>
            <Grid container spacing={2} p={10} justifyContent='center' columns={3}>
                <Grid item>
                    <Card sx={cardSX}>
                        <CardActionArea onClick={() => GoToApplication('fynatrack')}>
                            <CardMedia height='140' component='img' src={fynatrackImg} sx={{objectFit: 'contain'}}>
                            </CardMedia>
                            <CardContent>
                                    <Android sx={{color: "#73b354"}}/>
                                <Typography gutterBottom variant="h5" component='div' textAlign='left' color='white'>
                                    Fynatrack
                                </Typography>
                                <Typography variant="body2" color='grey' textAlign='left'>
                                    Fynatrack is a financial tracking mobile app that was developed for Android.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}