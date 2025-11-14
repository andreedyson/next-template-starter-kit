import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type EmptyStateProps = {
  imgUrl?: string;
  title: string;
  description?: string;
  className?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
};

function EmptyState({
  imgUrl,
  title,
  description,
  className,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex h-full w-full flex-col items-center gap-2 text-center md:gap-4">
      <Image
        src={imgUrl ?? "assets/image-placeholder.svg"}
        width={500}
        height={500}
        alt={title ?? "No Data"}
        className={cn("aspect-video w-[180px] lg:w-[280px]", className)}
        priority
      />
      <div className="space-y-1">
        <h4 className="text-sm font-semibold md:text-base">{title}</h4>
        <p className="max-w-md text-xs md:text-sm">{description}</p>
      </div>
      {action && <Button onClick={action.onClick}>{action.label}</Button>}
    </div>
  );
}

export default EmptyState;
