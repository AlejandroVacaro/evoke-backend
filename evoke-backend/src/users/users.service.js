const { Injectable } = require('@nestjs/common');

@Injectable()
class UsersService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async create(user) {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }
}

module.exports = { UsersService };

// Función para crear una instancia de UsersService con inyección manual del modelo de usuario
function createUserService(userModel) {
  return new UsersService(userModel);
}

module.exports.createUserService = createUserService;

module.exports = { UsersService };

