import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-zinc-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.1),_transparent_30%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 rounded-3xl border border-zinc-200/80 bg-white/90 px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-base font-semibold tracking-tight text-zinc-900"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-sm font-bold text-white shadow-lg shadow-sky-500/20">
              B
            </span>
            Better Auth
          </Link>

          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-600">
            <Link
              href="/"
              className="rounded-full px-4 py-2 transition hover:bg-zinc-100 hover:text-zinc-950"
            >
              Home
            </Link>
            <Link
              href="/Dashboard"
              className="rounded-full bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700"
            >
              Dashboard
            </Link>
          </nav>
        </header>

        <section className="flex flex-1 items-center py-10 sm:py-14 lg:py-20">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                Secure login flows for modern apps
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Build auth that feels fast, friendly, and trustworthy.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
                Better Auth gives your product a polished sign-in experience
                with clear flows, strong security, and a developer-friendly
                foundation that scales with your app.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/Dashboard"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-950/15 transition hover:-translate-y-0.5 hover:bg-zinc-800"
                >
                  Go to dashboard
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50"
                >
                  Explore home
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-sky-200/50 blur-3xl" />
              <div className="absolute -right-6 bottom-4 h-28 w-28 rounded-full bg-blue-200/60 blur-3xl" />

              <article className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-5">
                  <div>
                    <p className="text-sm font-medium text-zinc-500">
                      Banner speech
                    </p>
                    <p className="mt-1 text-lg font-semibold text-zinc-950">
                      Why Better Auth works
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Ready
                  </span>
                </div>

                <blockquote className="mt-6 text-balance text-xl font-medium leading-8 text-zinc-800 sm:text-2xl sm:leading-9">
                  “Authentication should feel invisible when it works and
                  reassuring when users need it most. Better Auth helps you
                  deliver that experience with clean UI and dependable control.”
                </blockquote>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <p className="text-sm font-medium text-zinc-500">
                      Smooth onboarding
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                      Guide people from entry to action with fewer distractions
                      and a clearer path.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <p className="text-sm font-medium text-zinc-500">
                      Built to scale
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                      Keep the experience responsive and reliable across desktop
                      and mobile screens.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
