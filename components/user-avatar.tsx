"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type UserAvatarProps = {
  fullname: string;
  role: "SUPER_ADMIN" | "ADMIN" | "USER";
};
function UserAvatar({ fullname, role }: UserAvatarProps) {
  const pathname = usePathname();
  const userInitial =
    fullname.split(" ").length > 1
      ? fullname.split(" ")[0].charAt(0) + fullname.split(" ")[1].charAt(0)
      : fullname.charAt(0);
  const isUserAdmin = role === "ADMIN" || role === "SUPER_ADMIN";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative size-8 rounded-full border-2 md:size-10"
        >
          <Avatar className="bg-main-violet-300 flex items-center justify-center font-semibold">
            {userInitial}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-[100] w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1 text-right">
            <p className="text-sm leading-none font-semibold">{fullname}</p>
            <p
              className={`"text-sm text-muted-foreground" leading-none font-medium ${isUserAdmin ? "text-red-500" : "text-slate-400"}`}
            >
              {isUserAdmin ? "Admin" : "User"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href={
                isUserAdmin && !pathname.includes("/dashboard")
                  ? "/dashboard"
                  : isUserAdmin && pathname.includes("/dashboard")
                    ? "/"
                    : "/profile"
              }
              className="w-full"
            >
              {isUserAdmin && !pathname.includes("/dashboard")
                ? "Dashboard"
                : isUserAdmin && pathname.includes("/dashboard")
                  ? "Main Page"
                  : "Profile"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              signOut({ redirect: true });
            }}
            className="cursor-pointer font-semibold text-red-500"
          >
            Log out
            <DropdownMenuShortcut className="text-red-500">
              <LogOutIcon size={20} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAvatar;
