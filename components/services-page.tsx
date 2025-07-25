"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Ship, CreditCard, ShoppingCart, Clock, Shield, FileText, Globe } from "lucide-react"
import AnimatedText from "./animated-text"
import Footer from "./footer"

export default function ServicesPage() {
  const services = [
    {
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      title: "PAGOS EN DÓLARES, EUROS Y SOLES A PROVEEDORES EN EL EXTERIOR",
      description: "Transferencias internacionales seguras para tus proveedores",
      details: [
        "Tiempo de transferencia entre 4 a 48 horas",
        "Trabajo con Poder Notariado",
        "SWIFT bancario como sustento",
        "Documentación probatoria completa",
        "Aplicación Minuta de Instrucción AN/PE/MI/2024/0160",
      ],
      image: "/images/servicioDigital.png",
    },
    {
      icon: <Globe className="h-12 w-12 text-green-600" />,
      title: "ENTREGA DE DÓLARES, EUROS Y SOLES EN BOLIVIA",
      description: "Para exportadores por cobro de ventas internacionales",
      details: [
        "Cobro en nuestra cuenta en el exterior",
        "Entrega de DÓLARES en Bolivia",
        "Tiempo de entrega: 2 a 24 horas",
        "Ideal para exportadores con dificultades bancarias",
        "Proceso seguro y documentado",
      ],
      image: "/images/entregaDolares.png",
    },
    {
      icon: <Ship className="h-12 w-12 text-orange-600" />,
      title: "PAGOS A COMPAÑIAS MARITIMAS Y FORWARDERS",
      description: "Pagos rápidos para evitar retrasos en tu carga",
      details: [
        "Pagos a navieras en el exterior",
        "Pagos a agentes de carga",
        "Evita retrasos en liberación de carga",
        "Mantén tu logística bajo control",
        "Cumplimiento de todos los requisitos",
      ],
      image: "/images/pagosMaritimos.png",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-purple-600" />,
      title: "ENTREGA DE DÓLARES EN BOLIVIA POR REMESAS",
      description: "De cualquier parte del mundo",
      details: [
        "Recibe dinero de familiares o socios",
        "Desde cualquier parte del mundo",
        "Entrega en DÓLARES en Bolivia",
        "Rapidez y respaldo legal",
        "Proceso transparente y seguro",
      ],
      image: "/images/entregaRemesas.jpg",
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-red-600" />,
      title: "PAGOS CON TARJETA PARA COMPRAS POR INTERNET",
      description: "Alibaba, eBay, TikTok, Amazon y más",
      details: [
        "Compras en plataformas internacionales",
        "Alibaba, Amazon, eBay, TikTok",
        "Pagos de pasajes y hoteles",
        "Airbnb, Booking y más",
        "Comisión competitiva",
      ],
      image: "/images/pagoTarjetas.png",
    },
    {
      icon: <FileText className="h-12 w-12 text-indigo-600" />,
      title: "Pagos de Servicios y Suscripciones",
      description: "En el exterior",
      details: [
        "Suscripciones digitales",
        "Pagos a universidades",
        "Software y plataformas educativas",
        "Membresías internacionales",
        "Servicios contratados en el extranjero",
      ],
      image: "/images/pagoServicios.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Dark Background */}
      <section
        className="relative py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/oficinaMr.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedText direction="up" delay={150} className="text-2xl md:text-5xl font-semibold mb-8 text-blue-200">
            NUESTROS SERVICIOS
          </AnimatedText>
          <AnimatedText direction="up" delay={300} className="text-2xl mb-8 pulse-slow">
            Que la falta de DÓLARES... ¡No te impida, SEGUIR CRECIENDO!
          </AnimatedText>
          <AnimatedText direction="fade" delay={600} className="text-lg max-w-4xl mx-auto leading-relaxed">
            En Bolivia, pagar al exterior no siempre es fácil. Por eso nació MR Transfer: una empresa boliviana que
            facilita tus pagos internacionales de forma segura, rápida y bajo normativa legal.
          </AnimatedText>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full floating"></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-orange-500/20 rounded-full floating"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-12 h-12 bg-yellow-500/20 rounded-full floating"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimatedText key={index} direction={index % 2 === 0 ? "left" : "right"} delay={100}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <Card className="h-full border-0 shadow-lg card-dynamic">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="floating" style={{ animationDelay: `${index * 0.3}s` }}>
                            {service.icon}
                          </div>
                          <Badge variant="secondary" className="text-sm pulse-slow">
                            Servicio Premium
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-lg">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 pulse-slow"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`img-dynamic ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedText direction="up" className="flex items-center justify-center gap-4 mb-8">
            <div className="floating">
              <Shield className="h-16 w-16" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2 gradient-text">ELIGE TRANQUILIDAD</h2>
              <h3 className="text-3xl font-bold">ELIGE MR TRANSFER</h3>
            </div>
          </AnimatedText>
          <AnimatedText direction="up" delay={300} className="text-xl mb-8">
            Ya sea que necesites pagar a proveedores, comprar en plataformas como Alibaba o cubrir servicios digitales,
            estamos aquí para ayudarte a hacerlo sin límites, ni complicaciones.
          </AnimatedText>
          <AnimatedText direction="up" delay={600}>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full btn-dynamic">
                <Clock className="h-5 w-5" />
                <span>Rápido</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full btn-dynamic">
                <Shield className="h-5 w-5" />
                <span>Seguro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full btn-dynamic">
                <FileText className="h-5 w-5" />
                <span>Legal</span>
              </div>
            </div>
          </AnimatedText>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full floating"></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full floating"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      <Footer />
    </div>
  )
}
