import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { products } from "../../constants/productsData";

// Import original image assets to map resolved URLs back to variable names in JS export
import benchPlantersImg from "../../assets/products/Product Images/Bench Planter/Make_it_8k_resolution_image_202605170101.jpeg";
import benchPlantersUgc from "../../assets/products/Product Images/Bench Planter/UGC_Bench_Planter.jpeg";
import benchesImg from "../../assets/products/Product Images/Benches/Create_a_clean,_premium,_professional_202605162312.jpeg";
import benchesUgc from "../../assets/products/Product Images/Benches/UGC_Benches.jpeg";
import busSheltersImg from "../../assets/products/Product Images/Bus Shelters/Create_a_clean,_premium,_professional_202605170115.jpeg";
import busSheltersUgc from "../../assets/products/Product Images/Bus Shed/Hyper-realistic_8K_ultra_high_resolution_202605281655.jpeg";
import busSheltersRealUgc from "../../assets/products/Product Images/Bus Shed/UGC_Bus_Shelters.jpeg";
import cabanasImg from "../../assets/products/Product Images/Cabanas/Create_a_clean,_premium,_professional_202605170136.jpeg";
import cabanasUgc from "../../assets/products/Product Images/Cabanas/UGC_Cabanas.jpeg";
import canteenTablesImg from "../../assets/products/Product Images/Canteen Table/Create_a_clean,_premium,_professional_202605170053.jpeg";
import canteenTablesUgc from "../../assets/products/Product Images/Canteen Table/UGC_Canteen_Table.jpeg";
import carSheltersImg from "../../assets/products/Product Images/Car Shed/Create_a_clean,_premium,_professional_202605170216.jpeg";
import carSheltersUgc from "../../assets/products/Product Images/Car Shed/UGC_Car_Shelter.jpeg";
import dustbinsImg from "../../assets/products/Product Images/Dustbins/Create_a_clean,_premium,_professional_202605170106.jpeg";
import dustbinsUgc from "../../assets/products/Product Images/Dustbins/UGC_Dustbins.jpeg";
import gazebosImg from "../../assets/products/Product Images/Gazebos/Gazebos.jpeg";
import gazebosUgc from "../../assets/products/Product Images/Gazebos/UGC_Gazebos.jpeg";
import pergolasImg from "../../assets/products/Product Images/Pergolas/Pergolas.jpeg";
import pergolasUgc from "../../assets/products/Product Images/Pergolas/UGC_Pergolas.jpeg";
import plantersImg from "../../assets/products/Product Images/Planters Box/Create_a_clean,_premium,_professional_202605170111.jpeg";
import plantersUgc from "../../assets/products/Product Images/Planters Box/UGC_Planters_Box.jpeg";
import poolsideLoungersImg from "../../assets/products/Product Images/Poolside Loungers/Create_a_clean,_premium,_professional_202605170154.jpeg";
import poolsideLoungersUgc from "../../assets/products/Product Images/Poolside Loungers/UGC_Poolside_Loungers.jpeg";
import preFabHomesImg from "../../assets/products/Product Images/Pre Fab Homes/prefabhomes.jpeg";
import preFabHomesUgc from "../../assets/products/Product Images/Pre Fab Homes/UGC_Prefabhomes.jpeg";
import wickerDiningImg from "../../assets/products/Product Images/Wicker Dining/wicker_dining.jpeg";
import wickerDiningUgc from "../../assets/products/Product Images/Wicker Dining/UGC_wicker_dining.jpeg";
import wickerLivingImg from "../../assets/products/Product Images/Wicker Living/Wicker_Living.jpeg";
import wickerLivingUgc from "../../assets/products/Product Images/Wicker Living/UGC_Wicker_Living.jpeg";
import gbg1 from '../../assets/gallery_real_estate.png';
import gbg2 from '../../assets/gallery_hotels.png';
import gbg3 from '../../assets/gallery_hospitals.png';
import gbg4 from '../../assets/gallery_education.png';
import gbg5 from '../../assets/gallery_smart_city.png';
import welcome1 from '../../assets/welcome-1.png';
import welcome2 from '../../assets/welcome-2.png';
import benchHero from '../../assets/Bench.jpeg';
import benchPlanterHero from '../../assets/Bench_Planter.jpeg';
import busSheltersHero from '../../assets/Bus_Shelters.jpeg';
import canteenTablesHero from '../../assets/Canteen_Tables.jpeg';
import carShelterHero from '../../assets/Car_Shelter.jpeg';
import dustbinsHero from '../../assets/Dustbins.jpeg';
import plantersBoxHero from '../../assets/Planters_Box.jpeg';
import wickerFurnitureHero from '../../assets/Wicker_Furniture.jpeg';

const assetReverseMap = {
  [benchPlantersImg]: "benchPlantersImg",
  [benchPlantersUgc]: "benchPlantersUgc",
  [benchesImg]: "benchesImg",
  [benchesUgc]: "benchesUgc",
  [busSheltersImg]: "busSheltersImg",
  [busSheltersUgc]: "busSheltersUgc",
  [busSheltersRealUgc]: "busSheltersRealUgc",
  [cabanasImg]: "cabanasImg",
  [cabanasUgc]: "cabanasUgc",
  [canteenTablesImg]: "canteenTablesImg",
  [canteenTablesUgc]: "canteenTablesUgc",
  [carSheltersImg]: "carSheltersImg",
  [carSheltersUgc]: "carSheltersUgc",
  [dustbinsImg]: "dustbinsImg",
  [dustbinsUgc]: "dustbinsUgc",
  [gazebosImg]: "gazebosImg",
  [gazebosUgc]: "gazebosUgc",
  [pergolasImg]: "pergolasImg",
  [pergolasUgc]: "pergolasUgc",
  [plantersImg]: "plantersImg",
  [plantersUgc]: "plantersUgc",
  [poolsideLoungersImg]: "poolsideLoungersImg",
  [poolsideLoungersUgc]: "poolsideLoungersUgc",
  [preFabHomesImg]: "preFabHomesImg",
  [preFabHomesUgc]: "preFabHomesUgc",
  [wickerDiningImg]: "wickerDiningImg",
  [wickerDiningUgc]: "wickerDiningUgc",
  [wickerLivingImg]: "wickerLivingImg",
  [wickerLivingUgc]: "wickerLivingUgc",
  [gbg1]: "gbg1",
  [gbg2]: "gbg2",
  [gbg3]: "gbg3",
  [gbg4]: "gbg4",
  [gbg5]: "gbg5",
  [welcome1]: "welcome1",
  [welcome2]: "welcome2",
  [benchHero]: "benchHero",
  [benchPlanterHero]: "benchPlanterHero",
  [busSheltersHero]: "busSheltersHero",
  [canteenTablesHero]: "canteenTablesHero",
  [carShelterHero]: "carShelterHero",
  [dustbinsHero]: "dustbinsHero",
  [plantersBoxHero]: "plantersBoxHero",
  [wickerFurnitureHero]: "wickerFurnitureHero"
};

