import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import ReviewerList from "../reviewer/ReviewerList";
import {useContext, useEffect, useState} from "react";
import apiCall from "../api/api";
import AppContext from "../contexts/AppContext";
import ReviewerPage from "../reviewer/ReviewerPage";

export default function ApplicationStatus({setRefNumber, handleClick}) {
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
        <Container component="main" maxWidth="sm" sx={{mb: 4}}>
            <Paper
                variant="outlined"
                sx={{
                    my: {xs: 3, md: 6}, p: {xs: 2, md: 3},
                    textAlign: "center",
                    boxShadow: 20
                }}>

                {   showList ?
                    <ReviewerList
                        setShowList={setShowList}
                        setCurrentApplicationId={setCurrentApplicationId}
                        applicants={applicants}
                        setApplicants={setApplicants}
                        filteredApplications={filteredApplications}
                        setFilteredApplications={setFilteredApplications}
                    />
                    :
                    <ReviewerPage
                    id={currentApplicationId}
                    setShowList={setShowList}
                    />
                }
            </Paper>
        </Container>
    );
}