-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Sponsor" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;
