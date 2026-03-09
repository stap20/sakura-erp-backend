/*
  Warnings:

  - You are about to drop the column `emp_card_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `emp_id` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[empCardId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[empId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `empCardId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_emp_card_id_key";

-- DropIndex
DROP INDEX "users_emp_id_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "emp_card_id",
DROP COLUMN "emp_id",
ADD COLUMN     "empCardId" INTEGER NOT NULL,
ADD COLUMN     "empId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_empCardId_key" ON "users"("empCardId");

-- CreateIndex
CREATE UNIQUE INDEX "users_empId_key" ON "users"("empId");
