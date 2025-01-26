import { LOGIN, PROFILE } from "@/utils/front_end_urls/urls";
import Link from "next/link";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import React from "react";
import { useState } from "react";
import DarkModeButton from "../btn_dark_mode/btnDarkMode";

export default function HeaderDesktop(){

    return (
      <nav className="flexRow headerDesktop">
        <Link href={LOGIN}>
          <Button label="Login" outlined />
        </Link>

        <Link href={LOGIN}>
          <Button label="Sair" severity="danger" outlined />
        </Link>

        <DarkModeButton/>
        
        <Link href={PROFILE}>
          <img src="/profile.png" alt="profile" className="LogoHeader" />
        </Link>
      </nav>
    );
}