import { Url } from "../../domain/entities/url";

interface IUrlRepository {
  save(url: Url): Promise<Url>;
  findById(id: string): Promise<Url>;
  findByUrl(url: string): Promise<Url>;
  findByCode(code: string): Promise<Url>;
  findMostAccessed(): Promise<Url[]>;
  update(id: string, url: Url): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUrlRepository };
