const STORAGE_KEYS = {
  users: "verdantVaultUsers",
  currentUser: "verdantVaultCurrentUser",
  carts: "verdantVaultCarts",
  wishlists: "verdantVaultWishlists",
  orders: "verdantVaultOrders",
  subscribers: "verdantVaultSubscribers",
  theme: "verdantVaultTheme",
  recentlyViewed: "verdantVaultRecentlyViewed",
  coupons: "verdantVaultCoupons",
  contacts: "verdantVaultContacts"
};

const ORDER_STATUSES = [
  "Order Placed",
  "Confirmed",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered"
];

const PRODUCTS = [
  {
    id: "snake-plant",
    name: "Snake Plant Laurentii",
    category: "Air Purifying Plants",
    price: 699,
    description: "Architectural upright leaves that thrive on minimal maintenance and instantly sharpen modern interiors.",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://plantsguru.com/cdn/shop/files/Sansevieria_Trifasciata_Small_-_Snake_Plant.jpg?v=1746105034&width=1920",
      "https://m.media-amazon.com/images/I/71Ep8ftso1L._AC_UF1000,1000_QL80_.jpg"
    ],
    rating: 4.8,
    stock: 18,
    size: "Medium",
    sunlight: "Low light",
    environment: "Indoor",
    watering: "Water every 10 to 14 days when soil is dry.",
    potSize: "6 inch nursery pot",
    delivery: "Delivered in 2 to 4 days with a recycled planter sleeve.",
    benefits: "Filters indoor air, tolerates missed watering, and looks premium in bedrooms and offices.",
    care: "Keep in indirect light, rotate monthly, and avoid overwatering.",
    badge: "Best Seller",
    sold: 240,
    isNew: false,
    reviews: [
      { name: "Nikita", rating: 5, comment: "Stylish and almost impossible to mess up." },
      { name: "Harsh", rating: 4, comment: "Arrived healthy and packed really well." }
    ]
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    category: "Flowering Plants",
    price: 849,
    description: "Elegant glossy foliage with white blooms, perfect for soothing corners and work desks.",
    image: "https://radhakrishnaagriculture.in/cdn/shop/files/peacelily.jpg?v=1709184309",
    gallery: [
      "https://radhakrishnaagriculture.in/cdn/shop/files/peacelily.jpg?v=1709184309",
      "https://m.media-amazon.com/images/I/31ig1iX93JL._AC_UF1000,1000_QL80_.jpg",
      "https://m.media-amazon.com/images/I/71e-4qSIRbL.jpg"
    ],
    rating: 4.6,
    stock: 14,
    size: "Medium",
    sunlight: "Low light",
    environment: "Indoor",
    watering: "Keep soil lightly moist and water weekly.",
    potSize: "7 inch ceramic planter",
    delivery: "Delivered in 2 to 4 days with bloom-safe packaging.",
    benefits: "Offers lush leaves, subtle flowering, and excellent room freshness.",
    care: "Prefers shade to medium light and a little extra humidity.",
    badge: "Sale",
    sold: 148,
    isNew: true,
    reviews: [
      { name: "Ritika", rating: 5, comment: "Beautiful white flowers and strong roots." }
    ]
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 499,
    description: "Useful succulent with healing gel and sculptural leaves for sunny windowsills.",
    image: "https://www.healthyhouseplants.com/wp-content/uploads/2024/08/Aloe_Vera-1200x1200.jpg",
    gallery: [
      "https://www.healthyhouseplants.com/wp-content/uploads/2024/08/Aloe_Vera-1200x1200.jpg",
      "https://lalitenterprise.com/cdn/shop/files/Untitled_design_-_2024-11-28T211202.241.webp?v=1732808595"
    ],
    rating: 4.9,
    stock: 30,
    size: "Small",
    sunlight: "Direct sun",
    environment: "Both",
    watering: "Water deeply every 12 to 15 days.",
    potSize: "5 inch terracotta pot",
    delivery: "Delivered in 2 to 3 days.",
    benefits: "Great for low-maintenance spaces and wellness-focused households.",
    care: "Use gritty soil and avoid soggy roots.",
    badge: "Best Seller",
    sold: 260,
    isNew: false,
    reviews: [
      { name: "Vihaan", rating: 5, comment: "Healthy, compact, and perfect for my balcony." }
    ]
  },
  {
    id: "spider-plant",
    name: "Spider Plant",
    category: "Air Purifying Plants",
    price: 549,
    description: "Fast-growing striped foliage with playful baby shoots that cascade beautifully from shelves.",
    image: "https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg",
    gallery: [
      "https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg",
      "https://m.media-amazon.com/images/I/61bfaK6hWpL.jpg"
      ],
    rating: 4.5,
    stock: 22,
    size: "Medium",
    sunlight: "Bright indirect",
    environment: "Indoor",
    watering: "Water once a week and let excess drain fully.",
    potSize: "6 inch hanging pot",
    delivery: "Delivered in 2 to 4 days.",
    benefits: "Great beginner plant with fast growth and air-refreshing value.",
    care: "Trim browning tips and keep in bright indirect light.",
    badge: "New",
    sold: 132,
    isNew: true,
    reviews: [
      { name: "Karan", rating: 4, comment: "Leaves were vibrant and dense on arrival." }
    ]
  },
  {
    id: "money-plant",
    name: "Money Plant Marble",
    category: "Indoor Plants",
    price: 599,
    description: "A trailing favorite with marbled leaves that softens shelves, desks, and entryways.",
    image: "https://cdn.mos.cms.futurecdn.net/d9tY8NNENGY8SEqkPLSAiG.jpg",
    gallery: [
      "https://cdn.mos.cms.futurecdn.net/d9tY8NNENGY8SEqkPLSAiG.jpg",
      "https://assamonlinebazaar.com/wp-content/uploads/2025/06/IMAGE-1-13.webp"
    ],
    rating: 4.7,
    stock: 26,
    size: "Medium",
    sunlight: "Bright indirect",
    environment: "Indoor",
    watering: "Water when topsoil is dry, usually every 6 to 8 days.",
    potSize: "6 inch self-watering pot",
    delivery: "Delivered in 2 to 4 days.",
    benefits: "Classic trailing plant that handles average indoor conditions really well.",
    care: "Pinch long vines to encourage bushier growth.",
    badge: "Trending",
    sold: 214,
    isNew: false,
    reviews: [
      { name: "Megha", rating: 5, comment: "Very full plant and the marbling is gorgeous." }
    ]
  },
  {
    id: "rubber-plant",
    name: "Rubber Plant Burgundy",
    category: "Indoor Plants",
    price: 1099,
    description: "Glossy deep-toned foliage that makes a bold statement in minimalist interiors.",
    image: "https://greenkin.in/cdn/shop/products/rubber-plant-burgundy-large-cotton-pink-greenkin.jpg?v=1668108333&width=900",
    gallery: [
      "https://greenkin.in/cdn/shop/products/rubber-plant-burgundy-large-cotton-pink-greenkin.jpg?v=1668108333&width=900",
      "https://www.urbanplant.in/cdn/shop/files/Primary2webp_34ef1f94-3622-4b16-9a22-4e898b311c12.webp?v=1736411306",
      "https://dengarden.com/.image/MTk2NjA3OTg5Nzk5NDYyODc5/the-ultimate-guide-to-ficus-elasticarubberplant-care-propagation-and-benefits.png?io=1&profile=w2560&ar=4-3"
    ],
    rating: 4.6,
    stock: 10,
    size: "Large",
    sunlight: "Bright indirect",
    environment: "Indoor",
    watering: "Water every 7 to 10 days, less in winter.",
    potSize: "9 inch fiber pot",
    delivery: "Delivered in 3 to 5 days.",
    benefits: "Adds height, drama, and glossy texture to clean interiors.",
    care: "Wipe leaves occasionally and avoid cold drafts.",
    badge: "Designer Pick",
    sold: 121,
    isNew: true,
    reviews: [
      { name: "Rohan", rating: 4, comment: "Large glossy leaves and premium finishing pot." }
    ]
  },
  {
    id: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    category: "Indoor Plants",
    price: 1499,
    description: "The iconic split-leaf plant for spacious homes, lounges, and creative studios.",
    image: "https://m.media-amazon.com/images/I/61tFPeyRujL._AC_UF1000,1000_QL80_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61tFPeyRujL._AC_UF1000,1000_QL80_.jpg",
      "https://www.myjunglehome.com.au/cdn/shop/products/monstera-deliciosa-plant-13cm-pot-my-jungle-home-595924_900x.jpg?v=1671202717"
     ],
    rating: 4.9,
    stock: 11,
    size: "Large",
    sunlight: "Bright indirect",
    environment: "Indoor",
    watering: "Water once top 2 inches of soil have dried.",
    potSize: "10 inch decorative pot",
    delivery: "Delivered in 3 to 5 days with stake support.",
    benefits: "Creates a luxurious tropical focal point in larger spaces.",
    care: "Supports faster growth with moss poles and periodic feeding.",
    badge: "Best Seller",
    sold: 272,
    isNew: false,
    reviews: [
      { name: "Ananya", rating: 5, comment: "A showstopper piece for my living room." },
      { name: "Dev", rating: 5, comment: "Healthy roots and larger than expected." }
    ]
  },
  {
    id: "lavender",
    name: "Lavender Bush",
    category: "Outdoor Plants",
    price: 799,
    description: "Fragrant purple blooms that bring soft color and calming scent to sunny balconies.",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1509423350716-97f2360af9e4?auto=format&fit=crop&w=1000&q=80"
    ],
    rating: 4.5,
    stock: 15,
    size: "Medium",
    sunlight: "Direct sun",
    environment: "Outdoor",
    watering: "Water deeply but infrequently, around every 7 days.",
    potSize: "8 inch clay planter",
    delivery: "Delivered in 2 to 4 days.",
    benefits: "Fragrant blooms, pollinator appeal, and spa-like mood outdoors.",
    care: "Needs sun, airflow, and dry soil between watering.",
    badge: "Fresh Bloom",
    sold: 112,
    isNew: true,
    reviews: [
      { name: "Ishita", rating: 4, comment: "Lovely fragrance and very giftable." }
    ]
  },
  {
    id: "tulsi",
    name: "Holy Basil Tulsi",
    category: "Medicinal Plants",
    price: 399,
    description: "Sacred aromatic herb prized for wellness rituals and everyday kitchen gardens.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfnu7ExyZQemjUsyHjnTYDzG1dh_Vs9uc5g&s",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfnu7ExyZQemjUsyHjnTYDzG1dh_Vs9uc5g&s",
      "https://i0.wp.com/wowplant.in/wp-content/uploads/2026/01/Grow-Bags-and-Seeds-14.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbVSRAQ0xc1sM5VfiUyI8Z-mX72R6MMaYQA&s"
    ],
    rating: 4.8,
    stock: 35,
    size: "Small",
    sunlight: "Direct sun",
    environment: "Outdoor",
    watering: "Water regularly and keep soil lightly moist.",
    potSize: "5 inch nursery pot",
    delivery: "Delivered in 2 to 3 days.",
    benefits: "A practical medicinal herb for balconies and traditional homes.",
    care: "Enjoys sun, pruning, and frequent harvesting.",
    badge: "Daily Essential",
    sold: 205,
    isNew: false,
    reviews: [
      { name: "Madhav", rating: 5, comment: "Very fresh plant and grew quickly." }
    ]
  },
  {
    id: "bonsai-tree",
    name: "Mini Bonsai Tree",
    category: "Bonsai",
    price: 1599,
    description: "A refined tabletop bonsai that brings calm focus and sculptural beauty to desks.",
    image: "https://i.ebayimg.com/images/g/rugAAOSw7fFgZR9L/s-l1200.jpg",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0356/0076/0877/files/AdobeStock_179294033_1024x1024.jpg?v=1717144004",
      "https://www.shopgardenrepublic.com/cdn/shop/articles/bonsai_main.jpg?v=1627678915",
      "https://i.ebayimg.com/images/g/rugAAOSw7fFgZR9L/s-l1200.jpg"
    ],
    rating: 4.7,
    stock: 9,
    size: "Small",
    sunlight: "Partial sun",
    environment: "Indoor",
    watering: "Check moisture every 2 to 3 days and water lightly.",
    potSize: "Ceramic bonsai tray",
    delivery: "Delivered in 3 to 5 days with protective framing.",
    benefits: "Mindful and gift-worthy statement for offices and study corners.",
    care: "Needs bright light, trimming, and steady watering discipline.",
    badge: "Premium",
    sold: 88,
    isNew: true,
    reviews: [
      { name: "Kavya", rating: 5, comment: "A beautiful gift and very thoughtfully packed." }
    ]
  },
  {
    id: "bamboo-plant",
    name: "Bamboo Plant",
    category: "Indoor Plants",
    price: 749,
    description: "Lucky bamboo stems arranged for zen energy and clean desktop styling.",
    image: "https://www.urbanplant.in/cdn/shop/files/Primary_webp_42f895f0-0a85-4fd0-ba2c-08b246c831bc.webp?v=1734074274",
    gallery: [
      "https://www.urbanplant.in/cdn/shop/files/Primary_webp_42f895f0-0a85-4fd0-ba2c-08b246c831bc.webp?v=1734074274",
      "https://www.fnp.com/images/pr/l/v20241216124647/lucky-bamboo-plant-in-rustic-red-pot_1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7t1shA7E7CxqERFXba3RP9umSSTGm0kBig&s"
    ],
    rating: 4.5,
    stock: 20,
    size: "Small",
    sunlight: "Low light",
    environment: "Indoor",
    watering: "Refresh water weekly or water soil lightly once a week.",
    potSize: "Glass vase arrangement",
    delivery: "Delivered in 2 to 4 days.",
    benefits: "Compact, symbolic, and easy to style in modern workspaces.",
    care: "Keep in filtered light and refresh water regularly if grown hydroponically.",
    badge: "Office Pick",
    sold: 145,
    isNew: false,
    reviews: [
      { name: "Sneha", rating: 4, comment: "Perfect desk piece and super easy to keep." }
    ]
  },
  {
    id: "orchid",
    name: "Phalaenopsis Orchid",
    category: "Flowering Plants",
    price: 1399,
    description: "Graceful orchid blooms with boutique styling for dining tables and gifting moments.",
    image: "https://masonhome.in/cdn/shop/files/366_1ea7f125-a59b-4187-a73f-ee52a4bcac16.png?v=1759133721",
    gallery: [
      "https://masonhome.in/cdn/shop/files/366_1ea7f125-a59b-4187-a73f-ee52a4bcac16.png?v=1759133721",
      "https://masonhome.in/cdn/shop/files/374_67b68c07-5479-47ec-9bfc-5265ca4f4193.png?v=1759133641",
      "https://b2812202.smushcdn.com/2812202/wp-content/uploads/2022/10/captivating-blue-orchids-600x600.png?lossy=1&strip=1&webp=1"
    ],
    rating: 4.5,
    stock: 8,
    size: "Medium",
    sunlight: "Bright indirect",
    environment: "Indoor",
    watering: "Water weekly and allow bark medium to drain fully.",
    potSize: "7 inch orchid pot",
    delivery: "Delivered in 3 to 5 days with bloom cage protection.",
    benefits: "Elegant flowering gift plant with polished boutique appeal.",
    care: "Avoid direct sun and water carefully around roots.",
    badge: "Premium Bloom",
    sold: 101,
    isNew: true,
    reviews: [
      { name: "Tara", rating: 4, comment: "Looks luxurious and arrived with fresh blooms." }
    ]
  },
  {
    id: "bird-of-paradise",
    name: "Bird of Paradise",
    category: "Outdoor Plants",
    price: 1699,
    description: "Large dramatic leaves with an elevated tropical silhouette for patios and bright rooms.",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://mygreenscape.ca/cdn/shop/articles/DALL_E_2024-07-04_09.10.52_-_A_stunning_image_of_a_healthy_White_Bird_of_Paradise_plant_in_a_natural_indoor_setting._The_plant_is_in_full_bloom_with_large_glossy_green_leaves_and.webp?v=1720066969",
      "https://budsnblush.com/cdn/shop/files/BOPWHITEbnb.jpg?v=1772999330&width=360",
      "https://nurserylive.com/cdn/shop/products/nurserylive-plants-bird-of-paradise-plant-16968640528524.jpg?v=1634214531"
    ],
    rating: 4.6,
    stock: 6,
    size: "Large",
    sunlight: "Direct sun",
    environment: "Both",
    watering: "Water thoroughly every 5 to 7 days in active growth.",
    potSize: "10 inch grow pot",
    delivery: "Delivered in 3 to 6 days.",
    benefits: "Creates an upscale resort feel indoors or out.",
    care: "Needs bright sun, warmth, and enough room to spread.",
    badge: "Statement Plant",
    sold: 87,
    isNew: true,
    reviews: [
      { name: "Mira", rating: 5, comment: "Huge leaves and such a premium presence." }
    ]
  },
  {
    id: "rosemary",
    name: "Rosemary Herb Pot",
    category: "Medicinal Plants",
    price: 459,
    description: "Aromatic herb ideal for sunny kitchen windows and fresh home cooking.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyb2euM-aRxZVSPUwUFkodS30C73sTGTHALQ&s",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyb2euM-aRxZVSPUwUFkodS30C73sTGTHALQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQYYk9uMtYUUwHeBo43LRQYQyzxGD-ECgPg&s",
      "https://kyari.co/cdn/shop/articles/4.jpg?v=1722840710"
    ],
    rating: 4.4,
    stock: 24,
    size: "Small",
    sunlight: "Direct sun",
    environment: "Outdoor",
    watering: "Water lightly every 4 to 5 days.",
    potSize: "5 inch herb pot",
    delivery: "Delivered in 2 to 3 days.",
    benefits: "Kitchen-friendly herb with fragrance and daily use value.",
    care: "Needs plenty of sun and trims well with frequent harvests.",
    badge: "Kitchen Garden",
    sold: 105,
    isNew: false,
    reviews: [
      { name: "Disha", rating: 4, comment: "Fresh herb and very useful in cooking." }
    ]
  }
];

