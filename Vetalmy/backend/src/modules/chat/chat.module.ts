import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { Chat } from './entities/chat.entity';
import { Mensaje } from '../mensajes/entities/mensaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chat, Mensaje])],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule { }