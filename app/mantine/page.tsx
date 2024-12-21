"use client";

import {useReducer} from "react";
import reducer from "@/app/reducer";
import onSubmit from "@/app/submit";
import {InitialState} from "@/app/fixture";

export default function Page() {
    const [formState] = useReducer(reducer, InitialState);

    const contactInformationInput = (<></>);

    const genderInput = (<></>);

    const durationOfStayInput = (<></>);

    const submitButtons = (<></>);

    return (
        <form
            className="border-2 rounded-2xl p-8 flex flex-col gap-4"
            onSubmit={e => onSubmit(e, formState)}
        >
            {contactInformationInput}
            {genderInput}
            {durationOfStayInput}
            {submitButtons}
            <ul>
                <li>- Too many meta components</li>
                <li>- Issues with React 19 and peer dependencies</li>
            </ul>
        </form>
    );
}
