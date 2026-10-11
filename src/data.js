export const attractions = [
  {
    id: 1,
    name: "Sani Pass",
    image: "https://tse4.mm.bing.net/th/id/OIP.ZR7JwAEHGmVVCjGZfnym8AHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    location: "Drakensberg, Eastern Lesotho",
    category: "Mountain",
    description: "A dramatic mountain pass connecting Lesotho to South Africa with breathtaking views and challenging 4x4 terrain.",
    activities: ["4x4 Tours", "Hiking", "Photography", "Bird Watching"],
    cost: "M 500 - M 1,200"
  },
  {
    id: 2,
    name: "Maletsunyane Falls",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Maletsunyanefalls.JPG/960px-Maletsunyanefalls.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    location: "Semonkong",
    category: "Waterfall",
    description: "One of the highest single-drop waterfalls in Africa at 192 metres, offering spectacular views and adventure activities.",
    activities: ["Abseiling", "Hiking", "Swimming", "Photography"],
    cost: "M 50 - M 150"
  },
  {
    id: 3,
    name: "Thaba Bosiu",
    image: "https://tse3.mm.bing.net/th/id/OIP.PSD9wwFIpc-cTjIRzKRtDwHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    location: "Maseru District",
    category: "Historical",
    description: "The historic mountain fortress of King Moshoeshoe I, founder of the Basotho nation. A sacred cultural site.",
    activities: ["Guided Tours", "Cultural Experience", "Hiking", "Museum Visit"],
    cost: "M 30 - M 80"
  },
  {
    id: 4,
    name: "Katse Dam",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Katse_Dam%2CLesotho%2CAfrica.jpg",
    location: "Thaba-Tseka",
    category: "Dam",
    description: "Africa's second largest double-curvature arch dam, a marvel of modern engineering set in stunning mountain scenery.",
    activities: ["Boat Cruises", "Dam Tours", "Fishing", "Photography"],
    cost: "M 100 - M 300"
  },
  {
    id: 5,
    name: "Sehlabathebe National Park",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Early_Morning_view_from_Sehlabathebe_House_-_panoramio.jpg/960px-Early_Morning_view_from_Sehlabathebe_House_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    location: "Qacha's Nek",
    category: "National Park",
    description: "A UNESCO World Heritage Site with unique rock formations, rare wildlife, and ancient San rock art.",
    activities: ["Hiking", "Camping", "Rock Art Viewing", "Fishing"],
    cost: "M 60 - M 200"
  },
  {
    id: 6,
    name: "Afriski Mountain Resort",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/AfriSki.jpg/960px-AfriSki.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    location: "Butha-Buthe",
    category: "Resort",
    description: "The only ski resort in Southern Africa, offering winter sports and year-round mountain activities.",
    activities: ["Skiing", "Snowboarding", "Mountain Biking", "Zip-lining"],
    cost: "M 400 - M 1,500"
  },
  {
    id: 7,
    name: "Liphofung Cave",
    image: "https://tse3.mm.bing.net/th/id/OIP.rHASYgVWa2AFLEtTv5WbwwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    location: "Butha-Buthe",
    category: "Historical",
    description: "A sandstone cave featuring ancient San rock paintings and significant cultural heritage of the Basotho people.",
    activities: ["Cave Tours", "Rock Art Viewing", "Cultural Experience"],
    cost: "M 20 - M 60"
  },
  {
    id: 8,
    name: "Mohale Dam",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Mohale_Dam_2008.jpg",
    location: "Maseru District",
    category: "Dam",
    description: "A stunning rock-fill dam with beautiful surrounding mountain scenery, perfect for day trips and picnics.",
    activities: ["Boat Cruises", "Hiking", "Picnicking", "Bird Watching"],
    cost: "M 80 - M 250"
  }
];

export const activities = [
  { name: "Hiking & Trekking", icon: "🥾", description: "Explore Lesotho's mountains on foot" },
  { name: "Abseiling", icon: "🧗", description: "Descend the mighty Maletsunyane Falls" },
  { name: "Skiing & Snowboarding", icon: "⛷️", description: "Winter sports at Afriski Resort" },
  { name: "Cultural Tours", icon: "🏘️", description: "Experience authentic Basotho culture" },
  { name: "4x4 Adventures", icon: "🚙", description: "Off-road mountain pass tours" },
  { name: "Pony Trekking", icon: "🐴", description: "Traditional Basotho pony rides" }
];

export const categories = ["All", "Mountain", "Waterfall", "Historical", "Dam", "National Park", "Resort"];
