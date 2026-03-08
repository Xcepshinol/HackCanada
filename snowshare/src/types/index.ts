export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type Listing = {
  id: string;
  title: string;
  description: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
};

export type Booking = {
  id: string;
  listingId: string;
  userId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
};

export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
};