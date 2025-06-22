
import React from 'react';
import { Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                CA
              </div>
              <div>
                <h3 className="text-xl font-bold">CANINE ANIMALERIE</h3>
                <p className="text-gray-400 text-sm">Votre compagnon idéal</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Nous sommes passionnés par le bien-être animal et nous nous engageons à vous aider à trouver le compagnon parfait pour votre famille.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.451 0-4.438-1.987-4.438-4.438s1.987-4.438 4.438-4.438c1.092 0 2.107.4 2.889 1.115l-1.17 1.17c-.51-.51-1.218-.825-1.998-.825-1.569 0-2.84 1.271-2.84 2.84s1.271 2.84 2.84 2.84 2.84-1.271 2.84-2.84h1.598c0 2.451-1.987 4.438-4.438 4.438z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                title="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@canineanimalerie.com" 
                className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#nos-chiens" className="text-gray-400 hover:text-white transition-colors">Nos Chiens</a></li>
              <li><a href="#races" className="text-gray-400 hover:text-white transition-colors">Races</a></li>
              <li><a href="#conseils" className="text-gray-400 hover:text-white transition-colors">Conseils</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nos services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Vente de chiens de race</li>
              <li>• Conseils en éducation</li>
              <li>• Suivi vétérinaire</li>
              <li>• Garantie santé</li>
              <li>• Livraison sécurisée</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Abidjan, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+225 07 13 62 18 98</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-red-400" />
                <span>contact@canineanimalerie.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span>7j/7 - 24h/24</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Canine Animalerie. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Fait avec</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-gray-400 text-sm">pour nos amis à quatre pattes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
