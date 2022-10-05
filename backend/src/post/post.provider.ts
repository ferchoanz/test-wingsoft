import { Post } from '../entities/post.entity';
import { DataSource } from 'typeorm';
import { Visit } from '../entities/visit.entity';

export const postProviders = [
    {
        provide: 'POST_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Post),
        inject: ['DATA_SOURCE']
    },
    {
        provide: 'VISIT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Visit),
        inject: ['DATA_SOURCE']
    },
];