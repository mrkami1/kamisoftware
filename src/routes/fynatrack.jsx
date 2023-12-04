import { ImageList, ImageListItem, ImageListItemBar, Paper, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MobileStoreButton from 'react-mobile-store-button'

import Navbar from "../components/navbar";

import fynatrackDash from '../assets/fynatrack/fynatrack_dash.jpg'
import fynatrackBackup from '../assets/fynatrack/fynatrack_backup.png'
import fynatrackExport from '../assets/fynatrack/fynatrack_export.png'

const images = [
    {img: fynatrackDash, description: 'Create, Manage, Track'},
    {img: fynatrackBackup, description: 'Backup to Google Drive or locally'},
    {img: fynatrackExport, description: 'Export/Import your data with JSON'},
]

const playstoreUrl = 'https://play.google.com/store/apps/details?id=com.kamisoftware.fynatrack&hl=en&gl=US'

export default function Fynatrack() {
    return (
        <div>
            <Navbar />
            <div>
                <Typography sx={{fontSize: 48, fontWeight: 'bold', color: 'white', mt: 5}}>
                    Fynatrack Mobile App
                </Typography>
                <Typography sx={{fontSize: 24, fontWeight: 'bold', color: 'grey', mb: 5}}>
                    Always keep up to date with your latest transactions
                </Typography>
                <ImageList cols={3} sx={{ml: 50, mr: 50}}>
                    {images.map((image) => (
                        <ImageListItem key={image.img} sx={{objectFit: 'contain', m: 2}}>
                            <img src={image.img} alt="app img" loading="lazy"/>
                            <ImageListItemBar title={image.description} position="below" sx={{color: 'white'}}/>
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography sx={{fontSize: 24, fontWeight: 'bold', color: 'grey', mb: 5}}>
                    Performance? Exceptional. Built with Flutter
                </Typography>
                <Button size="small" sx={{'&:hover': {backgroundColor: 'transparent'}}} onClick={() => {window.open(playstoreUrl, '_blank')}}>
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width={250}/>
                </Button>
                <Typography sx={{fontSize: 14, fontWeight: 'bold', color: 'grey', mb: 10, mt: 10}}>
                    View our <Link to="/kamisoftware/fynatrack-privacy">Privacy Policy</Link>
                </Typography>
            </div>
        </div>
    )
}