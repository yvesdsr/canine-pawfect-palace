
import React from 'react';
import { Heart, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-yellow-300">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-2 text-sm">Plus de 500 familles heureuses</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Trouvez votre{' '}
                <span className="text-yellow-300">compagnon idéal</span>{' '}
                dès aujourd'hui
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Découvrez notre sélection de chiens de race, élevés avec amour et passion. 
                Chaque chiot est vacciné, pucé et accompagné de tous ses papiers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('nos-chiens')}
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explorez nos races
                </button>
                <button
                  onClick={() => scrollToSection('nos-chiens')}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Adoptez maintenant
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-200">Races disponibles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-blue-200">Santé garantie</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-200">Support client</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Chien adorable"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 p-4 rounded-full">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
