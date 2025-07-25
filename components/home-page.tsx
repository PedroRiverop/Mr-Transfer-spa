"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CreditCard, Ship, DollarSign, ShoppingCart, MapPin } from "lucide-react"
import AnimatedText from "./animated-text"
import AnimatedCounter from "./animated-counter"
import Footer from "./footer"

interface HomePageProps {
  onNavigateToServices: () => void
}

export default function HomePage({ onNavigateToServices }: HomePageProps) {
  const services = [
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Pagos en dólares, euros y soles",
      description: "A proveedores en el exterior",
      details:
        "Realizamos transferencias internacionales para que tus proveedores reciban sus pagos sin demoras. Tiempo de transferencia entre 4 a 48 horas con documentación probatoria completa.",
    },
    {
      icon: <Ship className="h-8 w-8 text-blue-600" />,
      title: "Pagos a compañías marítimas",
      description: "O forwarders en el exterior",
      details:
        "Pagos rápidos y seguros a navieras y agentes de carga, evitando retrasos en la liberación de tu carga y manteniendo tu logística bajo control.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Entrega de dólares en Bolivia",
      description: "Por remesas y exportaciones",
      details:
        "Recibe dinero en dólares de cualquier parte del mundo. Entrega entre 2 a 24 horas una vez confirmada la transferencia a nuestra cuenta.",
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: "Pagos con tarjetas",
      description: "Para compras por internet",
      details:
        "Te ayudamos a comprar en Alibaba, Amazon, eBay, TikTok y otras plataformas. También pagamos pasajes, hoteles y suscripciones digitales.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero1mr.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4 z-10">
          <AnimatedText direction="down" className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Soluciones en transferencias al exterior
          </AnimatedText>
          <AnimatedText direction="up" delay={300} className="text-xl md:text-2xl mb-8 leading-relaxed">
            Realizamos transferencias en dólares, euros, y soles para pagos a proveedores en el exterior, entrega en
            DÓLARES, en Bolivia, a exportadores por cobro de ventas internacionales y remesas a cualquier parte del
            mundo.
          </AnimatedText>
          <AnimatedText direction="fade" delay={600} className="text-lg md:text-xl mb-8 text-yellow-300 pulse-slow">
            Sin límite de monto, bajo normativa aduanera, con respaldo legal, fácil, seguro y rápido.
          </AnimatedText>
          <AnimatedText direction="up" delay={900}>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg btn-dynamic">
              Comenzar Ahora
            </Button>
          </AnimatedText>
        </div>

        {/* Floating elements */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full floating"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-orange-500/20 rounded-full floating"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-20 w-12 h-12 bg-yellow-500/20 rounded-full floating"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText direction="up" className="mb-4">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                Nuestros Servicios
              </h2>
            </AnimatedText>
            <AnimatedText direction="up" delay={200} className="text-xl text-gray-600">
              Soluciones completas para tus transferencias internacionales
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <AnimatedText key={index} direction="up" delay={index * 100}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer card-dynamic h-full">
                      <CardHeader className="text-center">
                        <div
                          className="flex justify-center mb-4 floating"
                          style={{ animationDelay: `${index * 0.5}s` }}
                        >
                          {service.icon}
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full bg-transparent btn-dynamic">
                          Ver Detalles
                        </Button>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-white">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2 text-blue-600">
                        {service.icon}
                        {service.title}
                      </DialogTitle>
                      <DialogDescription className="text-base leading-relaxed pt-4 text-gray-700">
                        {service.details}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </AnimatedText>
            ))}
          </div>

          <AnimatedText direction="up" delay={500} className="text-center">
            <Button
              onClick={onNavigateToServices}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 btn-dynamic"
            >
              Ver Más Servicios
            </Button>
          </AnimatedText>
        </div>
      </section>

      {/* Visual Presence Section - Solo imagen de fondo */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/about-section.webp')`,
          }}
        ></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedText direction="left" className="text-center">
              <div className="mb-4">
                <AnimatedCounter end={20000} className="text-6xl font-bold" suffix="+" />
              </div>
              <p className="text-2xl">Transacciones Exitosas</p>
            </AnimatedText>
            <AnimatedText direction="right" delay={300} className="text-center">
              <div className="text-2xl font-bold mb-4 gradient-text">AN/PE/MI/2024/0160</div>
              <p className="text-lg">Operamos bajo normativa legal boliviana</p>
              <p className="text-sm mt-2 opacity-90">Respaldo legal completo para todas nuestras operaciones</p>
            </AnimatedText>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full floating"></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full floating"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Video Section - Video a pantalla completa sin márgenes */}
      <section className="relative h-screen bg-gray-900">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/placeholder.svg?height=720&width=1280"
          >
            <source src="https://mstransfer.com.bo/wp-content/uploads/2025/03/IMG_7436.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </section>

      {/* Video and Locations Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedText direction="left">
              <div>
                <h3 className="text-3xl font-bold mb-6">Nuestras Ubicaciones</h3>
                <div className="space-y-4">
                  <AnimatedText direction="right" delay={100}>
                    <div className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition-colors"
                      >
                        Sucursal Santa Cruz - Av. San Martín #123
                      </a>
                    </div>
                  </AnimatedText>
                  <AnimatedText direction="right" delay={200}>
                    <div className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition-colors"
                      >
                        Sucursal La Paz - Av. 16 de Julio #456
                      </a>
                    </div>
                  </AnimatedText>
                  <AnimatedText direction="right" delay={300}>
                    <div className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition-colors"
                      >
                        Sucursal Cochabamba - Av. Heroínas #789
                      </a>
                    </div>
                  </AnimatedText>
                </div>
              </div>
            </AnimatedText>
            <AnimatedText direction="right" className="relative img-dynamic">
              <video
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                autoPlay
                muted
                loop
                playsInline
                poster="/placeholder.svg?height=300&width=500"
              >
                <source src="https://mstransfer.com.bo/wp-content/uploads/2025/03/IMG_7436.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </AnimatedText>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
