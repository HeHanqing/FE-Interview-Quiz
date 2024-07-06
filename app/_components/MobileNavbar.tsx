import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      classNames={{
        base: "fixed bg-opeacity-0 backdrop-blur-0 border-0 z-10 text-[16px] w-full",
        menu: "flex flex-col items-center pt-10 gap-5",
        menuItem: "text-[16px]",
      }}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="flex flex-col items-center pt-10 gap-5">
        <NavbarMenuItem>
          <Link href="/">Docs</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/">Onboard</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button
            className="rounded-full border-1 w-64"
            color="secondary"
            variant="bordered"
          >
            Join Waitlist
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button color="secondary" className="text-white rounded-full w-64">
            <ConnectButton />
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
