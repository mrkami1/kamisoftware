import Navbar from "../components/navbar";
import { Typography, Card, CardContent, Button, Snackbar, Alert } from "@mui/material";
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
                <Card variant="outlined" sx={{ maxWidth: '50%', m: 'auto', mt: 5, backgroundColor: '#4a4a4a' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 48, fontWeight: 'bold', color: 'white' }} gutterBottom>
                            Get in touch with us
                        </Typography>
                        <Typography sx={{ fontSize: 32, fontWeight: 'bold', color: 'whitesmoke' }} gutterBottom>
                            We'll build anything.
                        </Typography>
                        <Button size="large" variant="contained" sx={{ mt: 5, color: 'white' }} onClick={() => handleClick(false)}>
                            kamisoftwaredev@gmail.com
                        </Button>
                        <Snackbar open={open} onClose={() => handleClick(true)} autoHideDuration={4000}>
                            <Alert severity="success" onClose={() => handleClick(true)}>Copied email to clipboard!</Alert>
                        </Snackbar>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}