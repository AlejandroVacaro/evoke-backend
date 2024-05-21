const { Module, NestModule, MiddlewareConsumer } = require('@nestjs/common');
const { MongooseModule } = require('@nestjs/mongoose');
const { UsersModule } = require('./users/users.module');
import dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot('dotenv.MONGO_URI'),
    UsersModule,
  ],
})
class AppModule {}

module.exports = { AppModule };

