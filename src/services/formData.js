export const location = [
  { key: "ainSokhna", name: "Ain Sokhna" },
  { key: "watanOctober", name: "بيت الوطن التكميلي, 6 أكتوبر" },
  { key: "northCoast", name: "North Coast" },
  { key: "chalets", name: "Chalets" },
  { key: "villas", name: "Villas" },
  { key: "land", name: "Land" },
  { key: "building", name: "Building" },
  { key: "administrative", name: "Administrative" },
  { key: "commercial", name: "Commercial" },
  { key: "medical", name: "Medical" },
  { key: "shared-room", name: "Shared Room" },
  { key: "other", name: "Other" },
];
export const propertyType = [
  { key: "all", name: "All" },
  { key: "apartments", name: "Apartments" },
  { key: "furnished-apartment", name: "Furnished Apartment" },
  { key: "chalets", name: "Chalets" },
  { key: "villas", name: "Villas" },
  { key: "land", name: "Land" },
  { key: "building", name: "Building" },
  { key: "administrative", name: "Administrative" },
  { key: "commercial", name: "Commercial" },
  { key: "medical", name: "Medical" },
  { key: "shared-room", name: "Shared Room" },
  { key: "other", name: "Other" },
];
export const paymentMethod = [
  { key: "All", name: "All" },
  { key: "Cash", name: "Cash" },
  { key: "Installments", name: "Installments" }
];
export const Mortgage = [
  { key: "All", name: "All Financing Options" },
  { key: "CBE-3%", name: "CBE 3% Initiative" },
  { key: "CBE-8%", name: "CBE 8% Initiative" },
  { key: "Commercial", name: "Commercial Financing" }
];


export const priceRang = [];
for (let i = 100000; i <= 1000000; i += 1000) {
  priceRang.push(i);
}
export const areaRang = [];
for (let i = 70; i <= 1000; i += 10) {
  areaRang.push(i);
}

export const sections = ["is-rent", "is-sale"];