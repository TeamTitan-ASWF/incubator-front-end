import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Referral from "./Referral";
import {useState} from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function ReferralsForm({updateState, applicationInfo, errorList, onChangeValidate}) {
    const [numReferrals, setNumReferrals] = useState(1);
    const oddRowColor = '#fff';
    const evenRowColor = '#ccc';

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Referrals <Typography component={"span"} variant={"subtitle1"}>(5
                maximum)</Typography> {numReferrals < 5 &&
                <AddCircleIcon onClick={() => setNumReferrals(numReferrals + 1)}/>} {numReferrals > 1 &&
                <RemoveCircleIcon onClick={() => setNumReferrals(numReferrals - 1)}/>}
            </Typography>
            <br/>
            <Grid container spacing={3}>
                <Grid ml={'3%'} item xs={12} sm={9}>
                    <Referral updateState={updateState} errorList={errorList} onChangeValidate={onChangeValidate}
                              bg={oddRowColor}
                              referenceEmail={applicationInfo?.referenceEmail ?? ''}
                              referenceName={applicationInfo?.referenceName ?? ''}
                              referencePhone={applicationInfo?.referencePhone ?? ''}
                              referenceRank={applicationInfo?.referenceRank ?? 'E1'}/>

                    {(numReferrals >= 2) && <><Referral
                        updateState={updateState}
                        errorList={errorList}
                        onChangeValidate={onChangeValidate}
                        bg={evenRowColor}
                        referenceEmail={applicationInfo?.referenceEmail ?? ''}
                        referenceName={applicationInfo?.referenceName ?? ''}
                        referencePhone={applicationInfo?.referencePhone ?? ''}
                        referenceRank={applicationInfo?.referenceRank ?? 'E1'}/></>}

                    {(numReferrals >= 3) && <><Referral updateState={updateState}
                                                        errorList={errorList}
                                                        onChangeValidate={onChangeValidate}
                                                        bg={oddRowColor}
                                                        referenceEmail={applicationInfo?.referenceEmail ?? ''}
                                                        referenceName={applicationInfo?.referenceName ?? ''}
                                                        referencePhone={applicationInfo?.referencePhone ?? ''}
                                                        referenceRank={applicationInfo?.referenceRank ?? 'E1'}/></>}

                    {(numReferrals >= 4) && <><Referral updateState={updateState}
                                                        errorList={errorList}
                                                        onChangeValidate={onChangeValidate}
                                                        bg={evenRowColor}
                                                        referenceEmail={applicationInfo?.referenceEmail ?? ''}
                                                        referenceName={applicationInfo?.referenceName ?? ''}
                                                        referencePhone={applicationInfo?.referencePhone ?? ''}
                                                        referenceRank={applicationInfo?.referenceRank ?? 'E1'}/></>}

                    {(numReferrals >= 5) && <><Referral updateState={updateState}
                                                        errorList={errorList}
                                                        bg={oddRowColor}
                                                        onChangeValidate={onChangeValidate}
                                                        referenceEmail={applicationInfo?.referenceEmail ?? ''}
                                                        referenceName={applicationInfo?.referenceName ?? ''}
                                                        referencePhone={applicationInfo?.referencePhone ?? ''}
                                                        referenceRank={applicationInfo?.referenceRank ?? 'E1'}/></>}
                </Grid>
            </Grid>

        </React.Fragment>
    );
}