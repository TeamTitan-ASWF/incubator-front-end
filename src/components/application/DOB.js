import {TextField} from "@mui/material";
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";

export default function DOB({applicationInfo, setApplicationInfo}) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Date of birth"
                mask={"____-__-__"}
                id="dob"
                name="dob"
                inputFormat="yyyy-MM-dd"
                views={["year", "month", "day"]}
                minDate={new Date(1940, 1, 1)}
                value={applicationInfo.dob}
                disableFuture={true}
                onChange={(newValue) => {
                    let applicationCopy = JSON.parse(JSON.stringify(applicationInfo))
                    applicationCopy.dob = newValue;
                    setApplicationInfo(applicationCopy)
                }
                }
                renderInput={(params) => <TextField {...params} onKeyDown={(e) => {
                    e.preventDefault();
                    return false;
                }}/>}
            />
        </LocalizationProvider>
    )
}