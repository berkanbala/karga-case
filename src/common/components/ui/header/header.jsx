"use client";
import styles from "./header.module.scss";
import Image from "next/image";
import Logo from "@/common/media/logo/logo.svg";
import Link from "next/link";
import { navbarList } from "@/common/shared/header/navbar";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link className={styles.images} href="/">
        <Image alt="logo" src={Logo} />
      </Link>
      <div className={styles.pages}>
        {navbarList.map((item) => (
          <Link href={item.path} className={styles.link} key={item.id}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
