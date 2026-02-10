import { Injectable } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MensajesService {
  constructor(
    @InjectRepository(Mensaje)
    private readonly mensajeRepository: Repository<Mensaje>,
  ) { }

  async create(createMensajeDto: CreateMensajeDto) {
    const mensaje = this.mensajeRepository.create(createMensajeDto);
    return await this.mensajeRepository.save(mensaje);
  }

  async findAll() {
    return await this.mensajeRepository.find({
      relations: ['chat', 'usuario'],
      order: { fecha: 'ASC' }
    });
  }
}