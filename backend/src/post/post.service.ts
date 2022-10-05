import { Visit } from '../entities/visit.entity';
import { CreateVisitDto } from './dto/create-visit.dto';
import { Post } from '../entities/post.entity';
import { Injectable, Inject } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {

  constructor(
    @Inject('POST_REPOSITORY') private postRepository: Repository<Post>,
    @Inject('VISIT_REPOSITORY') private visitRepository: Repository<Visit>
  ) { }

  create(createPostDto: CreatePostDto): Promise<Post> {
    return this.postRepository.save(createPostDto);
  }

  findAll() {
    return this.postRepository.find({ order: { createdAt: 'ASC' } });
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });
    const previous = await this.postRepository.query(`SELECT id FROM posts WHERE createdAt < (SELECT createdAt FROM posts WHERE id = ${id}) ORDER BY createdAt DESC LIMIT 1`);
    const next = await this.postRepository.query(`SELECT id FROM posts WHERE createdAt > (SELECT createdAt FROM posts WHERE id = ${id}) ORDER BY createdAt ASC LIMIT 1`);

    return { post, previous, next };
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postRepository.update({ id }, updatePostDto);
  }

  remove(id: number) {
    return this.postRepository.delete({ id });
  }

  createVisit(createVisitDto: CreateVisitDto) {
    return this.visitRepository.save(createVisitDto);
  }  
  
}
