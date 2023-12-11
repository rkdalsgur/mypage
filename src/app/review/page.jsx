import Reviewlist from '@/components/Reviewlist'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors">
        <h2 className="mb-3 text-2xl font-semibold">
          여러분들의 소중한 방명록을 남겨주세요
        </h2>
      </p>
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/main.jpg"
          alt="Next.js Logo"
          width={1800}
          height={370}
          priority
        />
      </div> */}

      <br />
      <div>
        <Link
          href="/addReview"
          className="bg-blue-100 text-lg font-bold px-4 py-2 rounded-md"
        >
          방명록 추가하기
        </Link>
      </div>
      <div>
        <Reviewlist />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  )
}
