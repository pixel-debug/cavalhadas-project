/*
  Warnings:

  - You are about to drop the column `pdf` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "pdf";

-- CreateTable
CREATE TABLE "PDF" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "fileName" TEXT NOT NULL,
    "downloadPath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deleteAt" TIMESTAMP(3),

    CONSTRAINT "PDF_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PDF" ADD CONSTRAINT "PDF_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
