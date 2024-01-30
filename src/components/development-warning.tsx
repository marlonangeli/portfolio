import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function DevelopmentWarning() {
  return (
    <Dialog>
      <DialogTrigger>
        <Alert variant="destructive" className="flex flex-col items-center">
          <ExclamationTriangleIcon className="w-4 h-4" />
          <AlertTitle>Site em desenvolvimento</AlertTitle>
          <AlertDescription>
            Algumas funcionalidades podem não estar disponíveis ou funcionar
            corretamente.
            <p className="font-bold">Clique para saber mais.</p>
          </AlertDescription>
        </Alert>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <h1>Atenção! O site ainda está em desenvolvimento.</h1>
          </DialogTitle>
          <DialogDescription>
            Por isso, algumas funcionalidades podem não estar disponíveis ou
            funcionar corretamente.
          </DialogDescription>
          <DialogDescription>
            Recomendo fortemente utilizar o site em um dispositivo com tela
            grande (computador ou tablet). Caso tenha algum feedback, por favor,
            entre em contato.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
