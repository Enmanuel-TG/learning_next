"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
    path: string;
    text: string;
}
export const ActiveLink = ({ path, text }: ActiveLinkProps) => {
  const currentPath = usePathname();
  return (
    <Link
      href={path}
      className={`${
        currentPath === path ? "text-blue-500" : "text-gray-500"
      } text-blue-500 hover:underline hover:text-blue-400 mr-2 transition-all `}
    >
      {text}
    </Link>
  );
}
