import { User } from "@/domain/models/user";

interface ILoginUserResponseDTO {
  user: User;
  token: string;
}

export { ILoginUserResponseDTO };
