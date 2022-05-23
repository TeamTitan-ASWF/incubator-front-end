import './App.css';
import Submit from "./components/Submit";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import axios from "axios";

import Submit from "./components/Submit";
import ReviewerList from "./components/Reviewer/ReviewerList";
import {useState} from "react";
import ReviewerSection from "./components/Reviewer/ReviewerSection";

export default function App() {
    const [showReviewer, setShowReviewer] = useState(true);
    const theme = createTheme();


    // axios.get("http://ec2-18-216-140-13.us-east-2.compute.amazonaws.com:8080")
    //     .then((r)=> {
    //         console.log(r)
    //         // setActiveStep(activeStep + 1)
    //     } )
    //     .catch((r)=>{
    //         console.log(r)
    //     })


  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <CssBaseline />
        <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{
                position: 'relative',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
            }}
        >
            <Toolbar>
                <ResponsiveAppBar/>
            </Toolbar>
        </AppBar>

        <Submit/>
            {showReviewer && <ReviewerSection />}


        <Footer/>
            </ThemeProvider>
    </div>
  );
}
