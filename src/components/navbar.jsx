import * as React from 'react';
import '@mui/icons-material'

import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import KamiIcon from '../assets/KamiSoftwareIcon.svg';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate()

    return (
        <AppBar position='sticky' sx={{background: '#2e2e2e'}}>
            <Toolbar>
                <IconButton onClick={() => navigate('/kamisoftware')}>
                    <img src={KamiIcon} width={35} height={35} alt='icon'/>
                </IconButton>
                <Typography sx={{
                    mr: 2,
                    ml: 2,
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>
                    Kami Software
                </Typography>
                <Button 
                    size='medium' 
                    variant='contained'
                    sx={{marginLeft: 'auto', color: 'white', fontWeight: 'bold'}}
                    onClick={() => navigate('/kamisoftware/contactus')}
                >
                    contact us
                </Button>
            </Toolbar>
        </AppBar>  
    )
}