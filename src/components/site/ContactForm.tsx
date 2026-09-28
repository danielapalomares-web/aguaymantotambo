import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { products } from "@/data/products";

const schema = z.object({
  nombre: z.string().min(3, "Ingresa tu nombre completo."),
  empresa: z.string().optional(),
  email: z.string().email("Ingresa un correo electrónico válido."),
  telefono: z.string().min(6, "Ingresa un número de contacto válido."),
  ciudad: z.string().min(2, "Ingresa tu ciudad."),
  tipoCliente: z.string().min(1, "Selecciona el tipo de cliente."),
  producto: z.string().min(1, "Selecciona un producto de interés."),
  cantidad: z.string().optional(),
  asunto: z.string().min(3, "Indica el asunto de tu consulta."),
  mensaje: z.string().min(10, "Cuéntanos brevemente qué necesitas (mínimo 10 caracteres)."),
});

type FormValues = z.infer<typeof schema>;

const clientTypes = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda",
  "Distribuidor",
  "Empresa",
  "Otro",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { tipoCliente: "", producto: "" },
  });

  /**
   * Envío del formulario. Preparado para conectarse luego con un servicio de
   * email, CRM o backend: reemplaza este bloque por la llamada correspondiente.
   */
  const onSubmit = async (values: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Consulta recibida:", values);
    setSent(true);
    reset();
    toast.success("Consulta enviada correctamente.");
  };

  const fieldClass = "mt-2";
  const errorClass = "mt-1.5 text-xs font-medium text-destructive";

  if (sent) {
    return (
      <div className="rounded-xl border border-secondary/30 bg-card p-10 text-center shadow-card">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-muted text-secondary">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-xl text-primary">Gracias por contactarnos</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Hemos recibido tu consulta y nos comunicaremos contigo pronto.
        </p>
        <Button variant="soft" size="lg" className="mt-7" onClick={() => setSent(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="nombre">Nombre completo *</Label>
          <Input id="nombre" className={fieldClass} autoComplete="name" {...register("nombre")} />
          {errors.nombre ? <p className={errorClass}>{errors.nombre.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="empresa">Empresa</Label>
          <Input id="empresa" className={fieldClass} autoComplete="organization" {...register("empresa")} />
        </div>

        <div>
          <Label htmlFor="ciudad">Ciudad *</Label>
          <Input id="ciudad" className={fieldClass} autoComplete="address-level2" {...register("ciudad")} />
          {errors.ciudad ? <p className={errorClass}>{errors.ciudad.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input id="email" type="email" className={fieldClass} autoComplete="email" {...register("email")} />
          {errors.email ? <p className={errorClass}>{errors.email.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="telefono">Teléfono *</Label>
          <Input id="telefono" type="tel" className={fieldClass} autoComplete="tel" {...register("telefono")} />
          {errors.telefono ? <p className={errorClass}>{errors.telefono.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="tipoCliente">Tipo de cliente *</Label>
          <select
            id="tipoCliente"
            className="mt-2 h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            {...register("tipoCliente")}
          >
            <option value="">Selecciona una opción</option>
            {clientTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.tipoCliente ? <p className={errorClass}>{errors.tipoCliente.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="producto">Producto de interés *</Label>
          <select
            id="producto"
            className="mt-2 h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            {...register("producto")}
          >
            <option value="">Selecciona una opción</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
            <option value="Otra consulta">Otra consulta</option>
          </select>
          {errors.producto ? <p className={errorClass}>{errors.producto.message}</p> : null}
        </div>

        <div>
          <Label htmlFor="cantidad">Cantidad aproximada</Label>
          <Input
            id="cantidad"
            className={fieldClass}
            placeholder="Ej. 20 kg por semana"
            {...register("cantidad")}
          />
        </div>

        <div>
          <Label htmlFor="asunto">Asunto *</Label>
          <Input id="asunto" className={fieldClass} {...register("asunto")} />
          {errors.asunto ? <p className={errorClass}>{errors.asunto.message}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="mensaje">Mensaje *</Label>
          <Textarea id="mensaje" rows={5} className={fieldClass} {...register("mensaje")} />
          {errors.mensaje ? <p className={errorClass}>{errors.mensaje.message}</p> : null}
        </div>
      </div>

      <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="mt-7 w-full sm:w-auto">
        {isSubmitting ? "Enviando..." : "Enviar consulta"}
        <Send className="size-4" aria-hidden="true" />
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        Los campos marcados con * son obligatorios.
      </p>
    </form>
  );
}
