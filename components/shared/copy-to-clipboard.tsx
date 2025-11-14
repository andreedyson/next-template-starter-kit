"use client";

import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type CopyToClipboardProps = {
  text: string;
  successText?: string;
  label?: string;
  isIconOnly?: boolean;
  className?: string;
  successDuration?: number;
};

export function CopyToClipboard({
  text,
  successText,
  label = "Copy",
  isIconOnly = false,
  className,
  successDuration = 1500,
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(successText ?? "Teks berhasil disalin!");
      setTimeout(() => setCopied(false), successDuration);
    } catch (err) {
      console.error(err);
      toast.error("Gagal menyalin teks!");
    }
  };

  return (
    <Button
      variant="outline"
      size={isIconOnly ? "icon" : "sm"}
      onClick={handleCopy}
      className={cn("gap-2", className)}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-600" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      {!isIconOnly && (copied ? "Tersalin" : label)}
    </Button>
  );
}
