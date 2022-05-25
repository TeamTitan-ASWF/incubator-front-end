import StatusHeader from "../reviewer/StatusHeader";
import ReviewerItem from "../reviewer/ReviewerItem";

export default function UserPage({applicationInfo}) {
    return (
        <>
            <StatusHeader
                status={applicationInfo.status}
            />
            <ReviewerItem
                applicationInfo={applicationInfo}
            />
        </>
    );
}