const categoriesList = [
    { id: "benches", name: "Outdoor Benches" },
  { id: "bus-shelters", name: "Bus Shelters" },
  { id: "cabanas", name: "Cabanas" },
  { id: "canteen-tables", name: "Canteen Tables" },
  { id: "car-shelters", name: "Car Sheds" },
  { id: "dustbins", name: "Dustbins" },
  { id: "gazebos", name: "Gazebos" },
  { id: "pergolas", name: "Pergolas" },
  { id: "planters", name: "Planters" },
  { id: "poolside-loungers", name: "Poolside Loungers" },
  { id: "pre-fab-homes", name: "Pre Fab Homes" },
  { id: "wicker-dining-sets", name: "Wicker Dining" },
  { id: "wicker-living-sets", name: "Wicker Living" },
  { id: "ss-bollards", name: "SS Bollards" },
  { id: "metal-wooden-furniture", name: "Metal & Wooden" }
];

const originalAssets = [
  { name: "Original Benches Image (benchesImg)", value: "benchesImg" },
  { name: "Original Dustbins Image (dustbinsImg)", value: "dustbinsImg" },
  { name: "Original Bus Shelters Image (busSheltersImg)", value: "busSheltersImg" },
  { name: "Original Car Shelters Image (carSheltersImg)", value: "carSheltersImg" },
  { name: "Original Wicker Living Image (wickerLivingImg)", value: "wickerLivingImg" },
  { name: "Original Wicker Dining Image (wickerDiningImg)", value: "wickerDiningImg" },
  { name: "Original Planters Image (plantersImg)", value: "plantersImg" },
  { name: "Original Cabanas Image (cabanasImg)", value: "cabanasImg" },
  { name: "Original Poolside Loungers Image (poolsideLoungersImg)", value: "poolsideLoungersImg" },
  { name: "Original Canteen Tables Image (canteenTablesImg)", value: "canteenTablesImg" }
];

