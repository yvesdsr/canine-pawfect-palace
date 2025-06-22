
import React from 'react';
import DogCard from './DogCard';
import { Dog } from '../types/Dog';

interface DogGridProps {
  dogs: Dog[];
  onOrder: (dog: Dog) => void;
}

const DogGrid: React.FC<DogGridProps> = ({ dogs, onOrder }) => {
  return (
    <section id="nos-chiens" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nos Compagnons Disponibles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de chiens de race, tous élevés avec amour et dans le respect du bien-être animal.
          </p>
        </div>

        {dogs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">Aucun chien disponible pour le moment.</p>
            <p className="text-gray-500 mt-2">Revenez bientôt pour découvrir nos nouveaux compagnons !</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} onOrder={onOrder} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DogGrid;
