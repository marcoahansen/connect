export interface Collaborator {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department?: string;
  avatar?: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  company?: {
    title: string;
    department: string;
  }
}