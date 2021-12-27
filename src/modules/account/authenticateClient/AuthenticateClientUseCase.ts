import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/PrismaClient";


interface IAuthenticateClient {
  username: string;
  password: string
}

export class AuthenticateClientUseCase {

  async execute({ username, password }: IAuthenticateClient): Promise<string> {
    
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })

    if(!client) {
      throw new Error ("Client or password invalid!")
    }

    const ifPasswordIsvalidPassword = await compare(password, client.password)

    if(!ifPasswordIsvalidPassword) {
      throw new Error ("Client or password invalid!")
    }

    const token = sign({username}, "7108537956afa2a526f96cc9da7b0c36", {
      subject: client.id,
      expiresIn: '1d'
    })

    return token
  }
}