const BLOG_POSTS = [
  {
    title: "5 signs your indoor plant wants more light",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80",
    summary: "Learn how leaf color, stem stretch, and slower growth can help you reposition plants before they decline."
  },
  {
    title: "How to style three plants like a designer",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=900&q=80",
    summary: "Mix heights, textures, and trailing forms to create a layered premium look in living rooms and entryways."
  },
  {
    title: "The easiest beginner plants for busy schedules",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1463154545680-d59320fd685d?auto=format&fit=crop&w=900&q=80",
    summary: "Snake plant, ZZ plant, pothos, and aloe vera lead the pack when you want beauty without daily upkeep."
  }
];

const TESTIMONIALS = [
  {
    name: "Rhea Kapoor",
    role: "Interior Stylist",
    text: "The product pages feel premium and the care details are actually helpful. It feels closer to a real boutique shopping experience than a basic demo store."
  },
  {
    name: "Aarav Nair",
    role: "Apartment Gardener",
    text: "I loved that the cart, wishlist, and orders stayed saved after refresh. The whole flow from browsing to order tracking is smooth and believable."
  },
  {
    name: "Mitali Shah",
    role: "Gift Shopper",
    text: "The floral picks and bonsai section feel polished, and the checkout plus order history flow made the project look production-ready in my portfolio."
  }
];

