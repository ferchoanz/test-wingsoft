import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity('visits')
export class Visit {
    @PrimaryGeneratedColumn({ unsigned: true })
    id: number;

    @Column({ type: 'int', unsigned: true, nullable: true, width: 10 })
    userId: number;

    @Column({ type: 'int', unsigned: true, nullable: true, width: 10 })
    postId: number;

    @ManyToOne(() => Post, post => post.visits)
    post: Post;

    @ManyToOne(() => User, user => user.visits)
    user: User;
}