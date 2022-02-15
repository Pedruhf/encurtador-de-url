import { User } from "../../../domain/entities/user";
import { IUserRepository } from "../../../data/repositories/IUserRepository";
import { mongoUserModel } from "./schemas/mongoUserSchema";

class MongoUserRepository implements IUserRepository {
  
  async save(user: Omit<User, "_id">): Promise<void> {
    await mongoUserModel.create(user);
  }

  async findById(id: string): Promise<User> {
    const user = await mongoUserModel.findById(id).populate("savedUrls") as User;
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await mongoUserModel.findOne({ email }).select("+password").populate("savedUrls") as User;
    return user;
  }

  async update(id: string, user: User): Promise<void> {
    await mongoUserModel.findByIdAndUpdate(id, user);
  }

  async delete(id: string): Promise<void> {
    await mongoUserModel.findByIdAndDelete(id);
  }
}

export { MongoUserRepository };