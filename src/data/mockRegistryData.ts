/**
 * Mock data for Registry page
 * Represents verified credits in the public registry
 */

export interface RegistryCredit {
  id: string;
  type: 'nitrogen' | 'phosphorus' | 'stormwater' | 'thermal';
  quantity: number;
  unit: string;
  projectName: string;
  projectId: string;
  issueDate: string;
  retirementDate?: string;
  status: 'active' | 'retired';
  verificationId: string;
  location: string;
  verifier: string;
}

export const mockRegistryCredits: RegistryCredit[] = [
  {
    id: 'WQT-2025-00142',
    type: 'nitrogen',
    quantity: 2500,
    unit: 'lbs N',
    projectName: 'Smith Farm Cover Crop Initiative',
    projectId: 'PROJ-2024-089',
    issueDate: '2025-01-15',
    status: 'active',
    verificationId: 'VER-2025-012',
    location: 'Lancaster County, PA',
    verifier: 'EcoVerify Labs',
  },
  {
    id: 'WQT-2025-00141',
    type: 'phosphorus',
    quantity: 1200,
    unit: 'lbs P',
    projectName: 'Green Valley Wetland Restoration',
    projectId: 'PROJ-2024-087',
    issueDate: '2025-01-10',
    retirementDate: '2025-01-28',
    status: 'retired',
    verificationId: 'VER-2025-010',
    location: 'Chesapeake Bay Watershed, MD',
    verifier: 'WaterQuality Institute',
  },
  {
    id: 'WQT-2025-00140',
    type: 'stormwater',
    quantity: 50000,
    unit: 'gallons',
    projectName: 'Urban Green Infrastructure Project',
    projectId: 'PROJ-2024-085',
    issueDate: '2025-01-05',
    status: 'active',
    verificationId: 'VER-2025-008',
    location: 'Baltimore City, MD',
    verifier: 'Environmental Solutions LLC',
  },
  {
    id: 'WQT-2025-00139',
    type: 'nitrogen',
    quantity: 3200,
    unit: 'lbs N',
    projectName: 'Johnson Dairy Nutrient Management',
    projectId: 'PROJ-2024-083',
    issueDate: '2024-12-20',
    status: 'active',
    verificationId: 'VER-2024-156',
    location: 'York County, PA',
    verifier: 'AgriVerify Partners',
  },
  {
    id: 'WQT-2024-00138',
    type: 'thermal',
    quantity: 15000,
    unit: 'therms',
    projectName: 'Riverside Riparian Buffer Enhancement',
    projectId: 'PROJ-2024-081',
    issueDate: '2024-12-15',
    retirementDate: '2025-01-20',
    status: 'retired',
    verificationId: 'VER-2024-152',
    location: 'Susquehanna River Basin, PA',
    verifier: 'Thermal Credit Certifiers',
  },
  {
    id: 'WQT-2024-00137',
    type: 'phosphorus',
    quantity: 890,
    unit: 'lbs P',
    projectName: 'Miller Farm Conservation Tillage',
    projectId: 'PROJ-2024-079',
    issueDate: '2024-12-10',
    status: 'active',
    verificationId: 'VER-2024-148',
    location: 'Lancaster County, PA',
    verifier: 'EcoVerify Labs',
  },
  {
    id: 'WQT-2024-00136',
    type: 'nitrogen',
    quantity: 4100,
    unit: 'lbs N',
    projectName: 'Precision Agriculture Initiative',
    projectId: 'PROJ-2024-076',
    issueDate: '2024-12-01',
    retirementDate: '2024-12-28',
    status: 'retired',
    verificationId: 'VER-2024-144',
    location: 'Adams County, PA',
    verifier: 'AgriVerify Partners',
  },
  {
    id: 'WQT-2024-00135',
    type: 'stormwater',
    quantity: 75000,
    unit: 'gallons',
    projectName: 'Commercial Rain Garden Network',
    projectId: 'PROJ-2024-074',
    issueDate: '2024-11-25',
    status: 'active',
    verificationId: 'VER-2024-140',
    location: 'Anne Arundel County, MD',
    verifier: 'Stormwater Solutions Inc',
  },
  {
    id: 'WQT-2024-00134',
    type: 'phosphorus',
    quantity: 1580,
    unit: 'lbs P',
    projectName: 'Creek Restoration & Bank Stabilization',
    projectId: 'PROJ-2024-072',
    issueDate: '2024-11-20',
    status: 'active',
    verificationId: 'VER-2024-136',
    location: 'Harford County, MD',
    verifier: 'WaterQuality Institute',
  },
  {
    id: 'WQT-2024-00133',
    type: 'nitrogen',
    quantity: 2800,
    unit: 'lbs N',
    projectName: 'Integrated Crop-Livestock System',
    projectId: 'PROJ-2024-068',
    issueDate: '2024-11-15',
    retirementDate: '2024-12-05',
    status: 'retired',
    verificationId: 'VER-2024-132',
    location: 'Franklin County, PA',
    verifier: 'AgriVerify Partners',
  },
];

export const getCreditsByType = (type?: string): RegistryCredit[] => {
  if (!type || type === 'all') return mockRegistryCredits;
  return mockRegistryCredits.filter(credit => credit.type === type);
};

export const getCreditsByStatus = (status: 'active' | 'retired'): RegistryCredit[] => {
  return mockRegistryCredits.filter(credit => credit.status === status);
};

export const searchCredits = (query: string): RegistryCredit[] => {
  const lowerQuery = query.toLowerCase();
  return mockRegistryCredits.filter(
    credit =>
      credit.id.toLowerCase().includes(lowerQuery) ||
      credit.projectName.toLowerCase().includes(lowerQuery) ||
      credit.location.toLowerCase().includes(lowerQuery)
  );
};
