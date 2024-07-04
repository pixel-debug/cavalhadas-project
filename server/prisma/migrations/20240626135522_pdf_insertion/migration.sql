-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "pdf" TEXT[] DEFAULT ARRAY[]::TEXT[];