const allWhiteImagesList = [
  "1-1.webp_202606080031.jpeg",
  "1-1.webp_202606090228.jpeg",
  "1-10.webp_202606080031.jpeg",
  "1-10.webp_202606090228.jpeg",
  "1-2.webp_202606080031.jpeg",
  "1-2.webp_202606090229.jpeg",
  "1-3.webp_202606080031.jpeg",
  "1-3.webp_202606090229.jpeg",
  "1-6.webp_202606080031.jpeg",
  "1-6.webp_202606090226.jpeg",
  "1-7.webp_202606080031.jpeg",
  "1-7.webp_202606090228.jpeg",
  "1-8.webp_202606080031.jpeg",
  "1-8.webp_202606090228.jpeg",
  "1-9.webp_202606080031.jpeg",
  "1-9.webp_202606090228.jpeg",
  "10-1.webp_202606080031.jpeg",
  "10-1.webp_202606090229.jpeg",
  "10-3.webp_202606080031.jpeg",
  "10-3.webp_202606090228.jpeg",
  "10-4.webp_202606080031.jpeg",
  "10-4.webp_202606090228.jpeg",
  "10.webp_202606080031.jpeg",
  "10.webp_202606090228.jpeg",
  "11-2.webp_202606080031.jpeg",
  "11-2.webp_202606090228.jpeg",
  "11.webp_202606080031.jpeg",
  "11.webp_202606090228.jpeg",
  "12-2.webp_202606080031.jpeg",
  "12-2.webp_202606090228.jpeg",
  "12.webp_202606080031.jpeg",
  "12.webp_202606090228.jpeg",
  "13.webp_202606080031.jpeg",
  "13.webp_202606090228.jpeg",
  "14.webp_202606080031.jpeg",
  "14.webp_202606090228.jpeg",
  "2-2.webp_202606080031.jpeg",
  "2-2.webp_202606090229.jpeg",
  "2-3.webp_202606080031.jpeg",
  "2-3.webp_202606090229.jpeg",
  "2-5.webp_202606080031.jpeg",
  "2-5.webp_202606090226.jpeg",
  "2-6.webp_202606080031.jpeg",
  "2-6.webp_202606090228.jpeg",
  "2-7.webp_202606080031.jpeg",
  "2-7.webp_202606090228.jpeg",
  "2-8.webp_202606080031.jpeg",
  "2-8.webp_202606090228.jpeg",
  "2-9.webp_202606080031.jpeg",
  "2-9.webp_202606090228.jpeg",
  "3-2.webp_202606080031.jpeg",
  "3-2.webp_202606090229.jpeg",
  "3-4.webp_202606080031.jpeg",
  "3-4.webp_202606090226.jpeg",
  "3-5.webp_202606080031.jpeg",
  "3-5.webp_202606090228.jpeg",
  "3-6.webp_202606080031.jpeg",
  "3-6.webp_202606090228.jpeg",
  "3-7.webp_202606080031.jpeg",
  "3-7.webp_202606090228.jpeg",
  "3-8.webp_202606080031.jpeg",
  "3-8.webp_202606090228.jpeg",
  "4-1.webp_202606080031.jpeg",
  "4-1.webp_202606090228.jpeg",
  "4-2.webp_202606080031.jpeg",
  "4-2.webp_202606090229.jpeg",
  "4-4.webp_202606080031.jpeg",
  "4-4.webp_202606090226.jpeg",
  "4-5.webp_202606080031.jpeg",
  "4-5.webp_202606090228.jpeg",
  "4-6.webp_202606080031.jpeg",
  "4-6.webp_202606090228.jpeg",
  "4-7.webp_202606080031.jpeg",
  "4-7.webp_202606090228.jpeg",
  "5-1.webp_202606080031.jpeg",
  "5-1.webp_202606090228.jpeg",
  "5-2.webp_202606080031.jpeg",
  "5-2.webp_202606090229.jpeg",
  "5-4.webp_202606080031.jpeg",
  "5-4.webp_202606090228.jpeg",
  "5-5.webp_202606080031.jpeg",
  "5-5.webp_202606090228.jpeg",
  "5-6.webp_202606080031.jpeg",
  "5-6.webp_202606090228.jpeg",
  "6-2.webp_202606080031.jpeg",
  "6-2.webp_202606090229.jpeg",
  "6-5.webp_202606080031.jpeg",
  "6-5.webp_202606090228.jpeg",
  "6-6.webp_202606080031.jpeg",
  "6-6.webp_202606090228.jpeg",
  "7-1.webp_202606080031.jpeg",
  "7-1.webp_202606090229.jpeg",
  "7-3.webp_202606080031.jpeg",
  "7-3.webp_202606090228.jpeg",
  "7-4.webp_202606080031.jpeg",
  "7-4.webp_202606090228.jpeg",
  "7-5.webp_202606080031.jpeg",
  "7-5.webp_202606090228.jpeg",
  "7.webp_202606080031.jpeg",
  "7.webp_202606090228.jpeg",
  "8-1.webp_202606080031.jpeg",
  "8-1.webp_202606090229.jpeg",
  "8-3.webp_202606080031.jpeg",
  "8-3.webp_202606090228.jpeg",
  "8-4.webp_202606080031.jpeg",
  "8-4.webp_202606090228.jpeg",
  "8-5.webp_202606080031.jpeg",
  "8-5.webp_202606090228.jpeg",
  "8.webp_202606080031.jpeg",
  "8.webp_202606090228.jpeg",
  "9-1.webp_202606080031.jpeg",
  "9-1.webp_202606090229.jpeg",
  "9-3.webp_202606080031.jpeg",
  "9-3.webp_202606090228.jpeg",
  "9-4.webp_202606080031.jpeg",
  "9-4.webp_202606090228.jpeg",
  "9.webp_202606080031.jpeg",
  "9.webp_202606090228.jpeg",
  "New-Project-1-1.webp_202606080031.jpeg",
  "New-Project-1-1.webp_202606090229.jpeg",
  "New-Project-1.webp_202606080031.jpeg",
  "New-Project-1.webp_202606090229.jpeg",
  "New-Project-2-1.webp_202606080031.jpeg",
  "New-Project-2-1.webp_202606090229.jpeg",
  "New-Project-3-1.webp_202606080031.jpeg",
  "New-Project-3-1.webp_202606090229.jpeg",
  "New-Project-3.webp_202606080031.jpeg",
  "New-Project-3.webp_202606090229.jpeg",
  "New-Project-4-1.webp_202606080031.jpeg",
  "New-Project-4-1.webp_202606090229.jpeg",
  "New-Project-6.webp_202606080031.jpeg",
  "New-Project-6.webp_202606090229.jpeg",
  "New-Project-7.webp_202606080031.jpeg",
  "New-Project-7.webp_202606090229.jpeg",
  "New-Project.webp_202606080031.jpeg",
  "New-Project.webp_202606090229.jpeg",
  "outdoor_benches_ulb_01.jpeg",
  "outdoor_benches_ulb_01_ugc.jpeg",
  "outdoor_benches_ulb_02.jpeg",
  "outdoor_benches_ulb_02_ugc.jpeg",
  "outdoor_benches_ulb_03.jpeg",
  "outdoor_benches_ulb_03_ugc.jpeg",
  "outdoor_benches_ulb_04.jpeg",
  "outdoor_benches_ulb_04_ugc.jpeg",
  "outdoor_benches_ulb_05.jpeg",
  "outdoor_benches_ulb_05_ugc.jpeg",
  "outdoor_benches_ulb_06.jpeg",
  "outdoor_benches_ulb_06_ugc.jpeg",
  "outdoor_benches_ulb_07.jpeg",
  "outdoor_benches_ulb_07_ugc.jpeg",
  "outdoor_benches_ulb_08.jpeg",
  "outdoor_benches_ulb_08_ugc.jpeg",
  "outdoor_benches_ulb_09.jpeg",
  "outdoor_benches_ulb_09_ugc.jpeg",
  "outdoor_benches_ulb_10.jpeg",
  "outdoor_benches_ulb_10_ugc.jpeg",
  "outdoor_benches_ulb_11.jpeg",
  "outdoor_benches_ulb_11_ugc.jpeg",
  "outdoor_benches_ulb_12.jpeg",
  "outdoor_benches_ulb_12_ugc.jpeg",
  "outdoor_benches_ulb_13.jpeg",
  "outdoor_benches_ulb_13_ugc.jpeg",
  "outdoor_benches_ulb_14.jpeg",
  "outdoor_benches_ulb_14_ugc.jpeg",
  "outdoor_benches_ulb_15.jpeg",
  "outdoor_benches_ulb_15_ugc.jpeg",
  "outdoor_benches_ulb_16.jpeg",
  "outdoor_benches_ulb_16_ugc.jpeg",
  "outdoor_benches_ulb_17.jpeg",
  "outdoor_benches_ulb_17_ugc.jpeg",
  "outdoor_benches_ulb_18.jpeg",
  "outdoor_benches_ulb_18_ugc.jpeg",
  "outdoor_benches_ulb_19.jpeg",
  "outdoor_benches_ulb_19_ugc.jpeg",
  "outdoor_benches_ulb_20.jpeg",
  "outdoor_benches_ulb_20_ugc.jpeg",
  "outdoor_benches_ulb_21.jpeg",
  "outdoor_benches_ulb_21_ugc.jpeg",
  "outdoor_benches_ulb_22.jpeg",
  "outdoor_benches_ulb_22_ugc.jpeg",
  "outdoor_benches_ulb_23.jpeg",
  "outdoor_benches_ulb_23_ugc.jpeg",
  "outdoor_benches_ulb_24.jpeg",
  "outdoor_benches_ulb_24_ugc.jpeg",
  "outdoor_benches_ulb_25.jpeg",
  "outdoor_benches_ulb_25_ugc.jpeg",
  "outdoor_benches_ulb_26.jpeg",
  "outdoor_benches_ulb_27.jpeg",
  "outdoor_benches_ulb_27_ugc.jpeg",
  "outdoor_benches_ulb_28.jpeg",
  "outdoor_benches_ulb_28_ugc.jpeg",
  "outdoor_benches_ulb_29.jpeg",
  "outdoor_benches_ulb_29_ugc.jpeg",
  "outdoor_benches_ulb_30.jpeg",
  "outdoor_benches_ulb_30_ugc.jpeg",
  "outdoor_benches_ulb_31.jpeg",
  "outdoor_benches_ulb_31_ugc.jpeg",
  "outdoor_benches_ulb_33.jpeg"
];

