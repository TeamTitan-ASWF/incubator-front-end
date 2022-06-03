import Container from "@mui/material/Container";
import ApplicationList from "./ApplicationList";
import {useContext, useEffect, useState} from "react";
import apiCall from "../api/api";
import AppContext from "../contexts/AppContext";
import UserPage from "../user/UserPage";


export default function ApplicationStatus() {
    const appContext = useContext(AppContext);
    const [showList, setShowList] = useState(true);
    const [currentApplicationId, setCurrentApplicationId] = useState(null);
    const [applicants, setApplicants] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState([]);

    useEffect(() => {
        getApplications();
    }, []);

    const getApplications = async () => {
        const response = await apiCall('getApplicationByUser', 'read', appContext.user.id);
        await setApplicants(response.apiData);
        await setFilteredApplications(response.apiData);
    }

    return (
        <Container component="main"  sx={{mb: 4}}>

                {   showList ?
                    <ApplicationList
                        setShowList={setShowList}
                        setCurrentApplicationId={setCurrentApplicationId}
                        applicants={applicants}
                        setApplicants={setApplicants}
                        filteredApplications={filteredApplications}
                        setFilteredApplications={setFilteredApplications}
                    />
                    :
                    <UserPage
                        id={currentApplicationId}
                        setShowList={setShowList}
                    />
                }
        </Container>
    );
}