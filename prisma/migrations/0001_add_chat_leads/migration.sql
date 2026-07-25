-- CreateTable
CREATE TABLE "chat_leads" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "interest" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chat_leads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_chat_leads_created_at" ON "chat_leads"("created_at" DESC);
