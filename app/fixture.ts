import {FormState} from "@/app/types";
import dayjs from "dayjs";

const fixture: FormState = {
    gender: "female",
    contactInformation: {
        firstName: "Donald",
        lastName: "Duck",
        email: "donald@gmail.com",
    },
    duration: {
        from: dayjs(),
        to: dayjs(),
    }
}

export default fixture;

export const InitialState = {
    gender: null,
    contactInformation: {
        firstName: "",
        lastName: "",
        email: "",
    },
    duration: {
        from: dayjs(),
        to: dayjs(),
    }
};