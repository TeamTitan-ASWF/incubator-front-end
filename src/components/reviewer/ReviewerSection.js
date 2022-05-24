import {useState} from "react";
import ReviewerList from "./ReviewerList";
import ReviewerPage from "./ReviewerPage";

const ReviewerSection = () => {
    const [showList, setShowList] = useState(true);
    const [currentApplicationId, setCurrentApplicationId] = useState(null);

    return (
        <>
            {showList &&
                <ReviewerList
                setShowList={setShowList}
                setCurrentApplicationId={setCurrentApplicationId}
                />}
            {!showList &&
                <ReviewerPage id={currentApplicationId}/>}
        </>
    );
};

export default ReviewerSection;
