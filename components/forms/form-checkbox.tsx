import * as React from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";

type FormCheckboxProps<T extends FieldValues = FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: React.ReactNode;
  description?: React.ReactNode;
  required?: boolean;
  align?: "left" | "right";
  containerClassName?: string;
} & Omit<
  React.ComponentPropsWithoutRef<typeof Checkbox>,
  "checked" | "onCheckedChange" | "name" | "id"
>;

export function FormCheckbox<T extends FieldValues>({
  control,
  name,
  label,
  description,
  required = false,
  align = "left",
  containerClassName,
  disabled,
  ...rest
}: FormCheckboxProps<T>) {
  const id = String(name);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={[
            "flex items-start gap-3",
            align === "right" ? "flex-row-reverse justify-between" : "",
            containerClassName ?? "",
          ].join(" ")}
        >
          <FormControl>
            <Checkbox
              id={id}
              disabled={disabled}
              {...rest}
              checked={!!field.value}
              onCheckedChange={(v) =>
                field.onChange(v === "indeterminate" ? false : v)
              }
              aria-invalid={
                !!field.value === false && required ? true : undefined
              }
            />
          </FormControl>

          <div className="space-y-1 leading-none">
            <FormLabel htmlFor={id} className="cursor-pointer select-none">
              {label}
              {required && <span className="ml-0.5 text-red-500">*</span>}
            </FormLabel>

            {description && (
              <FormDescription className="text-muted-foreground text-sm">
                {description}
              </FormDescription>
            )}

            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
