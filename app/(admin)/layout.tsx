export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>DashboardLayout</nav>
      <main>{children}</main>
    </div>
  )
}