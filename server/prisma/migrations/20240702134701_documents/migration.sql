/*
  Warnings:

  - You are about to drop the `PDF` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PDF" DROP CONSTRAINT "PDF_postId_fkey";

-- DropTable
DROP TABLE "PDF";

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "fileName" TEXT NOT NULL,
    "downloadPath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deleteAt" TIMESTAMP(3),

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
