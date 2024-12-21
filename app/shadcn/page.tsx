"use client";

import {useReducer, useState} from "react";
import reducer from "@/app/reducer";
import onSubmit from "@/app/submit";
import {InitialState} from "@/app/fixture";
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function DatePickerDemo({children}: {children: React.ReactNode}) {
    const [date, setDate] = useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>{children}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

export default function Page() {
    const [formState] = useReducer(reducer, InitialState);

    const contactInformationInput = (
        <fieldset className="flex-col flex gap-4">
            <legend className="mb-4">Contact Information</legend>
            <Input type="text" placeholder="First name" />
            <Input type="text" placeholder="Last name" />
            <Input type="email" placeholder="Email" />
        </fieldset>
    );

    const genderInput = (
        <fieldset>
            <legend>Gender</legend>
            <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female"/>
                    <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male"/>
                    <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other"/>
                    <Label htmlFor="other">Other</Label>
                </div>
            </RadioGroup>
        </fieldset>
    );

    const durationOfStayInput = (
        <fieldset className="flex flex-col gap-4">
            <legend>Duration of Stay</legend>
            <DatePickerDemo>From</DatePickerDemo>
            <DatePickerDemo>Until</DatePickerDemo>
        </fieldset>
    );

    const submitButtons = (
        <div className="flex gap-4">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">Populate</Button>
            <Button variant="outline" type="button">Clear</Button>
        </div>
    );

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
                <li>- Comes with CLI to install components</li>
                <li>- Components become part of the source code, so we fully control them</li>
                <li>- Same problem with React 19 as NextUI</li>
                <li>- Date picker has to be assembled with Popover and Calendar Components</li>
            </ul>
        </form>
    );
}
