'use client'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none bg-blue-100">
        <Link
          href="https://github.com/rkdalsgur"
          className="text-black text-center "
        >
          Made By 정보보호학과 92014942 강민혁
        </Link>
      </div>
    </>
  )
}
