// import { Category, Package, User } from "../../models/Index.js";
import Category from "../models/CategoryModel.js";
import Package from "../models/PackageModel.js";
import MONGOOSE_CONNECTION from "../db/connection.js";

await Category.deleteMany();
const categories = await Category.insertMany([
  { name: "Family" },
  { name: "Group" },
  { name: "Individual" },
]);
console.log("category data successful");

await Package.deleteMany();
const packages = await Package.insertMany([
  {
    name: "The Bahamas (4-days)",
    image: "individual-basic.jpeg",
    categoryId: categories[2]._id,
    price: 800,
    packageDetails: [
      "A trip to the Bahamas invites you to experience idyllic islands boasting some of the clearest waters on the planet, powdery white sand beaches, and an array of underwater adventures. This archipelago, composed of over 700 islands and cays, lies in the Atlantic Ocean, offering a perfect blend of natural beauty, rich history, and vibrant culture.",
      "Activities: Nassau, the capital, is a hub for shopping, dining, and historical sites, including the pirate history at the Pirates of Nassau Museum. Adventure lovers can dive into the Exuma Cays Land and Sea Park to explore underwater caves and vibrant coral reefs. The Bahamas is also famous for its swimming pigs at Big Major Cay, a unique experience not to be missed. For a more laid-back experience, the pink sand beaches of Harbour Island or the tranquil waters of The Abacos are perfect for relaxation. Fishing, snorkeling, and sailing are also popular activities, taking advantage of the archipelago’s extensive marine environment.",
    ],
  },
  {
    name: "Cancun (4-days)",
    image: "individual-premium.jpeg",
    categoryId: categories[2]._id,
    price: 850,
    packageDetails: [
      "A trip to Cancún is an invitation to enjoy white sandy beaches, turquoise waters, and vibrant nightlife, along with a rich historical tapestry woven from Mayan ruins and Mexican culture. Located on the northeast coast of the Yucatán Peninsula in the Mexican state of Quintana Roo, Cancún is a gateway to the Riviera Maya, offering a perfect blend of natural beauty and cultural heritage.",
      "Activities: Lounge on the beaches of the Zona Hotelera, a long strip of resorts and white sands overlooking the Caribbean Sea. Dive or snorkel in the Great Maya Reef, the second-largest coral reef system in the world. Visit the ancient Mayan ruins of Chichén Itzá and Tulum, both within a few hours' drive, to marvel at the architectural prowess of the ancient civilization. Explore the underwater museum, MUSA, with over 500 life-sized sculptures submerged for aquatic observation. Experience the nightlife in Cancún's vibrant clubs and bars, offering everything from live music to spectacular dance shows.",
    ],
  },
  {
    name: "Jamaica (4-days)",
    image: "individual-platinum.jpeg",
    categoryId: categories[2]._id,
    price: 700,
    packageDetails: [
      "A trip to Jamaica offers a vibrant tapestry of lush landscapes, rich cultural heritage, and the unmistakable rhythm of reggae music. Known for its friendly locals, flavorful cuisine, and stunning beaches, Jamaica embodies the heart and soul of the Caribbean.",
      "Activities: Visit the Bob Marley Museum in Kingston to delve into the life of the reggae legend. Experience the natural beauty of the Blue Mountains, famous for their coffee plantations and hiking trails offering breathtaking views. Relax on the renowned Seven Mile Beach in Negril or take a dip in the refreshing waters of Dunn's River Falls near Ocho Rios. Explore the luminous lagoon at Glistening Waters, where the water glows at night due to bioluminescent microorganisms. Sample Jamaica’s rich cuisine, including jerk chicken, ackee and saltfish, and rum-infused desserts.",
    ],
  },
  {
    name: "Belize (4-days)",
    image: "group-basic.jpeg",
    categoryId: categories[1]._id,
    price: 750,
    packageDetails: [
      "A trip to Belize is an exploration into a world of unparalleled natural beauty, ancient Mayan ruins, and vibrant marine life. Nestled between Mexico and Guatemala, Belize offers a unique blend of rainforest richness, deep cultural heritage, and some of the world’s most spectacular underwater ecosystems.",
      "Activities: Dive or snorkel in the Belize Barrier Reef, the second-largest coral reef system in the world, especially at the Great Blue Hole for an unforgettable underwater adventure. Explore ancient Mayan ruins like Caracol and Xunantunich, offering a glimpse into the region's rich history. Visit the Cockscomb Basin Wildlife Sanctuary, known as a jaguar preserve, for hiking and wildlife spotting. Enjoy the laid-back island life on Caye Caulker or Ambergris Caye, with their beautiful beaches and water activities. Adventure seekers can also try cave tubing or zip-lining through the lush rainforest.",
    ],
  },
  {
    name: "Puerto Rico (4-days)",
    image: "group-premium.jpeg",
    categoryId: categories[1]._id,
    price: 800,
    packageDetails: [
      "A trip to Puerto Rico presents a vibrant blend of tropical beauty, rich history, and cultural diversity. As a U.S. territory, it offers an accessible Caribbean getaway without the need for a passport for U.S. citizens. Known as (La Isla del Encanto) (The Island of Enchantment), Puerto Rico charms visitors with its warm climate, historic landmarks, lush landscapes, and lively music and festivals.",
      "Activities: Explore the cobblestone streets and colorful buildings of Old San Juan, and visit the imposing forts of El Morro and San Cristóbal. Enjoy the vibrant nightlife and sample local cuisine, including mofongo and lechón asado. Venture to El Yunque National Forest for hiking and waterfall swimming, and experience the bioluminescent bays of Vieques or Fajardo by kayak at night. For beach lovers, Flamenco Beach on Culebra is a must-see for its crystal-clear waters and white sands. Adventure seekers can explore the Camuy River Cave Park or go surfing in Rincon.",
    ],
  },
  {
    name: "Maui (4-days)",
    image: "group-platinum.jpeg",
    categoryId: categories[1]._id,
    price: 900,
    packageDetails: [
      "A trip to Maui, the second-largest of the Hawaiian islands, is a deep dive into breathtaking natural beauty, rich culture, and adventurous experiences. Known as the (Valley Isle) for its large, fertile isthmus between two volcanoes, Maui boasts a diverse landscape from lush rainforests to volcanic craters and pristine beaches.",
      "Activities: Drive the scenic Road to Hana to experience jaw-dropping vistas, waterfalls, and black sand beaches. Visit Haleakalā National Park to witness the sunrise from the summit of a dormant volcano. Snorkel at Molokini Crater, a partially submerged volcanic crater teeming with marine life. Relax on the golden sands of Kaanapali Beach, or venture into Lahaina, a historic whaling village with lively entertainment and shopping. Cultural experiences like a traditional luau offer a glimpse into Hawaiian history and cuisine.",
    ],
  },
  {
    name: "Turks And Caicos (4-days)",
    image: "family-basic.jpg",
    categoryId: categories[0]._id,
    price: 1200,
    packageDetails: [
      "A getaway to the Turks and Caicos Islands is an invitation to indulge in some of the world’s most beautiful beaches and crystal-clear waters. This British Overseas Territory, located southeast of the Bahamas in the Atlantic Ocean, is a serene paradise ideal for beach lovers, divers, and those seeking a luxury island escape.",
      "Activities: The islands are famous for their exceptional snorkeling and diving sites, including the world-renowned barrier reef. Grace Bay Beach, often ranked among the top beaches globally, is perfect for sunbathing and watersports. Beyond the beach, you can go whale watching (in season), explore the Conch Bar Caves on Middle Caicos, or take a day trip to the uninhabited island of Little Water Cay to see the native rock iguanas. For a taste of local culture and history, visit the Turks and Caicos National Museum on Grand Turk.",
    ],
  },
  {
    name: "Zanzibar (4-days)",
    image: "family-premium.jpeg",
    categoryId: categories[0]._id,
    price: 950,
    packageDetails: [
      "A journey to Zanzibar, often called the Spice Island, promises an exotic blend of cultural richness and natural beauty. This Tanzanian archipelago in the Indian Ocean is renowned for its vibrant history, aromatic spice farms, and stunning beaches.",
      "Activities: Explore Stone Town, a UNESCO World Heritage site, with its labyrinthine alleys, ancient buildings, and bustling markets. Visit spice plantations to learn about the island's clove, nutmeg, cinnamon, and black pepper production. Enjoy snorkeling or diving in the clear, turquoise waters to discover vibrant coral reefs and marine life. Relax on powdery white-sand beaches or take a traditional dhow cruise at sunset.",
    ],
  },
  {
    name: "Galápagos Islands (4-days)",
    image: "family-platinum.jpeg",
    categoryId: categories[0]._id,
    price: 1100,
    packageDetails: [
      "A trip to the Galapagos Islands offers an unparalleled adventure into a world where nature reigns supreme. Located about 600 miles off the coast of Ecuador, this archipelago is a living museum of evolutionary changes, with a stunning variety of marine and land creatures that inspired Charles Darwin’s theory of natural selection.",
      "Activities: You can enjoy guided nature walks, snorkeling with sea lions, diving among hammerhead sharks, kayaking alongside turtles, and observing giant tortoises in their natural habitat. Each day brings direct encounters with unique species, including blue-footed boobies, marine iguanas, and perhaps even the rare Galapagos penguin.",
    ],
  },
]);

console.log("package data successful");

