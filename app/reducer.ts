import {FormState, Gender} from "@/app/types";
import {ChangeEvent} from "react";
import dayjs, {Dayjs} from "dayjs";

export default function reducer(
    state: FormState,
    action: { type: string, e?: ChangeEvent, state?: FormState, value?: Dayjs | null }
): FormState {
    const newState = {...state};
    switch (action.type) {
        case "gender":
            newState.gender = (action.e!.target as HTMLInputElement).value as Gender;
            break;
        case "firstName":
            newState.contactInformation.firstName = (action.e!.target as HTMLInputElement).value;
            break;
        case "lastName":
            newState.contactInformation.lastName = (action.e!.target as HTMLInputElement).value;
            break;
        case "email":
            newState.contactInformation.email = (action.e!.target as HTMLInputElement).value;
            break;
        case "from":
            newState.duration.from = action.value!.clone();
            break;
        case "to":
            newState.duration.to = action.value!.clone();
            break;
        case "replace":
            return {...action.state!, duration: {from: dayjs(), to: dayjs()}};
    }
    return newState;
}