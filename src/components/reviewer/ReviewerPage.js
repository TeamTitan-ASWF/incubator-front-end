import ReviewerItem from "./ReviewerItem";
import ReviewerButtons from "./ReviewerButtons";
import StatusHeader from "./StatusHeader";
import {useEffect, useState} from "react";
import apiCall from "../api/api";

export default function ReviewerPage({id, setShowList}) {
    const [application, setApplication] = useState({})

    useEffect(() => {
        getApplication(id)
            .then(r => r)
    }, [application.status])

    const getApplication = async (id) => {
        const res = await apiCall("application", "read", id)
        await console.log(res);
        setApplication(res.apiData);
    }

    const approveApplication = async (newStatus) => {
        const res = await apiCall("application", "update", {id: id, status: newStatus})
        setApplication(res.apiData);
    }

    return (
        <>
            <StatusHeader
                status={application.status}
            />
            <ReviewerItem
                applicationInfo={application}
            />
            <ReviewerButtons
                status={application.status}
                approveApplication={approveApplication}
                setShowList={setShowList}
            />
        </>
    );
}