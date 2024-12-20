import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1 className="font-bold text-2xl uppercase">React Component Libraries</h1>
            <p>
                This site implements a regular form using different component libraries in a project using tailwindCSS.
                It includes the following features:
            </p>
            <ul>
                <li>
                    Two buttons with different styles for submitting and populating the input fields
                </li>
            </ul>
            <br/>
            <p>
                Navigate to any of the pages below to see the implemented form for each library. Each page is using the
                same types, reducers and event handlers.
            </p>
            <ul>
                <li>
                    <Link href="/mui" className="text-indigo-600 ml-4">Material UI</Link>
                </li>
            </ul>
        </>
    );
}