const FAQS = [
  {
    question: "Are these real plant products or just demo items?",
    answer: "This is a frontend demo with realistic product information and fully working localStorage-based shopping flows."
  },
  {
    question: "How does order tracking work here?",
    answer: "Every placed order gets a tracking timeline that updates through demo delivery stages over time for a realistic experience."
  },
  {
    question: "Can I cancel an order after placing it?",
    answer: "Yes. Orders can be cancelled until they reach the shipped stage. After that, the cancel action is disabled."
  },
  {
    question: "Is my data stored permanently?",
    answer: "Your demo data stays in localStorage on this browser, including users, cart items, wishlist, addresses, and order history."
  }
];

const CATEGORY_ICONS = {
  "Indoor Plants": "ri-home-5-line",
  "Outdoor Plants": "ri-sun-foggy-line",
  "Air Purifying Plants": "ri-windy-line",
  Succulents: "ri-seedling-line",
  "Flowering Plants": "ri-flower-line",
  Bonsai: "ri-landscape-line",
  "Medicinal Plants": "ri-first-aid-kit-line"
};

const CATEGORY_IMAGES = {
  "Indoor Plants": "https://www.yuvaflowers.com/cdn/shop/files/charming-indoor-plants-manual-yuvaflowers-bestgifts-1207-default-title-42166363881752.jpg?v=1711898526",
  "Outdoor Plants": "https://plantshub.in/wp-content/uploads/2025/12/Choosing-the-Best-Outdoor-Plants-Online-for-Indian-Climate.jpg.webp",
  "Air Purifying Plants": "https://plantscart.com/wp-content/uploads/2021/09/IMG_6287-new-scaled.jpg",
  Succulents: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=1000&q=80",
  "Flowering Plants": "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1000&q=80",
  Bonsai: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80",
  "Medicinal Plants": "https://www.goanobserver.in/wp-content/uploads/2020/08/MGHM.jpg"
};

const appState = {
  route: "home",
  authTab: "login",
  filters: {
    search: "",
    category: "all",
    price: "all",
    size: "all",
    sunlight: "all",
    environment: "all",
    availability: "all",
    sort: "featured"
  },
  productModal: {
    productId: null,
    imageIndex: 0
  }
};

const elements = {};
let revealObserver;

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  applyStoredTheme();
  seedDemoState();
  bindEvents();
  populateCategoryFilter();
  initializeRevealObserver();
  initializeHeroRotation();
  syncFromHash();
  renderApp();
  handlePaymentMethodChange({ target: document.querySelector('input[name="paymentMethod"]:checked') });
  window.setTimeout(() => elements.loader.classList.add("is-hidden"), 750);
});

function cacheElements() {
  elements.loader = byId("loader");
  elements.toastStack = byId("toastStack");
  elements.siteHeader = byId("siteHeader");
  elements.mainNav = byId("mainNav");
  elements.menuToggle = byId("menuToggle");
  elements.themeToggle = byId("themeToggle");
  elements.authActionBtn = byId("authActionBtn");
  elements.wishlistCount = byId("wishlistCount");
  elements.cartCount = byId("cartCount");
  elements.featuredGrid = byId("featuredGrid");
  elements.categoryGrid = byId("categoryGrid");
  elements.trendingGrid = byId("trendingGrid");
  elements.bestSellerGrid = byId("bestSellerGrid");
  elements.blogGrid = byId("blogGrid");
  elements.recentlyViewedGrid = byId("recentlyViewedGrid");
  elements.testimonialGrid = byId("testimonialGrid");
  elements.faqList = byId("faqList");
  elements.newsletterForm = byId("newsletterForm");
  elements.newsletterEmail = byId("newsletterEmail");
  elements.shopGrid = byId("shopGrid");
  elements.shopEmptyState = byId("shopEmptyState");
  elements.shopResultsText = byId("shopResultsText");
  elements.searchInput = byId("searchInput");
  elements.categoryFilter = byId("categoryFilter");
  elements.priceFilter = byId("priceFilter");
  elements.sizeFilter = byId("sizeFilter");
  elements.sunlightFilter = byId("sunlightFilter");
  elements.environmentFilter = byId("environmentFilter");
  elements.availabilityFilter = byId("availabilityFilter");
  elements.sortFilter = byId("sortFilter");
  elements.clearFiltersBtn = byId("clearFiltersBtn");
  elements.wishlistGrid = byId("wishlistGrid");
  elements.wishlistEmptyState = byId("wishlistEmptyState");
  elements.cartItems = byId("cartItems");
  elements.cartEmptyState = byId("cartEmptyState");
  elements.cartSummary = byId("cartSummary");
  elements.cartSummaryCount = byId("cartSummaryCount");
  elements.couponInput = byId("couponInput");
  elements.applyCouponBtn = byId("applyCouponBtn");
  elements.checkoutBtn = byId("checkoutBtn");
  elements.bundleGrid = byId("bundleGrid");
  elements.checkoutForm = byId("checkoutForm");
  elements.paymentOptions = byId("paymentOptions");
  elements.cardFields = byId("cardFields");
  elements.upiFields = byId("upiFields");
  elements.checkoutSummary = byId("checkoutSummary");
  elements.ordersList = byId("ordersList");
  elements.ordersEmptyState = byId("ordersEmptyState");
  elements.profileName = byId("profileName");
  elements.profileEmail = byId("profileEmail");
  elements.profileAvatar = byId("profileAvatar");
  elements.profileStats = byId("profileStats");
  elements.savedAddressCard = byId("savedAddressCard");
  elements.editProfileBtn = byId("editProfileBtn");
  elements.logoutBtn = byId("logoutBtn");
  elements.profileModal = byId("profileModal");
  elements.profileForm = byId("profileForm");
  elements.profileFormName = byId("profileFormName");
  elements.profileFormEmail = byId("profileFormEmail");
  elements.profileFormPhone = byId("profileFormPhone");
  elements.profileFormPassword = byId("profileFormPassword");
  elements.contactForm = byId("contactForm");
  elements.loginForm = byId("loginForm");
  elements.registerForm = byId("registerForm");
  elements.productModal = byId("productModal");
  elements.productModalContent = byId("productModalContent");
}

function bindEvents() {
  window.addEventListener("hashchange", syncFromHash);
  window.addEventListener("scroll", handleHeaderState);
  handleHeaderState();

  elements.menuToggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });

  elements.themeToggle.addEventListener("click", toggleTheme);
  elements.authActionBtn.addEventListener("click", handleAuthAction);
  elements.clearFiltersBtn.addEventListener("click", resetFilters);
  elements.applyCouponBtn.addEventListener("click", applyCouponCode);
  elements.checkoutBtn.addEventListener("click", handleCheckoutStart);
  elements.editProfileBtn.addEventListener("click", openProfileModal);
  elements.logoutBtn.addEventListener("click", logoutUser);

  [
    elements.searchInput,
    elements.categoryFilter,
    elements.priceFilter,
    elements.sizeFilter,
    elements.sunlightFilter,
    elements.environmentFilter,
    elements.availabilityFilter,
    elements.sortFilter
  ].forEach((input) => {
    input.addEventListener("input", syncFiltersFromInputs);
    input.addEventListener("change", syncFiltersFromInputs);
  });

  elements.newsletterForm.addEventListener("submit", handleNewsletterSubmit);
  elements.contactForm.addEventListener("submit", handleContactSubmit);
  elements.loginForm.addEventListener("submit", handleLoginSubmit);
  elements.registerForm.addEventListener("submit", handleRegisterSubmit);
  elements.checkoutForm.addEventListener("submit", handlePlaceOrder);
  elements.profileForm.addEventListener("submit", handleProfileSubmit);

  document.querySelectorAll("[data-route-link], [data-route-btn]").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.preventDefault();
      const route = node.dataset.routeLink || node.dataset.routeBtn;
      navigate(route);
    });
  });

  document.querySelectorAll("[data-scroll-target], [data-scroll-to]").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.preventDefault();
      const target = node.dataset.scrollTarget || node.dataset.scrollTo;
      scrollToTarget(target);
    });
  });

  document.querySelectorAll("[data-auth-tab]").forEach((tab) => {
    tab.addEventListener("click", () => switchAuthTab(tab.dataset.authTab));
  });

  document.querySelectorAll("[data-close-modal]").forEach((node) => {
    node.addEventListener("click", closeProductModal);
  });

  document.querySelectorAll("[data-close-profile-modal]").forEach((node) => {
    node.addEventListener("click", closeProfileModal);
  });

  elements.paymentOptions.addEventListener("change", handlePaymentMethodChange);

  document.body.addEventListener("click", handleGlobalClick);
}

