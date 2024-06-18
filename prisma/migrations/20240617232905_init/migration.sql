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

-- CreateTable
CREATE TABLE "_badgesTouser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_badgesTouser_AB_unique" ON "_badgesTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_badgesTouser_B_index" ON "_badgesTouser"("B");

-- AddForeignKey
ALTER TABLE "_badgesTouser" ADD CONSTRAINT "_badgesTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "badges"("id_badge") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_badgesTouser" ADD CONSTRAINT "_badgesTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;
