'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function AddReviewForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })
      if (!res.ok) {
        throw new Error('Failed to add review')
      }
      router.push('/review')
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Review title"
          className="border border-slate-500 p-3"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Review description"
          className="border border-slate-500 p-3 h-32"
        />
        <button
          type="submit"
          className="bg-blue-100 text-black font-bold w-fit px-6 py-3 rounded-md"
        >
          방명록 추가하기
        </button>
      </form>
    </div>
  )
}
