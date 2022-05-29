import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const defaultStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AppModal = ({showModal, setShowModal, styles, children}) => {
    // const [open, setOpen] = useState(openValue ?? false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles ?? defaultStyle}>
                    {children}
                </Box>
            </Modal>
    );
}

export default AppModal;
