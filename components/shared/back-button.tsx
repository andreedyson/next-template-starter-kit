"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type BackButtonProps = {
  text?: string;
  url?: string;
  icon?: LucideIcon;
  className?: string;
};

function BackButton({ text, url, icon: Icon, className }: BackButtonProps) {
  const router = useRouter();
  return (
    <Button
      type="button"
      variant={"link"}
      size={"sm"}
      className={cn("flex items-center gap-2", className)}
      onClick={() => {
        return url ? router.push(url) : router.back();
      }}
    >
      {Icon ? <Icon size={16} /> : <ChevronLeft size={16} />}
      {text ?? "Kembali"}
    </Button>
  );
}

export default BackButton;
