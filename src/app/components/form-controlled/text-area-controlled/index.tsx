import { FormControl, FormField, FormItem, FormLabel, FormMessage} from "../../ui/form";
import { Textarea } from "../../ui/textarea";
import { cn } from "../../../../../lib/utils";
import { z } from "zod";
import { Control } from 'react-hook-form';
  
  

  const formSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.string().email({ message: "Invalid Email" }),
    gender: z.string().nonempty({ message: "Gender is required" }),
    city: z.string().nonempty({ message: "City is required" }),
    cellNumber: z.string().nonempty({ message: "Cell Number is required" }),
    whatsappNumber: z.string().nonempty({ message: "Whatsapp Number is required" }),
    experience: z.string().nonempty({message: "Experience is required" }),
    comments: z.string().optional(),
    resume: z.any().refine(
      (file) => {
        if (file == null) {
          return false;
        }
        if (file.type !== "application/pdf") {
          return false;
        }
        return true;
      },
      {
        message: "Invalid Resume. Only PDF files are allowed",
      },
    ),
    applyingFor: z.string(),
  });


  type FormValues = z.infer<typeof formSchema>;


  interface TextInputFormControlledProps {
    control: Control<FormValues>; // Use the correct form values type
    name: keyof FormValues;
    label?: string;
    placeholder?: string;
    mask?: string;
    className?: string;
  }

  export default function TextAreaFormControlled({
    control,
    name,
    label,
    placeholder,
    // mask,
    className,
    ...props
  } : TextInputFormControlledProps) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field } : any) => (
          <FormItem className={cn("block w-full", className)}>
            <FormLabel className="form-label">{label}</FormLabel>
            <FormControl>
              <Textarea
                placeholder={placeholder}
                className={cn(
                  "border-2 border-gray-500/50 rounded-sm text-base md:text-lg lg:text-xl 2xl:text-2xl placeholder:text-gray-300 px-4 lg:px-8 py-2 lg:py-4 min-h-[50px] h-full",
                  className
                )}
                {...field}
                {...props}
              />
            </FormControl>
  
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
  