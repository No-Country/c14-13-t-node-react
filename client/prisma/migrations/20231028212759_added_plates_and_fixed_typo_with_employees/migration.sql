/*
  Warnings:

  - A unique constraint covering the columns `[plate]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.
  - Made the column `mileage` on table `Vehicle` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'inProgress', 'finished');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "mileage" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_plate_key" ON "Vehicle"("plate");
