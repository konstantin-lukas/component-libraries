import type {Dayjs} from "dayjs";

export interface FormState {
    gender: Gender;
    contactInformation: ContactInformation;
    duration: Duration;
}

export interface ContactInformation {
    firstName: string;
    lastName: string;
    email: string;
}

export type Gender = "male" | "female" | "other" | null;

export interface Duration {
    from: Dayjs;
    to: Dayjs;
}