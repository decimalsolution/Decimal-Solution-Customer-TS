import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext, ControllerRenderProps, Control, FieldValues, Path } from "react-hook-form";
import { cn } from "../../../../lib/utils";
import { Label } from "./label";

interface FormFieldContextType {
  name?: Path<FieldValues>;
}

const FormFieldContext = React.createContext<FormFieldContextType>({});

interface FormItemContextType {
  id: string;
}

const FormItemContext = React.createContext<FormItemContextType | undefined>(undefined);

// Form wrapper
const Form = FormProvider;

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  render: (field: ControllerRenderProps<T, Path<T>>) => React.ReactElement;
}

const FormField = <T extends FieldValues>({ name, control, render }: FormFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormFieldContext.Provider value={{ name }}>
          {render(field)}
        </FormFieldContext.Provider>
      )}
    />
  );
};

// Custom hook to use form field context
const useFormField = <T extends FieldValues>() => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext<T>();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name as Path<T>, formState);
  const { id } = itemContext || { id: '' }; // Provide a fallback if itemContext is undefined

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

// FormItem component
const FormItem = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

// FormLabel component
const FormLabel = React.forwardRef<HTMLLabelElement, React.HTMLProps<HTMLLabelElement>>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

// FormControl component
const FormControl = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

// FormDescription component
const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLProps<HTMLParagraphElement>>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

// FormMessage component
const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLProps<HTMLParagraphElement>>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

// Export components and hooks
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
