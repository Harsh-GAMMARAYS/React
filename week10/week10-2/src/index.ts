import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.test.create({
        data: {
            email,
            password,
            firstName,
            lastName
        },
        select: {
            id: true
        },
    })
    console.log(res)
}

insertUser("test3@gmail.com", "password3", "Harsh", "Lee");

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.test.update({
        where: { email: username },
        data: {
            firstName,
            lastName
        }
    })
    console.log(res);
}

// updateUser("test@gmail.com", {
//     firstName: "Macdonald",
//     lastName: "Chabala"
// });