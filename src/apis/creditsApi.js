/**
 * Credits API Client
 *
 * Mock implementation with realistic data.
 * Replace fetch functions with real HTTP calls to swap in backend.
 */

// Mock credit database
const MOCK_CREDITS = [
  {
    id: 'cred_001',
    type: 'nutrient-reduction',
    typeDisplay: 'Nutrient Reduction',
    amount: 1500,
    unit: 'lbs N',
    pricePerUnit: 0.45,
    totalPrice: 675.0,
    location: {
      state: 'MD',
      county: 'Baltimore County',
      watershed: 'Upper Chesapeake Bay',
      coordinates: { lat: 39.3526, lng: -76.5297 },
    },
    seller: {
      id: 'seller_001',
      name: 'Johnson Farm Co-op',
      verified: true,
      rating: 4.8,
    },
    verificationDocs: [
      'Third-party audit by EPA-certified lab',
      'Soil test results (quarterly)',
      'Runoff monitoring data',
    ],
    status: 'available',
    listedDate: '2025-11-15T08:00:00Z',
    description:
      'Cover crop implementation across 120 acres of farmland in the Chesapeake Bay watershed. Verified nutrient reduction through reduced fertilizer application and improved soil health practices.',
    method: 'Cover cropping + precision agriculture',
    farmSize: 120,
    certifications: ['Chesapeake Bay Program', 'Maryland Department of Agriculture'],
  },
  {
    id: 'cred_002',
    type: 'stormwater',
    typeDisplay: 'Stormwater Retention',
    amount: 25000,
    unit: 'gal',
    pricePerUnit: 0.04,
    totalPrice: 1000.0,
    location: {
      state: 'MD',
      county: 'Anne Arundel County',
      watershed: 'Severn River',
      coordinates: { lat: 39.0458, lng: -76.6413 },
    },
    seller: {
      id: 'seller_002',
      name: 'Green Infrastructure LLC',
      verified: true,
      rating: 4.9,
    },
    verificationDocs: [
      'Bioretention design plans',
      'Post-construction inspection report',
      'Flow monitoring data (1 year)',
    ],
    status: 'available',
    listedDate: '2025-11-10T14:30:00Z',
    description:
      'Bioretention basin installation treating runoff from 2.5 acres of commercial parking lot. Reduces peak flow and removes pollutants before entering the Severn River.',
    method: 'Bioretention basin with native plantings',
    siteSize: 2.5,
    certifications: ['Maryland Department of Environment', 'Chesapeake Stormwater Network'],
  },
  {
    id: 'cred_003',
    type: 'thermal',
    typeDisplay: 'Thermal Mitigation',
    amount: 850,
    unit: 'BTU',
    pricePerUnit: 0.12,
    totalPrice: 102.0,
    location: {
      state: 'MD',
      county: 'Howard County',
      watershed: 'Patuxent River',
      coordinates: { lat: 39.2037, lng: -76.8610 },
    },
    seller: {
      id: 'seller_003',
      name: 'Riverkeep Solutions',
      verified: true,
      rating: 4.7,
    },
    verificationDocs: [
      'Stream temperature monitoring (pre/post)',
      'Riparian buffer assessment',
      'Tree canopy analysis',
    ],
    status: 'available',
    listedDate: '2025-11-20T10:15:00Z',
    description:
      'Riparian buffer restoration providing stream shading and thermal regulation. 500 linear feet of native tree plantings along tributary to Patuxent River.',
    method: 'Riparian buffer restoration',
    bufferLength: 500,
    certifications: ['Maryland Forest Service', 'Alliance for the Chesapeake Bay'],
  },
  {
    id: 'cred_004',
    type: 'nutrient-reduction',
    typeDisplay: 'Nutrient Reduction',
    amount: 800,
    unit: 'lbs P',
    pricePerUnit: 0.85,
    totalPrice: 680.0,
    location: {
      state: 'VA',
      county: 'Fairfax County',
      watershed: 'Potomac River',
      coordinates: { lat: 38.8462, lng: -77.3064 },
    },
    seller: {
      id: 'seller_004',
      name: 'Valley View Farms',
      verified: true,
      rating: 4.6,
    },
    verificationDocs: [
      'Manure management plan',
      'Phosphorus soil test results',
      'Crop yield data',
    ],
    status: 'available',
    listedDate: '2025-11-18T12:00:00Z',
    description:
      'Precision nutrient management and manure incorporation reducing phosphorus runoff from 85-acre dairy operation. Verified through soil testing and stream monitoring.',
    method: 'Precision nutrient management',
    farmSize: 85,
    certifications: ['Virginia Department of Agriculture', 'Chesapeake Bay Foundation'],
  },
  {
    id: 'cred_005',
    type: 'stormwater',
    typeDisplay: 'Stormwater Retention',
    amount: 12000,
    unit: 'gal',
    pricePerUnit: 0.05,
    totalPrice: 600.0,
    location: {
      state: 'MD',
      county: 'Montgomery County',
      watershed: 'Rock Creek',
      coordinates: { lat: 39.0839, lng: -77.1528 },
    },
    seller: {
      id: 'seller_005',
      name: 'Urban Watershed Partners',
      verified: true,
      rating: 4.8,
    },
    verificationDocs: [
      'Permeable pavement design',
      'Infiltration testing results',
      'Maintenance log (2 years)',
    ],
    status: 'available',
    listedDate: '2025-11-22T09:45:00Z',
    description:
      'Permeable paving retrofit for residential driveway and walkways. Infiltrates stormwater on-site, reducing runoff to Rock Creek by 80%.',
    method: 'Permeable pavement',
    siteSize: 0.3,
    certifications: ['Montgomery County Department of Environmental Protection'],
  },
];

