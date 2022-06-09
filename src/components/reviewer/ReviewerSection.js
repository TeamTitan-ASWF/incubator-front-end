import {useState} from "react";
import ApplicationList from "../application/ApplicationList";
import ReviewerApplicationView from "./ReviewerApplicationView";
import {useEffect} from "react";
import apiCall from "../api/api";

const ReviewerSection = ({showList, setShowList}) => {
    //const [showList, setShowList] = useState(true);
    const [currentApplicationId, setCurrentApplicationId] = useState(null);
    const [applicants, setApplicants] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState([]);

    useEffect(() => {
        getApplications().then(r=>r);
    }, []);

    const getApplications = async () => {
        const response = await apiCall('application', 'list');
        await setApplicants(response.apiData);
        await setFilteredApplications(response.apiData);

        const filteredResults = await response.apiData.filter(applicant => {
            switch (applicant.status) {
                case "in progress":
                    return false;
                case "rescinded":
                    return false;
                default:
                    return true;
            }
        });

        await setFilteredApplications(filteredResults);
    }

    return (
        <>
            {showList &&
                <ApplicationList
                    setShowList={setShowList}
                    setCurrentApplicationId={setCurrentApplicationId}
                    applicants = {applicants}
                    setApplicants = {setApplicants}
                    filteredApplications = {filteredApplications}
                    setFilteredApplications = {setFilteredApplications}
                    reviewerListView={true}
                />}
            {!showList &&
                <ReviewerApplicationView
                    id={currentApplicationId}
                    setShowList={setShowList}
                    getApplications={getApplications}
                />}

        </>
    );
};

export default ReviewerSection;
