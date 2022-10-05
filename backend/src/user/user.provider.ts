import { Post } from '../entities/post.entity';
import { DataSource } from 'typeorm';
import { User } from './../entities/user.entity';

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'POST_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Post),
        inject: ['DATA_SOURCE']
    },
];