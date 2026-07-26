import * as React from "react";
import { Key, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import type { MainNavItem } from "@/type/index";
// import { Icons } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";

interface MainNavigationProps {
  navl?: MainNavItem[];
}

export function MainNavigation({ navl }: MainNavigationProps) {
  return (
    <div className="hidden w-full items-center gap-3 md:flex">
      <Link to="/" className="flex items-center space-x-2 text-2xl text-white">
        {/* <Icons.logo className="size-7" aria-hidden="true" /> */}
        <span className="font-bold">{siteConfig.name}</span>
        <span className="sr-only">Home</span>
      </Link>
      <NavigationMenu className="">
        <NavigationMenuList className="">
          {navl?.[0]?.card ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{navl[0].title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink>
                      <Link
                        className="flex size-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                        to="/"
                      >
                        {/* <Icons.logo className="size-6" aria-hidden="true" /> */}
                        <div className="mb-2 text-lg font-medium sm:mt-4">
                          {siteConfig.name}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {siteConfig.description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  {navl[0].card.map((item) => (
                    <ListItem
                      key={item.title}
                      href={String(item.href)}
                      title={item.title}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : null}
          {navl?.[0]?.menu &&
            navl[0].menu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link to={String(item.href)}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
      {/* Change `max-w-md` to `max-w-xl`, `max-w-2xl`, or `max-w-full` depending on how wide you want it */}
      <div className="relative ml-auto flex w-full max-w-lg flex-1">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex w-14 items-center pl-4">
          <Search className="h-5 w-5 text-gray-500" />
        </span>
        <input
          type="text"
          placeholder="What do you want to learn"
          className="w-full rounded-full bg-white py-2 pr-4 pl-12 text-gray-800 placeholder-gray-500 shadow-sm transition-all outline-none focus:ring-2 focus:ring-emerald-300"
        />
      </div>

      <Link
        to="/profile"
        className="ml-auto flex text-2xl font-semibold text-white transition-opacity hover:opacity-80"
      >
        Profile
      </Link>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

//
