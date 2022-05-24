import ReviewerItem from "./ReviewerItem";
import ReviewerButtons from "./ReviewerButtons";
import StatusHeader from "./StatusHeader";

export default function ReviewerPage({id}) {
    return (
        <>
            <StatusHeader />
            <ReviewerItem id={id}/>
            <ReviewerButtons id={id}/>
        </>
    );
}