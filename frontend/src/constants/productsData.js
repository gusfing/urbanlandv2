// Import product images
import benchPlanterImg from "../assets/products/Product Images/Bench Planter/Make_it_8k_resolution_image_202605170101.jpeg";
import benchesImg from "../assets/products/Product Images/Benches/Create_a_clean,_premium,_professional_202605162312.jpeg";
import busSheltersImg from "../assets/products/Product Images/Bus Shelters/Create_a_clean,_premium,_professional_202605170115.jpeg";
import cabanasImg from "../assets/products/Product Images/Cabanas/Create_a_clean,_premium,_professional_202605170136.jpeg";
import caneFurniture2Img from "../assets/products/Product Images/Cane Furniture/2 Items.jpeg";
import caneFurniture3Img from "../assets/products/Product Images/Cane Furniture/3 Items.jpeg";
import canteenTableImg from "../assets/products/Product Images/Canteen Table/Create_a_clean,_premium,_professional_202605170053.jpeg";
import carShelterImg from "../assets/products/Product Images/Car Shelter/Create_a_clean,_premium,_professional_202605170216.jpeg";
import dustbinsImg from "../assets/products/Product Images/Dustbins/Create_a_clean,_premium,_professional_202605170106.jpeg";
import plantersBoxImg from "../assets/products/Product Images/Planters Box/Create_a_clean,_premium,_professional_202605170111.jpeg";
import poolsideLoungersImg from "../assets/products/Product Images/Poolside Loungers/Create_a_clean,_premium,_professional_202605170154.jpeg";

// Import showcase gallery assets
import gbg1 from '../assets/gallery_real_estate.png';
import gbg2 from '../assets/gallery_hotels.png';
import gbg3 from '../assets/gallery_hospitals.png';
import gbg4 from '../assets/gallery_education.png';
import gbg5 from '../assets/gallery_smart_city.png';

// Import welcome assets
import welcome1 from '../assets/welcome-1.png';
import welcome2 from '../assets/welcome-2.png';

// Import hero assets
import benchHero from '../assets/Bench.jpeg';
import benchPlanterHero from '../assets/Bench_Planter.jpeg';
import busSheltersHero from '../assets/Bus_Shelters.jpeg';
import canteenTablesHero from '../assets/Canteen_Tables.jpeg';
import carShelterHero from '../assets/Car_Shelter.jpeg';
import dustbinsHero from '../assets/Dustbins.jpeg';
import plantersBoxHero from '../assets/Planters_Box.jpeg';
import wickerFurnitureHero from '../assets/Wicker_Furniture.jpeg';

