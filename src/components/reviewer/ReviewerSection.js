import {useState} from "react";
import ReviewerList from "./ReviewerList";
import ReviewerPage from "./ReviewerPage";
import {useEffect} from "react";
import apiCall from "../api/api";

const ReviewerSection = () => {
    const [showList, setShowList] = useState(true);
    const [currentApplicationId, setCurrentApplicationId] = useState(null);
    const [applicants, setApplicants] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState([]);

    useEffect(() => {
        getApplications();
    }, []);

    const getApplications = async () => {
        const response = await apiCall('application', 'list');
        await setApplicants(response.apiData);
        await setFilteredApplications(response.apiData);
    }

    return (
        <>
            {showList &&
                <ReviewerList
                    setShowList={setShowList}
                    setCurrentApplicationId={setCurrentApplicationId}
                    applicants = {applicants}
                    setApplicants = {setApplicants}
                    filteredApplications = {filteredApplications}
                    setFilteredApplications = {setFilteredApplications}
                />}
            {!showList &&
                <ReviewerPage
                    id={currentApplicationId}
                    setShowList={setShowList}
                />}

        </>
    );
};

export default ReviewerSection;