function handleGlobalClick(event) {
  const quickViewBtn = event.target.closest("[data-product-id]");
  if (quickViewBtn) {
    const action = quickViewBtn.dataset.action;
    const productId = quickViewBtn.dataset.productId;
    if (action === "details") {
      openProductModal(productId);
      return;
    }
    if (action === "cart") {
      addToCart(productId, 1);
      return;
    }
    if (action === "wishlist") {
      toggleWishlist(productId);
      return;
    }
    if (action === "move-to-cart") {
      addToCart(productId, 1);
      removeFromWishlist(productId, false);
      showToast("Moved to cart", "success");
      renderApp();
      return;
    }
    if (action === "quick-category") {
      appState.filters.category = productId;
      syncFilterInputs();
      navigate("shop");
      renderShop();
      return;
    }
    if (action === "buy-now") {
      addToCart(productId, getDetailQuantity(), false);
      handleCheckoutStart();
      return;
    }
  }

  const galleryThumb = event.target.closest("[data-gallery-index]");
  if (galleryThumb) {
    appState.productModal.imageIndex = Number(galleryThumb.dataset.galleryIndex);
    renderProductModal();
    return;
  }

  const qtyButton = event.target.closest("[data-qty-action]");
  if (qtyButton) {
    const { qtyAction, productId } = qtyButton.dataset;
    if (qtyAction === "increase") {
      updateCartQuantity(productId, 1);
    } else if (qtyAction === "decrease") {
      updateCartQuantity(productId, -1);
    } else if (qtyAction === "detail-increase") {
      updateDetailQuantity(1);
    } else if (qtyAction === "detail-decrease") {
      updateDetailQuantity(-1);
    }
    return;
  }

  const orderButton = event.target.closest("[data-order-action]");
  if (orderButton) {
    const orderId = orderButton.dataset.orderId;
    const action = orderButton.dataset.orderAction;
    if (action === "cancel") {
      cancelOrder(orderId);
      return;
    }
    if (action === "reorder") {
      reorderItems(orderId);
      return;
    }
  }

  const authQuickView = event.target.closest("[data-product-quick-view]");
  if (authQuickView) {
    openProductModal(authQuickView.dataset.productQuickView);
  }
}

function seedDemoState() {
  if (!localStorage.getItem(STORAGE_KEYS.users)) {
    const demoUser = {
      id: "user-demo",
      fullName: "Demo Gardener",
      email: "demo@verdantvault.com",
      phone: "9876543210",
      password: "Demo@123",
      addresses: [
        {
          fullName: "Demo Gardener",
          phone: "9876543210",
          street: "22 Garden Residency",
          city: "Bengaluru",
          state: "Karnataka",
          zip: "560001",
          notes: "Leave at reception if unavailable."
        }
      ],
      createdAt: new Date().toISOString()
    };

    writeStorage(STORAGE_KEYS.users, [demoUser]);
  }

  const ordersMap = readStorage(STORAGE_KEYS.orders, {});
  if (!ordersMap["demo@verdantvault.com"]) {
    ordersMap["demo@verdantvault.com"] = [
      {
        id: "VV102948",
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
        items: [
          { productId: "snake-plant", quantity: 1, price: 699 },
          { productId: "money-plant", quantity: 2, price: 599 }
        ],
        subtotal: 1897,
        deliveryFee: 0,
        discount: 190,
        total: 1707,
        paymentMethod: "UPI",
        address: {
          fullName: "Demo Gardener",
          phone: "9876543210",
          street: "22 Garden Residency",
          city: "Bengaluru",
          state: "Karnataka",
          zip: "560001",
          notes: "Leave at reception if unavailable."
        },
        cancelled: false
      },
      {
        id: "VV103552",
        createdAt: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
        items: [
          { productId: "monstera-deliciosa", quantity: 1, price: 1499 },
          { productId: "calathea", quantity: 1, price: 1299 }
        ],
        subtotal: 2798,
        deliveryFee: 0,
        discount: 0,
        total: 2798,
        paymentMethod: "Cash on Delivery",
        address: {
          fullName: "Demo Gardener",
          phone: "9876543210",
          street: "22 Garden Residency",
          city: "Bengaluru",
          state: "Karnataka",
          zip: "560001",
          notes: "Call on arrival."
        },
        cancelled: false
      }
    ];
    writeStorage(STORAGE_KEYS.orders, ordersMap);
  }

  const wishlists = readStorage(STORAGE_KEYS.wishlists, {});
  if (!wishlists["demo@verdantvault.com"]) {
    wishlists["demo@verdantvault.com"] = ["fiddle-leaf-fig", "orchid", "bonsai-tree"];
    writeStorage(STORAGE_KEYS.wishlists, wishlists);
  }

  const recent = readStorage(STORAGE_KEYS.recentlyViewed, {});
  if (!recent.__guest__) {
    recent.__guest__ = ["snake-plant", "monstera-deliciosa", "peace-lily"];
    writeStorage(STORAGE_KEYS.recentlyViewed, recent);
  }
}

function syncFromHash() {
  const route = (window.location.hash || "#home").replace("#", "");
  navigate(route, { updateHash: false, silent: true });
}

function navigate(route, options = {}) {
  const { updateHash = true, silent = false } = options;
  const validRoutes = ["home", "shop", "wishlist", "cart", "checkout", "orders", "profile", "about", "contact", "auth"];
  const nextRoute = validRoutes.includes(route) ? route : "home";
  const restricted = ["checkout", "orders", "profile"];

  if (restricted.includes(nextRoute) && !getCurrentUser()) {
    appState.route = "auth";
    if (!silent) {
      showToast("Please log in to access that section.", "error");
    }
  } else if (nextRoute === "checkout" && getCart().length === 0) {
    appState.route = "cart";
    if (!silent) {
      showToast("Your cart is empty. Add some plants first.", "error");
    }
  } else {
    appState.route = nextRoute;
  }

  if (updateHash) {
    window.location.hash = appState.route;
  }

  document.body.classList.remove("menu-open");
  renderRoute();
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderRoute() {
  document.querySelectorAll(".route-view").forEach((view) => {
    view.classList.toggle("is-active", view.dataset.route === appState.route);
  });

  document.querySelectorAll(".main-nav a[data-route-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.routeLink === appState.route);
  });

  if (appState.route === "auth") {
    switchAuthTab(appState.authTab, true);
  }
}

function renderApp() {
  renderHeader();
  renderHome();
  renderShop();
  renderWishlist();
  renderCart();
  renderCheckout();
  renderOrders();
  renderProfile();
  renderProductModal();
  observeReveals();
}

function renderHeader() {
  const user = getCurrentUser();
  elements.authActionBtn.textContent = user ? `Logout` : "Login";
  elements.authActionBtn.title = user ? `${user.fullName}` : "Login";
  elements.cartCount.textContent = String(getCartCount());
  elements.wishlistCount.textContent = String(getWishlist().length);
  elements.themeToggle.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="ri-moon-clear-line"></i>'
    : '<i class="ri-sun-line"></i>';
}

function renderHome() {
  const featured = PRODUCTS.filter((product) => product.isNew).slice(0, 4);
  const trending = [...PRODUCTS].sort((a, b) => b.rating + b.sold / 100 - (a.rating + a.sold / 100)).slice(0, 4);
  const bestSellers = [...PRODUCTS].sort((a, b) => b.sold - a.sold).slice(0, 4);
  const recent = getRecentlyViewedProducts().slice(0, 4);

  elements.featuredGrid.innerHTML = featured.map((product) => createProductCard(product)).join("");
  elements.categoryGrid.innerHTML = getCategories().map((category) => createCategoryCard(category)).join("");
  elements.trendingGrid.innerHTML = trending.map((product) => createCompactCard(product)).join("");
  elements.bestSellerGrid.innerHTML = bestSellers.map((product) => createCompactCard(product)).join("");
  elements.blogGrid.innerHTML = BLOG_POSTS.map(createBlogCard).join("");
  elements.recentlyViewedGrid.innerHTML = recent.length
    ? recent.map((product) => createCompactCard(product)).join("")
    : `<div class="compact-card"><div class="avatar"><i class="ri-leaf-line"></i></div><div><h3>No recent views yet</h3><small>Open a product to keep track of what caught your eye.</small></div></div>`;
  elements.testimonialGrid.innerHTML = TESTIMONIALS.map(createTestimonialCard).join("");
  elements.faqList.innerHTML = FAQS.map(createFaqCard).join("");
}

function renderShop() {
  const filteredProducts = getFilteredProducts();
  elements.shopResultsText.textContent = `Showing ${filteredProducts.length} plant${filteredProducts.length === 1 ? "" : "s"}`;
  elements.shopGrid.innerHTML = filteredProducts.map((product) => createProductCard(product)).join("");
  elements.shopEmptyState.classList.toggle("hidden", filteredProducts.length > 0);
}

function renderWishlist() {
  const products = getWishlist().map(getProductById).filter(Boolean);
  elements.wishlistGrid.innerHTML = products.map((product) => createProductCard(product, { context: "wishlist" })).join("");
  elements.wishlistEmptyState.classList.toggle("hidden", products.length > 0);
}

