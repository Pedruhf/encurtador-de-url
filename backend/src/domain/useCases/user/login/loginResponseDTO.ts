import { User } from "../../../entities/user";

type LoginResponseDTO = {
  user: User,
  token: string;
}

export { LoginResponseDTO };