export const products = [
  {
    id: "platform",
    title: "Cultivation Island",
    line: "PLATFORM",
    category: "parklets",
    image: benchPlanterImg,
    gallery: [benchPlanterImg, gbg1, benchPlanterHero],
    badges: ["modular", "new"],
    tagline: "Reclaiming street parking spaces for vibrant community life.",
    description: "PLATFORM is a modular street furniture system designed to temporarily or permanently convert parking lanes into miniature public terraces. It establishes a vibrant, green oasis for rest, social interactions, and outdoor cafe seating in busy city streets.",
    features: [
      "Modular components for endless layouts",
      "Integrated GFRC planters and safety guardrails",
      "Adjustable leveling feet for uneven curbside slopes",
      "Optional accessibility ramp for wheelchairs"
    ],
    specifications: {
      materials: "Hot-dip galvanized steel chassis with durable powder coating; FSC-certified tropical Jatoba or Robinia wood decking; optional stainless steel accents and safety rubber bumpers.",
      dimensions: "Base platform module: 2000 x 2000 mm; Planter modules: 1000 x 500 mm. Heights adjustable from 150 mm to 300 mm to align with adjacent sidewalks.",
      installation: "Free-standing layout supported by high-load leveling feet, or anchored to asphalt/concrete with heavy-duty expansion bolts for high-wind areas.",
      sustainability: "100% recyclable steel frame; timber sourced from FSC-certified responsible forestry; easy component replacement minimizes life-cycle maintenance costs."
    },
    options: {
      wood: ["Jatoba FSC® (Natural Oil finish)", "Robinia (Light Brown tint)", "Acacia Thermo-wood"],
      metal: ["Anthracite Grey (RAL 7016)", "Corten Brown (Fine Texture)", "Forest Green (RAL 6009)"],
      modules: ["Base Platform", "Green Planter Element", "Double Bench Wood Seat", "Bicycle Lock Bar"]
    }
  },
  {
    id: "morse",
    title: "Message for the Future",
    line: "MORSE",
    category: "seating",
    image: canteenTableImg,
    gallery: [canteenTableImg, gbg4, canteenTablesHero],
    badges: ["modular", "new"],
    tagline: "Heavy-duty outdoor dining engineered for corporate and public campuses.",
    description: "The MORSE series is an integrated table and seating system that offers clean, geometric aesthetics for public break spaces. Designed to withstand extreme weather, it serves as a central hub for dining, meetings, and shared encounters.",
    features: [
      "Heavy-gauge steel frame with architectural coating",
      "Anti-vandalism mounting hardware",
      "Ergonomically spaced benches and tabletop",
      "Low maintenance timber or HPL slats"
    ],
    specifications: {
      materials: "Laser-cut sheet steel frame, galvanized and powder-coated; high-density HPL or durable thermo-wood slats; stainless steel assembly bolts.",
      dimensions: "Total footprint: 2200 x 1800 mm. Tabletop height: 750 mm; Bench seat height: 450 mm. Custom configurations available.",
      installation: "Surface mounted with heavy-duty anchoring bolts or surface anchored on leveling feet; optional free-standing layout with weighted base.",
      sustainability: "HPL panels are composed of paper fibers and thermosetting resins for extreme lifespan; steel frame is fully recyclable."
    },
    options: {
      wood: ["Robinia Slat Panels", "Thermo-Pine Slats", "Charcoal HPL (High-Pressure Laminate)"],
      metal: ["Anthracite Grey (RAL 7016)", "Slate Grey (RAL 7015)", "Corten Texture"],
      modules: ["Standard 6-Seater Table", "Extended 8-Seater Table", "Integrated USB Power Port"]
    }
  },
  {
    id: "morse-dot",
    title: "Morse Dot Lounge Table",
    line: "MORSE DOT",
    category: "seating",
    image: poolsideLoungersImg,
    gallery: [poolsideLoungersImg, gbg2, welcome2],
    badges: ["modular", "new"],
    tagline: "A random turn for a random encounter.",
    description: "MORSE DOT is a modular, high-contrast stool and table unit that brings playfulness and flexible configuration to corporate courtyards and campus pathways. Position them together as a collaborative ring or space them apart for quiet focus.",
    features: [
      "Modular circular seats and table disks",
      "Architectural concrete or powder coated steel frames",
      "High-contrast color selections",
      "Optional integrated solar-powered device chargers"
    ],
    specifications: {
      materials: "Ultra-high performance concrete (UHPC) or galvanized steel sheet frame; FSC-certified tropical wood or concrete cap seats; hidden floor mount bracket.",
      dimensions: "Diameter: 600 mm or 800 mm. Table Height: 750 mm; Seat Height: 450 mm.",
      installation: "Sub-surface anchoring or surface mounting on pre-existing concrete paving; can also be weighted for temporary, free-standing public events.",
      sustainability: "Timber components are FSC-certified; UHPC concrete uses eco-efficient binding agents to minimize manufacturing carbon footprint."
    },
    options: {
      wood: ["Jatoba FSC® Cap", "Robinia Slats Cap", "Smooth Anthracite Concrete Cap"],
      metal: ["Golden Yellow (RAL 1004)", "Corten Brown (Fine Texture)", "Anthracite Grey (RAL 7016)"],
      modules: ["Circular Seat", "Circular Table", "Solar Charging Hub"]
    }
  },
  {
    id: "linfa",
    title: "Visually Light, Exceptionally Strong",
    line: "LINFA",
    category: "seating",
    image: benchesImg,
    gallery: [benchesImg, gbg1, benchHero],
    badges: ["new"],
    tagline: "Slender wooden slats on a refined structural frame.",
    description: "LINFA redefines the classic park bench with a delicate silhouette that floats above the landscape. Built using high-tension structural steel plates, it offers superior load bearing capacity while keeping a minimal footprint.",
    features: [
      "Minimalist silhouette with hidden structural ribs",
      "Premium, close-spaced wooden slats for maximum comfort",
      "Available with or without ergonomic armrests",
      "Integrated anti-skateboarding modules"
    ],
    specifications: {
      materials: "High-yield structural steel sheet sides with weather-resistant powder coating; close-spaced Jatoba or Robinia wood slats; stainless steel hardware.",
      dimensions: "Length: 1800 mm; Depth: 620 mm; Height: 810 mm. Seat height: 450 mm.",
      installation: "Surface anchored with four chemical anchor bolts into sub-surface concrete slabs.",
      sustainability: "FSC Jatoba wood uses biological preservation treatments; minimal metal thickness reduces resource consumption while maintaining load ratings."
    },
    options: {
      wood: ["Jatoba FSC® (Natural Oil finish)", "Robinia Slats", "Acacia Thermo-wood"],
      metal: ["Corten Brown (Fine Texture)", "Anthracite Grey (RAL 7016)", "Jet Black (RAL 9005)"],
      modules: ["Standard Bench without Backrest", "Standard Bench with Backrest", "Integrated Steel Armrest"]
    }
  },
  {
    id: "aero-shelter",
    title: "Transit Shelter System",
    line: "AERO",
    category: "shelters",
    image: busSheltersImg,
    gallery: [busSheltersImg, gbg5, busSheltersHero],
    badges: ["smart"],
    tagline: "Public transport infrastructure built for modern smart cities.",
    description: "AERO is a highly modular public transport shelter system combining durable protection, elegant aesthetics, and modern technology. Perfect for municipal transit networks, it integrates solar power, digital route displays, and charging ports.",
    features: [
      "Modular length expansion to fit high-traffic stops",
      "Toughened safety glass panels with decorative frit patterns",
      "Optional solar roof and integrated LED smart lighting",
      "Integrated bench seating and trash receptacles"
    ],
    specifications: {
      materials: "Structural steel tube columns with anti-corrosion duplex paint finish; laminated safety glass rear/side walls; aluminum roof frame; thermo-wood bench seat.",
      dimensions: "Standard 3-bay model: 4200 mm wide, 1600 mm deep, 2500 mm high. Modularly expandable in 1400 mm increments.",
      installation: "Heavy anchor base plates bolted to structural concrete foundations below pavement level, concealed by paving stones.",
      sustainability: "Energy-efficient LED lighting powered by optional overhead PV solar panels; 100% recyclable structural steel and glass."
    },
    options: {
      wood: ["Jatoba FSC® Seat Slats", "Robinia Seat Slats", "HPL Composite Slat Seat"],
      metal: ["Anthracite Grey (RAL 7016)", "Slate Blue (RAL 5008)", "Silver Metallic (RAL 9006)"],
      modules: ["3-Bay Shelter with Back Wall", "4-Bay Extended Shelter", "Integrated Solar PV Roof Kit", "Digital Transit E-Paper Display"]
    }
  },
  {
    id: "kubus",
    title: "Litter & Recycling Bin System",
    line: "KUBUS",
    category: "bins",
    image: dustbinsImg,
    gallery: [dustbinsImg, gbg3, dustbinsHero],
    badges: ["essential"],
    tagline: "Clean, robust waste management for urban streets and parks.",
    description: "KUBUS is an elegant, modular litter and recycling bin system designed to fit cleanly into modern street layouts. Offering single, double, or triple sorting configurations, it combines high durability with simple collection workflows.",
    features: [
      "Modular sorting configurations (trash, plastic, paper)",
      "Vandal-resistant locks and hinge mechanisms",
      "Integrated rain protection lid with optional ashtray",
      "Inner galvanized steel liners with easy-pull handles"
    ],
    specifications: {
      materials: "Galvanized steel casing with premium textured powder coating; optional front wood panel cladding; hot-dip galvanized inner sheet steel liners.",
      dimensions: "Single Bin capacity: 75L (500 x 500 x 950 mm). Double Bin: 150L (1000 x 500 x 950 mm). Triple Bin: 225L (1500 x 500 x 950 mm).",
      installation: "Surface mounted and anchored with inner floor flange bolts, or cast directly into concrete footing.",
      sustainability: "Promotes on-site waste segregation; built with highly durable, weather-resistant materials to ensure a long service life with minimal replacements."
    },
    options: {
      wood: ["Robinia front slats", "Jatoba FSC® front slats", "Full Metal Casing (no wood cladding)"],
      metal: ["Anthracite Grey (RAL 7016)", "Corten Texture", "Forest Green (RAL 6009)"],
      modules: ["Single Waste Bin (75L)", "Double Recycling Bin (150L)", "Triple Recycling Bin (225L)", "Integrated Ashtray Lid"]
    }
  },
  {
    id: "cube-planter",
    title: "Green Oasis Planter Box",
    line: "CUBE PLANTER",
    category: "parklets",
    image: plantersBoxImg,
    gallery: [plantersBoxImg, gbg1, plantersBoxHero],
    badges: ["modular"],
    tagline: "Large-scale modular greenery containers for public spaces.",
    description: "CUBE PLANTER brings nature to hard paving layouts. Engineered to handle large root structures and trees, these heavy-duty planter boxes can be used individually or connected to form wind-breaks and collaborative seating layouts.",
    features: [
      "Reinforced double-walled structure with integrated insulation",
      "Self-watering reservoir and sub-surface drainage holes",
      "Integrated forklift pockets for seasonal public relocations",
      "Compatible with clip-on wooden bench seating modules"
    ],
    specifications: {
      materials: "GFRC (Glass-Fiber Reinforced Concrete) or heavy-gauge powder-coated structural steel sheets; internal geo-textile liner; insulation board.",
      dimensions: "Standard Cube: 1000 x 1000 x 800 mm. Rectangular Planter: 1500 x 750 x 800 mm. Heights customizable upon request.",
      installation: "Placed directly on paving using adjustable leveling feet, or anchored to concrete slabs; easily movable via forklift slots.",
      sustainability: "Insulated walls reduce water evaporation; GFRC concrete uses recycled glass fibers and local aggregates for low impact."
    },
    options: {
      wood: ["No wood trim", "Robinia top-edge trim slats", "Jatoba FSC® top-edge trim slats"],
      metal: ["Smooth Sandstone GFRC", "Anthracite Grey Steel", "Corten Textured Steel"],
      modules: ["Standard Square Planter", "Extended Rectangular Planter", "Clip-On 2-Sided Wooden Bench"]
    }
  },
  {
    id: "sunscape",
    title: "Private Oasis in the Warm Sun",
    line: "SUNSCAPE",
    category: "outdoor-furniture",
    image: cabanasImg,
    gallery: [cabanasImg, gbg2, welcome1],
    badges: ["premium", "new"],
    tagline: "Architectural cabanas and lounges for hospitality terraces.",
    description: "SUNSCAPE combines high-end comfort with public durability. Featuring integrated shading slats and premium lounging decks, it creates a cozy, luxury retreat for hotel poolsides, corporate rooftops, and high-end public spaces.",
    features: [
      "Sturdy architectural pergola frame with overhead shading slats",
      "Premium, weather-proof lounging platforms",
      "Modular side privacy screens in timber or fabric",
      "Integrated cup holders and device shelving"
    ],
    specifications: {
      materials: "Structural steel tubes, powder-coated; FSC Jatoba or Robinia wood lounger slats; stainless steel joints; acrylic weather-proof fabric options.",
      dimensions: "Total footprint: 2000 x 2000 mm. Pergola Height: 2200 mm. Lounger platform height: 450 mm.",
      installation: "Surface mounted on wooden decks, tiled terraces, or concrete slabs using concealed floor anchoring brackets.",
      sustainability: "Timber sourced from sustainably managed FSC-certified forests; structural steel is fully recyclable; durable fabrics resist UV degrading."
    },
    options: {
      wood: ["Jatoba FSC® Slats", "Robinia Slats", "Acacia Thermo-wood"],
      metal: ["Corten Brown (Fine Texture)", "Anthracite Grey (RAL 7016)", "Warm Sand (RAL 1013)"],
      modules: ["Single Cabana Bed", "Double Cabana Bed", "Add-On Side Timber Slats Privacy Screen", "Add-On Fabric Curtains"]
    }
  },
  {
    id: "car-port",
    title: "Solar-Ready Vehicle Protection",
    line: "CAR PORT",
    category: "shelters",
    image: carShelterImg,
    gallery: [carShelterImg, gbg5, carShelterHero],
    badges: ["eco", "new"],
    tagline: "Engineered canopy structures for clean, green energy parking.",
    description: "CAR PORT is a heavy-duty shelter solution that protects vehicles while enabling green energy collection. Designed to hold commercial solar PV panels, it features integrated wire routing and structural support for EV charging stations.",
    features: [
      "Heavy-duty cantilever steel support frames for easy parking access",
      "Optimized roof pitch for maximum solar panel performance",
      "Concealed internal wire runs and drainage downspouts",
      "Built-in LED underside parking illumination"
    ],
    specifications: {
      materials: "Heavy hot-dip galvanized structural H-beams with industrial powder coating; steel trapezoidal roof decking; stainless steel fittings.",
      dimensions: "Double vehicle bay: 5500 mm wide, 5000 mm deep, 2700 mm front clearance height. Expandable modularly for large fleets.",
      installation: "Bolted onto reinforced concrete footings designed to withstand heavy wind loads (engineered calculation drawings supplied).",
      sustainability: "Supports green micro-generation; structural components are highly durable, minimizing replacement lifecycles."
    },
    options: {
      wood: ["No wood trim", "Robinia support column wrapping", "Jatoba FSC® column wrapping"],
      metal: ["Anthracite Grey (RAL 7016)", "Slate Grey (RAL 7015)", "Galvanized Steel Finish"],
      modules: ["Double Car Bay Canopy", "Quad Car Bay Canopy", "EV Charger Mounting Bracket Pack"]
    }
  },
  {
    id: "cane-double",
    title: "Wicker Harmony Double Seater",
    line: "CANE DOUBLE",
    category: "outdoor-furniture",
    image: caneFurniture2Img,
    gallery: [caneFurniture2Img, gbg2, wickerFurnitureHero],
    badges: ["handcrafted"],
    tagline: "Woven outdoor seating blending luxury with durability.",
    description: "CANE DOUBLE combines organic, handcrafted charm with modern public durability. Utilizing high-performance synthetic fibers woven over a lightweight aluminum frame, it offers premium seating comfort for resort patios and gardens.",
    features: [
      "Hand-woven synthetic wicker fibers resistant to chlorine and UV",
      "Lightweight, rust-free powder-coated aluminum structural frame",
      "Quick-dry outdoor seat cushions wrapped in Sunbrella® fabric",
      "Stately, ergonomic curves for relaxing lounge sessions"
    ],
    specifications: {
      materials: "Extruded aluminum tube framing; high-density polyethylene (HDPE) synthetic wicker; stainless steel hardware; Sunbrella® acrylic cushion fabric.",
      dimensions: "Width: 1500 mm; Depth: 820 mm; Height: 780 mm. Seat height (including cushion): 420 mm.",
      installation: "Placed directly on terraces or lawns (free-standing); features heavy-duty plastic floor glides to protect pavers.",
      sustainability: "Synthetic wicker fibers are recyclable; aluminum frame uses recycled post-consumer metal; highly resistant to mold and rot."
    },
    options: {
      wood: ["No wood slats", "Teak wood leg details", "Acacia leg details"],
      metal: ["Natural Tan Wicker", "Charcoal Grey Wicker", "Warm White Wicker"],
      modules: ["Double Seater Bench", "Single Seater Lounge Chair", "Matching Circular Coffee Table"]
    }
  },
  {
    id: "cane-set",
    title: "Wicker Harmony Lounge Set",
    line: "CANE SET",
    category: "children",
    image: caneFurniture3Img,
    gallery: [caneFurniture3Img, gbg2, wickerFurnitureHero],
    badges: ["handcrafted", "new"],
    tagline: "Flexible modular seating arrangements for outdoor lounge zones.",
    description: "CANE SET is a complete lounge furniture family including single chairs, double benches, and matching coffee tables. Handcrafted to resemble natural cane, it is built to survive high-footfall public resort environments with zero fading.",
    features: [
      "Handcrafted weave patterns using heavy-duty weather-proof fibers",
      "Modular components to set up customizable layouts",
      "Premium, water-repellent quick-dry foam cushions",
      "Non-marking adjustable floor levelers"
    ],
    specifications: {
      materials: "Anti-rust aluminum core tube framing; HDPE synthetic wicker weave; quick-dry polyurethane foam padding; high-performance outdoor fabric.",
      dimensions: "Single Chair: 850 x 820 x 780 mm. Table: 900 mm diameter, 400 mm height. Cushions: 120 mm thickness.",
      installation: "Free-standing layout; adjustable non-marking glides allow for easy leveling on irregular paving surfaces.",
      sustainability: "Durable HDPE wicker offers 10+ years UV protection; foam cushions are free of ozone-depleting CFCs."
    },
    options: {
      wood: ["No wood elements", "Natural Teak wood table-top", "Acacia wood table-top"],
      metal: ["Charcoal Grey Wicker Pack", "Natural Tan Wicker Pack", "White Ash Wicker Pack"],
      modules: ["Full Set (2 Chairs, 1 Sofa, 1 Table)", "Chairs Only Pack (2 Chairs)", "Table Only (1 Table)"]
    }
  }
];
