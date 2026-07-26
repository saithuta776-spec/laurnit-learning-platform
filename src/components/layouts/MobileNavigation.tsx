// import { Link } from "react-router";
// import type { MainNavItem } from "@/type/index";
// // import { Icons } from "@/components/ui/icons";
// import { siteConfig } from "@/config/site";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { ScrollArea } from "@/components/ui/scroll-area";
// // import { Icon } from "lucide-react";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// interface MainNavigationProps {
//   navl?: MainNavItem[];
// }

// export default function MobileNavigation({ navl }: MainNavigationProps) {
//   return (
//     <div className="lg:hidden">
//       <Sheet>
//         <SheetTrigger>
//           <Button variant="ghost" size="icon" className="ml-4">
//             <span>Menu</span>
//             {/* <Icons.menu /> */}
//             <span className="sr-only" aria-hidden="true">
//               Toggle Menu
//             </span>
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="left" className="pt-9 pr-0 pl-4">
//           <SheetClose>
//             <Link to="/" className="flex items-center">
//               {/* <Icons.logo className="size-4 mr-2" /> */}
//               <span className="font-bold">{siteConfig.name}</span>
//               <span className="sr-only">Home</span>
//             </Link>
//           </SheetClose>
//           <ScrollArea className="h-[calc(100vh-8rem)]">
//             <Accordion type="single">
//               <AccordionItem value="item-1">
//                 <AccordionTrigger>{navl?.[0].title}</AccordionTrigger>
//                 <AccordionContent className="flex flex-col items-start space-y-2 pl-3">
//                   {navl?.[0].card?.map((item) => (
//                     <SheetClose className="" key={item.title}>
//                       <Link
//                         to={String(item.href)}
//                         className="text-foreground/70"
//                       >
//                         {item.title}
//                       </Link>
//                     </SheetClose>
//                   ))}
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//             <div className="flex flex-col items-start space-y-2">
//               {navl?.[0].menu?.map((item) => (
//                 <SheetClose className="" key={item.title}>
//                   <Link to={String(item.href)} className="">
//                     {item.title}
//                   </Link>
//                 </SheetClose>
//               ))}
//             </div>
//           </ScrollArea>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// }

import { Link } from "react-router";
import type { MainNavItem } from "@/type/index";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Key, Search } from "lucide-react";

interface MainNavigationProps {
  navl?: MainNavItem[];
}

export default function MobileNavigation({ navl }: MainNavigationProps) {
  return (
    <div className="flex w-full items-center gap-3 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 bg-emerald-800/40 px-3 py-2 text-white hover:bg-emerald-800/60"
          >
            <Menu className="h-6 w-6 text-white" />
            <span className="text-base font-bold text-white">Menu</span>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>

        <div className="relative flex flex-1 items-center">
          <span className="pointer-events-none absolute inset-y-0 left-0 flex w-14 items-center pl-4">
            <Search className="h-5 w-5 text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="What do you want to learn"
            className="w-full rounded-full bg-white py-2 pr-4 pl-12 text-gray-800 placeholder-gray-500 shadow-sm transition-all outline-none focus:ring-2 focus:ring-emerald-300"
          />
        </div>
        <SheetContent side="left" className="w-[300px] bg-white pt-9 pr-0 pl-4">
          <SheetClose asChild>
            <Link to="/" className="mb-6 flex items-center">
              <span className="text-xl font-bold text-gray-900">
                {siteConfig.name}
              </span>
            </Link>
          </SheetClose>
          <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-gray-900">
                  {navl?.[0]?.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-start space-y-2 pl-3">
                  {navl?.[0]?.card?.map((item) => (
                    <SheetClose asChild key={item.title}>
                      <Link
                        to={String(item.href)}
                        className="text-gray-600 hover:text-emerald-600"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col items-start space-y-2 pt-4">
              {navl?.[0]?.menu?.map((item) => (
                <SheetClose asChild key={item.title}>
                  <Link
                    to={String(item.href)}
                    className="font-semibold text-gray-800"
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
