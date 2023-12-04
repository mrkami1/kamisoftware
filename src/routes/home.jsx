import Navbar from '../components/navbar';
import Applications from '../components/applications';
import { Typography, Paper } from '@mui/material';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div>
                <Paper sx={{mt: 5, mb: 5, mr: '20%', ml: '20%', p: 2, backgroundColor: '#33353b'}}>
                    <Typography sx={{
                        fontSize: 48,
                        color: 'white'
                    }}>
                        It's all built here.
                    </Typography>
                    <Typography sx={{
                        fontSize: 28,
                        color: 'white'
                    }}>
                        Desktop | Mobile | Web
                    </Typography>
                </Paper>
                <Typography sx={{
                    fontSize: 32,
                    color: 'white'
                }}>
                    Our Applications    
                </Typography>
            </div>
            <Applications />
        </div>
    )
}