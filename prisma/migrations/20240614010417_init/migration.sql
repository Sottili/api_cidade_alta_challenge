-- CreateTable
CREATE TABLE "badges" (
    "id_badge" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "badges_pkey" PRIMARY KEY ("id_badge")
);

-- CreateTable
CREATE TABLE "user" (
    "id_user" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_user")
);

-- CreateIndex
CREATE INDEX "badges_slug_idx" ON "badges"("slug");
