import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './app/todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: Number(configService.get('DB_PORT', 5432)),
        username: configService.get('DB_USER', 'todoadmin'),
        password: configService.get('DB_PASSWORD', 'todo123'),
        database: configService.get('DB_DATABASE', 'todo-list'),
        entities: [__dirname + '/**/*.entity{.js,.ts}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
