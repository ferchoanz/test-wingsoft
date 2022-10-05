import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity('visits')
export class Visit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', unsigned: true, width: 11 })
    userId: number;

    @Column({ type: 'int', unsigned: true, width: 11 })
    postId: number;

    @ManyToOne(() => Post, post => post.visits)
    post: Post;

    @ManyToOne(() => User, user => user.visits)
    user: User;
}