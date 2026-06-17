export interface Collaborator {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department?: string;
  avatar?: string;
}
