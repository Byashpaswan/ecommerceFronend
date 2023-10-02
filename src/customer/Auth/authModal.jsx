import { Box, Modal } from '@mui/material'
import React, { useEffect } from 'react'
import RegisterForm from './RegisterForm';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';


const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: 500,
  // bgcolor: 'background.paper',
  // outline: "non",
  // boxShadow: 24,
  // p: 4,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

 export const authModal = ({ handleClose, open }) => {

  const location = useLocation();
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    if (auth.user) handleClose();
  }, [auth.user]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/login" ?(<LoginForm /> ):(<RegisterForm />)}


        </Box>
      </Modal>
    </div>
  )
}

export default authModal