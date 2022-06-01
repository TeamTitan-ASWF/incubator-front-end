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
import ApplicationStatus from "./components/user/ApplicationStatus";
import UserPage from "./components/user/UserPage";
import LandingPage from "./components/user/LandingPage";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginParent from './components/login/LoginParent';

export default function App() {

    const [showReviewer, setShowReviewer] = useState('landingPage');

    const theme = createTheme({
        palette: {
            primary: {
                light: '#757ce8',
                main: '#000000',
                dark: '#4ceb34',
                contrastText: '#fff',
            },
        },

    });

    const currentDisplay = () => {
        switch (showReviewer) {
            case 'landingPage':
                return <LandingPage setShowReviewer={setShowReviewer}/>
                break;
            case 'newApp':
                return <Submit/>
                break;
            case 'reviewerList':
                return <ReviewerSection/>
                break;
            case 'checkStatus':
                return <UserPage/>
                break;
            default:
            //should not get here
        }
    };

    return (
        <BrowserRouter> 
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar setShowReviewer={setShowReviewer}/>

            <Container maxWidth={"lg"} sx={{justifyContent: 'center', alignContent: 'center',}}>
             <Routes>
                <Route path="/"
                element = {<LandingPage/>}/>
                
                <Route path="/login"
                element = {<LoginParent/>}/>

                <Route path="/status"
                element = {<ApplicationStatus/>}/>

                <Route path="/newApp"
                element = {<Submit/>}/>
             </Routes>
            </Container>


            <Footer/>
        </ThemeProvider>
        </BrowserRouter>
    );
}
