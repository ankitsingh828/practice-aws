
export const fleetData = [
  { name: "Innova Crysta",price: '₹ 18/KM - ₹ 250/Hour',  imageUrl: "/cars/innovaCrysta.png" },
  { name: "Creta", price: '₹ 200/Hour',  imageUrl: "/cars/creta.png" },
  { name: "Brezza",   price: '₹ 15/1km- ₹ 180/Hour',  imageUrl: "/cars/brezza.png" },
  { name: "Innova",price: '₹ 16/1km- ₹ 200/Hour',  imageUrl: "/cars/innova.png" },
  { name: "Maruti Ertiga",    price: '₹ 15/1km- ₹ 200/Hour',  imageUrl: "/cars/ertiga.webp" },
  { name: "Hyundai Venue", price: '₹ 15/1km- ₹ 200/Hour',  imageUrl: "/cars/venue.png" },
  { name: "Kia Carens", price: "₹ ₹250/hr", imageUrl: "/cars/kiaCarens.png" },
  { name: "Swift Dzire", price: '₹ 13/1km- ₹ 150/H0ur', imageUrl: "/cars/swiftDzire.png" },
  { name: "Toyota Fortuner",   price: '₹ 30/1km- ₹ 500/Hour', imageUrl: "/cars/toyotaFortuner.png" },
  { name: "Maruti Baleno",   price: '₹ 16/1km- ₹ 250/Hour', imageUrl: "/cars/baleno.png" },
  { name: "Temp Traveler", price: '₹ 25/km', imageUrl: "/cars/traveler.webp" },
];

interface Car {
  name: string;
  price: string;
  image: string;
}

export const Cars: Car[] = [
  {
    image: "/cars/innovaCrysta.png",
    name: 'INNOVA CRYSTA',
    price: '₹ 18/KM - ₹ 250/Hour',
  },
  {
    image: '/cars/creta.png',
    name: 'CRETA',
    price: '₹ 200/Hour',
  },
  {
    image: '/cars/innova.png',
    name: 'INNOVA',
    price: '₹ 16/1km- ₹ 200/Hour',
  },
  {
    image: '/cars/brezza.png',
    name: 'BREZZA',
    price: '₹ 15/1km- ₹ 180/Hour',
  },
  {
    image: "/cars/ertiga.webp",
    name: 'MARUTI ERTIGA',
    price: '₹ 15/1km- ₹ 200/Hour',
  },
  {
    image: "/cars/venue.png",
    name: 'HAYUNDAI VENUE',
    price: '₹ 15/1km- ₹ 200/Hour',
  },
  {
    image: '/cars/swiftDzire.png',
    name: 'SWIFT DZIRE',
    price: '₹ 13/1km- ₹ 150/H0ur',
  },
  {
    image: "/cars/xylo.png",
    name: 'XYLO',
    price: '₹ 7/1km- ₹ 200/Hour',
  },
  {
    image: "/cars/kiaCarens.png",
    name: 'KIA CARENS',
    price: '₹ 16/1km- ₹ 250/Hour',
  },
  {
    image: "/cars/toyotaFortuner.png",
    name: 'TOYOTA FORTUNER',
    price: '₹ 30/1km- ₹ 500/Hour', 
  },
  {
    image: "/cars/baleno.png",
    name: 'MARUTI BALENO',
    price: '₹ 14/1km- ₹ 150/Hour',
  },
  {
    image: "/cars/traveler.webp",
    name: 'TEMP TRAVELER (A/C)',
    price: '₹ 25/km',
  },
];

export const features = [
  {
    icon: "📍",
    title: "More Locations",
    description: "Pick the vehicles in any locations within Hyderabad",
  },
  {
    icon: "✈️",
    title: "Airport Delivery",
    description: "We provide best-in-class services (Ride/Rental) in Hyderabad RGI airport",
  },
  {
    icon: "🏢",
    title: "Curbside Delivery",
    description: "Take an advantage of pickup and droppings at any roadside or at the end of the driveway",
  },
  {
    icon: "🎧",
    title: "24/7 Support",
    description: "We are available 24/7 and also provide services in all the times.",
  },
];

export const cardContent = [
  {
    imageSrc: "/cars/ertiga.webp",
    title: "Wide Selection of Vehicles",
    description:
      "We offer an extensive fleet of well-maintained vehicles, ranging from Economy, Mini, Compact, People carrier, Intermediate, Premium to spacious SUVs. Choose from a variety of models, sizes, and features to find the ideal vehicle that suits your preferences and budget.",
  },
  {
    imageSrc: "/cars/pricing.webp",
    title: "Transparent Pricing",
    description:
      "At Pick & Drives, we believe in transparency. Our pricing is straightforward, with no hidden fees or surprises. We provide clear and competitive rates, allowing you to plan your budget effectively.",
  },
  {
    imageSrc: "/cars/customer.webp",
    title: "Exceptional Customer Service",
    description:
      "We prioritize your satisfaction above all else. Our friendly and knowledgeable customer service team is here to assist you throughout your rental journey.",
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    "question": "What types of services do you offer for pets?",
    "answer": "We offer a variety of services for pets, including grooming, boarding, training, and veterinary care. Additionally, we provide specialized services like pet daycare, pet walking, and even pet taxi services to ensure your furry friend is well taken care of."
  },
  {
    "question": "Can I tour your facility before deciding to use your services?",
    "answer": "Absolutely! We welcome pet owners to tour our facility. It gives you a chance to see where your pet will be staying, meet our staff, and observe our clean and safe environment. Please contact us to schedule a tour at your convenience."
  },
  {
    "question": "What measures do you take to ensure the health and safety of pets under your care?",
    "answer": "The health and safety of your pet are our top priorities. We have strict protocols in place, including regular cleaning and sanitizing of all areas, separate spaces for different pets to prevent any potential cross-contamination, and staff trained in pet first aid and CPR."
  },
  {
    "question": "How often are the pets fed and exercised? Can you accommodate my pet's specific dietary needs or routines?",
    "answer": "Pets are fed according to their individual dietary needs, with meals provided at regular intervals. We accommodate any specific dietary requirements you may have for your pet. Exercise is also a key part of our routine, with daily play sessions, walks, and activities tailored to each pet's energy level and preferences."
  },
  {
    "question": "What is your protocol in case of a medical emergency or any other emergency?",
    "answer": "In the event of a medical emergency, we have a vet on call 24/7 to provide immediate care. Our staff is trained to handle emergencies and will promptly contact you with any concerns. We also keep a detailed medical history for each pet to ensure the best possible care is provided."
  }
  
];
