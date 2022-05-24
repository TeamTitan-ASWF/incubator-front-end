import React from 'react';
import Button from "@mui/material/Button";
import axios from "axios";

const ReviewerButtons = ({id}) => {
    const approveApplication = (newStatus)=> {

        axios.patch(`${process.env.REACT_APP_API}/${id}`, {status: newStatus })
        .then(response => console.log(response));

    }
    return (
        <div>
            <Button onClick={()=>approveApplication("accepted")}>
                Approve
            </Button>
            <Button onClick={()=>approveApplication("rejected")}>
                Deny
            </Button>



        </div>
    );
};

export default ReviewerButtons;