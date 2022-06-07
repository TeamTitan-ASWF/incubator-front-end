import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import Rank from "./Rank";
// import DOB from "./DOB";
import LastACFT from "./LastACFT";
import {formatDate} from "../inputValidation/dateValidationFunctions";
import {useContext} from "react";
import AppContext from "../contexts/AppContext";


export default function PersonalInfoForm({
                                             applicationInfo,
                                             setApplicationInfo,
                                             updateState,
                                             errorList,
                                             onChangeValidate
                                         }) {

    const appContext = useContext(AppContext);
    //const IS_NUMERIC_REGEX = /^[0-9]+$/;
    const IS_FLOAT_REGEX = /^[0-9]+[.]?[0-9]*$/;
    const IS_THREE_DIGITS_OR_LESS = /^[0-9]{0,3}$/;
    const IS_TWO_DIGITS_OR_LESS = /^[0-9]{0,2}$/;

    // fName: appContext.user?.fName ?? "",
    // lName: appContext.user?.lName ?? "",
    // mI: appContext.user?.mI ?? "",
    // dodId: appContext.user?.dodId ?? "",
    // rank: appContext.user?.rank ?? "E1",
    // dob: (appContext.user?.dob) ? fixTimeZone(appContext.user?.dob) : 'Tue Jan 01 1995 18:00:00 GMT-0600 (Central Standard Time)',


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Personal Information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>

                    <TextField
                        // required
                        // error = {errorList.includes("fName")}
                        disabled={true}
                        id="fName"
                        name="firstName"
                        label="First name"
                        value={appContext.user?.fName ?? ""}
                        fullWidth
                        // autoComplete="given-name"
                        variant="standard"
                        // onChange={(e) => {
                        //     updateState(e)
                        //     onChangeValidate(e);
                        // }}
                        // onBlur={onChangeValidate}
                    />

                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField
                        // required
                        disabled={true}
                        id="lName"
                        value={appContext.user?.lName ?? ""}
                        // error = {errorList.includes("lName")}
                        name="lastName"
                        label="Last name"
                        fullWidth
                        // autoComplete="family-name"
                        variant="standard"
                        // onChange={(e) => {
                        //     updateState(e)
                        //     onChangeValidate(e);
                        // }}
                        //  onBlur={onChangeValidate}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <TextField
                        disabled={true}
                        // error = {errorList.includes("mI")}
                        id="mI"
                        name="mI"
                        value={appContext.user?.mI ?? ""}
                        label="MI"
                        fullWidth
                        // autoComplete="middle-initial"
                        variant="standard"
                        // onChange={updateState}

                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField
                        disabled={true}
                        // required
                        // error = {errorList.includes("dodId")}
                        id="dodId"
                        name="dodId"
                        value={appContext.user?.dodId ?? ""}
                        label="Dod ID"
                        type="number"
                        fullWidth
                        // autoComplete="dodId"
                        variant="standard"
                        // onChange={updateState}
                        // onBlur={onChangeValidate}

                    />
                </Grid>
                <Grid item xs={12} sm={3} alignContent={"center"} alignItems={"center"}>
                    {/*<Rank updateState={updateState} applicationInfo={applicationInfo} propsID={"rank"} value={applicationInfo.rank}/>*/}
                    <TextField id={"rank"} variant="standard" value={appContext.user?.rank ?? "E1"} disabled={true}
                               label={"Grade"}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    {/*<DOB updateState={updateState} applicationInfo={applicationInfo} setApplicationInfo={setApplicationInfo} />*/}
                    <TextField fullWidth={true} variant="standard" id={"dob"}
                               value={(appContext.user?.dob) ? formatDate(appContext.user?.dob) : ''} disabled={true}
                               label={"DOB"}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LastACFT updateState={updateState} applicationInfo={applicationInfo}
                              setApplicationInfo={setApplicationInfo}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        error={errorList.includes("acftScore")}
                        id="acftScore"
                        name="acftScore"
                        label="ACFT Score"
                        fullWidth
                        value={applicationInfo.acftScore || ""}
                        variant="standard"
                        onBlur={onChangeValidate}
                        onChange={(e) => {
                            const currentValue = e.target.value;
                            if (currentValue !== "" && !IS_THREE_DIGITS_OR_LESS.test(currentValue)) {
                                return;
                            }
                            updateState(e);
                        }
                        }
                    />

                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="height"
                        error={errorList.includes("height")}
                        name="height"
                        label="Height in inches"
                        fullWidth
                        value={applicationInfo.height || ""}
                        variant="standard"
                        onChange={(e) => {
                            const currentValue = e.target.value;
                            if (currentValue !== "" && !IS_TWO_DIGITS_OR_LESS.test(currentValue)) {
                                return;
                            }
                            updateState(e);
                        }
                        }
                        onBlur={onChangeValidate}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="weight"
                        error={errorList.includes("weight")}
                        name="weight"
                        label="Weight lbs"
                        value={applicationInfo.weight || ""}
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            const currentValue = e.target.value;
                            if (currentValue !== "" && !IS_FLOAT_REGEX.test(currentValue)) {
                                return;
                            }
                            updateState(e);
                        }
                        }
                        onBlur={onChangeValidate}
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}