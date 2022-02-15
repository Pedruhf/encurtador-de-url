import { IUrlRepository } from "../../../data/repositories/IUrlRepository";
import { Url } from "../../../domain/entities/url";
import { mongoUrlModel } from "./schemas/mongoUrlSchema";

class MongoUrlRepository implements IUrlRepository {
  async save(url: Url): Promise<Url> {
    const newUrl = await mongoUrlModel.create(url);
    return newUrl;
  }

  async findById(id: string): Promise<Url> {
    const url = await mongoUrlModel.findById(id) as Url;
    return url;
  }

  async findByUrl(url: string): Promise<Url> {
    const foundUrl = await mongoUrlModel.findOne({ originalURL: url }) as Url;
    return foundUrl;
  }

  async findByCode(code: string): Promise<Url> {
    const url = await mongoUrlModel.findOne({ code }) as Url;
    return url;
  }

  async findMostAccessed(): Promise<Url[]> {
    const urls = await mongoUrlModel.find().sort({ hitCounter: "descending"}).limit(100);
    return urls;
  }

  async update(id: string, url: Url): Promise<void> {
    await mongoUrlModel.findByIdAndUpdate(id, url);
  }

  async delete(id: string): Promise<void> {
    await mongoUrlModel.findByIdAndDelete(id);
  }
}

export { MongoUrlRepository };
