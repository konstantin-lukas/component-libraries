"use client";

import {useReducer} from "react";
import reducer from "@/app/reducer";
import onSubmit from "@/app/submit";
import {InitialState} from "@/app/fixture";
import { Fieldset, Input} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Provider } from "@/components/ui/provider";
import { Radio, RadioGroup } from "@/components/ui/radio";

export default function Page() {
    const [formState] = useReducer(reducer, InitialState);

    const contactInformationInput = (
        <Fieldset.Root>
            <Fieldset.Legend>Contact Information</Fieldset.Legend>
            <Fieldset.Content>
                <Field label="First name">
                    <Input className="border-2"/>
                </Field>
                <Field label="Last name">
                    <Input className="border-2"/>
                </Field>
                <Field label="Email">
                    <Input className="border-2"/>
                </Field>
            </Fieldset.Content>
        </Fieldset.Root>
    );

    const genderInput = (
        <Fieldset.Root>
            <Fieldset.Legend>Gender</Fieldset.Legend>
            <Fieldset.Content>
                <RadioGroup>
                    <Radio value="female"/>
                    <Radio value="male"/>
                    <Radio value="other"/>
                </RadioGroup>
            </Fieldset.Content>
        </Fieldset.Root>
    );

    const durationOfStayInput = (<></>);

    const submitButtons = (<></>);

    return (
        <Provider forcedTheme="light">
            <form
                className="border-2 rounded-2xl p-8 flex flex-col gap-4"
                onSubmit={e => onSubmit(e, formState)}
            >
                {contactInformationInput}
                {genderInput}
                {durationOfStayInput}
                {submitButtons}
                <p>
                    Chakra is hot garbage!!!
                </p>
                <ul>
                    <li>- Compliated Setup</li>
                    <li>- Compliated Usage</li>
                    <li>- Bad Styling</li>
                </ul>
            </form>
        </Provider>
    );
}
