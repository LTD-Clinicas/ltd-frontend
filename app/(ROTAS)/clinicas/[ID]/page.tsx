"use client"
import Navbar from "@/components/ui/navbar";
import { useParams } from "next/navigation"
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Clinica () {
    const params = useParams()
    const { ID } = params;
    
    
    
    return (
        <main>
            <Navbar/>
            
            <div>
                <Card>
                    <CardTitle>
                        
                    </CardTitle>
                    
                    <CardContent>
                        {ID}
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}