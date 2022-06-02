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
import UserPage from "./components/user/UserPage";
import LandingPage from "./components/user/LandingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginParent from './components/login/LoginParent';
import UserProfile from "./components/user/UserProfile";
import {useContext} from "react";
import AppContext from "./components/contexts/AppContext";
import CreateForm from "./components/login/CreateForm";
import LoginPage from "./components/login/LoginPage";

export default function App() {
    const appContext = useContext(AppContext);

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

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <NavBar setShowReviewer={setShowReviewer}/>

                <Container maxWidth={"lg"} sx={{justifyContent: 'center', alignContent: 'center',}}>
                    <Routes>
                        <Route path="/"
                               element={<LandingPage/>}/>

                        <Route path="/login"
                               element={appContext.isValidated ? <LandingPage/> : <LoginPage/>}/>

                        <Route path="/create_account"
                               element={appContext.isValidated ? <LandingPage/> : <CreateForm/>}/>

                        <Route path="/status"
                               element={appContext.isValidated ? <UserPage/> : <LoginPage/>}/>

                        <Route path="/newApp"
                               element={appContext.isValidated ? <Submit/> : <LoginPage/>}/>

                        <Route path="/reviewer"
                               element={appContext.user?.isReviewer ? <ReviewerSection/> : <LandingPage/>}/>

                        <Route path="/profile"
                               element={appContext.isValidated ? <UserProfile/> : <LoginPage/>}/>

                        <Route path="*"
                               element={<LandingPage/>}/>

                    </Routes>
                </Container>


                <Footer/>
            </ThemeProvider>
        </BrowserRouter>
    );
}
