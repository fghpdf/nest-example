/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Inject, Injectable } from '@nestjs/common';
import { NftDelta } from 'src/entitys/nftDelta.entity';
import { NftDefltasService } from './nftDefltas.service';

@Controller('nft-deltas')
@Injectable()
export class NftDeltasController {
    constructor(private nftDeltaService: NftDefltasService) {}

    @Get()
    async getNftDeltas(): Promise<NftDelta[]> {
        return this.nftDeltaService.findAll()
    }
}
