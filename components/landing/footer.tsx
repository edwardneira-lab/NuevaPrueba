export function Footer() {
  return (
    <footer className="bg-oxford-blue text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-caribbean-green mb-2">Boostart</p>
            <p className="text-light-cyan text-sm">Venture Studio — Batch 2026</p>
          </div>
          <div className="text-center md:text-right space-y-2">
            <p className="text-light-cyan text-sm">Operado por AngelHub</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pine-green text-center text-light-cyan/60 text-sm">
          © 2026 Boostart. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
