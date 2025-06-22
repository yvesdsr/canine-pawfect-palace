
import React, { useState } from 'react';
import { X, Plus, Trash2, Upload } from 'lucide-react';
import { Dog } from '../types/Dog';
import { addDog, removeDog, getDogs } from '../utils/dogStorage';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDogsUpdated: () => void;
}

const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose, onDogsUpdated }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  const [dogs, setDogs] = useState<Dog[]>(getDogs());
  const [imagePreview, setImagePreview] = useState<string>('');

  const [newDog, setNewDog] = useState<Omit<Dog, 'id'>>({
    name: '',
    breed: '',
    age: '',
    price: 0,
    image: '',
    description: '',
    personality: '',
    origin: '',
    trainingTips: '',
    careTips: '',
    vaccinated: false,
    dewormed: false,
    microchipped: false,
    pedigree: false,
    gender: 'Mâle',
    weight: '',
    color: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === 'Admin' && credentials.password === 'Canineanimalerie0747457855') {
      setIsLoggedIn(true);
      setDogs(getDogs());
    } else {
      alert('Identifiants incorrects');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImagePreview(result);
        setNewDog({ ...newDog, image: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddDog = (e: React.FormEvent) => {
    e.preventDefault();
    const dog: Dog = {
      ...newDog,
      id: Date.now().toString()
    };
    addDog(dog);
    setDogs(getDogs());
    onDogsUpdated();
    setShowAddForm(false);
    setImagePreview('');
    setNewDog({
      name: '',
      breed: '',
      age: '',
      price: 0,
      image: '',
      description: '',
      personality: '',
      origin: '',
      trainingTips: '',
      careTips: '',
      vaccinated: false,
      dewormed: false,
      microchipped: false,
      pedigree: false,
      gender: 'Mâle',
      weight: '',
      color: ''
    });
  };

  const handleRemoveDog = (dogId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce chien ?')) {
      removeDog(dogId);
      setDogs(getDogs());
      onDogsUpdated();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Administration</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {!isLoggedIn ? (
            <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Se connecter
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Gestion des chiens</h3>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Ajouter un chien</span>
                </button>
              </div>

              {showAddForm && (
                <form onSubmit={handleAddDog} className="bg-gray-50 p-6 rounded-xl space-y-4">
                  <h4 className="text-lg font-semibold mb-4">Ajouter un nouveau chien</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Nom"
                      value={newDog.name}
                      onChange={(e) => setNewDog({ ...newDog, name: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Race"
                      value={newDog.breed}
                      onChange={(e) => setNewDog({ ...newDog, breed: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Âge"
                      value={newDog.age}
                      onChange={(e) => setNewDog({ ...newDog, age: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Prix (FCFA)"
                      value={newDog.price}
                      onChange={(e) => setNewDog({ ...newDog, price: Number(e.target.value) })}
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                    
                    {/* Champ d'upload d'image */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Photo du chien
                      </label>
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                          <Upload className="w-4 h-4 mr-2" />
                          Choisir une photo
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            required={!newDog.image}
                          />
                        </label>
                        {imagePreview && (
                          <img
                            src={imagePreview}
                            alt="Aperçu"
                            className="w-16 h-16 object-cover rounded-lg border"
                          />
                        )}
                      </div>
                    </div>

                    <select
                      value={newDog.gender}
                      onChange={(e) => setNewDog({ ...newDog, gender: e.target.value as 'Mâle' | 'Femelle' })}
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                    >
                      <option value="Mâle">Mâle</option>
                      <option value="Femelle">Femelle</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Poids"
                      value={newDog.weight}
                      onChange={(e) => setNewDog({ ...newDog, weight: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Couleur"
                      value={newDog.color}
                      onChange={(e) => setNewDog({ ...newDog, color: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg"
                      required
                    />
                  </div>

                  <textarea
                    placeholder="Description"
                    value={newDog.description}
                    onChange={(e) => setNewDog({ ...newDog, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                    required
                  />

                  <textarea
                    placeholder="Personnalité"
                    value={newDog.personality}
                    onChange={(e) => setNewDog({ ...newDog, personality: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={2}
                    required
                  />

                  <textarea
                    placeholder="Origine"
                    value={newDog.origin}
                    onChange={(e) => setNewDog({ ...newDog, origin: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={2}
                    required
                  />

                  <textarea
                    placeholder="Conseils d'éducation"
                    value={newDog.trainingTips}
                    onChange={(e) => setNewDog({ ...newDog, trainingTips: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={2}
                    required
                  />

                  <textarea
                    placeholder="Conseils de soins"
                    value={newDog.careTips}
                    onChange={(e) => setNewDog({ ...newDog, careTips: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={2}
                    required
                  />

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={newDog.vaccinated}
                        onChange={(e) => setNewDog({ ...newDog, vaccinated: e.target.checked })}
                      />
                      <span>Vacciné</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={newDog.dewormed}
                        onChange={(e) => setNewDog({ ...newDog, dewormed: e.target.checked })}
                      />
                      <span>Vermifugé</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={newDog.microchipped}
                        onChange={(e) => setNewDog({ ...newDog, microchipped: e.target.checked })}
                      />
                      <span>Pucé</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={newDog.pedigree}
                        onChange={(e) => setNewDog({ ...newDog, pedigree: e.target.checked })}
                      />
                      <span>Pedigree</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Ajouter le chien
                  </button>
                </form>
              )}

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Chiens actuels ({dogs.length})</h4>
                {dogs.length === 0 ? (
                  <p className="text-gray-500">Aucun chien en base de données</p>
                ) : (
                  <div className="grid gap-4">
                    {dogs.map((dog) => (
                      <div key={dog.id} className="bg-gray-50 p-4 rounded-xl flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <img
                            src={dog.image}
                            alt={dog.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h5 className="font-semibold">{dog.name}</h5>
                            <p className="text-sm text-gray-600">{dog.breed} • {dog.price.toLocaleString()} FCFA</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveDog(dog.id)}
                          className="text-red-600 hover:text-red-800 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
