import { Button } from "@nextui-org/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function NavbarComponents() {
  return (
    <nav className="relative z-10 ">
      <header className="fixed top-0 py-6 flex justify-center items-center -translate-x-1/2 w-full backdrop-blur bg-black/20">
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
          <ConnectButton label="Connect Wallet" showBalance={false} />
          {/* </Button> */}
        </ul>
      </header>
    </nav>
  );
}