function renderCart() {
  const cart = getCartDetailed();
  const summary = getCartSummary();
  const hasItems = cart.length > 0;

  elements.cartItems.innerHTML = cart.map(createCartItemCard).join("");
  elements.cartEmptyState.classList.toggle("hidden", hasItems);
  elements.cartItems.classList.toggle("hidden", !hasItems);
  elements.cartSummary.parentElement.classList.toggle("hidden", !hasItems);
  elements.cartSummaryCount.textContent = `${summary.itemCount} item${summary.itemCount === 1 ? "" : "s"}`;
  elements.cartSummary.innerHTML = [
    createSummaryRow("Subtotal", formatCurrency(summary.subtotal)),
    createSummaryRow("Delivery", summary.deliveryFee === 0 ? "Free" : formatCurrency(summary.deliveryFee)),
    createSummaryRow("Discount", `- ${formatCurrency(summary.discount)}`),
    createSummaryRow("Total", formatCurrency(summary.total), true)
  ].join("");
  elements.couponInput.value = getActiveCoupon();
  renderBundleSuggestions();
}

function renderCheckout() {
  const user = getCurrentUser();
  const summary = getCartSummary();
  const hasItems = getCart().length > 0;

  if (user) {
    const address = user.addresses?.[0];
    byId("checkoutName").value = address?.fullName || user.fullName || "";
    byId("checkoutPhone").value = address?.phone || user.phone || "";
    byId("checkoutStreet").value = address?.street || "";
    byId("checkoutCity").value = address?.city || "";
    byId("checkoutState").value = address?.state || "";
    byId("checkoutZip").value = address?.zip || "";
    byId("checkoutNotes").value = address?.notes || "";
  }

  elements.checkoutSummary.innerHTML = hasItems
    ? `
      <div class="summary-list">
        ${getCartDetailed().map((item) => `
          <div class="summary-row">
            <span>${item.name} x ${item.quantity}</span>
            <strong>${formatCurrency(item.price * item.quantity)}</strong>
          </div>
        `).join("")}
        ${createSummaryRow("Subtotal", formatCurrency(summary.subtotal))}
        ${createSummaryRow("Delivery", summary.deliveryFee === 0 ? "Free" : formatCurrency(summary.deliveryFee))}
        ${createSummaryRow("Discount", `- ${formatCurrency(summary.discount)}`)}
        ${createSummaryRow("Total", formatCurrency(summary.total), true)}
      </div>
      <p class="note">Estimated delivery: ${getDeliveryEstimate()}</p>
    `
    : `<p class="muted">Your cart is empty. Add items to preview checkout.</p>`;
}

function renderOrders() {
  const user = getCurrentUser();
  if (!user) {
    elements.ordersList.innerHTML = "";
    elements.ordersEmptyState.classList.add("hidden");
    return;
  }

  const orders = [...getOrders()].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  elements.ordersList.innerHTML = orders.map(createOrderCard).join("");
  elements.ordersEmptyState.classList.toggle("hidden", orders.length > 0);
}

function renderProfile() {
  const user = getCurrentUser();
  if (!user) {
    elements.profileName.textContent = "Guest Shopper";
    elements.profileEmail.textContent = "Sign in to manage your plant account";
    elements.profileAvatar.textContent = "VV";
    elements.editProfileBtn.textContent = "Open Login";
    elements.logoutBtn.textContent = "Browse Home";
    elements.profileStats.innerHTML = [
      createProfileStat("Cart", getCartCount()),
      createProfileStat("Wishlist", getWishlist().length),
      createProfileStat("Orders", 0)
    ].join("");
    elements.savedAddressCard.innerHTML = `<p class="muted">Log in to save your delivery address and profile details.</p>`;
    return;
  }

  const orders = getOrders();
  const address = user.addresses?.[0];
  elements.profileName.textContent = user.fullName;
  elements.profileEmail.textContent = user.email;
  elements.profileAvatar.textContent = getInitials(user.fullName);
  elements.editProfileBtn.textContent = "Edit Profile";
  elements.logoutBtn.textContent = "Logout";
  elements.profileStats.innerHTML = [
    createProfileStat("Cart", getCartCount()),
    createProfileStat("Wishlist", getWishlist().length),
    createProfileStat("Orders", orders.length)
  ].join("");
  elements.savedAddressCard.innerHTML = address
    ? `
      <h3>${address.fullName}</h3>
      <p class="muted">${address.street}, ${address.city}, ${address.state} - ${address.zip}</p>
      <p class="muted">${address.phone}</p>
      <p class="muted">${address.notes || "No delivery notes added."}</p>
    `
    : `<p class="muted">No saved address yet. Place your first order to store your default delivery location.</p>`;
}

function renderBundleSuggestions() {
  const cartProducts = getCartDetailed().map((item) => getProductById(item.id));
  const categoryMatches = cartProducts.length
    ? PRODUCTS.filter((product) => !getCart().some((cartItem) => cartItem.productId === product.id) && cartProducts.some((cartProduct) => cartProduct.category === product.category))
    : [];
  const bundles = (categoryMatches.length ? categoryMatches : [...PRODUCTS].sort((a, b) => b.sold - a.sold)).slice(0, 4);
  elements.bundleGrid.innerHTML = bundles.map((product) => createCompactCard(product)).join("");
}

