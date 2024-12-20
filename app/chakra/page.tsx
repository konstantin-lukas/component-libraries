"use client";

import {useReducer} from "react";
import reducer from "@/app/reducer";
import onSubmit from "@/app/submit";
import {InitialState} from "@/app/fixture";

export default function Page() {
    const [formState] = useReducer(reducer, InitialState);

    return (
        <form
            className="border-2 rounded-2xl p-8 flex flex-col gap-4"
            onSubmit={e => onSubmit(e, formState)}
        >
            <p>
                Chakra is hot garbage!!!
            </p>
            <ul>
                <li>- Compliated Setup</li>
                <li>- Compliated Usage</li>
                <li>- Automatic Darkmode detection annoying for our usecase</li>
                <li>- Bad Styling</li>
                <li>- The config interfered with the build process</li>
            </ul>
        </form>
    );
}
