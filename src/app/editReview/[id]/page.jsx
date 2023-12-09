import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import EditReviewForm from '@/components/EditReviewForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const getReviewById = async (id) => {
  const apiUrl = process.env.API_URL

  try {
    const res = await fetch(`${apiUrl}/api/reviews/${id}`, {
      method: 'GET',
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch review')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function EditReviewPage({ params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/signIn')
  }

  const { id } = params
  const { review } = await getReviewById(id)
  const { title, description } = review

  return (
    <div>
      <EditReviewForm id={id} title={title} description={description} />
    </div>
  )
}
