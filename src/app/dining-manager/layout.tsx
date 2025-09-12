// Layout for Kitchen Manager

export default function KitchenManagerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
