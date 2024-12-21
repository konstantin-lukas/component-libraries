"use client";

import {useReducer} from "react";
import reducer from "@/app/reducer";
import onSubmit from "@/app/submit";
import {InitialState} from "@/app/fixture";
import {NextUIProvider} from "@nextui-org/system";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {RadioGroup, Radio} from "@nextui-org/radio";
import {DatePicker} from "@nextui-org/date-picker";

export default function Page() {
    const [formState] = useReducer(reducer, InitialState);

    const contactInformationInput = (
        <fieldset className="flex flex-col gap-4">
            <legend className="mb-4">Contact Information</legend>
            <Input label="First name" type="text" />
            <Input label="Last name" type="text" />
            <Input label="Email" type="email" />
        </fieldset>
    );

    const genderInput = (
        <RadioGroup label="Gender">
            <Radio value="female">Female</Radio>
            <Radio value="male">Male</Radio>
            <Radio value="other">Other</Radio>
        </RadioGroup>
    );

    const durationOfStayInput = (
        <fieldset className="flex flex-col gap-4">
            <legend className="mb-4">Duration of Stay</legend>
            <DatePicker disableAnimation label="From:" />
            <DatePicker disableAnimation label="Until:" />
        </fieldset>
    );

    const submitButtons = (<div className="flex gap-4">
        <Button variant="solid" color="primary">Submit</Button>
        <Button variant="bordered" color="primary">Populate</Button>
        <Button variant="bordered" color="primary">Clear</Button>
    </div>);

    return (
        <NextUIProvider>
            <form
                className="border-2 rounded-2xl p-8 flex flex-col gap-4"
                onSubmit={e => onSubmit(e, formState)}
            >
                {contactInformationInput}
                {genderInput}
                {durationOfStayInput}
                {submitButtons}
                <ul>
                    <li>- Really easy to use</li>
                    <li>- Optionally comes with CLI for only installing needed components</li>
                    <li>- Great documentation</li>
                    <li>- Date picker worked but threw an error because of React 19 changes. Could be resolved by disabling animations.</li>
                </ul>
            </form>
        </NextUIProvider>
    );
}
