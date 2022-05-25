import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonalInfoForm from "./PersonalInfoForm";
import StatementsForm from "./StatementsForm";
import ReferralsForm from "./ReferralsForm";
import apiCall from '../api/api';
import {useState} from "react";
import ReviewerItem from "../reviewer/ReviewerItem";
import inputValidation from '../inputValidation/inputValidation';


const steps = ['Personal Information', 'Statements', 'Referrals', 'Review'];

export default function Submit() {
  const [message,setMessage] = useState("");
  const [isDisabled,setIsDisabled] = useState(false)
  const [ messageTitle,setMessageTitle] = useState("");
    const [activeStep, setActiveStep] = React.useState(0);
    const [errorList,setErrorList] = useState("");
    const [applicationInfo,setApplicationInfo] = React.useState({
        refNum : "",
        fName : "",
        lName : "",
        mI : "",
        dodId : "",
        rank : "E1",
        dob : '2000-10-11',
        lastACFT : '2022-05-01',
        acftScore : 0,
        height : 0,
        weight: 0,
        techBG : "",
        motivation : "",
        referenceName : "",
        referenceRank: "E1",
        referenceEmail: "",
        referencePhone: "",
        status:"Pending",
        dateSubmitted: ""
    })

    const updateFunctionWithValidation = (e) => {

        updateState(e);

    }


    function updateState(e){
//let applicationInfoCopy = JSON.parse(JSON.stringify(applicationInfo));
        


      setApplicationInfo(
            {





                refNum : (e.target.id === "refNum") ? e.target.value : applicationInfo.refNum ,
                fName : (e.target.id === "fName") ? e.target.value : applicationInfo.fName ,
                lName : (e.target.id === "lName") ? e.target.value : applicationInfo.lName ,
                mI : (e.target.id === "mI") ? e.target.value : applicationInfo.mI ,
                dodId : (e.target.id === "dodId") ? e.target.value : applicationInfo.dodId ,
                rank : (e.target.name === "rank") ? e.target.value : applicationInfo.rank ,
                dob : (e.target.name === "dob") ? e.target.value : applicationInfo.dob ,
                lastACFT : (e.target.name === "lastACFT") ? e.target.value : applicationInfo.lastACFT ,
                acftScore : (e.target.id === "acftScore") ? e.target.value : applicationInfo.acftScore ,
                height : (e.target.id === "height") ? e.target.value : applicationInfo.height ,
                weight: (e.target.id === "weight") ? e.target.value : applicationInfo.weight ,
                techBG : (e.target.id === "techBG") ? e.target.value : applicationInfo.techBG,
                motivation : (e.target.id === "motivation") ? e.target.value : applicationInfo.motivation,
                referenceName : (e.target.id === "referenceName") ? e.target.value : applicationInfo.referenceName ,
                referenceRank: (e.target.name === "referenceRank") ? e.target.value : applicationInfo.referenceRank ,
                referenceEmail: (e.target.id === "referenceEmail") ? e.target.value : applicationInfo.referenceEmail ,
                referencePhone: (e.target.id === "referencePhone") ? e.target.value : applicationInfo.referencePhone ,
                status:(e.target.id === "status") ? e.target.value : applicationInfo.status ,
                dateSubmitted: (e.target.id === "dateSubmitted") ? e.target.value : applicationInfo.dateSubmitted
            }
        


        )


    }


    function getStepContent(step) {
        switch (step) {
            case 0:
                return <PersonalInfoForm applicationInfo={applicationInfo} updateState={updateState} setApplicationInfo={setApplicationInfo} setIsDisabled={setIsDisabled} updateFunctionWithValidation={updateFunctionWithValidation} errorList={errorList}/>;
            case 1:
                return <StatementsForm applicationInfo={applicationInfo} updateState={updateState} errorList= {errorList} />;
            case 2:
                return <ReferralsForm applicationInfo={applicationInfo} updateState={updateState} updateFunctionWithValidation={updateFunctionWithValidation} errorList={errorList} />;
            case 3:
                return <ReviewerItem applicationInfo={applicationInfo} />
            default:
                throw new Error('Unknown step');
        }
    }
    const handleNext = () => {


        // This makes sure steps 1-3 are not empty
            let continueToNextStep ;
            let firstStepArray=['fName','lName','dodId','acftScore','height','weight']
            let secondStepArray=['techBG','motivation']
            let thirdStepArray=['referenceName','referenceEmail','referencePhone']


            let validatedArray = [];
            let outputMessage = [] ;  
            let stepArray = [];

            switch(activeStep){

                case 0:
                    stepArray = firstStepArray;
                break;


                case 1:
                    stepArray = secondStepArray;
                break;


                case 2:
                    stepArray = thirdStepArray;
                break;
            }

            stepArray.forEach(element => {
                try{     
                    let temp = inputValidation(applicationInfo[element],element).output
                     if(temp) outputMessage.push (inputValidation(applicationInfo[element],element).output) 
                   
                }catch{
                    outputMessage.push(element)
                }
            });

        
        
        setErrorList(outputMessage);


       if(outputMessage.length > 0) return;

        if(activeStep === 3){ // Submit the form instead of going



            apiCall('application', 'add',{
                refNum : applicationInfo.dodId,
                fName :  applicationInfo.fName,
                lName :  applicationInfo.lName,
                mI :  applicationInfo.mI,
                dodId :  applicationInfo.dodId,
                rank : applicationInfo.rank,
                dob : applicationInfo.dob,
                lastACFT :  applicationInfo.lastACFT,
                acftScore :  applicationInfo.acftScore,
                height :  applicationInfo.height,
                weight: applicationInfo.weight,
                techBG :  applicationInfo.techBG,
                motivation :  applicationInfo.motivation,
                referenceName :  applicationInfo.referenceName,
                referenceRank:  applicationInfo.referenceRank,
                referenceEmail:  applicationInfo.referenceEmail,
                referencePhone:  applicationInfo.referencePhone,
                //status: applicationInfo.status,
                dateSubmitted:  applicationInfo.dateSubmitted
            } ).then((r)=> {
                setMessageTitle("Thank you for applying");
                setMessage(`Your reference number is ${applicationInfo.dodId} please feel free to check back for a status update`)
                setActiveStep(activeStep + 1)
            } )
            .catch((r)=>{
                setMessageTitle("Something went wrong please try again later")
                setActiveStep(activeStep + 1)
            })
   


        }else{
            setActiveStep(activeStep + 1);

        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    {messageTitle}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {message}
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}
                   
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </Container>
    );
}

