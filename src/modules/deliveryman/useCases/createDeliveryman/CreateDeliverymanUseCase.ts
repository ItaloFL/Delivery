import { hash } from "bcrypt"
import { prisma } from "../../../../database/PrismaClient"


interface ICreateDeliveryman{
  username: string
  password: string
}

export class CreateDeliverymanUseCase {

  async execute({ username, password }: ICreateDeliveryman){

    const verifyIfDeliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    }) 

    if (verifyIfDeliverymanExists) {
      throw new Error ("Deliveryman already exist!")
    }

    const hashPassword = await hash(password, 8)

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return deliveryman;
  }
}