/**
 * Get all credits with optional filtering and sorting
 * @param {Object} options - Query options
 * @param {string} options.type - Filter by credit type
 * @param {string} options.state - Filter by state
 * @param {number} options.minPrice - Min price filter
 * @param {number} options.maxPrice - Max price filter
 * @param {string} options.sortBy - Sort field (price, date, amount)
 * @param {string} options.sortOrder - asc or desc
 * @returns {Promise<Credit[]>}
 */
export async function getCredits(options = {}) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  let results = [...MOCK_CREDITS];

  // Filter by type
  if (options.type && options.type !== 'all') {
    results = results.filter((c) => c.type === options.type);
  }

  // Filter by state
  if (options.state && options.state !== 'all') {
    results = results.filter((c) => c.location.state === options.state);
  }

  // Filter by price range
  if (options.minPrice !== undefined) {
    results = results.filter((c) => c.totalPrice >= options.minPrice);
  }
  if (options.maxPrice !== undefined) {
    results = results.filter((c) => c.totalPrice <= options.maxPrice);
  }

  // Sort
  if (options.sortBy) {
    results.sort((a, b) => {
      let aVal, bVal;

      if (options.sortBy === 'price') {
        aVal = a.totalPrice;
        bVal = b.totalPrice;
      } else if (options.sortBy === 'date') {
        aVal = new Date(a.listedDate).getTime();
        bVal = new Date(b.listedDate).getTime();
      } else if (options.sortBy === 'amount') {
        aVal = a.amount;
        bVal = b.amount;
      }

      if (options.sortOrder === 'desc') {
        return bVal - aVal;
      }
      return aVal - bVal;
    });
  }

  return results;
}

/**
 * Get a single credit by ID
 * @param {string} id - Credit ID
 * @returns {Promise<Credit|null>}
 */
export async function getCreditById(id) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  const credit = MOCK_CREDITS.find((c) => c.id === id);
  return credit || null;
}

/**
 * Search credits by text query
 * @param {string} query - Search query
 * @returns {Promise<Credit[]>}
 */
export async function searchCredits(query) {
  await new Promise((resolve) => setTimeout(resolve, 250));

  const lowerQuery = query.toLowerCase();
  return MOCK_CREDITS.filter(
    (c) =>
      c.typeDisplay.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.location.county.toLowerCase().includes(lowerQuery) ||
      c.location.watershed?.toLowerCase().includes(lowerQuery) ||
      c.seller.name.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get unique states from all credits
 * @returns {Promise<string[]>}
 */
export async function getAvailableStates() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const states = [...new Set(MOCK_CREDITS.map((c) => c.location.state))];
  return states.sort();
}

/**
 * Get credit types with counts
 * @returns {Promise<Object>}
 */
export async function getCreditTypes() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const types = {};
  MOCK_CREDITS.forEach((c) => {
    if (!types[c.type]) {
      types[c.type] = { display: c.typeDisplay, count: 0 };
    }
    types[c.type].count++;
  });

  return types;
}
