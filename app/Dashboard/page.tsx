import Link from "next/link";

const stats = [
  { label: "Signed-in sessions", value: "24" },
  { label: "Security score", value: "98%" },
  { label: "Team members", value: "08" },
  { label: "Active devices", value: "03" },
];

const activity = [
  {
    title: "Password updated",
    detail: "Your account password was changed successfully.",
    time: "Today, 09:42 AM",
  },
  {
    title: "New device signed in",
    detail: "MacBook Pro was added to your trusted devices.",
    time: "Yesterday, 04:18 PM",
  },
  {
    title: "Profile completed",
    detail: "Display name, email, and role information are up to date.",
    time: "2 days ago",
  },
];

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-zinc-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.1),_transparent_30%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 rounded-3xl border border-zinc-200/80 bg-white/90 px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="text-sm font-medium text-sky-700">Dashboard</p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
              Welcome back, Alex
            </h1>
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-600">
            <Link
              href="/"
              className="rounded-full px-4 py-2 transition hover:bg-zinc-100 hover:text-zinc-950"
            >
              Home
            </Link>
          </nav>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] xl:gap-8">
          <aside className="space-y-6">
            <article className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-xl font-bold text-white shadow-lg shadow-sky-500/20">
                  A
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    User profile
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
                    Alex Morgan
                  </h2>
                  <p className="mt-1 text-sm text-zinc-600">
                    Product Designer · alex@betterauth.dev
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-sm font-medium text-zinc-500">
                    Account status
                  </p>
                  <p className="mt-2 text-base font-semibold text-emerald-600">
                    Verified
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-sm font-medium text-zinc-500">
                    Member since
                  </p>
                  <p className="mt-2 text-base font-semibold text-zinc-900">
                    Jan 2025
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-sm font-medium text-zinc-500">
                    Primary role
                  </p>
                  <p className="mt-2 text-base font-semibold text-zinc-900">
                    Admin
                  </p>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <p className="text-sm font-medium text-zinc-500">Location</p>
                  <p className="mt-2 text-base font-semibold text-zinc-900">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </article>
          </aside>

          <div className="space-y-6">
            <article className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex flex-col gap-4 border-b border-zinc-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500">Overview</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
                    Your account at a glance
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-zinc-600">
                  A clean summary of user information, security health, and
                  recent activity for a polished admin-style dashboard.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-zinc-50 p-4">
                    <p className="text-sm font-medium text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    Recent activity
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-zinc-950">
                    Latest account updates
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Synced
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {activity.map((entry) => (
                  <div
                    key={entry.title}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-semibold text-zinc-950">
                        {entry.title}
                      </p>
                      <p className="text-xs font-medium text-zinc-500">
                        {entry.time}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                      {entry.detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
