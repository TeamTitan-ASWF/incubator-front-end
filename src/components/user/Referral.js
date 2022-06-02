import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Rank from "./Rank";
import * as React from "react";

const Referral = ({errorList, referenceName, updateState, onChangeValidate, referenceRank, referenceEmail, referencePhone, bg}) => {
    return (
        <Grid container marginBottom={'5%'} p={'3%'} spacing={3} borderRadius={5} border={1} bgcolor={bg}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    error={errorList.includes("referenceName")}
                    value={referenceName}
                    id="referenceName"
                    name="referenceName"
                    label="Reference Name"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    onChange={(e) => {
                        updateState(e)
                        onChangeValidate(e);
                    }}
                    onBlur={onChangeValidate}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Rank propsID="referenceRank" updateState={updateState} value={referenceRank}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    error={errorList.includes("referenceEmail")}
                    id="referenceEmail"
                    name="referenceEmail"
                    label="Reference Email"
                    value={referenceEmail}
                    type="email"
                    fullWidth
                    variant="standard"
                    onBlur={updateState}
                    onChange={(e) => {
                        updateState(e)
                        onChangeValidate(e);
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    error={errorList.includes("referencePhone")}
                    id="referencePhone"
                    name="referencePhone"
                    value={referencePhone}
                    label="Reference Phone"
                    type="number"
                    fullWidth
                    variant="standard"
                    onBlur={onChangeValidate}
                    onChange={(e) => {
                        updateState(e)
                        onChangeValidate(e);
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Referral;