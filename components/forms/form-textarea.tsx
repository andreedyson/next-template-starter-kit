import { LucideIcon } from "lucide-react";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

type FormTextareaProps<T extends FieldValues = FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  required?: boolean;
  prefixIcon?: LucideIcon;
  suffixIcon?: LucideIcon;
  onPrefixClick?: () => void;
  onSuffixClick?: () => void;
  rows?: number;
};

export function FormTextarea<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  required = false,
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
  onPrefixClick,
  onSuffixClick,
  rows = 4,
}: FormTextareaProps<T>) {
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
                "focus-within:ring-ring border-muted-foreground/50 aria-invalid:ring-destructive aria-invalid:border-destructive flex items-start gap-2 rounded-md border focus-within:ring-2",
                PrefixIcon && "pl-3",
                SuffixIcon && "pr-3",
              )}
            >
              {PrefixIcon && (
                <button
                  tabIndex={-1}
                  type="button"
                  onClick={onPrefixClick}
                  className="text-muted-foreground hover:text-foreground mt-1 size-5 focus:outline-none"
                >
                  <PrefixIcon strokeWidth={2} className="size-5" />
                </button>
              )}

              <Textarea
                id={name}
                placeholder={placeholder}
                rows={rows}
                className="flex-1 resize-none rounded-l-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                {...field}
              />

              {SuffixIcon && (
                <button
                  tabIndex={-1}
                  type="button"
                  onClick={onSuffixClick}
                  className="text-muted-foreground hover:text-foreground mt-1 size-5 focus:outline-none"
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
