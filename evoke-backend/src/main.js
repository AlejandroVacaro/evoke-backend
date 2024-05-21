const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./app.module');
const { UsersController } = require('./users/users.controller');
const express = require('express');

async function bootstrap() {
  const app = express();

  // Configurar middleware para express
  app.use(express.json());

  const nestApp = await NestFactory.create(AppModule, app);
  
  // Registrar rutas
  const usersService = app.get('USERS_SERVICE');
  UsersController.registerRoutes(app, usersService);

  await nestApp.listen(3000);
}

bootstrap();
