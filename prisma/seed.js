// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create a mod user
  await prisma.mod.create({
    data: {
      email: 'mod@example.com',
      password: 'securepassword123', // Hash this password in a real application
    },
  });

  // Create some users
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: 'password1',
      username: 'user1',
    },
  });

  // ... Create more users similarly

  // Create some reviews
  await prisma.review.create({
    data: {
      name: 'Car Model 1',
      modelYear: '2020',
      overview: 'Great performance and mileage',
      worstExperience: 'Difficulties with navigation system',
      advice: 'Regular maintenance is key',
      expenses: 'Approx $1000 yearly on maintenance',
      fuelEconomy: '30 MPG',
      rating: 4,
      otherDetails: 'Excellent safety features',
      imagesLink: 'http://example.com/car1.jpg',
      userId: user1.id, // Associate with a user
    },
  });

  // ... Create more reviews similarly
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
