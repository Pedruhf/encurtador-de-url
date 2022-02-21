import Api from "@/config/api";
import { Url } from "@/domain/models/url";

class GetMostAccessedUrlsUseCase {
  constructor (private readonly api: Api) {}

  async execute(): Promise<Url[]> {
    const res = await this.api.request.get("urls/most-accesseds");
    return res.data;
  }
}

export { GetMostAccessedUrlsUseCase };
