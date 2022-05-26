import {TextField} from "@mui/material";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";

export default function DOB({updateState, applicationInfo,setApplicationInfo}){

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
            label="Date of birth"
            mask={"____-__-__"}
            id="dob"
            name="dob"
            inputFormat="yyyy-MM-dd"
            views={["year", "month", "day"]}
            value= {applicationInfo.dob}
            onChange={(newValue) =>{
                let applicationCopy = JSON.parse(JSON.stringify(applicationInfo))
                applicationCopy.dob = newValue;
                setApplicationInfo(applicationCopy)
            console.log(newValue)
            }
        }
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
    )
}