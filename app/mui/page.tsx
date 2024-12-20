"use client";

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";
import {useReducer} from "react";
import reducer from "@/app/reducer";
import onSubmit from "@/app/submit";
import fixture, {InitialState} from "@/app/fixture";
import {ThemeProvider} from "@mui/system";
import {createTheme} from "@mui/material/styles";
import colors from "tailwindcss/colors";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from "@mui/x-date-pickers";

const theme = createTheme({
    palette: {
        primary: {
            light: colors.fuchsia[600],
            main: colors.fuchsia[700],
            dark: colors.fuchsia[800],
            contrastText: '#fff',
        },
    },
});

export default function Page() {
    const [formState, dispatch] = useReducer(reducer, InitialState);

    const contactInformationInput = (
        <FormControl>
            <FormLabel>Contact Information</FormLabel>
            <div className="flex flex-col gap-4 mt-4">
                <TextField
                    value={formState.contactInformation.firstName}
                    label="First name"
                    variant="outlined"
                    onChange={(e) => dispatch({type: "firstName", e})}
                />
                <TextField
                    value={formState.contactInformation.lastName}
                    label="Last name"
                    variant="outlined"
                    onChange={(e) => dispatch({type: "lastName", e})}
                />
                <TextField
                    value={formState.contactInformation.email}
                    label="Email"
                    variant="outlined"
                    onChange={(e) => dispatch({type: "email", e})}
                />
            </div>
        </FormControl>
    );

    const genderInput = (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={(e) => dispatch({ type: "gender", e })}
                value={formState.gender}
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
    );

    const durationOfStayInput = (
        <FormControl>
            <FormLabel>Duration of Stay</FormLabel>
            <div className="mt-4 flex flex-col gap-4">
                <DatePicker
                    label="From:"
                    value={formState.duration.from}
                    onChange={(newValue) => dispatch({type: "from", value: newValue})}
                />
                <DatePicker
                    label="Until:"
                    value={formState.duration.to}
                    onChange={(newValue) => dispatch({type: "to", value: newValue})}
                />
            </div>
        </FormControl>
    );

    const submitButtons = (
        <div className="flex gap-4 mt-4">
            <Button variant="contained" type="submit">
                Submit
            </Button>
            <Button variant="outlined" onClick={() => dispatch({type: "replace", state: fixture})}>
                Populate
            </Button>
            <Button variant="outlined" onClick={() => dispatch({type: "replace", state: InitialState})}>
                Clear
            </Button>
        </div>
    );

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <form
                    className="border-2 rounded-2xl p-8 flex flex-col gap-4"
                    onSubmit={e => onSubmit(e, formState)}
                >
                    {contactInformationInput}
                    {genderInput}
                    {durationOfStayInput}
                    {submitButtons}
                </form>
            </LocalizationProvider>
        </ThemeProvider>
    );
}
