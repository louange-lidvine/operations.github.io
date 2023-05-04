import { Button, Stack } from "@mui/material";
 import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => { 
    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
                <Button variant="text">text</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                    primary
                </Button>
                <Button variant="contained" color="secondary">
                    secondary
                </Button>
                <Button variant="contained" color="error">
                    error
                </Button>
                <Button variant="contained" color="warning">
                    warning
                </Button>
                <Button variant="contained" color="info">
                    Info
                </Button>
                <Button variant="contained" color="success">
                    Succeess
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" size="small">
                    small
                </Button>
                <Button variant="contained" size="medium">
                    medium
                </Button>
                <Button variant="contained" size="large">
                    large
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={<SendIcon />}>
                    send
                </Button>
                  <Button variant="contained" endIcon={<SendIcon />}></Button>
            </Stack>
        </div>
    );
}