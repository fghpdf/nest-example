/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLClient } from 'graphql-request';
import { NftDelta } from 'src/entitys/nftDelta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NftDefltasService {
    constructor(
        @InjectRepository(NftDelta)
        private nftDeltaRepostiry: Repository<NftDelta>,
        private graphClient: GraphQLClient,
    ) {}

    findAll(): Promise<NftDelta[]> {
        return this.nftDeltaRepostiry.find();
    } 
}
