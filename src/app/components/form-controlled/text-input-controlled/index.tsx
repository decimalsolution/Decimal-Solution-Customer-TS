import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { cn } from "../../../../../lib/utils";
import InputMask from "@mona-health/react-input-mask";
import { Control, Path, FieldErrors } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid Email" }),
  gender: z.string().nonempty({ message: "Gender is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  cellNumber: z.string().nonempty({ message: "Cell Number is required" }),
  whatsappNumber: z
    .string()
    .nonempty({ message: "Whatsapp Number is required" }),
  experience: z.string().nonempty({ message: "Experience is required" }),
  comments: z.string().optional(),
  resume: z.any().refine(
    (file) => {
      if (!file) return false;
      if (file.type !== "application/pdf") return false;
      return true;
    },
    { message: "Invalid Resume. Only PDF files are allowed" }
  ),
  applyingFor: z.string(),
  errors: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface TextInputFormControlledProps {
  control: Control<FormValues>;
  name: keyof FormValues;
  label?: string;
  placeholder?: string;
  mask?: string;
  className?: string;
  type?: string;
  disabled?: boolean; // Added back the disabled prop
  error?:undefined | FieldErrors<any>;
}

export default function TextInputFormControlled({
  control,
  name,
  label,
  placeholder,
  mask,
  className,
  error,
  type = "text",
  disabled = false, // Provide a default value for disabled
  ...props
}: TextInputFormControlledProps) {

  return (
    <FormField
      control={control}
      name={name as Path<FormValues>}
      render={({ field }: any) => {
        return (
          <FormItem className={cn("block w-full", className)}>
            <FormLabel className="form-label">{label}</FormLabel> 
            <FormControl>
              <InputMask
                mask={mask ?? ""}
                onChange={field?.onChange}
                onBlur={field?.onBlur}
                value={field?.value}
                disabled={disabled} // Pass disabled explicitly here
              >
                <Input
                  ref={field}
                  {...props}
                  placeholder={placeholder}
                  type={type}
                  className={cn(
                    "border-2 border-gray-500/50 rounded-sm text-base md:text-lg lg:text-xl 2xl:text-2xl placeholder:text-gray-300 px-4 lg:px-8 py-2 lg:py-4 h-[50px] md:h-[55px] lg:h-[60px] xl:[75px] 2xl:h-[85px]"
                  )}
                />
                
              </InputMask>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
