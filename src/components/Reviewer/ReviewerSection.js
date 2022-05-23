import {useState} from "react";
import ReviewerList from "./ReviewerList";
import ReviewerItem from "./ReviewerItem";

const ReviewerSection = () => {
    const [showList, setShowList] = useState(true);
    const [currentApplicationId, setCurrentApplicationId] = useState(null);

    return (
        <>
            {showList && <ReviewerList setShowList={setShowList} setCurrentApplicationId={setCurrentApplicationId} />}
            {!showList && <ReviewerItem id={currentApplicationId} />}
        </>
    );
};

export default ReviewerSection;
