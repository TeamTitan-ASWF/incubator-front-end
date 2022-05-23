import './App.css';
import Submit from "./components/Submit";
import ReviewerList from "./components/Reviewer/ReviewerList";
import {useState} from "react";
import ReviewerSection from "./components/Reviewer/ReviewerSection";

export default function App() {

    const [showReviewer, setShowReviewer] = useState(true);


    return (
        <div className="App">
            {/*<Submit/>*/}
            {showReviewer && <ReviewerSection />}
        </div>
    );
}
