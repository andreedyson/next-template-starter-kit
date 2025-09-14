import { LucideIcon } from "lucide-react";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type FormInputProps<T extends FieldValues = FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  required?: boolean;
  isDecimal?: boolean;
  prefixIcon?: LucideIcon;
  suffixIcon?: LucideIcon;
  onPrefixClick?: () => void;
  onSuffixClick?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  required = true,
  type = "text",
  isDecimal,
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
  onPrefixClick,
  onSuffixClick,
  ...rest
}: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name} className="mb-1 block">
            {label}
            {required && <span className="ml-0.5 text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div
              className={cn(
                "focus-within:ring-ring border-muted-foreground/50 aria-invalid:ring-destructive aria-invalid:border-destructive flex items-center gap-2 rounded-md border focus-within:ring-2",
                PrefixIcon && "pl-3",
                SuffixIcon && "pr-3",
              )}
            >
              {PrefixIcon && (
                <button
                  tabIndex={-1}
                  type="button"
                  onClick={onPrefixClick}
                  className="text-muted-foreground hover:text-foreground size-5 focus:outline-none"
                >
                  <PrefixIcon strokeWidth={2} className="size-5" />
                </button>
              )}

              <Input
                id={name}
                type={type}
                placeholder={placeholder}
                className="flex-1 rounded-l-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                autoComplete={
                  name === "email"
                    ? "username"
                    : name === "password"
                      ? "current-password"
                      : "on"
                }
                {...field}
                {...rest}
                onChange={(e) => {
                  const val = e.target.value;
                  if (type === "number") {
                    const parsed = isDecimal
                      ? parseFloat(val)
                      : parseInt(val, 10);
                    field.onChange(val === "" ? undefined : parsed);
                  } else {
                    field.onChange(val);
                  }
                }}
                value={field.value ?? ""}
              />

              {SuffixIcon && (
                <button
                  tabIndex={-1}
                  type="button"
                  onClick={onSuffixClick}
                  className="text-muted-foreground hover:text-foreground size-5 focus:outline-none"
                >
                  <SuffixIcon strokeWidth={2} className="size-5" />
                </button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