function renderProductModal() {
  if (!appState.productModal.productId) {
    elements.productModal.classList.add("hidden");
    return;
  }

  const product = getProductById(appState.productModal.productId);
  if (!product) {
    closeProductModal();
    return;
  }

  const related = PRODUCTS.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 3);
  const imageIndex = Math.min(appState.productModal.imageIndex, product.gallery.length - 1);
  const selectedImage = product.gallery[imageIndex];

  elements.productModalContent.innerHTML = `
    <div class="detail-gallery">
      <div class="detail-gallery__main">
        <img src="${selectedImage}" alt="${product.name}">
      </div>
      <div class="detail-gallery__thumbs">
        ${product.gallery.map((image, index) => `
          <button type="button" class="${index === imageIndex ? "is-active" : ""}" data-gallery-index="${index}">
            <img src="${image}" alt="${product.name} thumbnail ${index + 1}">
          </button>
        `).join("")}
      </div>
    </div>

    <div class="detail-panel">
      <div class="detail-head">
        <div>
          <div class="detail-meta">
            <span class="product-badge">${product.badge}</span>
          </div>
          <h2>${product.name}</h2>
        </div>
        <strong>${formatCurrency(product.price)}</strong>
      </div>

      <div class="detail-meta">
        <span>${renderStars(product.rating)} ${product.rating}</span>
        <span>${product.category}</span>
        <span>${product.environment}</span>
        <span>${product.size}</span>
      </div>

      <p class="muted">${product.description}</p>

      <div class="detail-extra">
        <span class="stock-pill ${product.stock > 8 ? "stock-pill--ok" : "stock-pill--low"}">${product.stock > 8 ? "In stock" : "Low stock"}</span>
        <span class="status-pill"><i class="ri-truck-line"></i> ${getDeliveryEstimate()}</span>
      </div>

      <div class="detail-block">
        <h3>Benefits</h3>
        <p class="muted">${product.benefits}</p>
      </div>

      <div class="detail-block">
        <h3>Care instructions</h3>
        <p class="muted">${product.care}</p>
        <div class="detail-meta">
          <span><i class="ri-drop-line"></i> ${product.watering}</span>
          <span><i class="ri-sun-line"></i> ${product.sunlight}</span>
          <span><i class="ri-layout-grid-line"></i> ${product.potSize}</span>
        </div>
      </div>

      <div class="detail-block">
        <h3>Delivery info</h3>
        <p class="muted">${product.delivery}</p>
      </div>

      <div class="detail-actions">
        <div class="qty-picker">
          <button type="button" data-qty-action="detail-decrease">-</button>
          <strong id="detailQuantity">1</strong>
          <button type="button" data-qty-action="detail-increase">+</button>
        </div>
        <button class="btn btn--primary" type="button" data-action="cart" data-product-id="${product.id}">Add to Cart</button>
        <button class="btn btn--secondary" type="button" data-action="buy-now" data-product-id="${product.id}">Buy Now</button>
        <button class="icon-btn--soft" type="button" data-action="wishlist" data-product-id="${product.id}" aria-label="Save to wishlist">
          <i class="${getWishlist().includes(product.id) ? "ri-heart-3-fill" : "ri-heart-3-line"}"></i>
        </button>
      </div>

      <div class="detail-block">
        <h3>Ratings and reviews</h3>
        <div class="detail-related">
          ${product.reviews.map((review) => `
            <div class="faq-item">
              <div class="status-head">
                <strong>${review.name}</strong>
                <span>${renderStars(review.rating)}</span>
              </div>
              <p>${review.comment}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="detail-block">
        <h3>Related plants</h3>
        <div class="detail-related">
          ${related.map((item) => createCompactCard(item)).join("")}
        </div>
      </div>
    </div>
  `;

  appState.productModal.imageIndex = imageIndex;
  elements.productModal.classList.remove("hidden");
}

function populateCategoryFilter() {
  const options = getCategories()
    .map((category) => `<option value="${category.name}">${category.name}</option>`)
    .join("");
  elements.categoryFilter.innerHTML = `<option value="all">All categories</option>${options}`;
}

function syncFiltersFromInputs() {
  appState.filters.search = elements.searchInput.value.trim().toLowerCase();
  appState.filters.category = elements.categoryFilter.value;
  appState.filters.price = elements.priceFilter.value;
  appState.filters.size = elements.sizeFilter.value;
  appState.filters.sunlight = elements.sunlightFilter.value;
  appState.filters.environment = elements.environmentFilter.value;
  appState.filters.availability = elements.availabilityFilter.value;
  appState.filters.sort = elements.sortFilter.value;
  renderShop();
}

function syncFilterInputs() {
  elements.searchInput.value = appState.filters.search;
  elements.categoryFilter.value = appState.filters.category;
  elements.priceFilter.value = appState.filters.price;
  elements.sizeFilter.value = appState.filters.size;
  elements.sunlightFilter.value = appState.filters.sunlight;
  elements.environmentFilter.value = appState.filters.environment;
  elements.availabilityFilter.value = appState.filters.availability;
  elements.sortFilter.value = appState.filters.sort;
}

function resetFilters() {
  appState.filters = {
    search: "",
    category: "all",
    price: "all",
    size: "all",
    sunlight: "all",
    environment: "all",
    availability: "all",
    sort: "featured"
  };
  syncFilterInputs();
  renderShop();
}

function getFilteredProducts() {
  let filtered = [...PRODUCTS];

  if (appState.filters.search) {
    filtered = filtered.filter((product) => {
      const haystack = `${product.name} ${product.description} ${product.category} ${product.environment}`.toLowerCase();
      return haystack.includes(appState.filters.search);
    });
  }

  if (appState.filters.category !== "all") {
    filtered = filtered.filter((product) => product.category === appState.filters.category);
  }

  if (appState.filters.price !== "all") {
    const [min, max] = appState.filters.price.split("-").map(Number);
    filtered = filtered.filter((product) => product.price >= min && product.price <= max);
  }

  if (appState.filters.size !== "all") {
    filtered = filtered.filter((product) => product.size === appState.filters.size);
  }

  if (appState.filters.sunlight !== "all") {
    filtered = filtered.filter((product) => product.sunlight === appState.filters.sunlight);
  }

  if (appState.filters.environment !== "all") {
    filtered = filtered.filter((product) => product.environment === appState.filters.environment || product.environment === "Both");
  }

  if (appState.filters.availability === "in-stock") {
    filtered = filtered.filter((product) => product.stock > 8);
  }

  if (appState.filters.availability === "low-stock") {
    filtered = filtered.filter((product) => product.stock <= 8);
  }

  switch (appState.filters.sort) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      filtered.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.sold - a.sold);
      break;
    case "best-selling":
      filtered.sort((a, b) => b.sold - a.sold);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filtered.sort((a, b) => Number(Boolean(b.badge)) - Number(Boolean(a.badge)) || b.rating - a.rating);
  }

  return filtered;
}

function handleAuthAction() {
  if (getCurrentUser()) {
    logoutUser();
  } else {
    navigate("auth");
  }
}

function switchAuthTab(tab, skipRender = false) {
  appState.authTab = tab;
  document.querySelectorAll(".auth-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.authTab === tab);
  });
  elements.loginForm.classList.toggle("hidden", tab !== "login");
  elements.registerForm.classList.toggle("hidden", tab !== "register");
  if (!skipRender && appState.route !== "auth") {
    navigate("auth");
  }
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const email = elements.newsletterEmail.value.trim().toLowerCase();
  if (!isValidEmail(email)) {
    showToast("Please enter a valid email address.", "error");
    return;
  }

  const subscribers = readStorage(STORAGE_KEYS.subscribers, []);
  if (!subscribers.includes(email)) {
    subscribers.push(email);
    writeStorage(STORAGE_KEYS.subscribers, subscribers);
  }
  elements.newsletterForm.reset();
  showToast("Subscribed successfully. Fresh offers are on the way.", "success");
}

function handleContactSubmit(event) {
  event.preventDefault();
  const payload = {
    name: byId("contactName").value.trim(),
    email: byId("contactEmail").value.trim().toLowerCase(),
    message: byId("contactMessage").value.trim(),
    createdAt: new Date().toISOString()
  };

  if (!payload.name || !isValidEmail(payload.email) || payload.message.length < 10) {
    showToast("Please complete the contact form properly.", "error");
    return;
  }

  const contacts = readStorage(STORAGE_KEYS.contacts, []);
  contacts.push(payload);
  writeStorage(STORAGE_KEYS.contacts, contacts);
  elements.contactForm.reset();
  showToast("Your message has been sent. We’ll get back to you soon.", "success");
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const email = byId("loginEmail").value.trim().toLowerCase();
  const password = byId("loginPassword").value;
  const users = getUsers();
  const user = users.find((item) => item.email === email && item.password === password);

  if (!user) {
    showToast("Invalid email or password.", "error");
    return;
  }

  writeStorage(STORAGE_KEYS.currentUser, user.email);
  migrateGuestDataToUser(user.email);
  elements.loginForm.reset();
  showToast(`Welcome back, ${user.fullName.split(" ")[0]}!`, "success");
  navigate("home");
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const fullName = byId("registerName").value.trim();
  const email = byId("registerEmail").value.trim().toLowerCase();
  const phone = byId("registerPhone").value.trim();
  const password = byId("registerPassword").value;
  const confirmPassword = byId("registerConfirmPassword").value;

  if (fullName.length < 3) {
    showToast("Full name should be at least 3 characters.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showToast("Enter a valid email address.", "error");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    showToast("Phone number must be 10 digits.", "error");
    return;
  }

  if (password.length < 6) {
    showToast("Password should be at least 6 characters.", "error");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Passwords do not match.", "error");
    return;
  }

  const users = getUsers();
  if (users.some((user) => user.email === email)) {
    showToast("An account with that email already exists.", "error");
    return;
  }

  const newUser = {
    id: `user-${Date.now()}`,
    fullName,
    email,
    phone,
    password,
    addresses: [],
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  writeStorage(STORAGE_KEYS.users, users);
  writeStorage(STORAGE_KEYS.currentUser, email);
  migrateGuestDataToUser(email);
  elements.registerForm.reset();
  switchAuthTab("login", true);
  showToast("Account created successfully.", "success");
  navigate("home");
}

function logoutUser() {
  if (!getCurrentUser()) {
    navigate("home");
    return;
  }
  localStorage.removeItem(STORAGE_KEYS.currentUser);
  showToast("You have been logged out.", "success");
  closeProfileModal();
  navigate("home");
}

function handleCheckoutStart() {
  if (!getCurrentUser()) {
    showToast("Please log in before checkout.", "error");
    navigate("auth");
    return;
  }

  if (getCart().length === 0) {
    showToast("Your cart is empty.", "error");
    navigate("cart");
    return;
  }

  navigate("checkout");
}

function handlePaymentMethodChange(event) {
  const method = event.target.value;
  document.querySelectorAll(".payment-card").forEach((card) => {
    card.classList.toggle("is-active", card.querySelector("input").checked);
  });
  elements.cardFields.classList.toggle("hidden", method !== "Card Payment");
  elements.upiFields.classList.toggle("hidden", method !== "UPI");
}

function handlePlaceOrder(event) {
  event.preventDefault();
  const user = getCurrentUser();
  const cart = getCart();

  if (!user || cart.length === 0) {
    showToast("Add products and log in before placing an order.", "error");
    return;
  }

  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  if (paymentMethod === "Card Payment") {
    if (!byId("cardNumber").value.trim() || !byId("cardExpiry").value.trim() || !byId("cardCvv").value.trim()) {
      showToast("Please complete your card payment details.", "error");
      return;
    }
  }

  if (paymentMethod === "UPI" && !byId("upiId").value.trim()) {
    showToast("Please enter your UPI ID.", "error");
    return;
  }

  const address = {
    fullName: byId("checkoutName").value.trim(),
    phone: byId("checkoutPhone").value.trim(),
    street: byId("checkoutStreet").value.trim(),
    city: byId("checkoutCity").value.trim(),
    state: byId("checkoutState").value.trim(),
    zip: byId("checkoutZip").value.trim(),
    notes: byId("checkoutNotes").value.trim()
  };

  if (Object.values(address).slice(0, 6).some((value) => !value)) {
    showToast("Please fill in all required shipping details.", "error");
    return;
  }

  const summary = getCartSummary();
  const order = {
    id: `VV${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    items: cart.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: getProductById(item.productId).price
    })),
    subtotal: summary.subtotal,
    deliveryFee: summary.deliveryFee,
    discount: summary.discount,
    total: summary.total,
    paymentMethod,
    address,
    cancelled: false
  };

  const orders = readStorage(STORAGE_KEYS.orders, {});
  orders[user.email] = [order, ...(orders[user.email] || [])];
  writeStorage(STORAGE_KEYS.orders, orders);

  persistUser({
    ...user,
    phone: address.phone,
    addresses: [address]
  });

  setCart([]);
  setActiveCoupon("");
  elements.checkoutForm.reset();
  document.querySelector('input[name="paymentMethod"][value="Cash on Delivery"]').checked = true;
  handlePaymentMethodChange({ target: document.querySelector('input[name="paymentMethod"][value="Cash on Delivery"]') });
  showToast("Order placed successfully.", "success");
  navigate("orders");
}

