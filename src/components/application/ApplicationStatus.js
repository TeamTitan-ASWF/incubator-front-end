import Container from "@mui/material/Container";
import ApplicationList from "./ApplicationList";
import {useCallback, useContext, useEffect, useState} from "react";
import apiCall from "../api/api";
import AppContext from "../contexts/AppContext";
import UserViewAddEditParent from "../user/UserViewAddEditParent";
import Typography from "@mui/material/Typography";


export default function ApplicationStatus() {
    const appContext = useContext(AppContext);
    const [showList, setShowList] = useState(true);
    const [currentApplicationId, setCurrentApplicationId] = useState(null);
    const [applicants, setApplicants] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getApplications = useCallback(async () => {
        const response = await apiCall('getApplicationByUser', 'read', appContext.user.id);

        if (response.apiErrorMsg) {
            //console.log(response.apiErrorMsg.response.data);
            await setApplicants([]);
            await setFilteredApplications([]);

        } else {
            await setApplicants(response.apiData);
            await setFilteredApplications(response.apiData);
        }
        await setIsLoading(false);
    }, [appContext.user.id]);

    useEffect(() => {
        getApplications().then(r=>r);
    }, [getApplications]);

    if (isLoading) {
        return <></>
    } else {
        return (
            <Container component="main" sx={{mb: 4}}>

                {showList ? (applicants.length === 0) ?
                        <><br/><br/><Typography variant={"h5"}> You have not yet started an application. Please start the
                            application
                            process by clicking on "New Application" on the main menu. </Typography></>
                        :
                        <ApplicationList
                            setShowList={setShowList}
                            setCurrentApplicationId={setCurrentApplicationId}
                            applicants={applicants}
                            setApplicants={setApplicants}
                            filteredApplications={filteredApplications}
                            setFilteredApplications={setFilteredApplications}
                        />
                    :
                    <UserViewAddEditParent
                        id={currentApplicationId}
                        setShowList={setShowList}
                    />
                }
            </Container>
        );
    }
}