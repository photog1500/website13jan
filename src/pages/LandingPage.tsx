import { Button } from '../components/ui/button'
import { useAuth } from '../hooks/useAuth'
import { motion } from 'framer-motion'
import { Layout, Star, Shield, Zap } from 'lucide-react'

export function LandingPage() {
  const { login } = useAuth()

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative flex w-full flex-col items-center justify-center px-4 py-24 text-center lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container flex max-w-4xl flex-col items-center gap-6"
        >
          <div className="inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium">
            <Star className="mr-2 h-4 w-4 fill-primary text-primary" />
            New: Modern Showcase Dashboard
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Display your work with <span className="text-primary">elegance</span>.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            The professional way to manage and showcase your digital portfolio. 
            Beautiful, organized, and lightning fast.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={login} className="h-12 px-8 text-base">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              View Examples
            </Button>
          </div>
        </motion.div>

        {/* Floating background elements */}
        <div className="absolute top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </section>

      {/* Features Grid */}
      <section className="container w-full px-4 py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            icon={<Layout className="h-6 w-6" />}
            title="Clean Dashboard"
            description="Manage all your projects from a single, intuitive interface designed for productivity."
          />
          <FeatureCard 
            icon={<Zap className="h-6 w-6" />}
            title="Blazing Fast"
            description="Built with the latest tech stack to ensure your showcase loads instantly for every visitor."
          />
          <FeatureCard 
            icon={<Shield className="h-6 w-6" />}
            title="Secure Storage"
            description="Your project data is securely stored and protected with enterprise-grade authentication."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-12">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Showcase Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border p-8 transition-colors hover:bg-muted/50">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
