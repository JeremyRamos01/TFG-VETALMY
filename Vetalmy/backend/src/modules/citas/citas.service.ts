import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './entities/cita.entity';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { CitasGateway } from './citas.gateway';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(Cita)
    private readonly citasRepository: Repository<Cita>,
    private readonly citasGateway: CitasGateway,
  ) { }

  async create(createCitaDto: CreateCitaDto) {
    const cita = this.citasRepository.create(createCitaDto);
    this.citasGateway.notificarNuevaCita(cita);
    return await this.citasRepository.save(cita);
  }

  async findAll() {
    return await this.citasRepository.find({
      relations: ['mascota', 'cliente'],
    });
  }

  async findOne(id: number) {
    return await this.citasRepository.findOne({
      where: { id },
      relations: ['mascota', 'cliente'],
    });
  }

  async remove(id: number) {
    return await this.citasRepository.delete(id);
  }

  async update(id: number, updateCitaDto: UpdateCitaDto) {
    const cita = await this.citasRepository.findOne({ where: { id } });
    if (!cita) {
      throw new Error('Cita no encontrada');
    }
    this.citasGateway.notificarNuevaCita(cita);
    return this.citasRepository.update(id, updateCitaDto);
  }
}