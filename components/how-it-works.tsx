import { Cpu, UserCheck, Sparkles } from "lucide-react"

export default function HowItWorks() {
  const features = [
    {
      icon: Cpu,
      title: "Browser-based",
      description: "Files can be processed locally without uploading to servers.",
    },
    {
      icon: UserCheck,
      title: "No sign-up",
      description: "No registration required. Start converting right away.",
    },
    {
      icon: Sparkles,
      title: "High quality output",
      description: "Preserves image quality with optimized conversion.",
    },
  ]

  return (
    <section id="how-it-works" className="py-12 md:py-16 px-4" style={{ backgroundColor: "#578FCA" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-balance" style={{ color: "#FFFFFF" }}>
            Why choose HEIC Convert?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#E8F4FA", borderWidth: "1px" }}
              >
                <div className="h-12" style={{ backgroundColor: "#578FCA" }}></div>
                <div className="p-6 space-y-3">
                  <Icon size={32} style={{ color: "#3674B5" }} />
                  <h3 className="text-lg font-semibold" style={{ color: "#2A2A2A" }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#556B5B" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
