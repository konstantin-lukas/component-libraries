import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1 className="font-bold text-2xl uppercase">React Component Libraries</h1>
            <p>
                Navigate to any of the pages below to see the implemented form for each library. Each page is using the
                same types, reducers and event handlers.
            </p>
            <ul>
                <li>
                    <Link href="/mui" className="text-indigo-600 ml-4">Material UI</Link>
                </li>
                <li>
                    <Link href="/chakra" className="text-indigo-600 ml-4">Chakra UI</Link>
                </li>
                <li>
                    <Link href="/mantine" className="text-indigo-600 ml-4">Mantine</Link>
                </li>
                <li>
                    <Link href="/kolibri" className="text-indigo-600 ml-4">KoliBri</Link>
                </li>
                <li>
                    <Link href="/nextui" className="text-indigo-600 ml-4">NextUI</Link>
                </li>
                <li>
                    <Link href="/shadcn" className="text-indigo-600 ml-4">Shadcn UI</Link>
                </li>
            </ul>
        </>
    );
}
