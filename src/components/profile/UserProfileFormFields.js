import Grid from "@mui/material/Grid";
import {Select, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import * as React from "react";

const UserProfileFormFields = ({dob, setDob, userData, rank, setRank}) => {
    return (<>
            <Grid item xs={12} sm={5}>
                <TextField
                    id="fName"
                    required
                    name="firstName"
                    label="First name"
                    defaultValue={userData?.fName ?? ''}
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                />
            </Grid>

            <Grid item xs={12} sm={5}>
                <TextField
                    id="lName"
                    required
                    name="lastName"
                    label="Last name"
                    defaultValue={userData?.lName ?? ''}
                    fullWidth
                    autoComplete="family-name"
                    variant="standard"
                />
            </Grid>

            <Grid item xs={12} sm={2}>
                <TextField
                    id="mI"
                    name="mI"
                    label="MI"
                    defaultValue={userData?.mI ?? ''}
                    fullWidth
                    autoComplete="middle-initial"
                    variant="standard"
                />
            </Grid>

            <Grid item xs={12} sm={5}>
                <TextField
                    id="dodId"
                    required
                    name="dodId"
                    label="Dod ID"
                    type="number"
                    defaultValue={userData?.dodId ?? ''}
                    fullWidth
                    autoComplete="dodId"
                    variant="standard"
                />
            </Grid>

            <Grid item xs={12} sm={2}>
                <Select
                    labelId="demo-simple-select-label"
                    id="rank"
                    name="rank"
                    label="Rank"
                    value={rank}
                    onChange={(event) => setRank(event.target.value)}
                >
                    <MenuItem value={"E1"}>E1</MenuItem>
                    <MenuItem value={"E2"}>E2</MenuItem>
                    <MenuItem value={"E3"}>E3</MenuItem>
                    <MenuItem value={"E4"}>E4</MenuItem>
                    <MenuItem value={"E5"}>E5</MenuItem>
                    <MenuItem value={"E6"}>E6</MenuItem>
                    <MenuItem value={"E7"}>E7</MenuItem>
                    <MenuItem value={"E8"}>E8</MenuItem>
                    <MenuItem value={"E9"}>E9</MenuItem>
                    <MenuItem value={"O1"}>O1</MenuItem>
                    <MenuItem value={"O2"}>O2</MenuItem>
                    <MenuItem value={"O3"}>O3</MenuItem>
                    <MenuItem value={"O4"}>O4</MenuItem>
                    <MenuItem value={"O5"}>O5</MenuItem>
                    <MenuItem value={"O6"}>O6</MenuItem>
                    <MenuItem value={"O7"}>O7</MenuItem>
                    <MenuItem value={"O8"}>O8</MenuItem>
                    <MenuItem value={"O9"}>O9</MenuItem>
                    <MenuItem value={"O10"}>O10</MenuItem>
                    <MenuItem value={"WO1"}>WO1</MenuItem>
                    <MenuItem value={"CW2"}>CW2</MenuItem>
                    <MenuItem value={"CW3"}>CW3</MenuItem>
                    <MenuItem value={"CW4"}>CW4</MenuItem>
                    <MenuItem value={"CW5"}>CW5</MenuItem>
                </Select>
                {/*<Rank updateState={() => {}} propsID={"rank"} value={"E1"}/>*/}
            </Grid>

            <Grid item xs={12} sm={4}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Date of birth"
                        mask={"____-__-__"}
                        id="dob"
                        name="dob"
                        inputFormat="yyyy-MM-dd"
                        views={["year", "month", "day"]}
                        value={dob}
                        onChange={(value) => setDob(value)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Grid>
        </>
    )
        ;
}

export default UserProfileFormFields;