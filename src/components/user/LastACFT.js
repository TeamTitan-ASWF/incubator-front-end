import {TextField} from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";

export default function LastACFT({updateState, applicationInfo,setApplicationInfo}){


    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                mask={"____-__-__"}
                id="lastACFT"
                name="lastACFT"
                label="Last ACFT"
                inputFormat="yyyy-MM-dd"
                value= {applicationInfo.lastACFT}
                onChange={(newValue) =>{
                    let applicationCopy = JSON.parse(JSON.stringify(applicationInfo))
                    applicationCopy.lastACFT = newValue;
                    setApplicationInfo(applicationCopy)
                    console.log(newValue)
                }
                }
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}