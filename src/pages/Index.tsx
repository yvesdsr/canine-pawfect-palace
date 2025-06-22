
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DogGrid from '../components/DogGrid';
import Footer from '../components/Footer';
import OrderModal from '../components/OrderModal';
import AdminModal from '../components/AdminModal';
import { Dog } from '../types/Dog';
import { getDogs } from '../utils/dogStorage';

const Index = () => {
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [dogs, setDogs] = useState<Dog[]>([]);

  useEffect(() => {
    setDogs(getDogs());
  }, []);

  const handleOrder = (dog: Dog) => {
    setSelectedDog(dog);
    setIsOrderModalOpen(true);
  };

  const handleAdminLogin = () => {
    setIsAdminModalOpen(true);
  };

  const refreshDogs = () => {
    setDogs(getDogs());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header onAdminClick={handleAdminLogin} />
      <HeroSection />
      <DogGrid dogs={dogs} onOrder={handleOrder} />
      <Footer />
      
      {isOrderModalOpen && selectedDog && (
        <OrderModal
          dog={selectedDog}
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
        />
      )}
      
      {isAdminModalOpen && (
        <AdminModal
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
          onDogsUpdated={refreshDogs}
        />
      )}
    </div>
  );
};

export default Index;
