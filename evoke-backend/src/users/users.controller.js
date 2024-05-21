const { Controller, Get, Post, Body, Request, Response } = require('@nestjs/common');
const { UsersService } = require('./users.service');

@Controller('users')
class UsersController {
  constructor(usersService) {
    this.usersService = usersService;
  }

  async create(req, res) {
    const createUserDto = req.body;
    const result = await this.usersService.create(createUserDto);
    res.status(201).json(result);
  }

  async findAll(req, res) {
    const result = await this.usersService.findAll();
    res.status(200).json(result);
  }

  // Métodos para enlazar las rutas
  static registerRoutes(app, usersService) {
    const controller = new UsersController(usersService);
    app.post('/users', (req, res) => controller.create(req, res));
    app.get('/users', (req, res) => controller.findAll(req, res));
  }
}

module.exports = { UsersController };

