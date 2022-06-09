import './App.css';
import ApplicationForm from "./components/application/ApplicationForm";
import Footer from "./components/ui/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import ReviewerSection from "./components/reviewer/ReviewerSection";
import NavBar from "./components/ui/NavBar";
import Container from "@mui/material/Container";
import LandingPage from "./components/ui/LandingPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserProfile from "./components/profile/UserProfile";
import {useContext} from "react";
import AppContext from "./components/contexts/AppContext";
import CreateUser from "./components/profile/CreateUser";
import LoginPage from "./components/login/LoginPage";
import ApplicationStatus from "./components/application/ApplicationStatus";
import {useState} from "react";

export default function App() {
    const appContext = useContext(AppContext);
    const [showList, setShowList] = useState(true);

    const theme = createTheme({
        palette: {
            primary: {
                light: '#75e87d',
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
                <NavBar showList={showList} setShowList={setShowList} />

                <Container maxWidth={"lg"} sx={{justifyContent: 'center', alignContent: 'center',}}>
                    <Routes>
                        <Route path="/"
                               element={<LandingPage/>}/>

                        <Route path="/login"
                               element={appContext.isValidated ? <LandingPage/> : <LoginPage/>}/>

                        <Route path="/create_account"
                               element={appContext.isValidated ? <LandingPage/> : <CreateUser/>}/>

                        <Route path="/status"
                               element={appContext.isValidated ? <ApplicationStatus showList={showList} setShowList={setShowList} /> : <LoginPage/>}/>

                        <Route path="/newApp"
                               element={appContext.isValidated ? <ApplicationForm showList={showList} setShowList={setShowList} /> : <LoginPage/>}/>

                        <Route path="/reviewer"
                               element={appContext.user?.isReviewer ? <ReviewerSection showList={showList} setShowList={setShowList} /> : <LandingPage/>}/>

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
