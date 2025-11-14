"use client";

import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RawIcons = typeof Icons;
type BadKeys = "createLucideIcon" | "default" | "icons";
type IconName = Exclude<keyof RawIcons, BadKeys>;

type CustomCardProps = {
  children: ReactNode;
  className?: string;
  title: string;
  description?: string;
  icon?: IconName;
};

export function CustomCard({
  title,
  description,
  icon,
  children,
  className,
}: CustomCardProps) {
  const IconComp = icon ? (Icons[icon] as unknown as LucideIcon) : null;

  return (
    <Card className={cn("rounded-xl", className)}>
      <CardHeader>
        <div className="flex flex-col gap-2 sm:flex-row md:items-center">
          {IconComp && (
            <div className="grid aspect-square size-10 place-items-center rounded-md bg-slate-200 md:size-12 dark:bg-slate-700">
              <IconComp className="text-foreground size-5" />
            </div>
          )}

          <div className="space-y-1">
            <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
            {description && (
              <CardDescription className="text-muted-foreground leading-4">
                {description}
              </CardDescription>
            )}
          </div>
        </div>
        <Separator className="mt-4" />
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
