const partners = [
  { name: "AngelHub", logo: "/images/partners/angelhub.jpg" },
  { name: "Google for Startups", logo: "/images/partners/google-startups.jpg" },
  { name: "Startuplinks", logo: "/images/partners/startuplinks.jpg" },
  { name: "Founder Institute", logo: "/images/partners/founder-institute.jpg" },
  { name: "BVC", logo: "/images/partners/bvc.jpg" },
  { name: "Uniandinos", logo: "/images/partners/uniandinos.jpg" },
  { name: "Tecnológico de Monterrey", logo: "/images/partners/tec-monterrey.jpg" },
  { name: "Startti", logo: "/images/partners/startti.jpg" },
]

export function Partners() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-oxford-blue font-serif text-center mb-12">
          Nuestros Partners
        </h2>

        {/* Static Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 rounded-xl bg-non-photo-blue/20 w-full h-24 hover:bg-non-photo-blue/40 transition-colors">
              <span className="text-sm font-semibold text-pine-green text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
