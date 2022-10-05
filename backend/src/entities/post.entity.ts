import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Visit } from "./visit.entity";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column({ type: 'varchar' })
    title: string;

    @Column({ type: 'varchar' })
    summary: string;

    @Column({ type: 'text' })
    content: string;

    @Column({ type: 'varchar' })
    author: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany(() => Visit, (visit) => visit.post, { cascade: ["remove"] })
    visits?: Visit[];
}