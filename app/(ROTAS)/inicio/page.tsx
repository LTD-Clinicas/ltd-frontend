import {
    ClinicasList
} from "@/components/pages/clinicas";

import {
    NavBar
} from "@/components/navigation/nav";

export default function Inicio() {
    return (
        <main
            className="px-14 py-4 h-screen"
        >
            <NavBar/>
            <div className={"flex items-center justify-around"}>
                <ClinicasList/>
            </div>
        </main>
    )
}