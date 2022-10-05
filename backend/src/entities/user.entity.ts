import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Visit } from "./visit.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column({ type: 'varchar' })
    role: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @OneToMany(() => Visit, (visit) => visit.user, { cascade: ["remove"] })
    visits?: Visit[];
}