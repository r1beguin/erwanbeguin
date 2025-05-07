/**
 * Main button to go back to the home page.
 * 
 * Round button with a home icon.
 * 
 * Desktop behavior:
 * - On click, redirect to the home page.
 * - On hover, display email address.
 */

"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import IconButton from '@/components/basicComponents/iconButton/IconButton';
import { FaHome } from 'react-icons/fa';

const HomeButton: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <IconButton
    icon={<FaHome color="linear-gradient(145deg, #fefefe, #d5d5d5)" size={50} />}
    tooltipText="email@example.com"
    onClick={handleRedirect}
    width='100px'
    height='100px'
  />
  );
};

export default HomeButton;