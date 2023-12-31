export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col lg:flex-row">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h2 className="text-2xl">자기 소개</h2>
          <br />
          <br />
          <h2 className="text-xl">생년월일: 2001.02.20</h2>
          <br />
          <h2 className="text-xl">학번: 92014942</h2> <br />
          <h2 className="text-xl">전공: 정보보호학과</h2>
          <br />
          <h2 className="text-xl">연락처: 010-5772-0285</h2>
        </div>
        <br />
        <br />

        <div className="mb-4 lg:mb-0">
          <button className="rounded-lg bg-blue-100 text-center font-semibold text-2xl hover:bg-blue-300">
            <a className="mt-2 mb-2" href="/review">
              　방명록 남기러 가기　
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </a>
          </button>
          {/* <a
            href="/review"
            className="group rounded-lg border text-center border-transparent px-5 py-4 transition-colors  "
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibol">
              방명록 남기러 가기{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a> */}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <p className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
          By 정보보호학과 92014942 강민혁
        </p>
      </div>
    </main>
  )
}
