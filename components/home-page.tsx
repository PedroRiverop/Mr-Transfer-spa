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
import { MapPin, MessageCircle } from "lucide-react"
import AnimatedText from "./animated-text"
import AnimatedCounter from "./animated-counter"
import Footer from "./footer"
import Image from "next/image"

interface HomePageProps {
  onNavigateToServices: () => void
}

export default function HomePage({ onNavigateToServices }: HomePageProps) {
  const services = [
    {
      icon: <Image src="/images/monedas.png" alt="Pagos en dólares" width={48} height={48} />,
      title: "Pagos en dólares, euros y soles",
      description: "A proveedores en el exterior",
      details:
        "Realizamos transferencias internacionales para que tus proveedores reciban sus pagos sin demoras. Tiempo de transferencia entre 4 a 48 horas con documentación probatoria completa.",
    },
    {
      icon: <Image src="/images/barco.png" alt="Pagos a compañías marítimas" width={48} height={48} />,
      title: "Pagos a compañías marítimas",
      description: "O forwarders en el exterior",
      details:
        "Pagos rápidos y seguros a navieras y agentes de carga, evitando retrasos en la liberación de tu carga y manteniendo tu logística bajo control.",
    },
    {
      icon: <Image src="/images/billete.png" alt="Entrega de dólares en Bolivia" width={48} height={48} />,
      title: "Entrega de dólares en Bolivia",
      description: "Por remesas y exportaciones",
      details:
        "Recibe dinero en dólares de cualquier parte del mundo. Entrega entre 2 a 24 horas una vez confirmada la transferencia a nuestra cuenta.",
    },
    {
      icon: <Image src="/images/tarjetas.png" alt="Pagos con tarjetas" width={48} height={48} />,
      title: "Pagos con tarjetas",
      description: "Para compras por internet",
      details:
        "Te ayudamos a comprar en Alibaba, Amazon, eBay, TikTok y otras plataformas. También pagamos pasajes, hoteles y suscripciones digitales.",
    },
  ]

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola, me interesa conocer más sobre los servicios de MR Transfer")
    window.open(`https://wa.me/59171453040?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero2mr.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4 z-10">
          <AnimatedText direction="down" className="text-4xl md:text-5xl font-bold mb-6 text-white">
            TRANSFERENCIAS INTERNACIONALES
          </AnimatedText>
          <AnimatedText direction="up" delay={150} className="text-2xl md:text-3xl font-semibold mb-8 text-blue-200">
            RÁPIDAS Y SEGURAS
          </AnimatedText>
          <AnimatedText direction="up" delay={300} className="text-xl md:text-2xl mb-8 leading-relaxed">
            Realizamos transferencias en dólares, euros y soles para pagos a proveedores en el exterior, entrega en
            DÓLARES en Bolivia a exportadores por cobro de ventas internacionales y remesas a cualquier parte del mundo.
          </AnimatedText>
          <AnimatedText direction="fade" delay={600} className="text-lg md:text-xl mb-8 text-yellow-300 pulse-slow">
            Sin límite de monto, bajo normativa aduanera, con respaldo legal, fácil, seguro y rápido.
          </AnimatedText>
          <AnimatedText direction="up" delay={900}>
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 text-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chatear Ahora
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
              <h2 className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent animate-pulse" style={{color: "#043484"}}>
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
                        <Button variant="outline" className="w-full bg-transparent btn-dynamic" >
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
              className="text-white px-8 py-4 btn-dynamic" style={{backgroundColor: "#043484"}}
            >
              Ver Más Servicios
            </Button>
          </AnimatedText>
        </div>
      </section>

      {/* Visual Presence Section - Solo imagen de fondo */}
      <section className="relative min-h-screen sm:h-[60vh]">
  <div
    className="absolute inset-0 bg-contain bg-no-repeat bg-center"
    style={{
      backgroundImage: `url('/images/sobreMr.png')`,
    }}
  ></div>
</section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r" style={{
    background: "linear-gradient(to right, #043484, #081E52)",
  }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedText direction="left" className="text-center">
              <div className="mb-4">
                <AnimatedCounter end={20000} className="text-6xl font-bold" suffix="+" />
              </div>
              <p className="text-2xl">Transacciones Exitosas</p>
            </AnimatedText>
            <AnimatedText direction="right" delay={300} className="text-center">
              <div className="text-2xl font-bold mb-4 ">AN/PE/MI/2024/0160</div>
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
            <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_Mea2GNFsOUqe47wFg83tUh389ZeW/nmFvxS5_EfGqEgjARJWAzS/public/images/heroMrTransfer.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div className="absolute top-1/2 right-0 -translate-x-2/9 -translate-y-1/2  bg-opacity-50 text-white p-4 rounded-lg">
            <div className="flex justify-center items-center gap-x-8 p-4 text-white text-4xl font-bold whitespace-nowrap">
 
            <a
              href="https://maps.app.goo.gl/aLx28UGC4W6aoSEg8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-200"
            >
              Cochabamba
            </a>
            <a
              href="https://maps.app.goo.gl/S4Qh6VHRkQfSHTQQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-200"
            >
              Santa Cruz
            </a>
          </div>

          </div>
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
                        href="https://maps.app.goo.gl/aLx28UGC4W6aoSEg8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition-colors"
                      >
                        Sucursal Santa Cruz - Av. Rosita Pochi #4430
                      </a>
                    </div>
                  </AnimatedText>
                  
                  <AnimatedText direction="right" delay={300}>
                    <div className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <a
                        href="https://maps.app.goo.gl/S4Qh6VHRkQfSHTQQ8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-orange-500 transition-colors"
                      >
                        Sucursal Cochabamba -  C. Los claveles S/N casi esquina Victor Ustariz
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
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_Mea2GNFsOUqe47wFg83tUh389ZeW/nmFvxS5_EfGqEgjARJWAzS/public/images/heroMrTransfer.mp4" type="video/mp4" />
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
