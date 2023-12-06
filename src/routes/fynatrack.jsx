import { ImageList, ImageListItem, ImageListItemBar, Button, Typography, Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";

import fynatrackDash from '../assets/fynatrack/fynatrack_dash.png'
import fynatrackBackup from '../assets/fynatrack/fynatrack_backup.png'
import fynatrackExport from '../assets/fynatrack/fynatrack_export.png'

const images = [
    {img: fynatrackDash, description: 'Create, Manage, Track'},
    {img: fynatrackBackup, description: 'Backup to Google Drive or locally'},
    {img: fynatrackExport, description: 'Export/Import your data with JSON'},
]

const playstoreUrl = 'https://play.google.com/store/apps/details?id=com.kamisoftware.fynatrack&hl=en&gl=US'

export default function Fynatrack() {
    
    const matches = useMediaQuery('(min-width: 750px)');
    
    return (
        <div>
            <Navbar />
            <div>
                <Typography sx={{fontSize: 48, fontWeight: 'bold', color: 'white', mt: 5, mr: 5, ml: 5}}>
                    Fynatrack Mobile App
                </Typography>
                <Typography sx={{fontSize: 24, fontWeight: 'bold', color: 'grey', mb: 5, mr: 5, ml: 5}}>
                    Always keep up to date with your latest transactions
                </Typography>
                <Box sx={{m: 10}}>
                    <ImageList cols={matches ? 3 : 1} gap={10}>
                        {images.map((image) => (
                            <ImageListItem key={image.img} sx={{m: 'auto', maxWidth: 400}}>
                                <img src={image.img} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <Typography sx={{fontSize: 18, fontWeight: 'bold', color: 'white', m: 5}}>
                    <p>Easily create, manage, or track transactions</p>
                    <p>Backup your data to Google Drive or to your device</p>
                    <p>Export/Import your data using the JSON file format</p>
                </Typography>
                <Typography sx={{fontSize: 24, fontWeight: 'bold', color: 'grey', m: 5}}>
                    Performance? Exceptional. Built with Flutter
                </Typography>
                <Button size="small" sx={{'&:hover': {backgroundColor: 'transparent'}}} onClick={() => {window.open(playstoreUrl, '_blank')}}>
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" width={250}/>
                </Button>
                <Typography sx={{fontSize: 14, fontWeight: 'bold', color: 'grey', mb: 10, mt: 10}}>
                    View our <Link to="/fynatrack-privacy">Privacy Policy</Link>
                </Typography>
            </div>
        </div>
    )
}