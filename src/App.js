import './App.css';
import Submit from "./components/user/Submit";
import Footer from "./components/ui/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {useState} from "react";
import ReviewerSection from "./components/reviewer/ReviewerSection";
import NavBar from "./components/ui/NavBar";
import Container from "@mui/material/Container";

export default function App() {
    const [showReviewer, setShowReviewer] = useState(false);
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar setShowReviewer={setShowReviewer}/>

            <Container maxWidth={"lg"}>
                {(showReviewer) ? <ReviewerSection/> : <Submit/>}
            </Container>


            <Footer/>
        </ThemeProvider>
    );
}
