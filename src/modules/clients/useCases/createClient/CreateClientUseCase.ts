import { hash } from "bcrypt";
import { prisma } from "../../../../database/PrismaClient";


interface ICreateClient {
  username: string
  password: string
}

export class CreateClientUseCase {

  async execute({ username, password } : ICreateClient) {
    
    const verifyIfUserExist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive'
        }
      }
    }) 

    if (verifyIfUserExist) {
      throw new Error ("Client already exist!")
    }

    const hashPassword = await hash(password, 8)

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return client;
  }

}