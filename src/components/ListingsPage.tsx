import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SearchFilters } from './SearchFilters';
import { WarehouseCard } from './WarehouseCard';
import { Grid, List, Filter, SortAsc } from 'lucide-react';

const warehouses = [
  {
    id: 1,
    title: "Galpão Industrial Premium - Zona Sul",
    location: "São Bernardo do Campo, SP",
    area: 2500,
    price: 12500,
    images: [
      "https://images.pexels.com/photos/7502623/pexels-photo-7502623.jpeg",
      "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg"
    ],
    features: ["Doca", "Energia", "Escritório", "Estacionamento"],
    type: "Industrial",
    available: true
  },
  {
    id: 2,
    title: "Centro Logístico Estratégico",
    location: "Guarulhos, SP",
    area: 5000,
    price: 25000,
    images: [
      "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg",
      "https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg"
    ],
    features: ["Multiple Docas", "Pátio", "Segurança", "Portaria 24h"],
    type: "Logístico",
    available: true
  },
  {
    id: 3,
    title: "Galpão para E-commerce",
    location: "Osasco, SP",
    area: 1800,
    price: 8500,
    images: [
      "https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg",
      "https://images.pexels.com/photos/7502623/pexels-photo-7502623.jpeg"
    ],
    features: ["Internet Fibra", "Estacionamento", "Climatizado"],
    type: "Armazenamento",
    available: true
  },
  {
    id: 4,
    title: "Complexo Industrial ABC",
    location: "Santo André, SP",
    area: 8000,
    price: 35000,
    images: [
      "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg"
    ],
    features: ["Ponte Rolante", "Energia Trifásica", "Vestiário"],
    type: "Industrial",
    available: true
  },
  {
    id: 5,
    title: "Hub de Distribuição Premium",
    location: "Cajamar, SP",
    area: 12000,
    price: 45000,
    images: [
      "https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg"
    ],
    features: ["Sistema WMS", "Cross Docking", "Monitoramento"],
    type: "Distribuição",
    available: false
  },
  {
    id: 6,
    title: "Galpão Logístico Moderno",
    location: "Cotia, SP",
    area: 3500,
    price: 18000,
    images: [
      "https://images.pexels.com/photos/7502623/pexels-photo-7502623.jpeg"
    ],
    features: ["Doca Niveladora", "Piso Industrial", "CFTV"],
    type: "Logístico",
    available: true
  }
];

export const ListingsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(true);

  const handleViewDetails = (id: number) => {
    // In a real app, this would navigate to the details page
    console.log(`Viewing details for warehouse ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="listings" />
      
      {/* Search Results Header */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Galpões para Alugar
              </h1>
              <p className="text-gray-600">
                {warehouses.length} galpões encontrados na Grande São Paulo
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="relevance">Mais Relevantes</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
                <option value="area-large">Maior Área</option>
                <option value="area-small">Menor Área</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${
                    viewMode === 'grid'
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  } rounded-l-lg transition-colors`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${
                    viewMode === 'list'
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  } rounded-r-lg transition-colors`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* Toggle Filters */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span className="hidden md:inline">Filtros</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <div className="sticky top-24">
                <SearchFilters />
              </div>
            </div>
          )}

          {/* Results */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className={`grid gap-6 ${
                showFilters ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {warehouses.map((warehouse) => (
                  <WarehouseCard
                    key={warehouse.id}
                    warehouse={warehouse}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {warehouses.map((warehouse) => (
                  <div key={warehouse.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    <div className="flex">
                      <div className="w-64 h-48 flex-shrink-0">
                        <img
                          src={warehouse.images[0]}
                          alt={warehouse.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">
                            {warehouse.type}
                          </span>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            warehouse.available 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {warehouse.available ? 'Disponível' : 'Ocupado'}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {warehouse.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-3">{warehouse.location}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm text-gray-600">
                            {warehouse.area.toLocaleString()} m²
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">
                              R$ {warehouse.price.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-500">por mês</div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {warehouse.features.map((feature, index) => (
                            <span key={index} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <button
                          onClick={() => handleViewDetails(warehouse.id)}
                          className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg font-medium transition-colors"
                        >
                          Ver Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex space-x-1">
                <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                  Anterior
                </button>
                <button className="px-3 py-2 text-sm bg-blue-700 text-white rounded">
                  1
                </button>
                <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                  2
                </button>
                <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                  3
                </button>
                <button className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                  Próxima
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};