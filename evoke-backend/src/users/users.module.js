const { Module } = require('@nestjs/common');
const { MongooseModule } = require('@nestjs/mongoose');
const { UserSchema } = require('./schemas/user.schema');
const { UsersService } = require('./users.service');
const { UsersController } = require('./users.controller');

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [
    UsersService,
    {
      provide: 'USER_MODEL',
      useFactory: (connection) => connection.model('User', UserSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'USERS_SERVICE',
      useFactory: (userModel) => new UsersService(userModel),
      inject: ['USER_MODEL'],
    }
  ],
})
class UsersModule {
  configure(app) {
    UsersController.registerRoutes(app, this.usersService);
  }
}

module.exports = { UsersModule };


