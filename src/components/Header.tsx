import React from 'react'
import Image from "next/image"
import { Button } from './ui/button';

export default function Header() {
  return (
    <div className="h-[76px] w-full max-w-[1440px] mx-auto bg-[var(--background-dark)] flex justify-between items-center px-6 lg:px-10 font-satoshi">
      <Image src="/gamrlogo.svg" alt="Gamr logo" width={79} height={30} priority className="cursor-pointer" />
      <div className="flex gap-4">
      <Button variant="primaryColor" className="w-[125px] h-[40px] text-sm font-medium">
  Login
</Button>
<Button variant="accentColor" className="w-[125px] h-[40px] text-sm font-medium">
  Join Free
</Button>

      </div>
    </div>
  );
}
