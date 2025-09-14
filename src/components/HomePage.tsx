import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SearchFilters } from './SearchFilters';
import { WarehouseCard } from './WarehouseCard';
import { Building2, TrendingUp, Shield, Clock, Star, ChevronRight } from 'lucide-react';

const featuredWarehouses = [
  {
    id: 1,
    title: "Galpão Industrial Premium - Zona Sul",
    location: "São Bernardo do Campo, SP",
    area: 2500,
    price: 12500,
    images: ["https://images.pexels.com/photos/7502623/pexels-photo-7502623.jpeg"],
    features: ["Doca", "Energia", "Escritório"],
    type: "Industrial",
    available: true
  },
  {
    id: 2,
    title: "Centro Logístico Estratégico",
    location: "Guarulhos, SP",
    area: 5000,
    price: 25000,
    images: ["https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg"],
    features: ["Multiple Docas", "Pátio", "Segurança"],
    type: "Logístico",
    available: true
  },
  {
    id: 3,
    title: "Galpão para E-commerce",
    location: "Osasco, SP",
    area: 1800,
    price: 8500,
    images: ["https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg"],
    features: ["Internet Fibra", "Estacionamento", "Climatizado"],
    type: "Armazenamento",
    available: true
  }
];

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="home" />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Encontre o Galpão <br />
            <span className="text-blue-300">Perfeito</span> para seu Negócio
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            A maior plataforma de aluguel de galpões industriais do Brasil. 
            Mais de 10.000 opções verificadas.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">10.000+</div>
              <div className="text-blue-100">Galpões Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">500+</div>
              <div className="text-blue-100">Cidades Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">98%</div>
              <div className="text-blue-100">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchFilters />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher o GalpãoMax?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos a melhor experiência em locação de galpões industriais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Melhor Preço</h3>
              <p className="text-gray-600 text-sm">Garantimos os melhores preços do mercado com transparência total.</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Segurança</h3>
              <p className="text-gray-600 text-sm">Todos os galpões são verificados e com documentação completa.</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Agilidade</h3>
              <p className="text-gray-600 text-sm">Processo simplificado para alugar em até 48 horas.</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Qualidade</h3>
              <p className="text-gray-600 text-sm">Padrão premium com infraestrutura completa e moderna.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Warehouses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Galpões em Destaque
              </h2>
              <p className="text-gray-600">
                Seleção especial dos melhores galpões disponíveis
              </p>
            </div>
            <button className="flex items-center space-x-1 text-blue-700 hover:text-blue-800 font-medium">
              <span>Ver todos</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWarehouses.map((warehouse) => (
              <WarehouseCard key={warehouse.id} warehouse={warehouse} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="h-16 w-16 mx-auto mb-6 text-blue-300" />
          <h2 className="text-3xl font-bold mb-4">
            Tem um galpão para alugar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Anuncie gratuitamente e alcance milhares de interessados
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
            Anunciar Gratuitamente
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};