-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'coordinator', 'teacher', 'municipal');

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'municipal';
