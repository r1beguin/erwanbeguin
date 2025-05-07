"use client";

import React, { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeButton from "@/components/homeButton/homeButton"; 
import IconButton from '@/components/basicComponents/iconButton/IconButton';
import { FaMoon, FaSun } from 'react-icons/fa';
import { metadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title ?? "Default Title")}</title>
        <meta name="description" content={metadata.description ?? "Default description"} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <HomeButton />
          <IconButton
            icon={theme === "light" ? <FaMoon color="var(--foreground)" /> : <FaSun color="var(--foreground)" />}
            tooltipText="Toggle Dark Mode"
            backgroundColor="var(--background)"
            onClick={toggleTheme}
            width="40px"
            height="40px"
          />
        </header>
        {children}
      </body>
    </html>
  );
}
