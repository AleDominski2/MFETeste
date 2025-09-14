import React, { useState } from 'react';
import { Search, MapPin, Building, Users, Phone, Mail, Star, Filter, Heart, Eye, Calendar } from 'lucide-react';

// Types
interface Galpao {
  id: number;
  titulo: string;
  endereco: string;
  cidade: string;
  estado: string;
  area: number;
  preco: number;
  tipo: 'industrial' | 'comercial' | 'logistico';
  imagem: string;
  descricao: string;
  caracteristicas: string[];
  contato: {
    nome: string;
    telefone: string;
    email: string;
  };
  rating: number;
  visualizacoes: number;
  destaque: boolean;
}

// Mock Data
const galpoesMock: Galpao[] = [
  {
    id: 1,
    titulo: "Galpão Industrial Premium",
    endereco: "Rod. Anhanguera, Km 25",
    cidade: "Jundiaí",
    estado: "SP",
    area: 2500,
    preco: 15000,
    tipo: "industrial",
    imagem: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg",
    descricao: "Galpão industrial moderno com infraestrutura completa",
    caracteristicas: ["Pé direito 8m", "Dock nivelador", "Sistema contra incêndio", "Energia trifásica"],
    contato: { nome: "João Silva", telefone: "(11) 99999-9999", email: "joao@email.com" },
    rating: 4.8,
    visualizacoes: 234,
    destaque: true
  },
  {
    id: 2,
    titulo: "Centro Logístico Estratégico",
    endereco: "Via Dutra, Km 178",
    cidade: "São José dos Campos",
    estado: "SP",
    area: 5000,
    preco: 28000,
    tipo: "logistico",
    imagem: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg",
    descricao: "Centro logístico com localização estratégica para distribuição",
    caracteristicas: ["Cross docking", "Câmara fria", "Pátio de manobras", "Sistema WMS"],
    contato: { nome: "Maria Santos", telefone: "(12) 88888-8888", email: "maria@email.com" },
    rating: 4.9,
    visualizacoes: 456,
    destaque: true
  },
  {
    id: 3,
    titulo: "Galpão Comercial Centro",
    endereco: "Av. Paulista, 1000",
    cidade: "São Paulo",
    estado: "SP",
    area: 800,
    preco: 8500,
    tipo: "comercial",
    imagem: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
    descricao: "Galpão comercial em localização privilegiada no centro",
    caracteristicas: ["Estacionamento", "Segurança 24h", "Elevador de carga", "Internet fibra"],
    contato: { nome: "Pedro Costa", telefone: "(11) 77777-7777", email: "pedro@email.com" },
    rating: 4.5,
    visualizacoes: 189,
    destaque: false
  }
];

// Components
const Header = () => (
  <header className="bg-white shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <Building className="h-8 w-8 text-blue-700" />
          <span className="text-2xl font-bold text-gray-900">GalpãoSys</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Alugar</a>
          <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Anunciar</a>
          <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Sobre</a>
          <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Contato</a>
        </nav>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-blue-700 border border-blue-700 rounded-lg hover:bg-blue-50 transition-colors">
            Entrar
          </button>
          <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
            Anunciar Grátis
          </button>
        </div>
      </div>
    </div>
  </header>
);

