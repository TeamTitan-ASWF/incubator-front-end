import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AppSnackBar({isShown, severity, message, resetCallBack}) {
    const [open, setOpen] = React.useState(isShown ?? false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        if(resetCallBack) {
            resetCallBack(false);
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} sx={{width: '25%'}}>
            <Alert onClose={handleClose} severity={severity ?? 'info'} sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    );
}
