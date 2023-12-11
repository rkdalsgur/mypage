'use client'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-blue-100 w-full flex flex-row justify-between items-center px-8 py-4">
      <Link href="/" className="text-black text-lg font-bold">
        안녕하세요 강민혁의 개인 페이지입니다
      </Link>
      <div>
        <Link href="/about">About |</Link>
        <Link href="/review"> Reviews | </Link>
        <Link href="/project"> Projects</Link>
      </div>
    </nav>
  )
}
