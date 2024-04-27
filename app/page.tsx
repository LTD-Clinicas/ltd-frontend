import { 
    ClinicasList 
} from "@/components/pages/clinicas";

import {
    NavBar
} from "@/components/navigation/nav";

export default function Home() {
    return (
        <main
            className="px-14 py-4"
        >
            <NavBar/>
            <div className={"h-screen flex flex-col items-center justify-around"}>
                <ClinicasList/>
            </div>
        </main>
    )
}
