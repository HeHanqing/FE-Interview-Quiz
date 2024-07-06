import { Button } from "@nextui-org/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function NavbarComponents() {
  return (
    <nav className="relative z-10">
      <header className="fixed top-0 my-10 left-1/2 -translate-x-1/2">
        <ul className="text-white flex gap-12 items-center">
          <li>
            <Link href="/">Docs</Link>
          </li>
          <li>
            <Link href="/">Onboard</Link>
          </li>
          <li>
            <Button
              className="rounded-full border-1"
              color="primary"
              variant="bordered"
            >
              Join Waitlist
            </Button>
          </li>
          <li>
            <ConnectButton
              label="Connect Wallet"
              chainStatus="icon"
              accountStatus="avatar"
            />
          </li>
        </ul>
      </header>
    </nav>
  );
}