function handleProfileSubmit(event) {
  event.preventDefault();
  const user = getCurrentUser();
  if (!user) {
    showToast("Please log in to update your profile.", "error");
    return;
  }

  const updatedUser = {
    ...user,
    fullName: elements.profileFormName.value.trim(),
    phone: elements.profileFormPhone.value.trim()
  };

  if (elements.profileFormPassword.value.trim()) {
    updatedUser.password = elements.profileFormPassword.value.trim();
  }

  persistUser(updatedUser);
  closeProfileModal();
  showToast("Profile updated successfully.", "success");
  renderApp();
}

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) {
    return;
  }
  appState.productModal.productId = productId;
  appState.productModal.imageIndex = 0;
  trackRecentView(productId);
  renderProductModal();
}

function closeProductModal() {
  appState.productModal.productId = null;
  appState.productModal.imageIndex = 0;
  elements.productModal.classList.add("hidden");
}

function openProfileModal() {
  const user = getCurrentUser();
  if (!user) {
    showToast("Please log in to edit your profile.", "error");
    navigate("auth");
    return;
  }

  elements.profileFormName.value = user.fullName;
  elements.profileFormEmail.value = user.email;
  elements.profileFormPhone.value = user.phone;
  elements.profileFormPassword.value = "";
  elements.profileModal.classList.remove("hidden");
}

function closeProfileModal() {
  elements.profileModal.classList.add("hidden");
}

function addToCart(productId, quantity = 1, rerender = true) {
  const product = getProductById(productId);
  if (!product) {
    return;
  }

  const cart = [...getCart()];
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  setCart(cart);
  if (rerender) {
    showToast(`${product.name} added to cart.`, "success");
    renderApp();
  }
}

function updateCartQuantity(productId, delta) {
  const cart = [...getCart()];
  const item = cart.find((entry) => entry.productId === productId);
  if (!item) {
    return;
  }
  item.quantity += delta;
  if (item.quantity <= 0) {
    const nextCart = cart.filter((entry) => entry.productId !== productId);
    setCart(nextCart);
  } else {
    setCart(cart);
  }
  renderApp();
}

function toggleWishlist(productId) {
  const wishlist = [...getWishlist()];
  const product = getProductById(productId);
  if (!product) {
    return;
  }

  if (wishlist.includes(productId)) {
    setWishlist(wishlist.filter((id) => id !== productId));
    showToast(`${product.name} removed from wishlist.`, "success");
  } else {
    wishlist.unshift(productId);
    setWishlist([...new Set(wishlist)]);
    showToast(`${product.name} saved to wishlist.`, "success");
  }
  renderApp();
}

function removeFromWishlist(productId, rerender = true) {
  setWishlist(getWishlist().filter((id) => id !== productId));
  if (rerender) {
    renderApp();
  }
}

function applyCouponCode() {
  const code = elements.couponInput.value.trim().toUpperCase();
  if (!code) {
    showToast("Enter a coupon code to apply.", "error");
    return;
  }

  if (code !== "GREEN10") {
    showToast("That coupon code is not valid.", "error");
    return;
  }

  setActiveCoupon(code);
  renderCart();
  renderCheckout();
  showToast("Coupon applied successfully.", "success");
}

function cancelOrder(orderId) {
  const orders = getOrders();
  const order = orders.find((item) => item.id === orderId);
  if (!order) {
    return;
  }

  if (!canCancelOrder(order)) {
    showToast("This order can no longer be cancelled.", "error");
    return;
  }

  order.cancelled = true;
  persistOrders(orders);
  showToast("Order cancelled successfully.", "success");
  renderOrders();
  renderProfile();
}

function reorderItems(orderId) {
  const order = getOrders().find((item) => item.id === orderId);
  if (!order) {
    return;
  }

  const cart = [...getCart()];
  order.items.forEach((orderItem) => {
    const existing = cart.find((entry) => entry.productId === orderItem.productId);
    if (existing) {
      existing.quantity += orderItem.quantity;
    } else {
      cart.push({ productId: orderItem.productId, quantity: orderItem.quantity });
    }
  });
  setCart(cart);
  showToast("Items added back to your cart.", "success");
  navigate("cart");
}

