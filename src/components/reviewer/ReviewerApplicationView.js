import ApplicationView from "../application/ApplicationView";
import ReviewerButtons from "./ReviewerButtons";
import StatusHeader from "../application/StatusHeader";
import {useEffect, useState} from "react";
import apiCall from "../api/api";
import Paper from "@mui/material/Paper";

export default function ReviewerApplicationView({id, setShowList}) {
    const [application, setApplication] = useState({})

    useEffect(() => {
        getApplication(id)
            .then(r => r)
    }, [application.status], id)

    const getApplication = async (id) => {
        const res = await apiCall("application", "read", id)
        //await console.log(res);
        setApplication(res.apiData);
    }

    const approveApplication = async (newStatus) => {
        const res = await apiCall("application", "update", {id: id, status: newStatus})
        setApplication(res.apiData);
    }

    return (
        <>
            <Paper
                variant="outlined"
                sx={{ my: 3, p: 3, boxShadow: 20 }}
            >
                <StatusHeader
                    applicationInfo={application}
                />
                <ApplicationView
                    applicationInfo={application}
                />

                <ReviewerButtons
                    status={application.status}
                    approveApplication={approveApplication}
                    setShowList={setShowList}
                />
            </Paper>
            <br /><br /><br /><br />
        </>
    );
}