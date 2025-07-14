export interface Address {
  street: string;
  city: string;
  zip: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  role: 'Admin' | 'User' | 'Moderator';
  isActive: boolean;
  isVerified: boolean;
  phone: string;
  address: Address;
  createdAt: string;
  lastLogin: string;
  avatar: string;
}
