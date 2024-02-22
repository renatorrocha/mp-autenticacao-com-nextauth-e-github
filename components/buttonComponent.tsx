"use client";

import React from "react";
import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

interface IButtonComponent {
  text: string;
  href: string;
  isLogin?: boolean;
}

export default function ButtonComponent({
  text,
  href,
  isLogin,
}: IButtonComponent) {
  return (
    <Link className="group" href={href}>
      <Button className="w-full min-w-64 gap-2 rounded-lg text-2xl font-light transition-all duration-300 group-hover:scale-105 ">
        {isLogin && <GithubIcon className=" fill-white" />}
        {text}
      </Button>
    </Link>
  );
}
