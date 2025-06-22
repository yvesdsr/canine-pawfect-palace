
import React from 'react';
import { Heart, Star, Shield, Award } from 'lucide-react';
import { Dog } from '../types/Dog';

interface DogCardProps {
  dog: Dog;
  onOrder: (dog: Dog) => void;
}

const DogCard: React.FC<DogCardProps> = ({ dog, onOrder }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={dog.image}
          alt={dog.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {dog.breed}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
          <Heart className="w-5 h-5 text-red-500" />
        </div>
        <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-lg font-bold">
          {dog.price.toLocaleString()} FCFA
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Name and basic info */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{dog.name}</h3>
            <p className="text-gray-600">{dog.gender} • {dog.age} • {dog.weight}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
          </div>
        </div>

        {/* Health status */}
        <div className="grid grid-cols-2 gap-2">
          {dog.vaccinated && (
            <div className="flex items-center space-x-2 text-green-600">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Vacciné</span>
            </div>
          )}
          {dog.dewormed && (
            <div className="flex items-center space-x-2 text-green-600">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Vermifugé</span>
            </div>
          )}
          {dog.microchipped && (
            <div className="flex items-center space-x-2 text-green-600">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Pucé</span>
            </div>
          )}
          {dog.pedigree && (
            <div className="flex items-center space-x-2 text-blue-600">
              <Award className="w-4 h-4" />
              <span className="text-sm">Pedigree</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {dog.description}
        </p>

        {/* Details */}
        <div className="space-y-3 bg-gray-50 p-4 rounded-xl">
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Personnalité</h4>
            <p className="text-sm text-gray-600">{dog.personality}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Origine</h4>
            <p className="text-sm text-gray-600">{dog.origin}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Conseils d'éducation</h4>
            <p className="text-sm text-gray-600">{dog.trainingTips}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">Soins et entretien</h4>
            <p className="text-sm text-gray-600">{dog.careTips}</p>
          </div>
        </div>

        {/* Order button */}
        <button
          onClick={() => onOrder(dog)}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Commander maintenant
        </button>
      </div>
    </div>
  );
};

export default DogCard;
