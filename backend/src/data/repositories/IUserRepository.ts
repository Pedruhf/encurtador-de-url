import { User } from "../../domain/entities/user";

interface IUserRepository {
  save(user: Omit<User, "_id">): Promise<void>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  update(id: string, user: User): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUserRepository };
