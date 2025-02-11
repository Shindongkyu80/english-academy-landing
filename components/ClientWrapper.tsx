"use client"

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Header = dynamic(() => import('@/components/sections/Header'), {
  ssr: false
})

const BookingForm = dynamic(() => import('@/components/sections/BookingForm'), {
  ssr: false
})

export default function ClientWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-screen bg-[#020817]" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
        <BookingForm />
      </main>
    </div>
  );
} 