"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Heart, Users, Award, CheckCircle, Globe, TrendingUp, Handshake } from "lucide-react"
import AnimatedText from "./animated-text"
import AnimatedCounter from "./animated-counter"
import Footer from "./footer"

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Transparencia",
      description: "Operamos con total claridad en cada proceso",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Responsabilidad",
      description: "Comprometidos con cada transferencia",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Compromiso",
      description: "Dedicados al éxito de nuestros clientes",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Confianza",
      description: "Más que transferencias, generamos confianza",
    },
  ]

  const offerings = [
    "Servicio seguro y legal de envío de dinero al exterior",
    "Pagos a proveedores internacionales",
    "Cobro de ventas internacionales y exportaciones",
    "Compras en plataformas como Alibaba",
    "Suscripciones digitales y servicios online",
    "Atención personalizada",
    "Tiempos ágiles (de 4 a 48 horas)",
    "Sin límite de monto",
  ]

  const reasons = [
    "Operamos de forma legal bajo normativa aduanera",
    "Experiencia real en transferencias internacionales",
    "Equipo capacitado para asesorarte",
    "Empresa boliviana formalmente establecida",
    "Más de 20,000 transferencias exitosas",
    "Historial limpio y transparente",
    "Alianzas estratégicas con partners especializados",
  ]

  const partners = [
    "Agencias Despachantes de Aduana",
    "Forwarders especializados",
    "Corredores de Seguros",
    "Agentes de Compra en China",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedText direction="down" className="text-5xl font-bold mb-6 gradient-text">
            Sobre Nosotros
          </AnimatedText>
          <AnimatedText direction="up" delay={300} className="text-xl max-w-4xl mx-auto leading-relaxed">
            En un contexto donde realizar pagos internacionales desde Bolivia puede ser complicado, en MR Transfer
            ofrecemos una solución segura, rápida y confiable.
          </AnimatedText>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full floating"></div>
        <div
          className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full floating"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Company Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedText direction="left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Empresa Boliviana Comprometida</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Somos una empresa boliviana comprometida con facilitar tus transferencias al exterior, ya sea para tus
                  importaciones, exportaciones, compras, negocios o suscripciones, brindando siempre un servicio cercano
                  y transparente.
                </p>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="text-sm pulse-slow">
                    100% Boliviana
                  </Badge>
                  <Badge variant="secondary" className="text-sm pulse-slow">
                    Legalmente Establecida
                  </Badge>
                </div>
              </div>
            </AnimatedText>
            <AnimatedText direction="right" className="img-dynamic">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Oficina MR Transfer"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText direction="up" className="text-4xl font-bold text-gray-900 mb-4">
              Nuestra Filosofía
            </AnimatedText>
            <AnimatedText direction="up" delay={200} className="text-xl text-gray-600 max-w-3xl mx-auto">
              En MR Transfer creemos en hacer las cosas bien, con transparencia, responsabilidad y compromiso.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedText key={index} direction="up" delay={index * 100}>
                <Card className="text-center border-0 shadow-lg card-dynamic h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4 floating" style={{ animationDelay: `${index * 0.5}s` }}>
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedText direction="left" className="img-dynamic">
              <img
                src="/images/oficinaMr.png"
                alt="Historia MR Transfer"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </AnimatedText>
            <AnimatedText direction="right">
              <div>
                <h2 className="text-4xl font-bold mb-6 gradient-text">Nuestra Historia</h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    <span className="text-orange-500 font-bold pulse-slow">MR Transfer nace el año 2024</span> como
                    respuesta a una necesidad concreta: la dificultad para realizar pagos internacionales desde Bolivia.
                  </p>
                  <p>
                    Vimos cómo muchas personas perdían tiempo, dinero o eran estafadas por intermediarios informales o
                    empresas ficticias en redes sociales.
                  </p>
                  <p>
                    Así decidimos construir una empresa{" "}
                    <span className="text-yellow-300 font-bold gradient-text">100% legal, transparente</span> y enfocada
                    en facilitar y seguir promoviendo el comercio global para bolivianos, cuidando cada paso del
                    proceso.
                  </p>
                </div>
              </div>
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

      {/* What We Offer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText direction="up" className="text-4xl font-bold text-gray-900 mb-4">
              ¿Qué Ofrecemos?
            </AnimatedText>
            <AnimatedText direction="up" delay={200} className="text-xl text-gray-600">
              Ante todo, ofrecemos tranquilidad y garantía para nuestros clientes.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <AnimatedText key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 50}>
                <div className="flex items-start gap-3 hover:bg-blue-50 p-3 rounded-lg transition-colors">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0 pulse-slow" />
                  <span className="text-lg text-gray-700">{offering}</span>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText direction="up" className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Confiar en Nosotros?
            </AnimatedText>
            <AnimatedText direction="up" delay={200} className="text-xl text-gray-600">
              Aquí tu dinero no solo se transfiere, se cuida.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <AnimatedText key={index} direction="left" delay={index * 100}>
                  <div className="flex items-start gap-3 hover:bg-white p-3 rounded-lg transition-colors">
                    <Shield
                      className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0 floating"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                    <span className="text-lg text-gray-700">{reason}</span>
                  </div>
                </AnimatedText>
              ))}
            </div>
            <AnimatedText direction="right" delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-lg card-dynamic">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-green-600 floating" />
                  Nuestros Números
                </h3>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">
                      <AnimatedCounter end={20000} suffix="+" />
                    </div>
                    <div className="text-gray-700">Transferencias Exitosas</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">
                      <AnimatedCounter end={100} suffix="%" />
                    </div>
                    <div className="text-gray-700">Historial Limpio</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 neon-text">2024</div>
                    <div className="text-gray-700">Año de Fundación</div>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText direction="up" className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Partners
            </AnimatedText>
            <AnimatedText direction="up" delay={200} className="text-xl text-gray-600">
              Te brindamos asesoramiento integral con nuestros aliados estratégicos
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <AnimatedText key={index} direction="up" delay={index * 100}>
                <Card className="text-center border-0 shadow-lg card-dynamic h-full">
                  <CardHeader>
                    <div className="flex justify-center mb-4 floating" style={{ animationDelay: `${index * 0.3}s` }}>
                      <Handshake className="h-12 w-12 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{partner}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Alianza estratégica para tu éxito</p>
                  </CardContent>
                </Card>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedText direction="up" className="floating">
            <Globe className="h-16 w-16 mx-auto mb-6" />
          </AnimatedText>
          <AnimatedText direction="up" delay={200} className="text-4xl font-bold mb-6 gradient-text">
            Facilitamos el Comercio Global
          </AnimatedText>
          <AnimatedText direction="up" delay={400} className="text-xl mb-8">
            Nos encargamos de todo el proceso para que tú solo te ocupes de crecer.
          </AnimatedText>
          <AnimatedText direction="up" delay={600}>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2 btn-dynamic">
                Sin Límite de Monto
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2 btn-dynamic">
                4-48 Horas
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2 btn-dynamic">
                100% Legal
              </Badge>
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
