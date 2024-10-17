'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Brush, Archive, Globe, ShoppingCart, Users, Shield, ArrowRight, Lock, Repeat, ChevronRight } from 'lucide-react'

// Placeholder for Sanity client
const client = {
  fetch: () => Promise.resolve({
    title: "LUCA.box",
    subtitle: "A New Ecosystem for the Future of Creative Ownership",
    description: "Reimagining what it means to be a creator, offering a new model that protects your rights, amplifies your work, and ensures you're paid fairly for life.",
    modules: [
      { title: "Factory", description: "Your creative playground where ideas come to life, with built-in IP protection from the first draft." },
      { title: "Archive", description: "Decentralized storage that permanently links your work to you, ensuring undisputed ownership." },
      { title: "Space", description: "Present your work on your terms, curating how your audience experiences your creations." },
      { title: "Market", description: "Smart contract-enabled marketplace with perpetual royalties for long-term value." },
      { title: "Team", description: "Transparent collaboration with fair credit and compensation, guaranteed by blockchain." },
    ],
    features: [
      { title: "True Ownership", description: "Your creations, permanently linked to you through blockchain technology." },
      { title: "Perpetual Royalties", description: "Earn from your work every time it's sold, resold, or licensed, automatically." },
      { title: "Creator Governance", description: "As a DAO, LUCA.box evolves based on the needs of its creator community." },
    ]
  })
}

export function LucaBoxAccessibleLanding() {
  const [activeModule, setActiveModule] = useState(0)
  const [content, setContent] = useState(null)

  useEffect(() => {
    client.fetch().then(setContent)
  }, [])

  if (!content) return <div className="flex items-center justify-center min-h-screen" aria-live="polite">Loading content...</div>

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded">Skip to main content</a>
      <header className="py-6 px-4 md:px-6 lg:px-8 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">{content.title}</h1>
          <nav>
            <ul className="hidden md:flex space-x-6">
              {content.modules.map((module, index) => (
                <li key={module.title}>
                  <button
                    onClick={() => setActiveModule(index)}
                    className={`text-sm font-medium hover:text-primary transition-colors ${
                      activeModule === index ? 'text-primary' : 'text-gray-600'
                    }`}
                    aria-current={activeModule === index ? 'page' : undefined}
                  >
                    {module.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <Button size="sm" variant="outline">Connect Wallet</Button>
        </div>
      </header>

      <main id="main-content" className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <section className="text-center mb-20 md:mb-32" aria-labelledby="hero-title">
          <motion.h2 
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {content.subtitle}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white">
              Start Creating <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </motion.div>
        </section>

        <section className="mb-20 md:mb-32" aria-labelledby="ecosystem-title">
          <h3 id="ecosystem-title" className="text-3xl font-bold mb-10 text-center text-gray-900">The LUCA.box Ecosystem</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              {content.modules.map((module, index) => (
                <Button
                  key={module.title}
                  variant={activeModule === index ? "default" : "ghost"}
                  className="w-full justify-start text-left"
                  onClick={() => setActiveModule(index)}
                  aria-pressed={activeModule === index}
                >
                  <span className="flex items-center">
                    {index === 0 && <Brush className="w-5 h-5 mr-3" aria-hidden="true" />}
                    {index === 1 && <Archive className="w-5 h-5 mr-3" aria-hidden="true" />}
                    {index === 2 && <Globe className="w-5 h-5 mr-3" aria-hidden="true" />}
                    {index === 3 && <ShoppingCart className="w-5 h-5 mr-3" aria-hidden="true" />}
                    {index === 4 && <Users className="w-5 h-5 mr-3" aria-hidden="true" />}
                    <span>{module.title}</span>
                  </span>
                  <ChevronRight className="ml-auto h-5 w-5" aria-hidden="true" />
                </Button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-md"
              >
                <h4 className="text-2xl font-semibold mb-4 text-gray-900">{content.modules[activeModule].title}</h4>
                <p className="text-gray-600 text-lg">{content.modules[activeModule].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="mb-20 md:mb-32" aria-labelledby="features-title">
          <h3 id="features-title" className="text-3xl font-bold mb-10 text-center text-gray-900">Why Choose LUCA.box?</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {content.features.map((feature, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    {index === 0 && <Lock className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />}
                    {index === 1 && <Repeat className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />}
                    {index === 2 && <Shield className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mb-20 md:mb-32" aria-labelledby="cta-title">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Join the Creative Revolution</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience a new era of creative freedom, fair compensation, and true ownership with LUCA.box.
          </p>
          <form className="flex flex-col items-center space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex w-full max-w-md items-center space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                aria-label="Email for early access" 
                className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">Get Early Access</Button>
            </div>
            <p className="text-sm text-gray-500">Be among the first to shape the future of creative ownership.</p>
          </form>
        </section>
      </main>

      <footer className="bg-gray-200 py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2023 LUCA.box. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}