-- CreateTable
CREATE TABLE "cost_config" (
    "id" TEXT NOT NULL DEFAULT 'singleton',
    "monthlySalary" DOUBLE PRECISION NOT NULL,
    "monthlyWorkingHours" DOUBLE PRECISION NOT NULL,
    "depreciationPerMinute" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cost_config_pkey" PRIMARY KEY ("id")
);
