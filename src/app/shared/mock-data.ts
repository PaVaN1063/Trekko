/**
 * Mock data for the Trekko UI.
 * Everything the screens show comes from here, so swapping in real API calls
 * later only means replacing these exports with service calls.
 */

export type Difficulty = 'Easy' | 'Moderate' | 'Challenging';

export interface Operator {
  id: string;
  name: string;
  initials: string;
  color: string;
  rating: number;
  treksRun: number;
  since: number;
}

export interface RouteStop {
  time: string;
  title: string;
  detail: string;
  mode: 'bus' | 'jeep' | 'walk' | 'camp' | 'flag';
}

export interface ItineraryDay {
  day: number;
  title: string;
  detail: string;
}

export interface Review {
  name: string;
  city: string;
  rating: number;
  date: string;
  text: string;
}

export interface Trek {
  id: string;
  name: string;
  region: string;
  state: string;
  operatorId: string;
  image: string;
  gallery: string[];
  days: number;
  nights: number;
  difficulty: Difficulty;
  altitudeM: number;
  distanceKm: number;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  pickupCity: string;
  pickupPoint: string;
  departure: string; // ISO date-time
  returnBy: string;
  seatsLeft: number;
  groupSize: number;
  tags: string[];
  offer?: { label: string; code: string };
  route: RouteStop[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  stay: { name: string; type: string; description: string; location: string };
  activities: string[];
  cancellation: { when: string; refund: string }[];
  reviews: Review[];
}

export type BookingStatus = 'Upcoming' | 'Completed' | 'Cancelled';

export interface Booking {
  id: string;
  trekId: string;
  status: BookingStatus;
  bookedOn: string;
  travellers: number;
  amountPaid: number;
  seats: string[];
}

export const OPERATORS: Operator[] = [
  { id: 'wgt', name: 'Western Ghats Trails', initials: 'WG', color: '#15A21F', rating: 4.8, treksRun: 1240, since: 2016 },
  { id: 'ss', name: 'Summit Sherpas', initials: 'SS', color: '#3136B9', rating: 4.7, treksRun: 860, since: 2018 },
  { id: 'wmt', name: 'Wild Monsoon Treks', initials: 'WM', color: '#0E8AD9', rating: 4.6, treksRun: 540, since: 2019 },
  { id: 'hpe', name: 'High Pass Expeditions', initials: 'HP', color: '#B5442E', rating: 4.9, treksRun: 310, since: 2014 },
  { id: 'crw', name: 'Coorg Ridge Walkers', initials: 'CR', color: '#7A4FD8', rating: 4.5, treksRun: 420, since: 2020 },
];

const KARNATAKA_CANCELLATION = [
  { when: 'More than 7 days before departure', refund: '90% refund' },
  { when: '3 to 7 days before departure', refund: '50% refund' },
  { when: 'Less than 72 hours before departure', refund: 'No refund' },
  { when: 'Trek cancelled by operator (weather, permits)', refund: '100% refund or free reschedule' },
];

const HIMALAYAN_CANCELLATION = [
  { when: 'More than 21 days before departure', refund: '85% refund' },
  { when: '10 to 21 days before departure', refund: '50% refund' },
  { when: 'Less than 10 days before departure', refund: 'No refund, transfer to a friend free' },
  { when: 'Trek cancelled by operator (snow, permits)', refund: 'Full credit valid for 12 months' },
];

export const TREKS: Trek[] = [
  {
    id: 'kumara-parvatha',
    name: 'Kumara Parvatha',
    region: 'Kukke Subramanya',
    state: 'Karnataka',
    operatorId: 'wgt',
    image: 'assets/images/trek1.jpg',
    gallery: ['assets/images/trek1.jpg', 'assets/images/trek4.jpg', 'assets/images/trek-tadiandamol.jpg'],
    days: 2,
    nights: 1,
    difficulty: 'Challenging',
    altitudeM: 1712,
    distanceKm: 22,
    price: 2899,
    originalPrice: 3499,
    rating: 4.8,
    reviewCount: 1284,
    pickupCity: 'Bengaluru',
    pickupPoint: 'Majestic Bus Stand, Platform 17',
    departure: '2026-10-23T21:30:00+05:30',
    returnBy: 'Sun, 25 Oct · 6:00 AM',
    seatsLeft: 6,
    groupSize: 28,
    tags: ['Weekend', 'Sunrise summit', 'Forest permit included'],
    offer: { label: '17% off', code: 'GHATS17' },
    route: [
      { time: 'Fri 9:30 PM', title: 'Majestic, Bengaluru', detail: 'Board the AC sleeper bus. Trek lead checks IDs.', mode: 'bus' },
      { time: 'Sat 5:30 AM', title: 'Kukke Subramanya', detail: 'Freshen up, breakfast at the base homestay.', mode: 'flag' },
      { time: 'Sat 7:00 AM', title: 'Bhattara Mane', detail: '6 km climb through shola forest to the forest checkpost.', mode: 'walk' },
      { time: 'Sat 3:00 PM', title: 'Shesha Parvatha camp', detail: 'Set up tents, dinner and stargazing.', mode: 'camp' },
      { time: 'Sun 5:00 AM', title: 'KP summit (1,712 m)', detail: 'Sunrise push, back to base by afternoon.', mode: 'walk' },
      { time: 'Sun 9:00 PM', title: 'Majestic, Bengaluru', detail: 'Return bus drops you by 6:00 AM Monday.', mode: 'bus' },
    ],
    itinerary: [
      { day: 1, title: 'Base to Shesha Parvatha', detail: 'A steady 6–7 hour climb through dense forest and open grassland. Lunch at Bhattara Mane, then camp below the peak.' },
      { day: 2, title: 'Summit and descent', detail: 'Pre-dawn start for sunrise at the summit, then a long descent to Kukke. Bus leaves at 9 PM.' },
    ],
    inclusions: ['AC sleeper bus both ways', 'Forest entry and camping fees', '4 meals (veg)', 'Tents and sleeping bags', 'Certified trek lead and first aid'],
    exclusions: ['Personal snacks', 'Porter for personal bags (₹600)', 'Anything not listed above'],
    highlights: ['One of the toughest treks in the Western Ghats', 'Sunrise above the clouds', 'Night under the stars at Shesha Parvatha'],
    stay: { name: 'Shesha Parvatha campsite', type: 'Alpine tents, twin sharing', description: 'Flat meadow below the summit with clean water nearby and a common dining tent.', location: 'Pushpagiri Wildlife Sanctuary' },
    activities: ['Summit sunrise', 'Stargazing', 'Bonfire (weather permitting)', 'Photography walk'],
    cancellation: KARNATAKA_CANCELLATION,
    reviews: [
      { name: 'Sneha Iyer', city: 'Bengaluru', rating: 5, date: 'Sep 2026', text: 'Tough climb but the trek lead kept the group together. The sunrise was unreal and the food at camp was hot and plenty.' },
      { name: 'Rohit Menon', city: 'Mysuru', rating: 4, date: 'Aug 2026', text: 'Bus was on time, tents were clean. Day 2 descent is brutal on the knees, carry trekking poles.' },
      { name: 'Farah Khan', city: 'Bengaluru', rating: 5, date: 'Aug 2026', text: 'Went solo and came back with 10 friends. Very well organised.' },
    ],
  },
  {
    id: 'kudremukh',
    name: 'Kudremukh Peak',
    region: 'Chikkamagaluru',
    state: 'Karnataka',
    operatorId: 'ss',
    image: 'assets/images/trek4.jpg',
    gallery: ['assets/images/trek4.jpg', 'assets/images/trek1.jpg', 'assets/images/trek2.jpg'],
    days: 2,
    nights: 1,
    difficulty: 'Moderate',
    altitudeM: 1894,
    distanceKm: 20,
    price: 3199,
    originalPrice: 3599,
    rating: 4.7,
    reviewCount: 962,
    pickupCity: 'Bengaluru',
    pickupPoint: 'Hebbal Flyover, near Esteem Mall',
    departure: '2026-10-30T22:00:00+05:30',
    returnBy: 'Sun, 1 Nov · 5:30 AM',
    seatsLeft: 11,
    groupSize: 24,
    tags: ['Weekend', 'Rolling meadows', 'Homestay'],
    offer: { label: '₹400 off', code: 'KUDRE400' },
    route: [
      { time: 'Fri 10:00 PM', title: 'Hebbal, Bengaluru', detail: 'Pickup near Esteem Mall.', mode: 'bus' },
      { time: 'Sat 6:00 AM', title: 'Mullodi village', detail: 'Jeep transfer to the homestay, breakfast.', mode: 'jeep' },
      { time: 'Sat 7:30 AM', title: 'Kudremukh trail', detail: '10 km up through streams and grassland.', mode: 'walk' },
      { time: 'Sat 1:00 PM', title: 'Kudremukh summit', detail: 'Views of the Arabian Sea on clear days.', mode: 'flag' },
      { time: 'Sat 6:00 PM', title: 'Mullodi homestay', detail: 'Malnad dinner and rest.', mode: 'camp' },
    ],
    itinerary: [
      { day: 1, title: 'Summit day', detail: 'Cross three streams and wide meadows to the "horse face" summit, then return to the homestay.' },
      { day: 2, title: 'Coffee estate walk', detail: 'Short estate walk after breakfast, then lunch and the drive back to Bengaluru.' },
    ],
    inclusions: ['Tempo traveller both ways', 'Jeep to base', 'Homestay stay, 4 meals', 'Forest permits', 'Trek lead'],
    exclusions: ['Personal expenses', 'Travel insurance'],
    highlights: ['Third-highest peak in Karnataka', 'Grasslands that stay green after the monsoon', 'Malnad home-cooked food'],
    stay: { name: 'Mullodi Hill Homestay', type: 'Dorm rooms, 6 sharing', description: 'Family-run homestay at the trail head with hot water and a big verandah.', location: 'Mullodi, Kudremukh National Park' },
    activities: ['Stream crossings', 'Coffee estate walk', 'Campfire'],
    cancellation: KARNATAKA_CANCELLATION,
    reviews: [
      { name: 'Aditya Rao', city: 'Bengaluru', rating: 5, date: 'Oct 2026', text: 'Greenest trek I have done. Homestay food was the best part.' },
      { name: 'Meera Pillai', city: 'Chennai', rating: 4, date: 'Sep 2026', text: 'Leeches near the streams, carry salt. Otherwise perfect.' },
    ],
  },
  {
    id: 'skandagiri',
    name: 'Skandagiri Night Trek',
    region: 'Chikkaballapur',
    state: 'Karnataka',
    operatorId: 'wmt',
    image: 'assets/images/trek2.jpg',
    gallery: ['assets/images/trek2.jpg', 'assets/images/trek1.jpg'],
    days: 1,
    nights: 0,
    difficulty: 'Easy',
    altitudeM: 1450,
    distanceKm: 8,
    price: 1299,
    originalPrice: 1499,
    rating: 4.6,
    reviewCount: 2310,
    pickupCity: 'Bengaluru',
    pickupPoint: 'Yeshwanthpur Metro Station, Exit B',
    departure: '2026-10-24T01:00:00+05:30',
    returnBy: 'Sat, 24 Oct · 10:30 AM',
    seatsLeft: 3,
    groupSize: 40,
    tags: ['Beginner friendly', 'Sea of clouds', 'Overnight'],
    offer: { label: 'Group deal', code: 'CLOUDS4' },
    route: [
      { time: 'Sat 1:00 AM', title: 'Yeshwanthpur Metro', detail: 'Pickup at Exit B.', mode: 'bus' },
      { time: 'Sat 2:30 AM', title: 'Papagni Mutt base', detail: 'Headlamp check and warm-up.', mode: 'flag' },
      { time: 'Sat 3:00 AM', title: 'Night ascent', detail: '4 km up the rocky trail by torchlight.', mode: 'walk' },
      { time: 'Sat 5:45 AM', title: 'Skandagiri summit', detail: 'Watch the sun rise over a sea of clouds.', mode: 'flag' },
    ],
    itinerary: [
      { day: 1, title: 'Night climb to sunrise', detail: 'Start in the dark, reach the ruined fort at the top before dawn, breakfast at the base and back in the city by mid-morning.' },
    ],
    inclusions: ['AC bus both ways', 'Entry tickets', 'Breakfast', 'Trek lead and sweep'],
    exclusions: ['Headlamp (rent for ₹100)', 'Personal snacks'],
    highlights: ['Closest sea-of-clouds view from Bengaluru', 'Perfect first trek', 'Back home by brunch'],
    stay: { name: 'No overnight stay', type: 'Day trek', description: 'You travel overnight and return the same morning.', location: 'Kalavara, Chikkaballapur' },
    activities: ['Night trekking', 'Sunrise photography'],
    cancellation: KARNATAKA_CANCELLATION,
    reviews: [
      { name: 'Karthik S', city: 'Bengaluru', rating: 5, date: 'Oct 2026', text: 'Clouds below us at sunrise. Worth losing a night of sleep.' },
      { name: 'Priya Nair', city: 'Bengaluru', rating: 4, date: 'Sep 2026', text: 'Crowded at the top on weekends but the team handled it well.' },
    ],
  },
  {
    id: 'hampta-pass',
    name: 'Hampta Pass',
    region: 'Manali',
    state: 'Himachal Pradesh',
    operatorId: 'hpe',
    image: 'assets/images/trek3.jpg',
    gallery: ['assets/images/trek3.jpg', 'assets/images/trek-tadiandamol.jpg', 'assets/images/trek2.jpg'],
    days: 5,
    nights: 4,
    difficulty: 'Moderate',
    altitudeM: 4270,
    distanceKm: 26,
    price: 9999,
    originalPrice: 11999,
    rating: 4.9,
    reviewCount: 488,
    pickupCity: 'Manali',
    pickupPoint: 'Hadimba Temple Parking, Manali',
    departure: '2026-11-07T08:00:00+05:30',
    returnBy: 'Wed, 11 Nov · 6:00 PM',
    seatsLeft: 9,
    groupSize: 16,
    tags: ['Himalayan', 'Crossover trek', 'Chandratal option'],
    offer: { label: '₹2,000 off', code: 'HAMPTA2K' },
    route: [
      { time: 'Day 1 · 8:00 AM', title: 'Manali', detail: 'Drive to Jobra roadhead, short walk to Chika.', mode: 'jeep' },
      { time: 'Day 2', title: 'Balu ka Ghera', detail: 'Walk along the river to the base of the pass.', mode: 'camp' },
      { time: 'Day 3', title: 'Hampta Pass (4,270 m)', detail: 'Cross the pass into Lahaul, descend to Shea Goru.', mode: 'flag' },
      { time: 'Day 4', title: 'Chatru', detail: 'Easy walk out, optional drive to Chandratal Lake.', mode: 'walk' },
      { time: 'Day 5', title: 'Manali', detail: 'Drive back via Atal Tunnel.', mode: 'jeep' },
    ],
    itinerary: [
      { day: 1, title: 'Manali to Chika', detail: 'Drive to Jobra and walk 2 hours to the riverside camp at Chika.' },
      { day: 2, title: 'Chika to Balu ka Ghera', detail: 'Meadows and river crossings to the last camp before the pass.' },
      { day: 3, title: 'Cross Hampta Pass', detail: 'The big day: climb to the pass, see the stark Lahaul valley open up, descend to Shea Goru.' },
      { day: 4, title: 'Shea Goru to Chatru', detail: 'Gentle descent, then drive to Chandratal if the road is open.' },
      { day: 5, title: 'Back to Manali', detail: 'Return via Atal Tunnel by evening.' },
    ],
    inclusions: ['All transfers from Manali', '4 nights camping', 'All meals on trek', 'Permits and forest fees', 'Mules for common gear', 'Mountaineering-certified lead'],
    exclusions: ['Travel to Manali', 'Personal porter', 'Chandratal entry fee'],
    highlights: ['Green Kullu to desert Lahaul in one day', 'Optional Chandratal Lake', 'Small group of 16'],
    stay: { name: 'Riverside alpine camps', type: 'Dome tents, twin sharing', description: 'Camps at Chika, Balu ka Ghera and Shea Goru with toilet tents and a heated dining tent.', location: 'Hampta Valley, Kullu' },
    activities: ['Pass crossing', 'River crossings', 'Chandratal visit', 'Campfire evenings'],
    cancellation: HIMALAYAN_CANCELLATION,
    reviews: [
      { name: 'Ishaan Verma', city: 'Delhi', rating: 5, date: 'Jun 2026', text: 'Best organised Himalayan trek I have been on. The pass day is something else.' },
      { name: 'Ananya Ghosh', city: 'Pune', rating: 5, date: 'Jun 2026', text: 'Small group, great guides, hot soup every evening.' },
    ],
  },
  {
    id: 'dudhsagar',
    name: 'Dudhsagar Falls',
    region: 'Kulem',
    state: 'Goa',
    operatorId: 'wmt',
    image: 'assets/images/trek5.jpg',
    gallery: ['assets/images/trek5.jpg', 'assets/images/trek4.jpg'],
    days: 2,
    nights: 1,
    difficulty: 'Moderate',
    altitudeM: 310,
    distanceKm: 14,
    price: 3499,
    originalPrice: 3999,
    rating: 4.5,
    reviewCount: 731,
    pickupCity: 'Bengaluru',
    pickupPoint: 'Silk Board Junction, HSR side',
    departure: '2026-11-13T20:00:00+05:30',
    returnBy: 'Sun, 15 Nov · 7:00 AM',
    seatsLeft: 14,
    groupSize: 30,
    tags: ['Waterfall', 'Post-monsoon', 'Riverside camp'],
    route: [
      { time: 'Fri 8:00 PM', title: 'Silk Board, Bengaluru', detail: 'Sleeper bus to Castle Rock.', mode: 'bus' },
      { time: 'Sat 7:00 AM', title: 'Kulem', detail: 'Breakfast and jeep to the trail head.', mode: 'jeep' },
      { time: 'Sat 9:00 AM', title: 'Forest trail', detail: '7 km along the river through Bhagwan Mahavir sanctuary.', mode: 'walk' },
      { time: 'Sat 12:30 PM', title: 'Dudhsagar Falls', detail: 'Lunch and a swim in the pool below the falls.', mode: 'flag' },
    ],
    itinerary: [
      { day: 1, title: 'Trail to the falls', detail: 'River-side forest walk to the base of the four-tiered falls, then camp nearby.' },
      { day: 2, title: 'Riverside morning', detail: 'Slow breakfast, short nature walk, and bus back to Bengaluru.' },
    ],
    inclusions: ['Sleeper bus both ways', 'Jeep safari to trail head', 'Riverside camp, 4 meals', 'Sanctuary fees', 'Life jackets for the pool'],
    exclusions: ['Personal expenses', 'Camera fee at the falls (₹50)'],
    highlights: ['One of India\'s tallest waterfalls', 'Swim at the base', 'Railway bridge views'],
    stay: { name: 'Kulem riverside camp', type: 'Swiss tents, triple sharing', description: 'Tents along the Mandovi with a common washroom block.', location: 'Kulem, South Goa' },
    activities: ['Swimming', 'Jeep safari', 'Birdwatching'],
    cancellation: KARNATAKA_CANCELLATION,
    reviews: [
      { name: 'Nikhil Joshi', city: 'Bengaluru', rating: 4, date: 'Oct 2026', text: 'Falls were in full flow. Jeep ride was bumpy but fun.' },
    ],
  },
  {
    id: 'tadiandamol',
    name: 'Tadiandamol',
    region: 'Coorg',
    state: 'Karnataka',
    operatorId: 'crw',
    image: 'assets/images/trek-tadiandamol.jpg',
    gallery: ['assets/images/trek-tadiandamol.jpg', 'assets/images/trek4.jpg', 'assets/images/trek1.jpg'],
    days: 2,
    nights: 1,
    difficulty: 'Moderate',
    altitudeM: 1748,
    distanceKm: 16,
    price: 2699,
    originalPrice: 2999,
    rating: 4.6,
    reviewCount: 615,
    pickupCity: 'Bengaluru',
    pickupPoint: 'Mysuru Road Satellite Bus Stand',
    departure: '2026-11-06T22:30:00+05:30',
    returnBy: 'Sun, 8 Nov · 6:00 AM',
    seatsLeft: 18,
    groupSize: 26,
    tags: ['Weekend', 'Highest peak in Coorg', 'Coffee estate stay'],
    offer: { label: '10% off', code: 'COORG10' },
    route: [
      { time: 'Fri 10:30 PM', title: 'Satellite Bus Stand', detail: 'Overnight bus to Kakkabe.', mode: 'bus' },
      { time: 'Sat 6:00 AM', title: 'Kakkabe', detail: 'Coffee estate stay, breakfast.', mode: 'flag' },
      { time: 'Sat 8:00 AM', title: 'Nalknad Palace', detail: 'Trail starts past the old palace.', mode: 'walk' },
      { time: 'Sat 12:00 PM', title: 'Tadiandamol summit', detail: 'Shola forests and 360° views.', mode: 'flag' },
    ],
    itinerary: [
      { day: 1, title: 'Summit day', detail: 'Climb past Nalknad Palace through shola forest to the summit, back to the estate by evening.' },
      { day: 2, title: 'Estate morning', detail: 'Coffee plantation walk and Kodava lunch before heading home.' },
    ],
    inclusions: ['Bus both ways', 'Estate stay, 4 meals', 'Trek fees', 'Trek lead'],
    exclusions: ['Personal expenses', 'Insurance'],
    highlights: ['Highest peak in Coorg', 'Kodava food', 'Misty shola forests'],
    stay: { name: 'Kakkabe coffee estate', type: 'Cottages, 4 sharing', description: 'Cottages inside a working coffee estate with hot water and Wi-Fi.', location: 'Kakkabe, Kodagu' },
    activities: ['Estate walk', 'Campfire', 'Birdwatching'],
    cancellation: KARNATAKA_CANCELLATION,
    reviews: [
      { name: 'Divya Shetty', city: 'Mangaluru', rating: 5, date: 'Oct 2026', text: 'Mist rolling over the ridge the whole way up. Lovely estate stay.' },
      { name: 'Arvind K', city: 'Bengaluru', rating: 4, date: 'Sep 2026', text: 'Good pace for first-timers. Bus could have been more comfortable.' },
    ],
  },
];

export const BOOKINGS: Booking[] = [
  { id: 'TRK-7K2Q9M', trekId: 'kumara-parvatha', status: 'Upcoming', bookedOn: '2026-10-09', travellers: 2, amountPaid: 5798, seats: ['L4', 'L5'] },
  { id: 'TRK-3HX8TB', trekId: 'hampta-pass', status: 'Upcoming', bookedOn: '2026-10-02', travellers: 1, amountPaid: 9999, seats: ['Tent 3'] },
  { id: 'TRK-9PD4WE', trekId: 'skandagiri', status: 'Completed', bookedOn: '2026-08-28', travellers: 3, amountPaid: 3897, seats: ['12', '13', '14'] },
  { id: 'TRK-5LN6CR', trekId: 'kudremukh', status: 'Completed', bookedOn: '2026-07-14', travellers: 2, amountPaid: 6398, seats: ['U2', 'U3'] },
  { id: 'TRK-2VZ7JA', trekId: 'dudhsagar', status: 'Cancelled', bookedOn: '2026-07-01', travellers: 1, amountPaid: 3499, seats: ['L9'] },
];

export const CURRENT_USER = {
  name: 'Ananya Rao',
  firstName: 'Ananya',
  email: 'ananya.rao@example.com',
  phone: '98765 43210',
  gender: 'Female',
  dob: '1997-04-18',
  city: 'Bengaluru',
  treksDone: 7,
  kmWalked: 112,
  avatar: 'assets/images/profileman.png',
};

export const WEATHER = [
  { place: 'Kudremukh', condition: 'Light rain', icon: 'rainy-outline', temp: 19, high: 22, low: 16, advice: 'Carry a poncho and salt for leeches.' },
  { place: 'Coorg', condition: 'Misty', icon: 'cloudy-outline', temp: 21, high: 25, low: 17, advice: 'Good trekking weather, trails can be slippery.' },
  { place: 'Manali', condition: 'Clear skies', icon: 'sunny-outline', temp: 9, high: 14, low: 2, advice: 'Cold nights ahead, pack thermals.' },
  { place: 'Chikkaballapur', condition: 'Clear night', icon: 'moon-outline', temp: 18, high: 27, low: 15, advice: 'High chance of a sea of clouds at dawn.' },
];

export const FAQS = [
  { q: 'How do I get my ticket?', a: 'Your e-ticket is in My Bookings as soon as payment succeeds. We also send it to your email and WhatsApp.' },
  { q: 'Can I cancel or reschedule?', a: 'Yes. Open the booking in My Bookings and tap Cancel or Reschedule. The refund depends on the trek\'s cancellation policy.' },
  { q: 'When will I get my refund?', a: 'Refunds reach your original payment method in 5–7 working days. UPI refunds are usually faster.' },
  { q: 'What should I pack?', a: 'Each trek page lists what is included. Always carry a 30L backpack, 2 litres of water, a rain jacket and good trekking shoes.' },
  { q: 'Is it safe to trek solo?', a: 'Every group has a certified trek lead and a sweep. Many of our trekkers join solo. Women-only batches are marked on the trek page.' },
  { q: 'What if the trek is cancelled due to weather?', a: 'You get a full refund or a free reschedule, whichever you prefer.' },
];

export const PAYMENT_METHODS = [
  { id: 'phonepe', label: 'PhonePe', hint: 'UPI', logo: 'assets/Logos/phpay.png' },
  { id: 'paytm', label: 'Paytm', hint: 'UPI & wallet', logo: 'assets/Logos/paytm.png' },
  { id: 'upi', label: 'Other UPI ID', hint: 'name@bank', logo: 'assets/Logos/upi.png' },
  { id: 'card', label: 'Debit / credit card', hint: 'Visa, Mastercard, RuPay', logo: 'assets/Logos/credit-card.png' },
];

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Delhi', 'Goa', 'Gujarat', 'Himachal Pradesh', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
];

// ---------- helpers ----------

export function getTrek(id: string | null | undefined): Trek {
  return TREKS.find((t) => t.id === id) ?? TREKS[0];
}

export function getOperator(id: string): Operator {
  return OPERATORS.find((o) => o.id === id) ?? OPERATORS[0];
}

export function durationLabel(trek: Trek): string {
  if (trek.nights === 0) return 'Day trek';
  return `${trek.days}D / ${trek.nights}N`;
}

export function discountPercent(trek: Trek): number {
  return Math.round((1 - trek.price / trek.originalPrice) * 100);
}
