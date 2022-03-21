
/*
https://docs.nestjs.com/modules
*/
import { NftDeltasController } from './nftDeltas.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NftDelta } from 'src/entitys/nftDelta.entity';
import { NftDefltasService } from './nftDefltas.service';

@Module({
    imports: [TypeOrmModule.forFeature([NftDelta])],
    controllers: [NftDeltasController,],
    providers: [NftDefltasService],
})
export class NftDeltasModule { }
