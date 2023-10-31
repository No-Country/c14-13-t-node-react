import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Create 3 mechanics
  for (let i = 0; i < 3; i++) {
    await prisma.mechanic.create({
      data: {
        dni: faker.string.uuid(),
        name: faker.person.fullName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        phone: faker.phone.number(),
      },
    });
  }

  // Create 1 employee
  await prisma.employee.create({
    data: {
      dni: faker.string.uuid(),
      name: faker.person.fullName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      phone: faker.phone.number(),
    },
  });

  // Create a workshop
  const workshop = await prisma.workshop.create({
    data: {
      nit: faker.string.uuid(),
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    },
  });

  // Create 20 clients
  for (let i = 0; i < 20; i++) {
    const client = await prisma.customer.create({
      data: {
        dni: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
      },
    });

    // Create 1 vehicle for each client
    await prisma.vehicle.create({
      data: {
        plate: faker.string.alphanumeric(7),
        brand: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        vehicleType: faker.vehicle.type(),
        mileage: faker.string.numeric({ length: { min: 1, max: 1 } }).toString(),
        year: faker.date.past({ years: 20 }).getFullYear().toString(),
        color: faker.vehicle.color(),
        doors: faker.string.numeric({ length: { min: 2, max: 5 } }).toString(),
        customerId: client.id,
      },
    });
  }

  // Create 5 services
  for (let i = 0; i < 5; i++) {
    await prisma.service.create({
      data: {
        serviceCode: faker.string.alphanumeric(5),
        service: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        servicePrice: parseInt(faker.commerce.price({ dec: 0 })),
      },
    });
  }

  // Create some orders
  const services = await prisma.service.findMany();
  const vehicles = await prisma.vehicle.findMany();
  const mechanics = await prisma.mechanic.findMany();
  const employees = await prisma.employee.findMany();

  for (let i = 0; i < 10; i++) {
    const order = await prisma.order.create({
      data: {
        entryDate: faker.date.recent(),
        departureDate: faker.date.soon(),
        deadline: faker.date.soon(),
        cost: parseInt(faker.commerce.price({ dec: 0 })),
        workshopId: workshop.id,
        mechanicId: mechanics[i % mechanics.length].id,
        vehicleId: vehicles[i % vehicles.length].id,
        employeeId: employees[0].id,
      },
    });

    // Create OrderService for each order
    await prisma.orderService.create({
      data: {
        orderId: order.id,
        serviceId: services[i % services.length].id,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
