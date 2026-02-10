import { Injectable } from '@nestjs/common';
import { CreateHistorialDto } from './dto/create-historial.dto';
import { UpdateHistorialDto } from './dto/update-historial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Historial } from './entities/historial.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistorialService {
  constructor(
    @InjectRepository(Historial)
    private readonly historialRepository: Repository<Historial>,
  ) { }

  async create(createHistorialDto: CreateHistorialDto) {
    const historial = this.historialRepository.create(createHistorialDto);
    return await this.historialRepository.save(historial);
  }

  async findAll() {
    return await this.historialRepository.find({
      relations: ['mascota'],
    });
  }

  async findOne(id: number) {
    return await this.historialRepository.findOne({
      where: { id },
      relations: ['mascota'],
    });
  }

  async update(id: number, updateHistorialDto: UpdateHistorialDto) {
    const historial = await this.historialRepository.findOne({ where: { id } });
    if (!historial) {
      throw new Error('Historial no encontrado');
    }
    return this.historialRepository.update(id, updateHistorialDto);
  }

  async remove(id: number) {
    return await this.historialRepository.delete(id);
  }
}