export type Listing = {
  id: string;        // "101", "102", "302", "501", ...
  title: string;
  subtitle?: string;
  featured?: boolean; // penthouse true
};

// Add/keep existing units here; ensure 501 exists and is featured
export const LISTINGS: Listing[] = [
  { id: '201', title: 'Atlas Homes Room 201', subtitle: 'Hyderabad' },
  { id: '202', title: 'Atlas Homes Room 202', subtitle: 'Hyderabad' },
  { id: '301', title: 'Atlas Homes Room 301', subtitle: 'Hyderabad' },
  { id: '101', title: 'Atlas Homes Room 101', subtitle: 'Hyderabad' },
  { id: '102', title: 'Atlas Homes Room 102', subtitle: 'Hyderabad' },
  { id: '302', title: 'Atlas Homes Room 302', subtitle: 'Hyderabad' },
];
