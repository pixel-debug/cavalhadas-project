-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
