"use client";

import React, { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomeButton from "@/components/homeButton/homeButton"; 
import IconButton from '@/components/basicComponents/iconButton/IconButton';
import { FaMoon, FaSun } from 'react-icons/fa';

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
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <HomeButton />
          <IconButton
            icon={theme === "light" ? <FaMoon /> : <FaSun />}
            tooltipText="Toggle Dark Mode"
            backgroundColor="var(--primary-color)"
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
