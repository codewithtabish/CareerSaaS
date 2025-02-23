import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/utils/auth";
import { ChevronDown, Heart, Layers2, LogOut } from "lucide-react";
import Link from "next/link";

interface iAppProps {
  email: string;
  name: string;
  image: string;
}

export function UserDropdown({ email, name, image }: iAppProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-1 p-0 hover:bg-transparent focus:outline-none cursor-pointer"
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src={image} alt={`${name}'s profile image`} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <ChevronDown
            size={16}
            strokeWidth={2}
            className="text-muted-foreground"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 rounded-md border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
        align="end"
      >
        <DropdownMenuLabel className="flex flex-col px-4 py-2">
          <span className="text-sm font-medium text-foreground truncate">
            {name}
          </span>
          <span className="text-xs text-muted-foreground truncate">
            {email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              href="/favorites"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              <Heart
                size={16}
                strokeWidth={2}
                className="text-muted-foreground"
                aria-hidden="true"
              />
              <span className="text-sm">Saved Jobs</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="/my-jobs"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              <Layers2
                size={16}
                strokeWidth={2}
                className="text-muted-foreground"
                aria-hidden="true"
              />
              <span className="text-sm">My Job Listings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none cursor-pointer"
            >
              <LogOut
                size={16}
                strokeWidth={2}
                className="text-muted-foreground"
                aria-hidden="true"
              />
              <span className="text-sm">Logout</span>
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
