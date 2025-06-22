
import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { Dog } from '../types/Dog';

interface OrderModalProps {
  dog: Dog;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ dog, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    quantity: 1,
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
🐕 NOUVELLE COMMANDE - CANINE ANIMALERIE

👤 CLIENT:
- Nom: ${formData.firstName} ${formData.lastName}
- Téléphone: ${formData.phone}
- Email: ${formData.email}
- Adresse: ${formData.address}, ${formData.city}

🐶 CHIEN COMMANDÉ:
- Nom: ${dog.name}
- Race: ${dog.breed}
- Âge: ${dog.age}
- Prix: ${dog.price.toLocaleString()} FCFA
- Quantité: ${formData.quantity}

📝 INFORMATIONS SUPPLÉMENTAIRES:
${formData.additionalInfo || 'Aucune'}

Merci de nous contacter pour finaliser cette commande !
    `.trim();

    const whatsappUrl = `https://wa.me/2250713621898?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleDirectWhatsApp = () => {
    const message = `Bonjour ! Je suis intéressé(e) par ${dog.name} (${dog.breed}) à ${dog.price.toLocaleString()} FCFA. Pouvez-vous me donner plus d'informations ?`;
    const whatsappUrl = `https://wa.me/2250713621898?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Commander {dog.name}</h2>
              <p className="text-gray-600">{dog.breed} • {dog.price.toLocaleString()} FCFA</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prénom *
              </label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom *
              </label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adresse complète *
            </label>
            <input
              type="text"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Rue, quartier..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ville *
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantité
              </label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Informations supplémentaires
            </label>
            <textarea
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Préférences, questions, demandes spéciales..."
            />
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Commander via WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full text-gray-600 text-sm hover:text-green-600 transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ou contactez-nous directement sur WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
