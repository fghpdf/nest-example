import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity()
export class NftDelta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    balance: number;

    @Column('tinyint')
    type: number; // 1 - buy, 2 - sell

    @Column('tinyint', {name: 'nft_type'})
    nftType: number; // 1 - OG, 2 - Public

    @Column({name: 'token_id'})
    tokenId: string;
 
    @Column('bigint', {name: 'exec_time'})
    execTime: number;

    @Column({name: 'txn_id'})
    txnId: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', default: () => 'CURRENT_TIMESTAMP(6)' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    updatedAt: Date;
}