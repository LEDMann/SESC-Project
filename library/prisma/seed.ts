import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.student.deleteMany({})
    let student_confirm = await prisma.student.createMany({
        data: [
            { ID: "c3781247", Password: "pbkdf2:sha256:260000$U5Vve2Rf4RJUmHwl$a49732f2d1dfd577978a63dce847b2ddd9cac6203aaee52977b36d381d363c43", First_Name: "Andrea", Last_Name: "La Fauci De Leo", Email: "bosu@cesbooks.com" },
            { ID: "c3922382", Password: "pbkdf2:sha256:260000$U5Vve2Rf4RJUmHwl$a49732f2d1dfd577978a63dce847b2ddd9cac6203aaee52977b36d381d363c43", First_Name: "Aryan", Last_Name: "Prince Santy", Email: "arynx@cesbooks.com" },
            { ID: "admin", Password: "pbkdf2:sha256:260000$TkImyuUDBP8Qpx4m$b0845e9575fa336bf53595bb92baf196d845f2ef1b26db448743af5242c0077d", First_Name: "admin", Last_Name: "admin", Email: "admin@cesbooks.com" },
        ]
    })
    await prisma.book.deleteMany({})
    let book_confirm = await prisma.book.createMany({
        data: [
            { ISBN: "9789813221871", Title: "An Introduction To Component-Based Software Development",                                  Author: "Lau Kung-Kiu",          Year: 2017, Copies: 1 },
            { ISBN: "9780132350884", Title: "Clean Code - A Handbook Of Agile Software Craftsmanship",                                  Author: "Robert C. Martin",      Year: 2009, Copies: 1 },
            { ISBN: "9780073523323", Title: "Database System Concepts",                                                                 Author: "Abraham Silberschatz ", Year: 2010, Copies: 1 },
            { ISBN: "9783827330437", Title: "Design Patterns - Elements Of Reusable Object-Oriented Software",                          Author: "Erich Gamma",           Year: 1995, Copies: 1 },
            { ISBN: "9781543057386", Title: "Distributed systems (3rd edition)",                                                        Author: "Maarten van Steen",     Year: 2017, Copies: 2 },
            { ISBN: "9781292097619", Title: "Fundamentals of database systems (7th edition)",                                           Author: "Ramez Elmasri",         Year: 2016, Copies: 2 },
            { ISBN: "9781430265337", Title: "Introducing Spring Framework - A Primer",                                                  Author: "Felipe Gutierrez",      Year: 2014, Copies: 1 },
            { ISBN: "9780262530910", Title: "Introduction To Algorithms",                                                               Author: "Thomas H. Cormen",      Year: 1990, Copies: 2 },
            { ISBN: "9781449369415", Title: "Introduction To Machine Learning With Python - A Guide For Data Scientists",               Author: "Andreas C. Muller",     Year: 2016, Copies: 2 },
            { ISBN: "9780321349606", Title: "Java concurrency in practice",                                                             Author: "Brian Goetz",           Year: 2015, Copies: 2 },
            { ISBN: "9783319994192", Title: "Java in two semesters (4th edition)",                                                      Author: "Quentin Charatan",      Year: 2019, Copies: 1 },
            { ISBN: "9781491952023", Title: "JavaScript: The Definitive Guide",                                                         Author: "David Flanagan",        Year: 2020, Copies: 2 },
            { ISBN: "9781491956250", Title: "Microservice Architecture - Aligning Principles, Practices, And Culture",                  Author: "Irakli Nadareishvili",  Year: 2016, Copies: 2 },
            { ISBN: "9781937785499", Title: "Programming Ruby 1.9 & 2.0 - The Pragmatic Programmers\' Guide",                           Author: "David Thomas",          Year: 2013, Copies: 2 },
            { ISBN: "9781593279288", Title: "Python Crash Course, 2nd Edition - A Hands-On, Project-Based Introduction To Programming", Author: "Eric Mathes",           Year: 2019, Copies: 1 },
            { ISBN: "9781617298691", Title: "Spring Start Here - Learn What You Need And Learn It Well",                                Author: "Laurentiu Spilca",      Year: 2021, Copies: 2 },
            { ISBN: "9780135957059", Title: "The Pragmatic Programmer",                                                                 Author: "David Thomas",          Year: 2019, Copies: 1 },
            { ISBN: "9780596516178", Title: "The Ruby Programming Language",                                                            Author: "David Flanagan",        Year: 2008, Copies: 1 },
        ]
    })
    await prisma.transaction.deleteMany({})
    let transaction_confirm = await prisma.transaction.createMany({
        data: [
            { Student_ID: "c3781247", BookISBN: "9780596516178", Date_Borrowed: "2021-11-21T00:00:00Z", Date_Returned: "2021-11-29T00:00:00Z" },
            { Student_ID: "c3781247", BookISBN: "9781937785499", Date_Borrowed: "2021-11-26T00:00:00Z", Date_Returned: "2021-11-30T00:00:00Z" },
            { Student_ID: "c3781247", BookISBN: "9780132350884", Date_Borrowed: "2021-11-27T00:00:00Z", Date_Returned: "2021-12-05T00:00:00Z" },
            { Student_ID: "c3922382", BookISBN: "9781491952023", Date_Borrowed: "2021-11-20T00:00:00Z", Date_Returned: "2021-12-05T00:00:00Z" },
            { Student_ID: "c3922382", BookISBN: "9781937785499", Date_Borrowed: "2021-11-23T00:00:00Z", Date_Returned: "1970-01-01T00:00:00Z" },
            { Student_ID: "c3922382", BookISBN: "9780132350884", Date_Borrowed: "2021-11-01T00:00:00Z", Date_Returned: "1970-01-01T00:00:00Z" },
            { Student_ID: "c3922382", BookISBN: "9783827330437", Date_Borrowed: "2021-12-01T00:00:00Z", Date_Returned: "1970-01-01T00:00:00Z" },
        ]
    })
    console.log({
        student_confirm,
        book_confirm,
        transaction_confirm,
    })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
