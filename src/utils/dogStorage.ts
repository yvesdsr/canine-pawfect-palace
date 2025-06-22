
import { Dog } from '../types/Dog';

const STORAGE_KEY = 'canine-animalerie-dogs';

// Données d'exemple pour commencer
const defaultDogs: Dog[] = [
  {
    id: '1',
    name: 'Max',
    breed: 'Golden Retriever',
    age: '3 mois',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Magnifique Golden Retriever au caractère doux et joueur. Idéal pour une famille avec enfants.',
    personality: 'Affectueux, intelligent, loyal et très sociable. Excellent avec les enfants.',
    origin: 'Élevage professionnel en Écosse, lignée championne.',
    trainingTips: 'Très intelligent et facile à dresser. Utilisez des récompenses positives et soyez patient.',
    careTips: 'Brossage quotidien nécessaire. Exercice régulier indispensable (1-2h par jour).',
    vaccinated: true,
    dewormed: true,
    microchipped: true,
    pedigree: true,
    gender: 'Mâle',
    weight: '12 kg',
    color: 'Doré'
  },
  {
    id: '2',
    name: 'Luna',
    breed: 'Border Collie',
    age: '2 mois',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Border Collie énergique et intelligente, parfaite pour les familles actives.',
    personality: 'Très intelligente, énergique, protective et loyale. Besoin de stimulation mentale.',
    origin: 'Élevage spécialisé Border Collie, parents champions de travail.',
    trainingTips: 'Race très intelligente nécessitant une éducation ferme mais douce. Excellente en agility.',
    careTips: 'Besoins d\'exercice élevés. Brossage 2-3 fois par semaine. Stimulation mentale importante.',
    vaccinated: true,
    dewormed: true,
    microchipped: false,
    pedigree: true,
    gender: 'Femelle',
    weight: '8 kg',
    color: 'Noir et blanc'
  },
  {
    id: '3',
    name: 'Rocky',
    breed: 'Rottweiler',
    age: '4 mois',
    price: 520000,
    image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Rottweiler robuste et équilibré, excellent chien de garde et compagnon familial.',
    personality: 'Calme, confiant, courageux et attaché à sa famille. Protecteur naturel.',
    origin: 'Lignée allemande pure, parents testés dysplasie et caractère.',
    trainingTips: 'Éducation ferme et cohérente dès le plus jeune âge. Socialisation importante.',
    careTips: 'Exercice modéré mais régulier. Attention à la croissance. Brossage hebdomadaire.',
    vaccinated: true,
    dewormed: true,
    microchipped: true,
    pedigree: true,
    gender: 'Mâle',
    weight: '18 kg',
    color: 'Noir et feu'
  }
];

export const getDogs = (): Dog[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  // Initialize with default dogs if no data exists
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDogs));
  return defaultDogs;
};

export const addDog = (dog: Dog): void => {
  const dogs = getDogs();
  dogs.push(dog);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dogs));
};

export const removeDog = (dogId: string): void => {
  const dogs = getDogs().filter(dog => dog.id !== dogId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dogs));
};

export const updateDog = (updatedDog: Dog): void => {
  const dogs = getDogs().map(dog => 
    dog.id === updatedDog.id ? updatedDog : dog
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dogs));
};
