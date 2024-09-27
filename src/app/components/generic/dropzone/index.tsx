import { cn } from "../../../../../lib/utils";
import { File, X } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { FieldErrors , UseFormSetValue } from "react-hook-form";
import { z } from "zod";


// Define your schema
const formSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.string().email({ message: "Invalid Email" }),
    gender: z.string().nonempty({ message: "Gender is required" }),
    city: z.string().nonempty({ message: "City is required" }),
    cellNumber: z.string().nonempty({ message: "Cell Number is required" }),
    whatsappNumber: z.string().nonempty({
      message: "Whatsapp Number is required",
    }),
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


interface DropZoneProps {
  onChange: (file: File) => void;
  getValues: (name: keyof FormValues) => FormValues[keyof FormValues];
  name: keyof FormValues;
  setValue:  UseFormSetValue<FormValues>;
  className?: string;
  error?: FieldErrors;
}

interface CustomFile extends File {
  preview?: string;
}

const DropZone: React.FC<DropZoneProps> = ({
  onChange,
  getValues,
  name,
  setValue,
  className,
  error,
}) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    accept: {
      "application/pdf": [],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file: CustomFile = acceptedFiles[0] as CustomFile;
      file.preview = URL.createObjectURL(file);
      onChange(file);
    },
  });
//   console.log(error)

  return (
    <div className={className}>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center w-full h-full overflow-hidden border-2 border-dashed rounded-md w-min-400px h-400px outline-none transition duration-300 ease-in-out hover:border-green-500",
          getValues(name) != null ? "p-0" : "p-5",
          isDragAccept
            ? "border-green-500"
            : isDragReject
            ? "border-red-500"
            : "border-gray-300"
        )}
        {...getRootProps()}
      >
        {getValues(name) == null ? (
          <>
            <input
              {...getInputProps()}
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  // Check if files is not null and has at least one file
                  const file: CustomFile = files[0] as CustomFile;
                  file.preview = URL.createObjectURL(file);
                  onChange(file);
                }
              }}
            />
            <File className="h-20 w-20 mb-2" />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p className="text-center">
                Drag and drop some files here,
                <br />
                or click to select files
              </p>
            )}
          </>
        ) : (
          <div className="relative w-full h-full">
            <iframe
              src={getValues(name).preview || getValues(name)}
              className="w-full h-full object-cover"
            />
            <button
              className="absolute top-1 right-1 p-1 text-white bg-black bg-opacity-50 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setValue(name, null);
              }}
            >
              <X />
            </button>
          </div>
        )}
        {error?.[name] && (
        <p className="text-red-500 text-sm mt-2">
          {error?.[name]?.message?.toString()}
        </p>
      )}
      </div>
      
    </div>
  );
};

export default DropZone;









// import { cn } from "../../../../../lib/utils";
// import React from "react";
// import { useFormContext , FieldErrors} from "react-hook-form";

// interface DropZoneProps {
//   name: string;
//   onChange: (file: File) => void;
//   className?: string;
//   error?: FieldErrors<any>
// }

// const DropZone: React.FC<DropZoneProps> = ({
//     name,
//     onChange,
//     className,
//     error,
// }) => {
//   const { register } = useFormContext();

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const fileList = event.target.files;
//     if (fileList && fileList.length > 0) {
//       const file = fileList[0];
//       onChange(file);
//     }
//   };

// //   console.log(error?.[name])

//   return (
//     <div
//       className={cn(
//         "border-2 border-dashed border-gray-300 rounded-lg p-4",
//         className
//       )}
//     >
//       <input
//         type="file"
//         id={name}
//         accept=".pdf"
//         className="hidden"
//         {...register(name)}
//         onChange={handleFileChange}
//       />
//       <label
//         htmlFor={name}
//         className="flex flex-col items-center justify-center h-full cursor-pointer"
//       >
//         <p className="text-center text-gray-600 dark:text-gray-400">
//           Drag and drop your resume here or{" "}
//           <span className="text-primary">browse</span>
//         </p>

//         {
//         error?.[name] && (
//           <p className="text-red-500 text-sm mt-2">{error?.[name]?.message?.toString()}</p>
//         )}
//       </label>
//     </div>
//   );
// };

// export default DropZone;
