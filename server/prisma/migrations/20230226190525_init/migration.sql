-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "gender" TEXT[],
    "synopsis" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "urlImage" TEXT NOT NULL,
    "durationMinutes" INTEGER NOT NULL,
    "direction" TEXT[],
    "roadMap" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rented" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
