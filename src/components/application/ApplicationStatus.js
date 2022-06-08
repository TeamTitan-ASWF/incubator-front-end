import Container from "@mui/material/Container";
import ApplicationList from "./ApplicationList";
import {useCallback, useContext, useEffect, useState} from "react";
import apiCall from "../api/api";
import AppContext from "../contexts/AppContext";
import UserViewAddEditParent from "../user/UserViewAddEditParent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import * as React from "react";


export default function ApplicationStatus({setShowList, showList}) {
    const appContext = useContext(AppContext);
    //const [showList, setShowList] = useState(true);
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
                        <Container component="main" maxWidth="md" sx={{mb: 4}}>
                            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}, boxShadow: 20}}>
                                <Typography variant={"h5"}>
                                    You have not yet started an application. Please start the
                                    application
                                    process by clicking on "New Application" on the main menu.
                                </Typography>
                            </Paper>
                        </Container>
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
                        getApplications={getApplications}
                    />
                }
            </Container>
        );
    }
}