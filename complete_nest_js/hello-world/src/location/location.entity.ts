import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;
}