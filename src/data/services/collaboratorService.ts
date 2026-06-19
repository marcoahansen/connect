import { Collaborator, User } from "../../domains/entities/Collaborator";
import { api } from "../api";

interface ListResponse {
  users: User[];
  total: number;
  limit: number;
  skip: number;
}

export const collaboratorService ={
  async list(limit = 20):Promise<Collaborator[]> {
    const {data} = await api.get<ListResponse>("/users", {
      params: { limit, select: 'firstName, lastName, email, image, company'},
    })
    console.log(data)
    const collaborators:Collaborator[] = data.users.map((user)=>{
      return{
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.image,
        department: user.company?.department,
        role: user.company?.title ?? user.company?.department ?? 'Team Member'
      }
    })
    return collaborators
  }
}