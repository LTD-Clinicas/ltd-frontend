"use client"
import Navbar from '@/components/ui/navbar'
import {ClinicasList} from "@/components/pages/clinicas";

export default function Clinicas () {
    return (
        <div>
            <Navbar/>
            
            <div className={"flex"}>
                <ClinicasList/>
            </div>
        </div>
    )
} 