import React from 'react';
import { MapPin, Building, Truck, Zap, Heart, Camera } from 'lucide-react';

interface WarehouseCardProps {
  warehouse: {
    id: number;
    title: string;
    location: string;
    area: number;
    price: number;
    images: string[];
    features: string[];
    type: string;
    available: boolean;
  };
  onViewDetails?: (id: number) => void;
}

export const WarehouseCard: React.FC<WarehouseCardProps> = ({ warehouse, onViewDetails }) => {
  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'Doca':
        return <Truck className="h-4 w-4" />;
      case 'Energia':
        return <Zap className="h-4 w-4" />;
      default:
        return <Building className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={warehouse.images[0]}
          alt={warehouse.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Image Count Badge */}
        <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
          <Camera className="h-3 w-3" />
          <span>{warehouse.images.length}</span>
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full transition-colors">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>

        {/* Status Badge */}
        <div className={`absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
          warehouse.available 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {warehouse.available ? 'Disponível' : 'Ocupado'}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">
            {warehouse.type}
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {warehouse.title}
        </h3>

        <div className="flex items-center space-x-1 text-sm text-gray-600 mb-3">
          <MapPin className="h-4 w-4" />
          <span className="truncate">{warehouse.location}</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <Building className="h-4 w-4" />
            <span>{warehouse.area.toLocaleString()} m²</span>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-bold text-green-600">
              R$ {warehouse.price.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">por mês</div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {warehouse.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center space-x-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
              {getFeatureIcon(feature)}
              <span>{feature}</span>
            </div>
          ))}
          {warehouse.features.length > 3 && (
            <span className="text-xs text-gray-500">
              +{warehouse.features.length - 3} mais
            </span>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewDetails?.(warehouse.id)}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg font-medium transition-colors"
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
};