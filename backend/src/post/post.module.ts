import { DatabaseModule } from './../database/database.module';
import { postProviders } from './post.provider';
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [
    ...postProviders,
    PostService
  ]
})
export class PostModule {}