const HeroSection = ({ onSearch }: { onSearch: (termo: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            Encontre o Galpão Ideal
            <br />
            <span className="text-blue-300">Para Seu Negócio</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A maior plataforma de aluguel de galpões industriais, comerciais e logísticos do Brasil.
            Conectamos proprietários e locatários de forma simples e segura.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Localização
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cidade, região ou endereço"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Galpão
              </label>
              <select className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Todos os tipos</option>
                <option value="industrial">Industrial</option>
                <option value="comercial">Comercial</option>
                <option value="logistico">Logístico</option>
              </select>
            </div>
            <div>
              <button
                onClick={handleSearch}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Buscar</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">+10.000 Galpões</h3>
            <p className="text-blue-200">Maior catálogo do mercado</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Parceiros Confiáveis</h3>
            <p className="text-blue-200">Proprietários verificados</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Suporte Premium</h3>
            <p className="text-blue-200">Atendimento especializado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FilterSidebar = ({ 
  filters, 
  onFilterChange 
}: { 
  filters: any; 
  onFilterChange: (filters: any) => void;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-fit sticky top-24">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="h-5 w-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Tipo de Galpão
          </label>
          <div className="space-y-2">
            {['industrial', 'comercial', 'logistico'].map((tipo) => (
              <label key={tipo} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.tipos?.includes(tipo)}
                  onChange={(e) => {
                    const tipos = filters.tipos || [];
                    if (e.target.checked) {
                      onFilterChange({
                        ...filters,
                        tipos: [...tipos, tipo]
                      });
                    } else {
                      onFilterChange({
                        ...filters,
                        tipos: tipos.filter((t: string) => t !== tipo)
                      });
                    }
                  }}
                  className="rounded text-blue-600 mr-2"
                />
                <span className="text-sm text-gray-700 capitalize">{tipo}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Preço Máximo (R$)
          </label>
          <input
            type="range"
            min="0"
            max="50000"
            value={filters.precoMax || 50000}
            onChange={(e) => onFilterChange({
              ...filters,
              precoMax: parseInt(e.target.value)
            })}
            className="w-full"
          />
          <div className="text-sm text-gray-600 mt-1">
            Até R$ {(filters.precoMax || 50000).toLocaleString()}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Área Mínima (m²)
          </label>
          <input
            type="number"
            placeholder="Ex: 1000"
            value={filters.areaMin || ''}
            onChange={(e) => onFilterChange({
              ...filters,
              areaMin: e.target.value ? parseInt(e.target.value) : null
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.apenasDestaque}
              onChange={(e) => onFilterChange({
                ...filters,
                apenasDestaque: e.target.checked
              })}
              className="rounded text-blue-600 mr-2"
            />
            <span className="text-sm text-gray-700">Apenas em destaque</span>
          </label>
        </div>

        <button
          onClick={() => onFilterChange({})}
          className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Limpar Filtros
        </button>
      </div>
    </div>
  );
};

const GalpaoCard = ({ galpao }: { galpao: Galpao }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={galpao.imagem}
          alt={galpao.titulo}
          className="w-full h-48 object-cover"
        />
        {galpao.destaque && (
          <div className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            DESTAQUE
          </div>
        )}
        <button className="absolute top-3 right-3 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">
            {galpao.tipo}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{galpao.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{galpao.titulo}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{galpao.endereco}, {galpao.cidade} - {galpao.estado}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-sm text-gray-500">Área</span>
            <p className="font-semibold">{galpao.area.toLocaleString()} m²</p>
          </div>
          <div>
            <span className="text-sm text-gray-500">Preço/mês</span>
            <p className="font-semibold text-green-600">R$ {galpao.preco.toLocaleString()}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {galpao.caracteristicas.slice(0, 2).map((carac, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                {carac}
              </span>
            ))}
            {galpao.caracteristicas.length > 2 && (
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                +{galpao.caracteristicas.length - 2} mais
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{galpao.visualizacoes}</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>Contato</span>
            </button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Visitar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalpaoListing = ({ searchTerm }: { searchTerm: string }) => {
  const [filters, setFilters] = useState<any>({});
  const [sortBy, setSortBy] = useState('relevancia');

  const filteredGalpoes = galpoesMock.filter(galpao => {
    if (searchTerm && !galpao.cidade.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !galpao.endereco.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    if (filters.tipos && filters.tipos.length > 0 && !filters.tipos.includes(galpao.tipo)) {
      return false;
    }
    
    if (filters.precoMax && galpao.preco > filters.precoMax) {
      return false;
    }
    
    if (filters.areaMin && galpao.area < filters.areaMin) {
      return false;
    }
    
    if (filters.apenasDestaque && !galpao.destaque) {
      return false;
    }
    
    return true;
  });

  const sortedGalpoes = [...filteredGalpoes].sort((a, b) => {
    switch (sortBy) {
      case 'preco-menor':
        return a.preco - b.preco;
      case 'preco-maior':
        return b.preco - a.preco;
      case 'area-menor':
        return a.area - b.area;
      case 'area-maior':
        return b.area - a.area;
      default:
        return b.rating - a.rating;
    }
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <FilterSidebar 
            filters={filters}
            onFilterChange={setFilters}
          />
        </div>

        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {searchTerm ? `Resultados para "${searchTerm}"` : 'Todos os Galpões'}
              </h2>
              <p className="text-gray-600">
                {sortedGalpoes.length} {sortedGalpoes.length === 1 ? 'galpão encontrado' : 'galpões encontrados'}
              </p>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="relevancia">Mais Relevantes</option>
              <option value="preco-menor">Menor Preço</option>
              <option value="preco-maior">Maior Preço</option>
              <option value="area-menor">Menor Área</option>
              <option value="area-maior">Maior Área</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedGalpoes.map((galpao) => (
              <GalpaoCard key={galpao.id} galpao={galpao} />
            ))}
          </div>

          {sortedGalpoes.length === 0 && (
            <div className="text-center py-12">
              <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Nenhum galpão encontrado
              </h3>
              <p className="text-gray-600">
                Tente ajustar seus filtros ou buscar por uma localização diferente.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const AnunciarSection = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    endereco: '',
    cidade: '',
    estado: '',
    area: '',
    preco: '',
    tipo: 'industrial',
    descricao: '',
    nome: '',
    telefone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Anúncio enviado com sucesso! Nossa equipe entrará em contato em breve.');
    setFormData({
      titulo: '',
      endereco: '',
      cidade: '',
      estado: '',
      area: '',
      preco: '',
      tipo: 'industrial',
      descricao: '',
      nome: '',
      telefone: '',
      email: ''
    });
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Anuncie Seu Galpão Gratuitamente
          </h2>
          <p className="text-xl text-gray-600">
            Alcance milhares de empresas procurando por espaços como o seu
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título do Anúncio *
              </label>
              <input
                type="text"
                required
                value={formData.titulo}
                onChange={(e) => setFormData({...formData, titulo: e.target.value})}
                placeholder="Ex: Galpão Industrial Moderno"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo do Galpão *
              </label>
              <select
                required
                value={formData.tipo}
                onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="industrial">Industrial</option>
                <option value="comercial">Comercial</option>
                <option value="logistico">Logístico</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Endereço *
              </label>
              <input
                type="text"
                required
                value={formData.endereco}
                onChange={(e) => setFormData({...formData, endereco: e.target.value})}
                placeholder="Rua, número"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cidade *
              </label>
              <input
                type="text"
                required
                value={formData.cidade}
                onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                placeholder="Ex: São Paulo"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado *
              </label>
              <select
                required
                value={formData.estado}
                onChange={(e) => setFormData({...formData, estado: e.target.value})}
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="PR">Paraná</option>
                <option value="SC">Santa Catarina</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Área Total (m²) *
              </label>
              <input
                type="number"
                required
                value={formData.area}
                onChange={(e) => setFormData({...formData, area: e.target.value})}
                placeholder="Ex: 2500"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preço Mensal (R$) *
              </label>
              <input
                type="number"
                required
                value={formData.preco}
                onChange={(e) => setFormData({...formData, preco: e.target.value})}
                placeholder="Ex: 15000"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição Detalhada *
            </label>
            <textarea
              rows={4}
              required
              value={formData.descricao}
              onChange={(e) => setFormData({...formData, descricao: e.target.value})}
              placeholder="Descreva as características, vantagens e diferenciais do seu galpão..."
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Dados de Contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  placeholder="(11) 99999-9999"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
            >
              <Building className="h-5 w-5" />
              <span>Publicar Anúncio Gratuitamente</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Building className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">GalpãoSys</span>
          </div>
          <p className="text-gray-300">
            A plataforma líder em aluguel de galpões no Brasil.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Para Empresas</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-blue-400">Buscar Galpões</a></li>
            <li><a href="#" className="hover:text-blue-400">Galpões Industriais</a></li>
            <li><a href="#" className="hover:text-blue-400">Centros Logísticos</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Para Proprietários</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-blue-400">Anunciar Galpão</a></li>
            <li><a href="#" className="hover:text-blue-400">Planos Premium</a></li>
            <li><a href="#" className="hover:text-blue-400">Guia do Proprietário</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Suporte</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(11) 4000-0000</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contato@galpaosys.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 GalpãoSys. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

// Main App Component
function App() {
  const [currentView, setCurrentView] = useState<'home' | 'listing' | 'anunciar'>('home');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (termo: string) => {
    setSearchTerm(termo);
    setCurrentView('listing');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {currentView === 'home' && (
        <>
          <HeroSection onSearch={handleSearch} />
          <GalpaoListing searchTerm="" />
          <AnunciarSection />
        </>
      )}
      
      {currentView === 'listing' && (
        <GalpaoListing searchTerm={searchTerm} />
      )}
      
      {currentView === 'anunciar' && (
        <AnunciarSection />
      )}
      
      <Footer />
    </div>
  );
}

export default App;