import React, { useState } from 'react';
import { Search, MapPin, Building, DollarSign, Filter } from 'lucide-react';

export const SearchFilters: React.FC = () => {
  const [filters, setFilters] = useState({
    location: '',
    minArea: '',
    maxArea: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="h-5 w-5 text-blue-700" />
        <h3 className="text-lg font-semibold text-gray-900">Filtrar Galpões</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Localização</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cidade, estado..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            />
          </div>
        </div>

        {/* Area Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Área (m²)</label>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="number"
                placeholder="Mín"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={filters.minArea}
                onChange={(e) => handleFilterChange('minArea', e.target.value)}
              />
            </div>
            <div className="relative flex-1">
              <input
                type="number"
                placeholder="Máx"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={filters.maxArea}
                onChange={(e) => handleFilterChange('maxArea', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Preço (R$/mês)</label>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="number"
                placeholder="Mín"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              />
            </div>
            <div className="relative flex-1">
              <input
                type="number"
                placeholder="Máx"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Tipo de Galpão</label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">Todos os tipos</option>
            <option value="industrial">Industrial</option>
            <option value="logistico">Logístico</option>
            <option value="armazenamento">Armazenamento</option>
            <option value="distribuicao">Distribuição</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
            <Search className="h-4 w-4" />
            <span>Buscar</span>
          </button>
        </div>
      </div>
    </div>
  );
};