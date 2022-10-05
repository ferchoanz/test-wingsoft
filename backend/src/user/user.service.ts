import { Post } from '../entities/post.entity';
import { AuthUserDto } from './dto/auth-user.dto';
import { User } from '../entities/user.entity';
import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { hashSync, compare } from 'bcryptjs';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
        @Inject('POST_REPOSITORY') private postRepository: Repository<Post>,
    ) { }

    async findAll(): Promise<User[]> {
        /*const users: User[] = [
            {
                id: 1,
                name: 'Admin',
                email: 'admin@correo.com',
                password: hashSync('admin123456'),
                role: 'Admin'
            },
            {
                id: 2,
                name: 'User 1',
                email: 'user1@correo.com',
                password: hashSync('123456'),
                role: 'User'
            },
            {
                id: 3,
                name: 'User 2', 
                email: 'user2@correo.com',
                password: hashSync('123456'),
                role: 'User'
            },
            {
                id: 4,
                name: 'User 3',
                email: 'user3@correo.com',
                password: hashSync('123456'),
                role: 'User'
            }
        ];
        
        await this.userRepository.save(users);*/

        return this.userRepository.find();
    }

    async login(authUserDto: AuthUserDto): Promise<any> {
        const user = await this.userRepository.findOne({
            where: {
                email: authUserDto.email
            },
        });

        if (!user) {
            throw new UnauthorizedException('Wrong Email or Password ');
        }

        const toCompare = await compare(authUserDto.password, user.password);

        if (!toCompare) {
            throw new UnauthorizedException();
        }

        delete user.password;
        const token = sign(
            { user },
            process.env.APP_KEY,
            { expiresIn: '2h' }
        );

        return { user, token };
    }

    async statistics() {
        const users = await this.userRepository
            .createQueryBuilder('users')
            .leftJoin('users.visits', 'visits')
            .where(`users.role != 'Admin'`)
            .select([
                'users.name as name',
                'COUNT(visits.userId) as value'
            ])
            .groupBy('name')
            .orderBy('value', 'DESC')
            .limit(3)
            .getRawMany();
        
        const posts = await this.postRepository
            .createQueryBuilder('posts')
            .leftJoin('posts.visits', 'visits')
            .select([
                'posts.title as name',
                'COUNT(visits.postId) as value'
            ])
            .groupBy('name')
            .orderBy('value', 'DESC')
            .limit(5)
            .getRawMany();

        return { users, posts };
    }
}
