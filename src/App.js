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

export default function App() {
    const [showReviewer, setShowReviewer] = useState('newApp');
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
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar setShowReviewer={setShowReviewer}/>

            <Container maxWidth={"lg"} sx={{justifyContent: 'center', alignContent: 'center',}}>
                {currentDisplay()}
            </Container>


            <Footer/>
        </ThemeProvider>
    );
}
