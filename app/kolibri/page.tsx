"use client";

import {useReducer} from "react";
import reducer from "@/app/reducer";
import onSubmit from "@/app/submit";
import {InitialState} from "@/app/fixture";
import {KolButton, KolInputText} from "@public-ui/react";

export default function Page() {
    const [formState] = useReducer(reducer, InitialState);

    const contactInformationInput = (<>
        <KolInputText
            _id=""
            _on={{
                onChange: console.log
            }}
            _hideLabel
            _required
            _touched
            _label="Contact Information"
            _type="search"
        >
            Suche
        </KolInputText>
    </>);

    const genderInput = (<></>);

    const durationOfStayInput = (<></>);

    const submitButtons = (<>
        <KolButton
              _label="Test"
              _on={{
                onClick: () => console.log("test"),
              }}
        />
    </>);

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
                <li>Doesn&#39;t work</li>
                <li>No existing code example for Next.js; only React</li>
            </ul>
        </form>
    );
}
