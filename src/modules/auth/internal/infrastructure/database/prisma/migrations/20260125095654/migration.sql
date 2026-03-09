/*
  Warnings:

  - Changed the type of `empId` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "empId",
ADD COLUMN     "empId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_empId_key" ON "users"("empId");