const ProductAdmin = () => {
  const [dbProducts, setDbProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("planters");
  const [searchTerm, setSearchTerm] = useState("");
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [notification, setNotification] = useState("");

  // Add/Edit Modals State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Form Fields State
  const [formId, setFormId] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState("planters");
  const [formImage, setFormImage] = useState("/products/all_white/1-1.webp_202606080031.jpeg");
  const [formLine, setFormLine] = useState("");
  const [formDescription, setFormDescription] = useState("");

  // Load database on mount
  useEffect(() => {
    // Read from products array directly (which resolves local storage if set)
    setDbProducts([...products]);
  }, []);

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 3000);
  };

  // Reorder controls
  const handleMove = (index, direction) => {
    const categoryProducts = dbProducts.filter((p) => p.category === activeCategory);
    if (index + direction < 0 || index + direction >= categoryProducts.length) return;

    // Get the items to swap
    const targetItem = categoryProducts[index];
    const swapItem = categoryProducts[index + direction];

    // Find their indices in the main database array
    const targetGlobalIndex = dbProducts.findIndex((p) => p.id === targetItem.id);
    const swapGlobalIndex = dbProducts.findIndex((p) => p.id === swapItem.id);

    const updated = [...dbProducts];
    updated[targetGlobalIndex] = swapItem;
    updated[swapGlobalIndex] = targetItem;

    setDbProducts(updated);
  };

  const handleMoveToBoundary = (index, position) => {
    const categoryProducts = dbProducts.filter((p) => p.category === activeCategory);
    const targetItem = categoryProducts[index];

    // Remove item from its current category order list
    const filteredCategoryProds = categoryProducts.filter((p) => p.id !== targetItem.id);

    // Insert at boundary
    if (position === "top") {
      filteredCategoryProds.unshift(targetItem);
    } else {
      filteredCategoryProds.push(targetItem);
    }

    // Reconstruct the global products array while maintaining other categories
    const updated = [];
    dbProducts.forEach((p) => {
      if (p.category !== activeCategory) {
        updated.push(p);
      }
    });

    // Insert all items of active category in the new order
    // Insert them at the first occurrence index of this category in original list to preserve general category location
    const firstCatIndex = dbProducts.findIndex((p) => p.category === activeCategory);
    updated.splice(firstCatIndex === -1 ? 0 : firstCatIndex, 0, ...filteredCategoryProds);

    setDbProducts(updated);
  };

  // Change category of product
  const handleChangeCategory = (productId, newCat) => {
    const updated = dbProducts.map((p) => {
      if (p.id === productId) {
        return {
          ...p,
          category: newCat,
          url: `/product/${p.id}` // maintain URL integrity
        };
      }
      return p;
    });
    setDbProducts(updated);
    showNotification(`Changed product category successfully!`);
  };

  // Delete product
  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updated = dbProducts.filter((p) => p.id !== productId);
      setDbProducts(updated);
      showNotification("Product deleted successfully!");
    }
  };

  // Open add product modal
  const handleOpenAddModal = () => {
    setFormId("");
    setFormTitle("");
    setFormCategory(activeCategory);
    setFormImage("/products/all_white/1-1.webp_202606080031.jpeg");
    setFormLine("Premium outdoor furniture collection item.");
    setFormDescription("Designed for high-traffic environments using premium durable materials.");
    setIsAddModalOpen(true);
  };

  // Save added product
  const handleSaveAddProduct = (e) => {
    e.preventDefault();
    if (!formId.trim() || !formTitle.trim()) {
      alert("Please provide both product ID and Title!");
      return;
    }
    const cleanId = formId.trim().toLowerCase();
    if (dbProducts.some(p => p.id === cleanId)) {
      alert("A product with this ID already exists!");
      return;
    }

    // Default template fields based on category
    const defaultTemplates = {
      benches: {
        features: ["High-durability weather-resistant coating","Concealed expansion anchoring system","Modern all-white premium finish","Minimal maintenance requirements"],
        specifications: {"materials":"Structural steel base frame with premium double powder coating; UV-stabilized white polymer composite slats.","dimensions":"Standard layout: 1800 mm length, 600 mm width, 450 mm seating height.","installation":"Concealed surface mounting using expansion chemical concrete bolts.","sustainability":"Eco-friendly materials; 100% recyclable metal frames and composite elements."},
        options: {"wood":["Pure White composite","Eggshell White polymer"],"metal":["Powder-coated White (RAL 9016)","Signal White (RAL 9003)"],"modules":["Standard 3-seater bench","Standard 4-seater bench"]}
      },
      planters: {
        features: ["Lightweight concrete composition offering extreme durability at reduced weight","Double-walled interior cavity to protect roots from extreme temperatures","Built-in overflow drainage pipes with filtering screens","Integrated sub-base forklift pockets for easy relocation"],
        specifications: {"materials":"Architectural Concrete mix; waterproof inner sealant layer; internal foam insulation core.","dimensions":"Rectangular planter: 1500 mm length, 750 mm width, 800 mm height. Standard cube: 1000 mm x 1000 mm x 800 mm.","installation":"Placed directly on floor or patio; leveling pads compensate for slopes.","sustainability":"Insulated walls minimize water usage; uses natural sand and local cement aggregates."},
        options: {"wood":["No timber trim","Top-edge timber trim slats"],"metal":["Smooth Sandstone finish","Textured Granite finish","Corten steel effect"],"modules":["Standard Rectangular box","Square planter cube","Planter box with clip-on WPC bench seat"]}
      },
      dustbins: {
        features: ["Dual and triple waste segregation sorting channels","Easy-pull inner galvanized liners with ergonomic handles","Heavy-duty cylinder locks to prevent unauthorized opening","Anti-rain hood lids with optional integrated ashtrays"],
        specifications: {"materials":"Textured powder-coated sheet steel casing; Grade 304 stainless steel lid; galvanized metal inner buckets.","dimensions":"Triple sorting module: 1500 mm width, 500 mm depth, 950 mm height. Capacity: 225L.","installation":"Flange plates bolted from the inside of the casing onto concrete pathways.","sustainability":"Encourages segregated garbage collection; uses highly durable and recyclable metals."},
        options: {"wood":["No timber cladding","Robinia wood front cladding","Jatoba front cladding"],"metal":["Corten Texture finish","Forest Green","Anthracite Grey"],"modules":["Single Litter Bin","Double Sorting Bin","Triple Recycling Station"]}
      }
    };

    const template = defaultTemplates[formCategory] || {
      features: ["Premium weather-resistant materials","High-durability structural frame","Concealed anchoring systems","Low maintenance design"],
      specifications: {"materials":"High-grade raw materials; premium anti-corrosion finish; stainless steel hardware.","dimensions":"Standard layout matching architectural guidelines.","installation":"Anchor anchoring with high-tensile bolts.","sustainability":"Designed with 100% recyclable components."},
      options: {"wood":["No timber details","Teak details"],"metal":["Powder-coated Polar White","Textured Satin White"],"modules":["Standard Module","Premium Module"]}
    };

    const newProd = {
      id: cleanId,
      title: formTitle.trim(),
      line: formLine.trim(),
      category: formCategory,
      url: `/product/${cleanId}`,
      image: formImage,
      gallery: [formImage],
      badges: ["New"],
      tagline: formLine.trim(),
      description: formDescription.trim(),
      ...template
    };

    setDbProducts([...dbProducts, newProd]);
    setIsAddModalOpen(false);
    showNotification("Product added successfully!");
  };

  // Open edit product modal
  const handleOpenEditModal = (prod) => {
    setEditingProduct(prod);
    setFormId(prod.id);
    setFormTitle(prod.title);
    setFormCategory(prod.category);
    setFormImage(prod.image);
    setFormLine(prod.line || "");
    setFormDescription(prod.description || "");
    setIsEditModalOpen(true);
  };

  // Save edited product
  const handleSaveEditProduct = (e) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      alert("Please provide a product Title!");
      return;
    }

    const updated = dbProducts.map((p) => {
      if (p.id === editingProduct.id) {
        return {
          ...p,
          title: formTitle.trim(),
          category: formCategory,
          image: formImage,
          gallery: p.gallery[0] === p.image ? [formImage] : p.gallery,
          line: formLine.trim(),
          description: formDescription.trim(),
          url: `/product/${p.id}`
        };
      }
      return p;
    });

    setDbProducts(updated);
    setIsEditModalOpen(false);
    setEditingProduct(null);
    showNotification("Product edited successfully!");
  };
  // Persist modifications to localStorage
  const handleSavePreview = () => {
    localStorage.setItem("urbanland_admin_products_v14", JSON.stringify(dbProducts));
    showNotification("Saved to Local Preview! Re-loading elements...");
    // Trigger live update across open browser tabs
    window.location.reload();
  };

  // Revert back to code baseline
  const handleReset = () => {
    if (window.confirm("Revert database modifications back to static baseline?")) {
      localStorage.removeItem("urbanland_admin_products_v14");
      showNotification("Restored static database baseline.");
      window.location.reload();
    }
  };

  // Filter products list for display
  const displayProducts = useMemo(() => {
    return dbProducts
      .filter((p) => p.category === activeCategory)
      .filter((p) => {
        const term = searchTerm.toLowerCase().trim();
        return (
          !term ||
          (p.title || "").toLowerCase().includes(term) ||
          (p.id || "").toLowerCase().includes(term) ||
          (p.line || "").toLowerCase().includes(term)
        );
      });
  }, [dbProducts, activeCategory, searchTerm]);

  // Compute product count per category
  const categoryCounts = useMemo(() => {
    const counts = {};
    dbProducts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [dbProducts]);

  // Generate JavaScript code string for export
  const exportCodeString = useMemo(() => {
    // Gather unique imports from original codebase
    const importStatements = `// Import product images (JPEG format)
import benchPlantersImg from "../assets/products/Product Images/Bench Planter/Make_it_8k_resolution_image_202605170101.jpeg";
import benchPlantersUgc from "../assets/products/Product Images/Bench Planter/UGC_Bench_Planter.jpeg";
import benchesImg from "../assets/products/Product Images/Benches/Create_a_clean,_premium,_professional_202605162312.jpeg";
import benchesUgc from "../assets/products/Product Images/Benches/UGC_Benches.jpeg";
import busSheltersImg from "../assets/products/Product Images/Bus Shelters/Create_a_clean,_premium,_professional_202605170115.jpeg";
import busSheltersUgc from "../assets/products/Product Images/Bus Shed/Hyper-realistic_8K_ultra_high_resolution_202605281655.jpeg";
import busSheltersRealUgc from "../assets/products/Product Images/Bus Shed/UGC_Bus_Shelters.jpeg";
import cabanasImg from "../assets/products/Product Images/Cabanas/Create_a_clean,_premium,_professional_202605170136.jpeg";
import cabanasUgc from "../assets/products/Product Images/Cabanas/UGC_Cabanas.jpeg";
import canteenTablesImg from "../assets/products/Product Images/Canteen Table/Create_a_clean,_premium,_professional_202605170053.jpeg";
import canteenTablesUgc from "../assets/products/Product Images/Canteen Table/UGC_Canteen_Table.jpeg";
import carSheltersImg from "../assets/products/Product Images/Car Shed/Create_a_clean,_premium,_professional_202605170216.jpeg";
import carSheltersUgc from "../assets/products/Product Images/Car Shed/UGC_Car_Shelter.jpeg";
import dustbinsImg from "../assets/products/Product Images/Dustbins/Create_a_clean,_premium,_professional_202605170106.jpeg";
import dustbinsUgc from "../assets/products/Product Images/Dustbins/UGC_Dustbins.jpeg";
import gazebosImg from "../assets/products/Product Images/Gazebos/Gazebos.jpeg";
import gazebosUgc from "../assets/products/Product Images/Gazebos/UGC_Gazebos.jpeg";
import pergolasImg from "../assets/products/Product Images/Pergolas/Pergolas.jpeg";
import pergolasUgc from "../assets/products/Product Images/Pergolas/UGC_Pergolas.jpeg";
import plantersImg from "../assets/products/Product Images/Planters Box/Create_a_clean,_premium,_professional_202605170111.jpeg";
import plantersUgc from "../assets/products/Product Images/Planters Box/UGC_Planters_Box.jpeg";
import poolsideLoungersImg from "../assets/products/Product Images/Poolside Loungers/Create_a_clean,_premium,_professional_202605170154.jpeg";
import poolsideLoungersUgc from "../assets/products/Product Images/Poolside Loungers/UGC_Poolside_Loungers.jpeg";
import preFabHomesImg from "../assets/products/Product Images/Pre Fab Homes/prefabhomes.jpeg";
import preFabHomesUgc from "../assets/products/Product Images/Pre Fab Homes/UGC_Prefabhomes.jpeg";
import wickerDiningImg from "../assets/products/Product Images/Wicker Dining/wicker_dining.jpeg";
import wickerDiningUgc from "../assets/products/Product Images/Wicker Dining/UGC_wicker_dining.jpeg";
import wickerLivingImg from "../assets/products/Product Images/Wicker Living/Wicker_Living.jpeg";
import wickerLivingUgc from "../assets/products/Product Images/Wicker Living/UGC_Wicker_Living.jpeg";
import gbg1 from '../assets/gallery_real_estate.png';
import gbg2 from '../assets/gallery_hotels.png';
import gbg3 from '../assets/gallery_hospitals.png';
import gbg4 from '../assets/gallery_education.png';
import gbg5 from '../assets/gallery_smart_city.png';
import welcome1 from '../assets/welcome-1.png';
import welcome2 from '../assets/welcome-2.png';
import benchHero from '../assets/Bench.jpeg';
import benchPlanterHero from '../assets/Bench_Planter.jpeg';
import busSheltersHero from '../assets/Bus_Shelters.jpeg';
import canteenTablesHero from '../assets/Canteen_Tables.jpeg';
import carShelterHero from '../assets/Car_Shelter.jpeg';
import dustbinsHero from '../assets/Dustbins.jpeg';
import plantersBoxHero from '../assets/Planters_Box.jpeg';
import wickerFurnitureHero from '../assets/Wicker_Furniture.jpeg';`;

    const formatValue = (val) => {
      if (typeof val === "string") {
        // Look up variable name if it was a resolved asset URL
        const varName = assetReverseMap[val];
        if (varName) return varName;
      }
      return JSON.stringify(val);
    };

    const arrayItems = dbProducts.map((p) => {
      const galleryItems = Array.isArray(p.gallery)
        ? p.gallery.map(img => formatValue(img)).join(", ")
        : "";

      return `  {
    id: ${JSON.stringify(p.id)},
    title: ${JSON.stringify(p.title)},
    line: ${JSON.stringify(p.line)},
    category: ${JSON.stringify(p.category)},
    url: ${JSON.stringify(p.url)},
    image: ${formatValue(p.image)},
    gallery: [${galleryItems}],
    badges: ${JSON.stringify(p.badges)},
    tagline: ${JSON.stringify(p.tagline)},
    description: ${JSON.stringify(p.description)},
    features: ${JSON.stringify(p.features)},
    specifications: ${JSON.stringify(p.specifications)},
    options: ${JSON.stringify(p.options)}
  }`;
    }).join(",\n");

    return `${importStatements}\n\nconst staticProducts = [\n${arrayItems}\n];\n\nexport const products = (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('urbanland_admin_products_v14'))\n  ? JSON.parse(localStorage.getItem('urbanland_admin_products_v14'))\n  : staticProducts;\n`;
  }, [dbProducts]);

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([exportCodeString], { type: "text/javascript" });
    element.href = URL.createObjectURL(file);
    element.download = "productsData.js";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(exportCodeString);
    alert("Database code copied to clipboard!");
  };

  return (
    <div className="w-full min-h-screen bg-[#142216] text-[#F7F4EF] font-sans pb-24 pt-28">
      {/* Alert Banner */}
      {notification && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-[#C9A84C] text-[#1A1A1A] font-bold uppercase text-xs tracking-wider rounded-full shadow-lg border border-[#F7F4EF]/25 animate-bounce">
          {notification}
        </div>
      )}

      {/* Control Header Workspace */}
      <header className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#F7F4EF]/15 pb-8 mb-12 gap-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-3.5 py-1.5 rounded-full select-none">
            Architectural Admin Console
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase mt-3">
            Products <span className="text-[#C9A84C]">Studio</span>
          </h1>
          <p className="text-xs md:text-sm text-[#F7F4EF]/60 font-light mt-1.5">
            Modify structural category tags, reorder products sequentially, and export clean database scripts.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleSavePreview}
            className="px-5 py-3 bg-[#2C5F2E] hover:bg-[#3D7A40] text-white font-bold uppercase text-[10px] rounded-full transition-all tracking-wider cursor-pointer border border-white/10"
          >
            Save Preview
          </button>
          <button
            onClick={handleReset}
            className="px-5 py-3 bg-red-800/20 hover:bg-red-800/40 text-red-300 font-bold uppercase text-[10px] rounded-full transition-all tracking-wider cursor-pointer border border-red-500/20"
          >
            Reset Baseline
          </button>
          <button
            onClick={() => setIsExportModalOpen(true)}
            className="px-5 py-3 bg-[#C9A84C] hover:bg-[#E5C76B] text-[#142216] font-black uppercase text-[10px] rounded-full transition-all tracking-wider cursor-pointer shadow-md"
          >
            Export Database
          </button>
        </div>
      </header>

      {/* Workspace Area */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* Categories Sidebar */}
        <section className="lg:col-span-1 flex flex-col gap-2.5">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#C9A84C] mb-2 px-2">— Active Categories</h3>
          <div className="flex flex-row lg:flex-col overflow-x-auto gap-2 lg:overflow-visible pb-4 lg:pb-0">
            {categoriesList.map((cat) => {
              const isActive = cat.id === activeCategory;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex justify-between items-center px-4 py-3.5 rounded-2xl text-xs font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap min-w-[150px] lg:w-full border ${
                    isActive
                      ? "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/30 pl-6 shadow-sm"
                      : "bg-white/5 text-[#F7F4EF]/75 border-white/5 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? "bg-[#C9A84C] text-[#142216]" : "bg-white/10 text-white/60"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Products Panel */}
        <section className="lg:col-span-3 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white/5 p-4 rounded-3xl border border-white/5 gap-4">
            <h2 className="text-lg font-light tracking-tight px-2">
              Showing <span className="text-[#C9A84C] font-bold">{displayProducts.length}</span> Products in <span className="font-semibold text-white">{(categoriesList.find(c => c.id === activeCategory) || {}).name}</span>
            </h2>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search by code or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-5 py-2.5 bg-[#142216] border border-white/15 rounded-full text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C9A84C] w-full sm:w-64"
              />
              <button
                onClick={handleOpenAddModal}
                className="px-5 py-2.5 bg-[#C9A84C] hover:bg-[#E5C76B] text-[#142216] font-black uppercase text-[10px] rounded-full transition-all tracking-wider cursor-pointer shadow-md shrink-0 select-none"
              >
                + Add Product
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {displayProducts.length > 0 ? (
              displayProducts.map((prod, index) => {
                const isAllWhite = prod.image && typeof prod.image === 'string' && prod.image.startsWith('/products/all_white/');
                
                return (
                  <div
                    key={prod.id}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 bg-[#1D3220] rounded-[2rem] border border-white/5 gap-6 hover:border-[#C9A84C]/25 transition-all duration-300"
                  >
                    {/* Image & Title Details */}
                    <div className="flex items-center gap-5">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#F7F4EF] rounded-2xl overflow-hidden flex items-center justify-center shrink-0 border border-[#C9A84C]/20 shadow-inner">
                        <img
                          src={prod.image}
                          alt={prod.title}
                          className="w-[92%] h-[92%] object-contain select-none transition-transform duration-300 hover:scale-105"
                          style={{ filter: 'brightness(1.02)' }}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2.5">
                          <span className="text-sm font-black uppercase text-white tracking-wide">
                            {prod.title}
                          </span>
                          <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isAllWhite ? "bg-[#C9A84C]/15 text-[#C9A84C]" : "bg-[#2C5F2E]/30 text-emerald-400"
                          }`}>
                            {isAllWhite ? "White Collection" : "Original Catalog"}
                          </span>
                        </div>
                        <span className="text-[10px] text-white/50 font-light truncate max-w-[200px] md:max-w-[320px]">
                          {prod.line}
                        </span>
                        <span className="text-[9px] text-[#C9A84C]/65 font-mono select-all">
                          ID: {prod.id}
                        </span>
                      </div>
                    </div>

                    {/* Controls (Category & Sorting) */}
                    <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-white/5">
                      
                      {/* Move to another category */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[8px] font-bold uppercase tracking-widest text-white/40">Category</label>
                        <select
                          value={prod.category}
                          onChange={(e) => handleChangeCategory(prod.id, e.target.value)}
                          className="bg-[#142216] text-xs font-semibold text-[#F7F4EF]/80 px-3 py-2 rounded-xl border border-white/15 focus:outline-none focus:border-[#C9A84C] cursor-pointer"
                        >
                          {categoriesList.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Sorting sequence controllers */}
                      <div className="flex flex-col gap-1 items-end">
                        <label className="text-[8px] font-bold uppercase tracking-widest text-white/40 self-start md:self-end">Sorting Sequence</label>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleMoveToBoundary(index, "top")}
                            disabled={index === 0}
                            title="Send to Top"
                            className="p-2 bg-[#142216] hover:bg-[#C9A84C] hover:text-[#142216] disabled:opacity-35 disabled:hover:bg-[#142216] disabled:hover:text-[#F7F4EF] rounded-lg transition-colors cursor-pointer text-[10px] border border-white/5 select-none"
                          >
                            ⇈
                          </button>
                          <button
                            onClick={() => handleMove(index, -1)}
                            disabled={index === 0}
                            title="Move Up"
                            className="p-2 bg-[#142216] hover:bg-[#C9A84C] hover:text-[#142216] disabled:opacity-35 disabled:hover:bg-[#142216] disabled:hover:text-[#F7F4EF] rounded-lg transition-colors cursor-pointer text-[10px] border border-white/5 select-none"
                          >
                            ▲
                          </button>
                          <button
                            onClick={() => handleMove(index, 1)}
                            disabled={index === displayProducts.length - 1}
                            title="Move Down"
                            className="p-2 bg-[#142216] hover:bg-[#C9A84C] hover:text-[#142216] disabled:opacity-35 disabled:hover:bg-[#142216] disabled:hover:text-[#F7F4EF] rounded-lg transition-colors cursor-pointer text-[10px] border border-white/5 select-none"
                          >
                            ▼
                          </button>
                          <button
                            onClick={() => handleMoveToBoundary(index, "bottom")}
                            disabled={index === displayProducts.length - 1}
                            title="Send to Bottom"
                            className="p-2 bg-[#142216] hover:bg-[#C9A84C] hover:text-[#142216] disabled:opacity-35 disabled:hover:bg-[#142216] disabled:hover:text-[#F7F4EF] rounded-lg transition-colors cursor-pointer text-[10px] border border-white/5 select-none"
                          >
                            ⇊
                          </button>
                        </div>
                      </div>

                      {/* Action controllers (Edit & Delete) */}
                      <div className="flex flex-col gap-1 items-end">
                        <label className="text-[8px] font-bold uppercase tracking-widest text-white/40 self-start md:self-end">Actions</label>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleOpenEditModal(prod)}
                            title="Edit Product details"
                            className="px-3 py-2 bg-[#142216] hover:bg-[#C9A84C] hover:text-[#142216] text-[#C9A84C] border border-[#C9A84C]/25 rounded-xl transition-all cursor-pointer text-[10px] font-bold uppercase tracking-wide"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(prod.id)}
                            title="Delete Product"
                            className="px-3 py-2 bg-red-900/10 hover:bg-red-800 text-red-300 hover:text-white border border-red-500/20 rounded-xl transition-all cursor-pointer text-[10px] font-bold uppercase tracking-wide"
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 bg-white/5 rounded-[2rem] border border-white/5">
                <p className="text-sm text-white/55">No products found matching filters.</p>
              </div>
            )}
          </div>
        </section>

      </main>

      {/* Export Database Modal */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4">
          <div
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => setIsExportModalOpen(false)}
          />
          <div className="relative bg-[#1D3220] border border-[#C9A84C]/25 text-[#F7F4EF] w-full max-w-4xl rounded-[2.5rem] z-10 p-8 sm:p-10 shadow-2xl flex flex-col h-[85vh] animate-fadeIn">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  Export Database JS File
                </h3>
                <p className="text-[10px] text-white/50 mt-1 font-light">
                  Copy the code below, or download the `productsData.js` file and replace `frontend/src/constants/productsData.js` to commit changes permanently.
                </p>
              </div>
              <button
                onClick={() => setIsExportModalOpen(false)}
                className="w-8 h-8 flex justify-center items-center text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all cursor-pointer select-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Code Workspace Display */}
            <div className="flex-1 min-h-0 bg-[#142216] border border-white/10 rounded-2xl overflow-auto p-5 font-mono text-xs text-emerald-300 leading-relaxed scrollbar-thin select-all">
              <pre className="whitespace-pre">{exportCodeString}</pre>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex justify-end gap-3 mt-6 border-t border-white/10 pt-4">
              <button
                onClick={handleCopy}
                className="px-6 py-3 bg-[#2C5F2E] hover:bg-[#3D7A40] text-white font-bold uppercase text-[10px] rounded-full transition-colors cursor-pointer"
              >
                Copy Code
              </button>
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-[#C9A84C] hover:bg-[#E5C76B] text-[#142216] font-black uppercase text-[10px] rounded-full transition-colors cursor-pointer"
              >
                Download productsData.js
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)} />
          <div className="relative bg-[#1D3220] border border-[#C9A84C]/25 text-[#F7F4EF] w-full max-w-lg rounded-[2.5rem] z-10 p-8 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto scrollbar-thin animate-fadeIn">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-5 text-[#C9A84C] border-b border-white/10 pb-3">Add New Product</h3>
            <form onSubmit={handleSaveAddProduct} className="flex flex-col gap-4 text-xs font-semibold text-[#F7F4EF]">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Product ID (Unique Slug)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. uldb-13"
                  value={formId}
                  onChange={(e) => setFormId(e.target.value)}
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Product Title (Display Name)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ULDB-13"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Category</label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C] cursor-pointer"
                >
                  {categoriesList.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Product Image File</label>
                <select
                  value={formImage}
                  onChange={(e) => setFormImage(e.target.value)}
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C] cursor-pointer"
                >
                  <optgroup label="Original Assets">
                    {originalAssets.map(a => <option key={a.value} value={a.value}>{a.name}</option>)}
                  </optgroup>
                  <optgroup label="White Collection Images">
                    {allWhiteImagesList.map(name => {
                      const pathVal = `/products/all_white/${name}`;
                      return <option key={name} value={pathVal}>{name}</option>;
                    })}
                  </optgroup>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Line Tagline</label>
                <input
                  type="text"
                  placeholder="e.g. Premium Outdoor Seating"
                  value={formLine}
                  onChange={(e) => setFormLine(e.target.value)}
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Description</label>
                <textarea
                  placeholder="Enter details..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  rows="3"
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C] resize-none"
                />
              </div>
              <div className="flex justify-end gap-3 mt-4 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#C9A84C] hover:bg-[#E5C76B] text-[#142216] font-black uppercase rounded-full transition-colors cursor-pointer"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => { setIsEditModalOpen(false); setEditingProduct(null); }} />
          <div className="relative bg-[#1D3220] border border-[#C9A84C]/25 text-[#F7F4EF] w-full max-w-lg rounded-[2.5rem] z-10 p-8 shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto scrollbar-thin animate-fadeIn">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-5 text-[#C9A84C] border-b border-white/10 pb-3">Edit Product</h3>
            <form onSubmit={handleSaveEditProduct} className="flex flex-col gap-4 text-xs font-semibold text-[#F7F4EF]">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Product ID (Read Only)</label>
                <input
                  type="text"
                  disabled
                  value={formId}
                  className="bg-[#142216]/50 border border-white/5 rounded-xl p-3 text-white/50 focus:outline-none cursor-not-allowed"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Product Title (Display Name)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ULDB-13"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Category</label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C] cursor-pointer"
                >
                  {categoriesList.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Product Image File</label>
                <select
                  value={formImage}
                  onChange={(e) => setFormImage(e.target.value)}
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C] cursor-pointer"
                >
                  <optgroup label="Original Assets">
                    {originalAssets.map(a => <option key={a.value} value={a.value}>{a.name}</option>)}
                  </optgroup>
                  <optgroup label="White Collection Images">
                    {allWhiteImagesList.map(name => {
                      const pathVal = `/products/all_white/${name}`;
                      return <option key={name} value={pathVal}>{name}</option>;
                    })}
                  </optgroup>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Line Tagline</label>
                <input
                  type="text"
                  value={formLine}
                  onChange={(e) => setFormLine(e.target.value)}
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">Description</label>
                <textarea
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  rows="3"
                  className="bg-[#142216] border border-white/15 rounded-xl p-3 text-white focus:outline-none focus:border-[#C9A84C] resize-none"
                />
              </div>
              <div className="flex justify-end gap-3 mt-4 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => { setIsEditModalOpen(false); setEditingProduct(null); }}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#C9A84C] hover:bg-[#E5C76B] text-[#142216] font-black uppercase rounded-full transition-colors cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductAdmin;
