import { db } from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { compare } from "bcrypt"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: 'username' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                const student = await db.student.findUnique({
                    where: { ID: credentials.username as string }
                })!
                if ( student == null ) return null
                const isValid = compare(credentials.password as string, student.Password)
                if (!isValid) return null
                return { id: student.ID, name: student.First_Name, email: student.Email }
            },
        }),
    ],
})
