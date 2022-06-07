import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Referral from "./Referral";
// import {useEffect, useState} from "react";
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function ReferralsForm({updateState, applicationInfo, errorList, onChangeValidate}) {
    //const [numReferrals, setNumReferrals] = useState(1);
    const oddRowColor = '#fff';
    const evenRowColor = '#ccc';

    // useEffect(() => {
    //     if (applicationInfo.referenceName3) {
    //         setNumReferrals(3);
    //     } else if (applicationInfo.referenceName2) {
    //         setNumReferrals(2);
    //     } else {
    //         setNumReferrals(1);
    //     }
    // }, [])

    return (
        <React.Fragment>
            {/*<Typography variant="h6" gutterBottom>*/}
            {/*    Referrals <Typography component={"span"} variant={"subtitle1"}>(3*/}
            {/*    maximum)</Typography> {numReferrals < 3 &&*/}
            {/*    <AddCircleIcon onClick={() => setNumReferrals(numReferrals + 1)}/>} {numReferrals > 1 &&*/}
            {/*    <RemoveCircleIcon onClick={() => setNumReferrals(numReferrals - 1)}/>}*/}
            {/*</Typography>*/}


            <Typography variant="h6" gutterBottom>
                Referrals <Typography component={"span"} variant={"subtitle1"}>(1
                required)</Typography>
            </Typography>
            <br/>
            <Grid container spacing={3}>
                <Grid ml={'3%'} item xs={12} sm={9}>
                    <Referral
                        updateState={updateState}
                        errorList={errorList}
                        onChangeValidate={onChangeValidate}
                        bg={oddRowColor}
                        referenceEmail={applicationInfo?.referenceEmail ?? ''}
                        referenceName={applicationInfo?.referenceName ?? ''}
                        referencePhone={applicationInfo?.referencePhone ?? ''}
                        referenceRank={applicationInfo?.referenceRank ?? 'E1'}/>

                    <Referral
                        referenceNumber={2}
                        updateState={updateState}
                        errorList={errorList}
                        onChangeValidate={onChangeValidate}
                        bg={evenRowColor}
                        referenceEmail={applicationInfo?.referenceEmail2 ?? ''}
                        referenceName={applicationInfo?.referenceName2 ?? ''}
                        referencePhone={applicationInfo?.referencePhone2 ?? ''}
                        referenceRank={applicationInfo?.referenceRank2 ?? 'E1'}/>

                    <Referral
                        referenceNumber={3}
                        updateState={updateState}
                        errorList={errorList}
                        onChangeValidate={onChangeValidate}
                        bg={oddRowColor}
                        referenceEmail={applicationInfo?.referenceEmail3 ?? ''}
                        referenceName={applicationInfo?.referenceName3 ?? ''}
                        referencePhone={applicationInfo?.referencePhone3 ?? ''}
                        referenceRank={applicationInfo?.referenceRank3 ?? 'E1'}/>

                    {/*{(numReferrals >= 2) && <><Referral*/}
                    {/*    referenceNumber={2}*/}
                    {/*    updateState={updateState}*/}
                    {/*    errorList={errorList}*/}
                    {/*    onChangeValidate={onChangeValidate}*/}
                    {/*    bg={evenRowColor}*/}
                    {/*    referenceEmail={applicationInfo?.referenceEmail2 ?? ''}*/}
                    {/*    referenceName={applicationInfo?.referenceName2 ?? ''}*/}
                    {/*    referencePhone={applicationInfo?.referencePhone2 ?? ''}*/}
                    {/*    referenceRank={applicationInfo?.referenceRank2 ?? 'E1'}/></>}*/}

                    {/*{(numReferrals >= 3) && <><Referral*/}
                    {/*    referenceNumber={3}*/}
                    {/*    updateState={updateState}*/}
                    {/*    errorList={errorList}*/}
                    {/*    onChangeValidate={onChangeValidate}*/}
                    {/*    bg={oddRowColor}*/}
                    {/*    referenceEmail={applicationInfo?.referenceEmail3 ?? ''}*/}
                    {/*    referenceName={applicationInfo?.referenceName3 ?? ''}*/}
                    {/*    referencePhone={applicationInfo?.referencePhone3 ?? ''}*/}
                    {/*    referenceRank={applicationInfo?.referenceRank3 ?? 'E1'}/></>}*/}
                </Grid>
            </Grid>

        </React.Fragment>
    );
}