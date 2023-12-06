import { ContentCopy } from "@mui/icons-material";
import Navbar from "../components/navbar";
import { Typography, Card, CardContent, Snackbar, Alert, Box, IconButton } from "@mui/material";
import { useState } from "react";

export default function ContactUs() {

    const [open, setOpen] = useState(false);

    const handleClick = (close) => {
        if (close) {
            setOpen(false);
        }
        else {
            setOpen(true);
            navigator.clipboard.writeText('kamisoftwaredev@gmail.com')
        }
    }

    return (
        <div>
            <Navbar />
            <div>
                <Card variant="outlined" sx={{ m: 5, backgroundColor: '#4a4a4a' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 48, fontWeight: 'bold', color: 'white' }} gutterBottom>
                            Get in touch with us
                        </Typography>
                        <Typography sx={{ fontSize: 32, fontWeight: 'bold', color: 'whitesmoke' }} gutterBottom>
                            We'll build anything.
                        </Typography>
                        <Box sx={{wordWrap: 'break-word', color: 'white'}}>
                            <IconButton sx={{color: 'white'}} onClick={() => handleClick(false)}>
                                <ContentCopy />
                            </IconButton>
                            kamisoftwaredev@gmail.com
                        </Box>
                        <Snackbar open={open} onClose={() => handleClick(true)} autoHideDuration={4000} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                            <Alert severity="success" onClose={() => handleClick(true)}>Copied email to clipboard!</Alert>
                        </Snackbar>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}