function App() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 px-6 py-4">
        <h1 className="text-xl font-semibold">Clock-in</h1>
      </header>
      <main className="flex flex-1">
        <aside className="w-64 border-r border-neutral-200 p-4" aria-label="Palette">
          <h2 className="text-sm font-medium text-neutral-500">Projekte und Tasks</h2>
        </aside>
        <section className="flex-1 p-4" aria-label="Tagesleiste">
          <h2 className="text-sm font-medium text-neutral-500">Heute</h2>
        </section>
      </main>
    </div>
  )
}

export default App
