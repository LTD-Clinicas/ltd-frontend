import {Card, CardContent} from "@/components/ui/card";
import {HiOutlineUserCircle} from "react-icons/hi";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function Cadastro () {
    return (
        <main className={"h-screen w-full p-12"}>
            <Card className="h-fit w-fit px-0 md:px-16 pt-3 mx-auto">
                <CardContent>
                    <div className="">
                        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Cadastrar Usuário
                        </h2>
                    </div>
                    
                </CardContent>
            </Card>
        </main>
    )
}