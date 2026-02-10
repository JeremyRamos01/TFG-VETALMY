import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) { }

  async create(createChatDto: CreateChatDto) {
    const chat = this.chatRepository.create(createChatDto);
    return await this.chatRepository.save(chat);
  }

  async findAll() {
    return await this.chatRepository.find({
      relations: ['cliente', 'veterinario', 'mensajes'],
      order: { fecha_creacion: 'DESC' }
    });
  }

  async findOne(id: number) {
    return await this.chatRepository.findOne({
      where: { id },
      relations: ['cliente', 'veterinario', 'mensajes'],
    });
  }
}