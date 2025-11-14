"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

type BackButtonProps = {
  text?: string;
  url?: string;
  icon?: LucideIcon;
};

function BackButton({ text, url, icon: Icon }: BackButtonProps) {
  const router = useRouter();
  return (
    <Button
      type="button"
      variant={"link"}
      size={"sm"}
      className="flex items-center gap-2"
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
