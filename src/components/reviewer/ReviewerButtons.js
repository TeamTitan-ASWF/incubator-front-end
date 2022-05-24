import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import apiCall from "../api/api";

const ReviewerButtons = ({id}) => {
    //const [status, setStatus] = useState("");
    const [application, setApplication] = useState({})

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
            .then(response => {
                setApplication(response.data);
            })
    }, [application.status])

    const approveApplication = async (newStatus) => {
        const res = await apiCall(application, "update", {id: id, status: newStatus})
        setApplication(res.apiData);
    }

    return (
        <Box maxWidth="100%" sx={{textAlign: "right"}}>
            <Button
                sx={{ml: 2}}
                variant="contained"
                onClick={() => approveApplication("accepted")}
            >
                Approve
            </Button>
            <Button variant="contained"
                    sx={{ml: 2}}
                    onClick={() => approveApplication("rejected")}
            >
                Deny
            </Button>
        </Box>
    );
};

export default ReviewerButtons;