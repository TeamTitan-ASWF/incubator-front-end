import ApplicationView from "../application/ApplicationView";
import ReviewerButtons from "./ReviewerButtons";
import StatusHeader from "../application/StatusHeader";
import {useEffect, useState} from "react";
import apiCall from "../api/api";
import Paper from "@mui/material/Paper";

export default function ReviewerApplicationView({id, setShowList, getApplications}) {
    const [application, setApplication] = useState({})

    useEffect(() => {
        getApplication(id)
            .then(r => r)
    }, [application.status, id])

    const getApplication = async (id) => {
        const res = await apiCall("application", "read", id)
        setApplication(res.apiData);
    }

    const approveApplication = async (newStatus) => {
        const res = await apiCall("application", "update", {id: id, status: newStatus})
        await setApplication(res.apiData);
        await getApplications();
    }

    return (
        <>
                <StatusHeader
                    applicationInfo={application}
                />

            <Paper
                variant="outlined"
                sx={{mb: 3, p: 3, boxShadow: 20}}
            >
                <ApplicationView
                    applicationInfo={application}
                />
                <br />
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