import { NftDeltasModule } from './nftDeltas/nftDeltas.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { GraphQLRequestModule } from '@golevelup/nestjs-graphql-request';

@Module({
  imports: [
    NftDeltasModule, ConfigModule.forRoot({
      load: [configuration]
    }), TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return configService.get<ConnectionOptions>('database');
      },
      inject: [ConfigService],
    }), GraphQLRequestModule.forRoot(GraphQLRequestModule, {
      endpoint: "",
      options: {
        headers: {
          'content-type': 'application/json',
        },
      }
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
