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


export default function App() {
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



        <Footer/>
            </ThemeProvider>
    </div>
  );
}
