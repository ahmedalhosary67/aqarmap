export const location = [
  { key: "ainSokhna", name: "Ain Sokhna" },
  { key: "watanOctober", name: "بيت الوطن التكميلي, 6 أكتوبر" },
  { key: "northCoast", name: "North Coast" },
  { key: "newCairo", name: "New Cairo" },
  { key: "PortoElSokhna", name: "Jebal El Sokhna - Porto El Sokhna" },
  { key: "land", name: "Land" },
  { key: "building", name: "Building" },
  { key: "administrative", name: "Administrative" },
  { key: "commercial", name: "Commercial" },
  { key: "medical", name: "Medical" },
  { key: "shared-room", name: "Shared Room" },
  { key: "other", name: "Other" },
];
export const listingSection = [
  { key: "sale", name: "For Sale" },
  { key: "rent", name: "For Rent" },
];
// export const propertyType = [
//   { key: "all", name: "All" },
//   { key: "apartments", name: "Apartments" },
//   { key: "furnished-apartment", name: "Furnished Apartment" },
//   { key: "chalets", name: "Chalets" },
//   { key: "villas", name: "Villas" },
//   { key: "land", name: "Land" },
//   { key: "building", name: "Building" },
//   { key: "administrative", name: "Administrative" },
//   { key: "commercial", name: "Commercial" },
//   { key: "medical", name: "Medical" },
//   { key: "shared-room", name: "Shared Room" },
//   { key: "other", name: "Other" },
// ];
export const propertyType = [
  {
    key: "apartments",
    name: "Apartments",
    children: [
      {
        key: "apartmentsWithGarden",
        name: "Apartments with Garden",
      },
      {
        key: "studio",
        name: "Studio",
      },
      {
        key: "dublix",
        name: "Dublix",
      },
      {
        key: "roof",
        name: "Roof",
      },
      {
        key: "fullFloor",
        name: "Full Floor",
      },
    ],
  },
  {
    key: "furnished",
    name: "Furnished",
  },
  {
    key: "chalets",
    name: "Chalets",
  },
  {
    key: "villas",
    name: "Villas",
    children: [
      {
        key: "twinHouse",
        name: "Twin House",
      },
      {
        key: "townHouse",
        name: "Town House",
      },
      {
        key: "separateVilla",
        name: "Separate Villa",
      },
      {
        key: "palace",
        name: "Palace",
      },
    ],
  },
  {
    key: "land",
    name: "Land",
    children: [
      {
        key: "residentialLand",
        name: "Residential Land",
      },
      {
        key: "administrativeLand",
        name: "Administrative Land",
      },
      {
        key: "commercialLand",
        name: "Commercial Land",
      },
      {
        key: "farm",
        name: "Farm",
      },
    ],
  },
];
export const paymentMethod = [
  { key: "All", name: "All" },
  { key: "Cash", name: "Cash" },
  { key: "Installments", name: "Installments" },
];
export const View = [
  { key: "mainStreet", name: "Main Street" },
  { key: "sideStreet", name: "Side Street" },
  { key: "Corner", name: "Corner" },
  { key: "Back", name: "Back" },
  { key: "Garden", name: "Garden" },
  { key: "Pool", name: "Pool" },
  { key: "Seaview", name: "Seaview" },
  { key: "Nile", name: "Nile" },
  { key: "Golf", name: "Golf" },
  { key: "Plaza", name: "Plaza" },
  { key: "Lake", name: "Lake" },
  { key: "Club", name: "Club" },
  { key: "Other", name: "Other" },
];
export const typeOfFinish = [
  { key: "SuperLux", name: "Super Lux" },
  { key: "ExtraSuperLux", name: "Extra Super Lux" },
  { key: "Lux", name: "Lux" },
  { key: "SimiFinished", name: "Simi Finished" },
  { key: "WithoutFinish", name: "Without Finish" },
];
export const Mortgage = [
  { key: "All", name: "All Financing Options" },
  { key: "CBE-3%", name: "CBE 3% Initiative" },
  { key: "CBE-8%", name: "CBE 8% Initiative" },
  { key: "Commercial", name: "Commercial Financing" },
];
export const Registered = [
  { key: "yes", name: "Yes" },
  { key: "no", name: "No" },
  { key: "notSure", name: "Not Sure" },
];
export const Market = [
  { key: "fromDeveloper", name: "From Developer" },
  { key: "fromOwner", name: "From Owner" },
];

export const priceRang = [];
for (let i = 100000; i <= 1000000; i += 50000) {
  const commas = i.toLocaleString();

  priceRang.push({ key: i, key: commas });
}

export const areaRang = [];
for (let i = 70; i <= 1000; i += 10) {
  const commas = i.toLocaleString();

  areaRang.push({ key: i, key: commas });
}
export const yearOfBuilding = [];
for (let i = 2030; i >= 1900; i--) {
  yearOfBuilding.push({ key: i, name: i });
}

export const sections = ["is-rent", "is-sale"];
