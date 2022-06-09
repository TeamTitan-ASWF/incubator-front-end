import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Rank from "./Rank";
import * as React from "react";

const Referral = ({
                      referenceNumber,
                      errorList,
                      referenceName,
                      updateState,
                      onChangeValidate,
                      referenceRank,
                      referenceEmail,
                      referencePhone,
                      bg
                  }) => {

    const IS_NUMERIC_REGEX = /^[0-9]+$/;

    return (
        <Grid container marginBottom={'5%'} p={'3%'} spacing={3} borderRadius={5} border={1} bgcolor={bg}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required={(!referenceNumber)}
                    error={ referenceNumber ? false : errorList.includes("referenceName")}
                    value={referenceName}
                    id={"referenceName" + (referenceNumber ?? '')}
                    name={"referenceName" + (referenceNumber ?? '')}
                    label="Reference Name"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                        updateState(e);
                        onChangeValidate(e);
                    }}
                    onBlur={onChangeValidate}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Rank propsID={"referenceRank" + (referenceNumber ?? '')} updateState={updateState}
                      value={referenceRank}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required={(!referenceNumber)}
                    error={  referenceNumber ? false :  errorList.includes("referenceEmail")}
                    value={referenceEmail}
                    id={"referenceEmail" + (referenceNumber ?? '')}
                    name={"referenceEmail" + (referenceNumber ?? '')}
                    label="Reference Email"
                    fullWidth
                    type="email"
                    variant="standard"
                    onBlur={onChangeValidate}
                    onChange={(e) => {
                        updateState(e);
                        onChangeValidate(e);
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required={(!referenceNumber)}
                    error={ referenceNumber ? false : errorList.includes("referencePhone")}
                    id={"referencePhone" + (referenceNumber ?? '')}
                    name={"referencePhone" + (referenceNumber ?? '')}
                    value={referencePhone}
                    label="Reference Phone"
                    fullWidth
                    variant="standard"
                    onBlur={onChangeValidate}
                    onChange={(e) => {
                        const currentValue = e.target.value;
                        if (currentValue !== "" && !IS_NUMERIC_REGEX.test(currentValue)) {
                            return;
                        }

                        updateState(e);
                        onChangeValidate(e);
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Referral;