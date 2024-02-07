
-- Drop Table for Students
DROP TABLE IF EXISTS student;

-- CreateTable
CREATE TABLE "Student" (
    "id" VARCHAR(20) NOT NULL,
    "hash" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "isbn" VARCHAR(13) NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "author" VARCHAR(100) NOT NULL,
    "year" INTEGER NOT NULL,
    "copies" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("isbn")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL,
    "student_id" VARCHAR(20) NOT NULL,
    "book_isbn" VARCHAR(13) NOT NULL,
    "date_borrowed" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_returned" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_book_isbn_fkey" FOREIGN KEY ("book_isbn") REFERENCES "Book"("isbn") ON DELETE NO ACTION ON UPDATE NO ACTION;

