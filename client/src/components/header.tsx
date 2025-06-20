import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">Đăng nhập</Link>
        </li>
        <li>
          <Link href="/register">Đăng kí</Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