function createProductCard(product, options = {}) {
  const { context = "shop" } = options;
  const inWishlist = getWishlist().includes(product.id);
  const stockClass = product.stock > 8 ? "stock-pill--ok" : "stock-pill--low";
  const stockLabel = product.stock > 8 ? "In stock" : `Only ${product.stock} left`;

  return `
    <article class="product-card reveal">
      <div class="product-card__media">
        <img src="${product.image}" alt="${product.name}">
        <span class="product-badge">${product.badge}</span>
      </div>
      <div class="product-card__body">
        <div class="product-card__top">
          <h3>${product.name}</h3>
          <strong>${formatCurrency(product.price)}</strong>
        </div>
        <p class="product-meta">${product.category} • ${product.environment}</p>
        <p class="product-card__desc">${product.description}</p>
        <div class="product-card__rating">
          <span class="star-row">${renderStars(product.rating)}</span>
          <span>${product.rating}</span>
          <span>${product.sunlight}</span>
        </div>
        <span class="stock-pill ${stockClass}">${stockLabel}</span>
        <div class="product-card__actions">
          <button class="btn btn--primary" type="button" data-action="cart" data-product-id="${product.id}">Add to Cart</button>
          ${context === "wishlist"
            ? `<button class="btn btn--ghost" type="button" data-action="move-to-cart" data-product-id="${product.id}">Move to Cart</button>`
            : `<button class="btn btn--ghost" type="button" data-action="details" data-product-id="${product.id}">View Details</button>`
          }
          <button class="icon-btn--soft" type="button" data-action="${context === "wishlist" ? "wishlist" : "wishlist"}" data-product-id="${product.id}" aria-label="Toggle wishlist">
            <i class="${inWishlist ? "ri-heart-3-fill" : "ri-heart-3-line"}"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

function createCategoryCard(category) {
  return `
    <button class="category-card reveal" type="button" data-action="quick-category" data-product-id="${category.name}">
      <img src="${CATEGORY_IMAGES[category.name] || PRODUCTS[0].image}" alt="${category.name}">
      <span class="category-card__icon"><i class="${CATEGORY_ICONS[category.name] || "ri-plant-line"}"></i></span>
      <div class="category-card__content">
        <h3>${category.name}</h3>
        <p class="muted">${category.count} curated plants</p>
      </div>
    </button>
  `;
}

function createCompactCard(product) {
  return `
    <button class="compact-card reveal" type="button" data-action="details" data-product-id="${product.id}">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h3>${product.name}</h3>
        <small>${product.category}</small>
        <small>${formatCurrency(product.price)}</small>
      </div>
    </button>
  `;
}

function createBlogCard(post) {
  return `
    <article class="blog-card reveal">
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-card__body">
        <p class="eyebrow">${post.readTime}</p>
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
      </div>
    </article>
  `;
}

function createTestimonialCard(item) {
  return `
    <article class="testimonial-card reveal">
      <div class="testimonial-card__head">
        <div class="avatar">${getInitials(item.name)}</div>
        <div>
          <h3>${item.name}</h3>
          <p class="muted">${item.role}</p>
        </div>
      </div>
      <p>${item.text}</p>
    </article>
  `;
}

function createFaqCard(item) {
  return `
    <article class="faq-item reveal">
      <h3>${item.question}</h3>
      <p>${item.answer}</p>
    </article>
  `;
}

function createCartItemCard(item) {
  return `
    <article class="cart-item reveal">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item__body">
        <div class="detail-head">
          <div>
            <h3>${item.name}</h3>
            <p class="cart-item__meta">${item.category} • ${item.sunlight} • ${item.environment}</p>
          </div>
          <strong>${formatCurrency(item.price * item.quantity)}</strong>
        </div>
        <p class="muted">${item.description}</p>
        <div class="cart-item__actions">
          <div class="qty-picker">
            <button type="button" data-qty-action="decrease" data-product-id="${item.id}">-</button>
            <strong>${item.quantity}</strong>
            <button type="button" data-qty-action="increase" data-product-id="${item.id}">+</button>
          </div>
          <button class="btn btn--ghost" type="button" data-qty-action="decrease" data-product-id="${item.id}">Remove</button>
        </div>
      </div>
    </article>
  `;
}

function createOrderCard(order) {
  const statusIndex = getOrderStatusIndex(order);
  const statusLabel = order.cancelled ? "Cancelled" : ORDER_STATUSES[statusIndex];
  const orderClass = order.cancelled
    ? "order-pill--cancelled"
    : statusIndex >= 5
      ? "order-pill--confirmed"
      : "order-pill--processing";

  return `
    <article class="order-card reveal">
      <div class="order-card__top">
        <div>
          <h3>Order ${order.id}</h3>
          <p class="muted">${formatDate(order.createdAt)}</p>
        </div>
        <span class="order-pill ${orderClass}">${statusLabel}</span>
      </div>

      <div class="order-card__meta">
        <span><strong>Total:</strong> ${formatCurrency(order.total)}</span>
        <span><strong>Payment:</strong> ${order.paymentMethod}</span>
        <span><strong>Address:</strong> ${order.address.city}, ${order.address.state}</span>
      </div>

      ${order.cancelled ? `<p class="muted">This order was cancelled before dispatch.</p>` : createTimeline(order, statusIndex)}

      <div class="order-item-list">
        ${order.items.map((item) => {
          const product = getProductById(item.productId);
          return `
            <div class="order-item">
              <span>${product.name} x ${item.quantity}</span>
              <strong>${formatCurrency(item.price * item.quantity)}</strong>
            </div>
          `;
        }).join("")}
      </div>

      <div class="detail-actions">
        <button class="btn btn--ghost" type="button" data-order-action="reorder" data-order-id="${order.id}">Reorder</button>
        <button class="btn btn--primary" type="button" data-order-action="cancel" data-order-id="${order.id}" ${canCancelOrder(order) ? "" : "disabled"}>Cancel Order</button>
      </div>
    </article>
  `;
}

function createTimeline(order, statusIndex) {
  return `
    <div class="timeline">
      ${ORDER_STATUSES.map((status, index) => `
        <div class="timeline-step ${index < statusIndex ? "is-complete" : ""} ${index === statusIndex ? "is-active" : ""}">
          <div class="timeline-dot"></div>
          <span>${status}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function createSummaryRow(label, value, isTotal = false) {
  return `<div class="summary-row ${isTotal ? "summary-row--total" : ""}"><span>${label}</span><strong>${value}</strong></div>`;
}

function createProfileStat(label, value) {
  return `<div class="profile-stat"><strong>${value}</strong><p class="muted">${label}</p></div>`;
}

function getCategories() {
  const map = PRODUCTS.reduce((accumulator, product) => {
    accumulator[product.category] = (accumulator[product.category] || 0) + 1;
    return accumulator;
  }, {});
  return Object.entries(map).map(([name, count]) => ({ name, count }));
}

function getProductById(productId) {
  return PRODUCTS.find((product) => product.id === productId);
}

function getCurrentUser() {
  const email = readStorage(STORAGE_KEYS.currentUser, null);
  return getUsers().find((user) => user.email === email) || null;
}

function getUsers() {
  return readStorage(STORAGE_KEYS.users, []);
}

function persistUser(updatedUser) {
  const users = getUsers().map((user) => user.email === updatedUser.email ? updatedUser : user);
  writeStorage(STORAGE_KEYS.users, users);
}

function getScopeKey() {
  return getCurrentUser()?.email || "__guest__";
}

function getCart() {
  const carts = readStorage(STORAGE_KEYS.carts, {});
  return carts[getScopeKey()] || [];
}

function setCart(items) {
  const carts = readStorage(STORAGE_KEYS.carts, {});
  carts[getScopeKey()] = items;
  writeStorage(STORAGE_KEYS.carts, carts);
}

function getWishlist() {
  const wishlists = readStorage(STORAGE_KEYS.wishlists, {});
  return wishlists[getScopeKey()] || [];
}

function setWishlist(items) {
  const wishlists = readStorage(STORAGE_KEYS.wishlists, {});
  wishlists[getScopeKey()] = items;
  writeStorage(STORAGE_KEYS.wishlists, wishlists);
}

function getOrders() {
  const user = getCurrentUser();
  if (!user) {
    return [];
  }
  const orders = readStorage(STORAGE_KEYS.orders, {});
  return orders[user.email] || [];
}

function persistOrders(items) {
  const user = getCurrentUser();
  if (!user) {
    return;
  }
  const orders = readStorage(STORAGE_KEYS.orders, {});
  orders[user.email] = items;
  writeStorage(STORAGE_KEYS.orders, orders);
}

function getCartDetailed() {
  return getCart()
    .map((item) => {
      const product = getProductById(item.productId);
      return product ? { ...product, id: product.id, quantity: item.quantity } : null;
    })
    .filter(Boolean);
}

function getCartSummary() {
  const items = getCartDetailed();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 1999 ? 0 : 149;
  const coupon = getActiveCoupon();
  const discount = coupon === "GREEN10" ? Math.round(subtotal * 0.1) : 0;
  return {
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal,
    deliveryFee,
    discount,
    total: Math.max(subtotal + deliveryFee - discount, 0)
  };
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function getActiveCoupon() {
  const coupons = readStorage(STORAGE_KEYS.coupons, {});
  return coupons[getScopeKey()] || "";
}

function setActiveCoupon(code) {
  const coupons = readStorage(STORAGE_KEYS.coupons, {});
  coupons[getScopeKey()] = code;
  writeStorage(STORAGE_KEYS.coupons, coupons);
}

function getRecentlyViewedProducts() {
  const viewedMap = readStorage(STORAGE_KEYS.recentlyViewed, {});
  const ids = viewedMap[getScopeKey()] || viewedMap.__guest__ || [];
  return ids.map(getProductById).filter(Boolean);
}

function trackRecentView(productId) {
  const viewedMap = readStorage(STORAGE_KEYS.recentlyViewed, {});
  const scope = getScopeKey();
  const uniqueIds = [productId, ...(viewedMap[scope] || []).filter((id) => id !== productId)].slice(0, 6);
  viewedMap[scope] = uniqueIds;
  writeStorage(STORAGE_KEYS.recentlyViewed, viewedMap);
  renderHome();
}

function migrateGuestDataToUser(email) {
  const carts = readStorage(STORAGE_KEYS.carts, {});
  const wishlists = readStorage(STORAGE_KEYS.wishlists, {});
  const recents = readStorage(STORAGE_KEYS.recentlyViewed, {});
  const coupons = readStorage(STORAGE_KEYS.coupons, {});

  if (carts.__guest__) {
    const mergedCart = [...(carts[email] || [])];
    carts.__guest__.forEach((guestItem) => {
      const existing = mergedCart.find((item) => item.productId === guestItem.productId);
      if (existing) {
        existing.quantity += guestItem.quantity;
      } else {
        mergedCart.push(guestItem);
      }
    });
    carts[email] = mergedCart;
    delete carts.__guest__;
  }

  if (wishlists.__guest__) {
    wishlists[email] = [...new Set([...(wishlists[email] || []), ...wishlists.__guest__])];
    delete wishlists.__guest__;
  }

  if (recents.__guest__) {
    recents[email] = [...new Set([...(recents.__guest__ || []), ...(recents[email] || [])])].slice(0, 6);
    delete recents.__guest__;
  }

  if (coupons.__guest__) {
    coupons[email] = coupons.__guest__;
    delete coupons.__guest__;
  }

  writeStorage(STORAGE_KEYS.carts, carts);
  writeStorage(STORAGE_KEYS.wishlists, wishlists);
  writeStorage(STORAGE_KEYS.recentlyViewed, recents);
  writeStorage(STORAGE_KEYS.coupons, coupons);
}

function getOrderStatusIndex(order) {
  if (order.cancelled) {
    return -1;
  }
  const diffMinutes = (Date.now() - new Date(order.createdAt).getTime()) / 60000;
  if (diffMinutes >= 180) return 5;
  if (diffMinutes >= 60) return 4;
  if (diffMinutes >= 20) return 3;
  if (diffMinutes >= 5) return 2;
  if (diffMinutes >= 1) return 1;
  return 0;
}

function canCancelOrder(order) {
  const statusIndex = getOrderStatusIndex(order);
  return !order.cancelled && statusIndex >= 0 && statusIndex < 3;
}

function initializeRevealObserver() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.15 });
  observeReveals();
}

function observeReveals() {
  if (!revealObserver) {
    return;
  }
  document.querySelectorAll(".reveal").forEach((node) => {
    if (!node.dataset.revealBound) {
      revealObserver.observe(node);
      node.dataset.revealBound = "true";
    }
  });
}

function initializeHeroRotation() {
  const node = byId("heroText");
  const phrases = ["calm indoor greens", "balcony-ready botanicals", "gift-worthy bonsai", "air-purifying favorites"];
  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % phrases.length;
    node.textContent = phrases[index];
  }, 2600);
}

function handleHeaderState() {
  elements.siteHeader.classList.toggle("is-scrolled", window.scrollY > 10);
}

function scrollToTarget(targetId) {
  if (appState.route !== "home") {
    navigate("home");
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250);
  } else {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  writeStorage(STORAGE_KEYS.theme, document.body.classList.contains("dark-mode") ? "dark" : "light");
  renderHeader();
}

function applyStoredTheme() {
  if (readStorage(STORAGE_KEYS.theme, "light") === "dark") {
    document.body.classList.add("dark-mode");
  }
}

function updateDetailQuantity(delta) {
  const quantityNode = byId("detailQuantity");
  if (!quantityNode) {
    return;
  }
  const nextValue = Math.max(1, Number(quantityNode.textContent) + delta);
  quantityNode.textContent = String(nextValue);
}

function getDetailQuantity() {
  return Number(byId("detailQuantity")?.textContent || 1);
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `<i class="${type === "success" ? "ri-checkbox-circle-line" : "ri-error-warning-line"}"></i><span>${message}</span>`;
  elements.toastStack.appendChild(toast);
  window.setTimeout(() => {
    toast.remove();
  }, 3200);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function formatDate(value) {
  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

function renderStars(rating) {
  const fullStars = Math.round(rating);
  return Array.from({ length: 5 }, (_, index) =>
    `<i class="${index < fullStars ? "ri-star-fill" : "ri-star-line"}"></i>`
  ).join("");
}

function getDeliveryEstimate() {
  const start = new Date();
  const end = new Date(Date.now() + 1000 * 60 * 60 * 24 * 4);
  return `${start.toLocaleDateString("en-IN", { day: "numeric", month: "short" })} - ${end.toLocaleDateString("en-IN", { day: "numeric", month: "short" })}`;
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function byId(id) {
  return document.getElementById(id);
}
