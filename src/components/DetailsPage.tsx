import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
  MapPin, 
  Building, 
  Calendar, 
  Phone, 
  Mail, 
  Share2,
  Heart,
  Camera,
  ChevronLeft,
  ChevronRight,
  Truck,
  Zap,
  Shield,
  Wifi,
  Car,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const warehouseDetails = {
  id: 1,
  title: "Galpão Industrial Premium - Zona Sul",
  location: "São Bernardo do Campo, SP",
  fullAddress: "Rua Industrial das Máquinas, 1234 - Distrito Industrial",
  area: 2500,
  price: 12500,
  description: "Galpão industrial de alto padrão localizado no coração do ABC Paulista. Ideal para indústrias de médio porte, oferece infraestrutura completa e localização estratégica com fácil acesso às principais rodovias. O imóvel conta com escritório administrativo, vestiários e amplo pátio para manobras.",
  images: [
    "https://images.pexels.com/photos/7502623/pexels-photo-7502623.jpeg",
    "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg",
    "https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg",
    "https://images.pexels.com/photos/7502623/pexels-photo-7502623.jpeg"
  ],
  type: "Industrial",
  available: true,
  availableDate: "Imediato",
  owner: {
    name: "João Silva Imóveis",
    phone: "(11) 99999-9999",
    email: "contato@joaosilva.com.br",
    verified: true
  },
  features: {
    infrastructure: [
      { name: "Doca com Nivelador", icon: Truck, available: true },
      { name: "Energia Trifásica 220V", icon: Zap, available: true },
      { name: "Internet Fibra Óptica", icon: Wifi, available: true },
      { name: "Sistema de Segurança", icon: Shield, available: true },
      { name: "Estacionamento 20 Vagas", icon: Car, available: true },
      { name: "Portaria 24h", icon: Clock, available: false }
    ],
    specifications: {
      "Área Total": "2.500 m²",
      "Pé Direito": "8 metros",
      "Piso": "Industrial reforçado",
      "Cobertura": "Metálica com telhas térmicas",
      "Escritório": "150 m²",
      "Banheiros": "4 unidades",
      "Vestiário": "Com chuveiros"
    }
  },
  location_details: {
    neighborhood: "Distrito Industrial",
    nearby: [
      "Via Anchieta - 2km",
      "Rodoanel - 5km", 
      "Centro de São Bernardo - 8km",
      "Aeroporto de Congonhas - 25km"
    ]
  }
};

export const DetailsPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % warehouseDetails.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + warehouseDetails.images.length) % warehouseDetails.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex space-x-2 text-sm">
            <li><a href="#" className="text-blue-700 hover:underline">Início</a></li>
            <li className="text-gray-400">/</li>
            <li><a href="#" className="text-blue-700 hover:underline">Galpões</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">Detalhes</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-96">
                <img
                  src={warehouseDetails.images[currentImage]}
                  alt={warehouseDetails.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                  <Camera className="h-4 w-4" />
                  <span>{currentImage + 1} / {warehouseDetails.images.length}</span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Status Badge */}
                <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                  warehouseDetails.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {warehouseDetails.available ? 'Disponível' : 'Ocupado'}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-4 flex space-x-2 overflow-x-auto">
                {warehouseDetails.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImage ? 'border-blue-700' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">
                    {warehouseDetails.type}
                  </span>
                  <h1 className="text-2xl font-bold text-gray-900 mt-2">
                    {warehouseDetails.title}
                  </h1>
                  <div className="flex items-center space-x-1 text-gray-600 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{warehouseDetails.fullAddress}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">
                    R$ {warehouseDetails.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">por mês</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Building className="h-6 w-6 mx-auto mb-1 text-blue-700" />
                  <div className="font-semibold">{warehouseDetails.area.toLocaleString()} m²</div>
                  <div className="text-sm text-gray-600">Área Total</div>
                </div>
                <div className="text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-1 text-green-700" />
                  <div className="font-semibold">{warehouseDetails.availableDate}</div>
                  <div className="text-sm text-gray-600">Disponível</div>
                </div>
                <div className="text-center">
                  <MapPin className="h-6 w-6 mx-auto mb-1 text-purple-700" />
                  <div className="font-semibold">{warehouseDetails.location_details.neighborhood}</div>
                  <div className="text-sm text-gray-600">Localização</div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Descrição</h3>
                <p className="text-gray-600 leading-relaxed">
                  {warehouseDetails.description}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Infraestrutura</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {warehouseDetails.features.infrastructure.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {feature.available ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-gray-400" />
                    )}
                    <feature.icon className="h-4 w-4 text-gray-600" />
                    <span className={feature.available ? 'text-gray-900' : 'text-gray-400 line-through'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <h4 className="font-medium text-gray-900 mb-3">Especificações Técnicas</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(warehouseDetails.features.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Localização</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Proximidades</h4>
                  <ul className="space-y-1">
                    {warehouseDetails.location_details.nearby.map((item, index) => (
                      <li key={index} className="text-gray-600 text-sm">• {item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p>Mapa interativo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="font-semibold text-gray-900">{warehouseDetails.owner.name}</h3>
                {warehouseDetails.owner.verified && (
                  <div className="flex items-center justify-center space-x-1 text-green-600 text-sm mt-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>Verificado</span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Ver Telefone</span>
                </button>

                {showContact && (
                  <div className="space-y-2 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-600" />
                      <span>{warehouseDetails.owner.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-600" />
                      <span>{warehouseDetails.owner.email}</span>
                    </div>
                  </div>
                )}

                <button className="w-full border border-blue-700 text-blue-700 hover:bg-blue-50 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Enviar E-mail</span>
                </button>

                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-4 rounded-lg font-medium transition-colors">
                  Agendar Visita
                </button>
              </div>

              <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-center">
                  <div className="text-sm text-green-800 font-medium">
                    Resposta em até 2 horas
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    Taxa de resposta: 98%
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Informações Rápidas</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Código:</span>
                  <span className="font-medium">GAL-{warehouseDetails.id.toString().padStart(4, '0')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tipo:</span>
                  <span className="font-medium">{warehouseDetails.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Área:</span>
                  <span className="font-medium">{warehouseDetails.area.toLocaleString()} m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Preço/m²:</span>
                  <span className="font-medium">R$ {(warehouseDetails.price / warehouseDetails.area).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Disponível:</span>
                  <span className="font-medium text-green-600">{warehouseDetails.availableDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};