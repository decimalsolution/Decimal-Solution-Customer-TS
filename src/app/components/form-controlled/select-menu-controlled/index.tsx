// import * as React from "react";
// import { Control } from "react-hook-form";
// import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
// import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger, SelectValue } from "../../ui/select";
// import { z } from "zod";


// const formSchema = z.object({
//   name: z.string().nonempty({ message: "Name is required" }),
//   email: z.string().email({ message: "Invalid Email" }),
//   gender: z.string().nonempty({ message: "Gender is required" }),
//   city: z.string().nonempty({ message: "City is required" }),
//   cellNumber: z.string().nonempty({ message: "Cell Number is required" }),
//   whatsappNumber: z.string().nonempty({ message: "Whatsapp Number is required" }),
//   experience: z.string().nonempty({message: "Experience is required" }),
//   comments: z.string().optional(),
//   resume: z.any().refine(
//     (file) => {
//       if (file == null) {
//         return false;
//       }
//       if (file.type !== "application/pdf") {
//         return false;
//       }
//       return true;
//     },
//     {
//       message: "Invalid Resume. Only PDF files are allowed",
//     },
//   ),
//   applyingFor: z.string(),
// });


// type FormValues = z.infer<typeof formSchema>;


// interface SelectMenuFromControlledProps {
//   control: Control<FormValues>;
//   name: keyof FormValues;
//   label?: string;
//   placeholder?: string;
//   values: Array<{ value: string; label?: string }> | string[];
//   // [x: string]: any;
// }

// const SelectMenuFromControlled: React.FC<SelectMenuFromControlledProps> = ({
//   control,
//   name,
//   label,
//   placeholder,
//   values,
//   ...props
// }) => {
//   return (
//     <FormField
//     control={control}
//     name={name }
//     render={({ onChange, value }) => ( // Correctly typing here
//       <FormItem>
//         {label && <FormLabel className="form-label">{label}</FormLabel>}
//         <FormControl>
//           <Select
//             {...props}
//             onValueChange={onChange} // Use onChange from field
//             defaultValue={value} // Use value from field
//           >
//             <SelectTrigger
//               {...props}
//               className="border-2 border-gray-500/50 rounded-sm min-w-[180px] flex-1 lg:p-5 xl:p-7 2xl:p-8 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl h-[50px] md:h-[55px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px]"
//             >
//               <SelectValue placeholder={placeholder} />
//             </SelectTrigger>
//             <SelectContent className="max-h-[500px] overflow-y-auto">
//               {values.map((value, index) => (
//                 <React.Fragment key={index}>
//                   <SelectItem
//                     className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl md:py-2 lg:py-4 !text-gray-500 font-medium"
//                     value={typeof value === 'object' ? value.value : value}
//                   >
//                     {typeof value === 'object' ? value.label : value}
//                   </SelectItem>
//                   {index !== values.length - 1 && <SelectSeparator />}
//                 </React.Fragment>
//               ))}
//             </SelectContent>
//           </Select>
//         </FormControl>
//         <FormMessage />
//       </FormItem>
//     )}
//   />

  
//   );
// };

// export default SelectMenuFromControlled;
