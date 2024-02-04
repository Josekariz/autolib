const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.review.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.mod.deleteMany({});

    // Create a moderator
    await prisma.mod.create({
        data: {
            email: 'moderator@example.com',
            password: 'modpassword',
        },
    });

    // Create 3 users and 5 reviews for each
    for (let i = 1; i <= 3; i++) {
        const user = await prisma.user.create({
            data: {
                email: `user${i}@example.com`,
                password: `userpass${i}`,
                username: `user${i}`,
                profilePhotoUrl: `http://example.com/user${i}/photo.jpg`,
                role: 'user',
            },
        });

        for (let j = 1; j <= 5; j++) {
            await prisma.review.create({
                data: {
                    name: `User ${i} Review ${j}`,
                    modelYear: `202${Math.floor(Math.random() * 10)}`,
                    overview: `This is an overview for User ${i} Review ${j}.`,
                    worstExperience: `Worst experience for User ${i} Review ${j}.`,
                    advice: `Advice for User ${i} Review ${j}.`,
                    expenses: `Expenses for User ${i} Review ${j}.`,
                    fuelEconomy: `Fuel economy for User ${i} Review ${j}.`,
                    otherDetails: `Other details for User ${i} Review ${j}.`,
                    imagesLink: `http://example.com/user${i}/review${j}/images.jpg`,
                    upLikeCount: Math.floor(Math.random() * 100),
                    downLikeCount: Math.floor(Math.random() * 100),
                    userId: user.id,
                },
            });
        }
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
