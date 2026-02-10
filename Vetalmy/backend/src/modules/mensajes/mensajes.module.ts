import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesService } from './mensajes.service';
import { MensajesController } from './mensajes.controller';
import { Mensaje } from './entities/mensaje.entity';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Mensaje])],

  controllers: [MensajesController],
  providers: [MensajesService, ChatGateway],
})
export class MensajesModule { }