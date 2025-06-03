import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function page() {
  return (
    <div>
        <h2 className="text-lg font-semibold">Informacion de Cuenta</h2>
        <p className="text-sm text-gray-400">Actualiza la informacion de tu cuenta</p>

        <form className="mt-4 max-w-2xl">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <Label htmlFor="name">Nombre</Label>
                    <Input type="text" id="name" placeholder="Osmar Perera" className="w-full max-w-xs" />
                </div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="email">Correo electronico</Label>
                    <Input type="text" id="email" placeholder="osmar@meetos.com" className="w-full max-w-xs" />
                </div>
            </div>
            <div className="mt-8 flex items-center justify-end gap-4">
                <Button variant="outline">Cancelar</Button>
                <Button>Editar perfil</Button>

            </div>
        </form>
    </div>
  )
}
