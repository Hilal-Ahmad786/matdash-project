import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-16">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
