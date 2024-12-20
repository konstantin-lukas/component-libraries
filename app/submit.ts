import {FormState} from "@/app/types";
import {FormEvent} from "react";

export default function onSubmit(e: FormEvent, state: FormState) {
    e.preventDefault();
    console.log(state);
    alert("The form state was logged.");
}