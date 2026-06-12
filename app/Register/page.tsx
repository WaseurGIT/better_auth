import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-zinc-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.1),_transparent_30%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between rounded-3xl border border-zinc-200/80 bg-white/90 px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3 text-base font-semibold tracking-tight text-zinc-900"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-sm font-bold text-white shadow-lg shadow-sky-500/20">
              B
            </span>
            Better Auth
          </Link>

          <nav className="flex items-center gap-3 text-sm font-medium text-zinc-600">
            <Link
              href="/"
              className="rounded-full px-4 py-2 transition hover:bg-zinc-100 hover:text-zinc-950"
            >
              Home
            </Link>
            <Link
              href="/Login"
              className="rounded-full bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700"
            >
              Login
            </Link>
          </nav>
        </header>

        <section className="flex flex-1 items-center py-10 sm:py-14 lg:py-20">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="order-2 max-w-xl lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                Create your account
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                Join with a polished onboarding experience.
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-zinc-600 sm:text-lg">
                This register screen is built to feel clean, bright, and
                responsive, with enough breathing room to make the signup
                journey feel simple and trustworthy.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-medium text-zinc-500">
                    Simple onboarding
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-700">
                    Helpful spacing and hierarchy keep the registration steps
                    readable.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-medium text-zinc-500">
                    Responsive layout
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-700">
                    The design stacks gracefully on mobile and expands cleanly
                    on larger screens.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 relative lg:order-2">
              <div className="absolute -left-4 top-10 h-24 w-24 rounded-full bg-sky-200/50 blur-3xl" />
              <div className="absolute -right-6 bottom-2 h-28 w-28 rounded-full bg-blue-200/60 blur-3xl" />

              <article className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-zinc-100 pb-5">
                  <div>
                    <p className="text-sm font-medium text-zinc-500">
                      Register
                    </p>
                    <p className="mt-1 text-lg font-semibold text-zinc-950">
                      Start your Better Auth journey
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Fresh
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                      Full name
                    </label>
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-400">
                      Alex Morgan
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-zinc-700">
                      Email
                    </label>
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-400">
                      you@example.com
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Password
                      </label>
                      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-400">
                        ••••••••••
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-700">
                        Confirm
                      </label>
                      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-400">
                        ••••••••••
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-950/15 transition hover:-translate-y-0.5 hover:bg-zinc-800"
                  >
                    Create account
                  </button>
                </div>

                <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm leading-6 text-zinc-600">
                  Already have an account?{" "}
                  <Link
                    href="/Login"
                    className="font-semibold text-zinc-950 underline-offset-4 hover:underline"
                  >
                    Sign in
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
