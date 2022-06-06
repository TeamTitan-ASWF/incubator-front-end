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
import {useEffect, useState} from "react";
import ApplicationView from "./ApplicationView";
import inputValidation from '../inputValidation/inputValidation';
import {formatDate, fixTimeZone} from "../inputValidation/dateValidationFunctions";
import {useContext} from "react";
import AppContext from "../contexts/AppContext";
import Grid from "@mui/material/Grid";

const steps = ['Personal Information', 'Statements', 'Referrals', 'Review'];

export default function ApplicationForm({currentApplicationInfo, isEditing, setIsEditing, currentApplicationId}) {
    const appContext = useContext(AppContext);
    let outputMessage = [];
    let firstStepArray = ['fName', 'lName', 'dodId', 'acftScore', 'height', 'weight'];
    let secondStepArray = ['techBG', 'motivation'];
    let thirdStepArray = ['referenceName', 'referenceEmail', 'referencePhone'];

    const [message, setMessage] = useState("");
    const [messageTitle, setMessageTitle] = useState("");
    const [activeStep, setActiveStep] = React.useState(0);
    const [errorList, setErrorList] = useState([]);
    const [errorMessageOnNext, setErrorMessageOnNext] = useState([]);
    const [applicationInfo, setApplicationInfo] = React.useState({
        fName: appContext.user?.fName ?? "",
        lName: appContext.user?.lName ?? "",
        mI: appContext.user?.mI ?? "",
        dodId: appContext.user?.dodId ?? "",
        rank: appContext.user?.rank ?? "E1",
        //dob: (appContext.user?.dob) ? fixTimeZone(appContext.user?.dob) : 'Tue Jan 01 1995 18:00:00 GMT-0600 (Central Standard Time)',
        dob: (appContext.user?.dob) ? formatDate(appContext.user?.dob) : '1990/01/01',
        lastACFT: 'Tue Jan 10 2022 18:00:00 GMT-0600 (Central Standard Time)',
        acftScore: 0,
        height: 0,
        weight: 0,
        techBG: "",
        motivation: "",
        referenceName: "",
        referenceRank: "E1",
        referenceEmail: "",
        referencePhone: "",
        referenceName2: "",
        referenceRank2: "E1",
        referenceEmail2: "",
        referencePhone2: "",
        referenceName3: "",
        referenceRank3: "E1",
        referenceEmail3: "",
        referencePhone3: "",
        status: "pending",
        dateSubmitted: "",
    })
    useEffect(() => {
        if (isEditing) {
            setApplicationInfo({
                ...currentApplicationInfo,
                // refNum: currentApplicationInfo.refNum,
                // fName: currentApplicationInfo.fName,
                // lName: currentApplicationInfo.lName,
                // mI: currentApplicationInfo.mI,
                // dodId: currentApplicationInfo.dodId,
                // rank: currentApplicationInfo.rank,
                // dob: currentApplicationInfo.dob,
                // lastACFT: currentApplicationInfo.lastACFT,
                // acftScore: currentApplicationInfo.acftScore,
                // height: currentApplicationInfo.height,
                // weight: currentApplicationInfo.weight,
                // techBG: currentApplicationInfo.techBG,
                // motivation: currentApplicationInfo.motivation,
                // referenceName: currentApplicationInfo.referenceName,
                // referenceRank: currentApplicationInfo.referenceRank,
                // referenceEmail: currentApplicationInfo.referenceEmail,
                // referencePhone: currentApplicationInfo.referencePhone,
                // referenceName2: currentApplicationInfo.referenceName2,
                // referenceRank2: currentApplicationInfo.referenceRank2,
                // referenceEmail2: currentApplicationInfo.referenceEmail2,
                // referencePhone2: currentApplicationInfo.referencePhone2,
                // referenceName3: currentApplicationInfo.referenceName3,
                // referenceRank3: currentApplicationInfo.referenceRank3,
                // referenceEmail3: currentApplicationInfo.referenceEmail3,
                // referencePhone3: currentApplicationInfo.referencePhone3,
                lastACFT: fixTimeZone(currentApplicationInfo.lastACFT),
                status: "pending",
                dateSubmitted: "",
            })
        }
    }, [currentApplicationInfo, isEditing])


    const fillFields = () => {
        setApplicationInfo({
                // fName: "Steven",
                // lName: "Rodgers",
                // mI: "G",
                // dodId: "1234567890",
                // rank: "O3",
                // dob: 'Tue Jul 04 1918 18:00:00 GMT-0600 (Central Standard Time)',
                lastACFT: 'Tue Jan 10 2022 18:00:00 GMT-0600 (Central Standard Time)',
                acftScore: 600,
                height: 74,
                weight: 240,
                techBG: `Steve Rogers was born during the Depression and grew up a frail youth in a poor family. His father died when he was a child, his mother when he was in his late teens. Horrified by newsreel footage of the Nazis in Europe, Rogers was inspired to try to enlist in the Army. However, because of his frailty and sickness, he was rejected. Overhearing the boy's earnest plea to be accepted, General Chester Phillips of the U.S. Army offered Rogers the opportunity to take part in a special experiment called Operation: Rebirth. Rogers agreed and was taken to a secret laboratory in Washington, D.C. where he was introduced to Dr. Abrahan Erskine (code named: Prof. Reinstein), the creator to the Super-Soldier formula
    After weeks of tests, Rogers was at last administered the Super-Soldier serum. Given part of the compound intravenously and another part orally, Rogers was then bombarded by "vita-rays," a special combination of exotic (in 1941) wavelengths of radiation designed to accelerate and stabilize the serum's effect on his body. Steve Rogers emerged from the vita-ray chamber with a body as perfect as a body can be and still be human. A Nazi spy who observed the experiment murdered Dr. Erskine mere minutes after its conclusion. Erskine died without fully committing the Super-Soldier formula to paper, leaving Steve Rogers the Sole beneficiary of his genius.
    Roger was then put through an intensive physical and tactical training program,teaching him gymnastics, hand-to-hand combat and military strategy. Three months later, he was given his first assignment, to stop the Nazi agent called the Red Skull. To help him become a symbolic counterpart to the Red Skull, Rogers was given the red, white, and blue costume of Captain America.
    During the war, he served as both a symbol of freedom and America's most effective special operative. Then, during the final days of the war, he was trying to stop a bomb-loaded drone-plane launched by Nazi technician Baron Heinrich Zemo when the plane exploded, killing his partner Bucky; and throwing him unhurt into icy Arctic waters. The Super-Soldier formula prevented crystallization of Captain America's bodily fluid, allowing him to enter a state of suspended animation. Decades later, he was rescued by the newly-formed Avengers and became a cornerstone of the team. His might undiminished. Captain America remains a symbol of liberty and justice.`,
                motivation: "I'm just a kid from brooklyn",
                referenceName: "Bucky Barnes",
                referenceRank: "E5",
                referenceEmail: "bigbucky17@gmail.com",
                referencePhone: "1234567890",
                referenceName2: "Bucky Barnes",
                referenceRank2: "E5",
                referenceEmail2: "bigbucky17@gmail.com",
                referencePhone2: "1234567890",
                referenceName3: "Bucky Barnes",
                referenceRank3: "E5",
                referenceEmail3: "bigbucky17@gmail.com",
                referencePhone3: "1234567890",
                status: "Pending",
                dateSubmitted: ""
            }
        )
    }

    const onChangeValidate = (e) => {
        let errorListCopy = JSON.parse(JSON.stringify(errorList));

        //console.log(e.target.id);

        try {
            if (inputValidation(applicationInfo[e.target.id], e.target.id).output) {
                errorListCopy.push(inputValidation(applicationInfo[e.target.value], e.target.id).output); //If element is not validated, add the elements name to this list
            } else if (errorList.includes(e.target.id)) {
                errorListCopy = errorListCopy.filter(ele => ele !== e.target.id);
            }
        } catch {
            errorListCopy.push(e.target.id);
        }

        setErrorList(errorListCopy);
    }

    const cleanErrorMessage = (errorMessageArray) => {
        let tempErrorMessage = errorMessageArray.join("|||");
        tempErrorMessage = tempErrorMessage.replace(/acftScore/, "ACFT Score");
        tempErrorMessage = tempErrorMessage.replace(/height/, "Height");
        tempErrorMessage = tempErrorMessage.replace(/weight/, "Weight");
        tempErrorMessage = tempErrorMessage.replace(/techBG/, "Technical Background");
        tempErrorMessage = tempErrorMessage.replace(/motivation/, "'Why you want to join'");
        tempErrorMessage = tempErrorMessage.replace(/referenceName/, "Reference Name");
        tempErrorMessage = tempErrorMessage.replace(/referenceEmail/, "Reference Email");
        tempErrorMessage = tempErrorMessage.replace(/referencePhone/, "Reference Phone");

        return tempErrorMessage.split("|||");
    };

    function updateState(e) {

        setApplicationInfo(
            {
                fName: (e.target.id === "fName") ? e.target.value : applicationInfo.fName,
                lName: (e.target.id === "lName") ? e.target.value : applicationInfo.lName,
                mI: (e.target.id === "mI") ? e.target.value : applicationInfo.mI,
                dodId: (e.target.id === "dodId") ? e.target.value : applicationInfo.dodId,
                rank: (e.target.name === "rank") ? e.target.value : applicationInfo.rank,
                dob: (e.target.name === "dob") ? e.target.value : applicationInfo.dob,
                lastACFT: (e.target.name === "lastACFT") ? e.target.value : applicationInfo.lastACFT,
                acftScore: (e.target.id === "acftScore") ? e.target.value : applicationInfo.acftScore,
                height: (e.target.id === "height") ? e.target.value : applicationInfo.height,
                weight: (e.target.id === "weight") ? e.target.value : applicationInfo.weight,
                techBG: (e.target.id === "techBG") ? e.target.value : applicationInfo.techBG,
                motivation: (e.target.id === "motivation") ? e.target.value : applicationInfo.motivation,
                referenceName: (e.target.id === "referenceName") ? e.target.value : applicationInfo.referenceName,
                referenceRank: (e.target.name === "referenceRank") ? e.target.value : applicationInfo.referenceRank,
                referenceEmail: (e.target.id === "referenceEmail") ? e.target.value : applicationInfo.referenceEmail,
                referencePhone: (e.target.id === "referencePhone") ? e.target.value : applicationInfo.referencePhone,
                referenceName2: (e.target.id === "referenceName2") ? e.target.value : applicationInfo.referenceName2,
                referenceRank2: (e.target.name === "referenceRank2") ? e.target.value : applicationInfo.referenceRank2,
                referenceEmail2: (e.target.id === "referenceEmail2") ? e.target.value : applicationInfo.referenceEmail2,
                referencePhone2: (e.target.id === "referencePhone2") ? e.target.value : applicationInfo.referencePhone2,
                referenceName3: (e.target.id === "referenceName3") ? e.target.value : applicationInfo.referenceName3,
                referenceRank3: (e.target.name === "referenceRank3") ? e.target.value : applicationInfo.referenceRank3,
                referenceEmail3: (e.target.id === "referenceEmail3") ? e.target.value : applicationInfo.referenceEmail3,
                referencePhone3: (e.target.id === "referencePhone3") ? e.target.value : applicationInfo.referencePhone3,
                status: (e.target.id === "status") ? e.target.value : applicationInfo.status,
                dateSubmitted: (e.target.id === "dateSubmitted") ? e.target.value : applicationInfo.dateSubmitted
            }
        )
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <PersonalInfoForm applicationInfo={applicationInfo} updateState={updateState}
                                         setApplicationInfo={setApplicationInfo} errorList={errorList}
                                         onChangeValidate={onChangeValidate}/>;
            case 1:
                return <StatementsForm applicationInfo={applicationInfo} updateState={updateState} errorList={errorList}
                                       onChangeValidate={onChangeValidate}/>;
            case 2:
                return <ReferralsForm applicationInfo={applicationInfo} updateState={updateState} errorList={errorList}
                                      onChangeValidate={onChangeValidate}/>;
            case 3:
                return <ApplicationView applicationInfo={applicationInfo}/>
            default:
                throw new Error('Unknown step');
        }
    }

    const validatePage = () => {
        let stepArray = [];

        switch (activeStep) {
            case 0:
                stepArray = firstStepArray;
                break;
            case 1:
                stepArray = secondStepArray;
                break;
            case 2:
                stepArray = thirdStepArray;
                break;
            default :
                //to clear the warning shouldn't get here
                break;
        }

        stepArray.forEach(element => {
            try {

                if (inputValidation(applicationInfo[element], element).output) {
                    const handlerOutput = inputValidation(applicationInfo[element], element);
                    outputMessage.push(handlerOutput.reason); //If element is not validated, add the elements name to this list
                }

            } catch (error) {
                //console.log(error);
                outputMessage.push(element + " required");
            }
        });

        setErrorMessageOnNext(cleanErrorMessage(outputMessage));
        setErrorList(outputMessage);
    }

    const handleNext = () => {

        validatePage();
        // This makes sure steps 1-3 are not empty

        if (outputMessage.length > 0) {
            return;
        }

        if (activeStep === 3) { // ApplicationForm the form instead of going
            if (isEditing === true) {
                //console.log(applicationInfo);

                apiCall('application', 'update', {
                    id: currentApplicationId,
                    fName: applicationInfo.fName,
                    lName: applicationInfo.lName,
                    mI: applicationInfo.mI,
                    dodId: applicationInfo.dodId.toString(),
                    rank: applicationInfo.rank,
                    dob: formatDate(applicationInfo.dob),
                    user: appContext.user.id,
                    lastACFT: formatDate(applicationInfo.lastACFT),
                    acftScore: applicationInfo.acftScore,
                    height: applicationInfo.height,
                    weight: applicationInfo.weight,
                    techBG: applicationInfo.techBG,
                    motivation: applicationInfo.motivation,
                    referenceName: applicationInfo.referenceName,
                    referenceRank: applicationInfo.referenceRank,
                    referenceEmail: applicationInfo.referenceEmail,
                    referencePhone: applicationInfo.referencePhone,
                    referenceName2: applicationInfo.referenceName2,
                    referenceRank2: applicationInfo.referenceRank2,
                    referenceEmail2: applicationInfo.referenceEmail2,
                    referencePhone2: applicationInfo.referencePhone2,
                    referenceName3: applicationInfo.referenceName3,
                    referenceRank3: applicationInfo.referenceRank3,
                    referenceEmail3: applicationInfo.referenceEmail3,
                    referencePhone3: applicationInfo.referencePhone3,
                    //status: applicationInfo.status,
                    dateSubmitted: formatDate(new Date())
                })
                    .then((r) => {
                        setMessageTitle("Your application has been updated successfully");
                        setMessage(`Please periodically check your Application Status tab for status updates.`);
                        setActiveStep(activeStep + 1)
                        //setIsEditing (false);
                    })
                    .catch((r) => {
                        setMessageTitle("Something went wrong please try again later")
                        setActiveStep(activeStep + 1)
                    })
            } else {
                apiCall('application', 'add', {
                    user: appContext.user.id,
                    fName: applicationInfo.fName,
                    lName: applicationInfo.lName,
                    mI: applicationInfo.mI,
                    dodId: applicationInfo.dodId,
                    rank: applicationInfo.rank,
                    dob: formatDate(applicationInfo.dob),
                    lastACFT: formatDate(applicationInfo.lastACFT),
                    acftScore: applicationInfo.acftScore,
                    height: applicationInfo.height,
                    weight: applicationInfo.weight,
                    techBG: applicationInfo.techBG,
                    motivation: applicationInfo.motivation,
                    referenceName: applicationInfo.referenceName,
                    referenceRank: applicationInfo.referenceRank,
                    referenceEmail: applicationInfo.referenceEmail,
                    referencePhone: applicationInfo.referencePhone,
                    referenceName2: applicationInfo.referenceName2,
                    referenceRank2: applicationInfo.referenceRank2,
                    referenceEmail2: applicationInfo.referenceEmail2,
                    referencePhone2: applicationInfo.referencePhone2,
                    referenceName3: applicationInfo.referenceName3,
                    referenceRank3: applicationInfo.referenceRank3,
                    referenceEmail3: applicationInfo.referenceEmail3,
                    referencePhone3: applicationInfo.referencePhone3,
                    dateSubmitted: formatDate(new Date())
                }).then((r) => {
                    if (r.wasError) {
                        setMessageTitle("Something went wrong.");
                        setMessage('Unfortunately there was an error submitting your application. Please try again later.');
                        setActiveStep(activeStep + 1);
                    } else {
                        setMessageTitle("Thank you for applying.");
                        setMessage(`Please periodically check your Application Status tab for status updates.`);
                        setActiveStep(activeStep + 1);
                    }
                })
                    .catch((r) => {
                        setMessageTitle("Something went wrong.");
                        setMessage('Unfortunately there was an error submitting your application. Please try again later.');
                        setActiveStep(activeStep + 1)
                    })
            }

        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    let saveOrSubmit = "";
    if (isEditing === true) {
        saveOrSubmit = "Save";
    } else {
        saveOrSubmit = "Submit";
    }

    return (
        <>
            <Container component="main" maxWidth="md" sx={{mb: 4}}>
                <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}, boxShadow: 20}}>
                    <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        <Button onClick={fillFields}>Auto-populate</Button>
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
                                <Grid container>
                                    <Grid item xs={8} sx={{
                                        pl: '2%',
                                        color: "red",
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        flexDirection: "column"
                                    }}>
                                        {errorMessageOnNext.join(", ")}
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                            {activeStep !== 0 && (
                                                <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>
                                                    Back
                                                </Button>
                                            )}
                                            {activeStep !== steps.length - 1 && (
                                                <Button
                                                    variant="contained"
                                                    sx={{mt: 3, ml: 1}}
                                                    onClick={() => {
                                                        //nothing yet
                                                    }}
                                                >
                                                    Save
                                                </Button>)}
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{mt: 3, ml: 1}}
                                            >
                                                {activeStep === steps.length - 1 ? saveOrSubmit : 'Next'}
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </Container>
            <br/><br/><br/><br/>
        </>
    );
}

