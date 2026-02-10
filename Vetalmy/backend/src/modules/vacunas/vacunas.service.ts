import { Injectable } from '@nestjs/common';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vacuna } from './entities/vacuna.entity';
import { Repository } from 'typeorm';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';

@Injectable()
export class VacunasService {
  constructor(
    @InjectRepository(Vacuna)
    private readonly vacunasRepository: Repository<Vacuna>,
  ) { }

  async create(createVacunaDto: CreateVacunaDto) {
    const vacuna = this.vacunasRepository.create(createVacunaDto);
    return await this.vacunasRepository.save(vacuna);
  }

  async findAll() {
    return await this.vacunasRepository.find({
      relations: ['historial'],
    });
  }

  async findOne(id: number) {
    return await this.vacunasRepository.findOne({
      where: { id },
      relations: ['historial'],
    });
  }

  async update(id: number, updateVacunaDto: UpdateVacunaDto) {
    const vacuna = await this.vacunasRepository.findOne({ where: { id } });
    if (!vacuna) {
      throw new Error('Vacuna no encontrada');
    }
    return this.vacunasRepository.update(id, updateVacunaDto);
  }

  async remove(id: number) {
    return await this.vacunasRepository.delete(id);
  }


}