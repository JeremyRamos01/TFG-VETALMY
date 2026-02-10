import { Injectable } from '@nestjs/common';
import { CreateEnfermedadDto } from './dto/create-enfermedade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Enfermedad } from './entities/enfermedade.entity';
import { Repository } from 'typeorm';
import { UpdateEnfermedadDto } from './dto/update-enfermedade.dto';

@Injectable()
export class EnfermedadesService {
  constructor(
    @InjectRepository(Enfermedad)
    private readonly enfermedadesRepository: Repository<Enfermedad>,
  ) { }

  async create(createEnfermedadDto: CreateEnfermedadDto) {
    const enfermedad = this.enfermedadesRepository.create(createEnfermedadDto);
    return await this.enfermedadesRepository.save(enfermedad);
  }

  async findAll() {
    return await this.enfermedadesRepository.find({
      relations: ['historial', 'veterinario'],
    });
  }



  async findOne(id: number) {
    return await this.enfermedadesRepository.findOne({
      where: { id },
      relations: ['historial', 'veterinario'],
    });
  }


  async update(id: number, updateEnfermedadDto: UpdateEnfermedadDto) {
    const enfermedad = await this.enfermedadesRepository.findOne({ where: { id } });
    if (!enfermedad) {
      throw new Error('Enfermedad no encontrada');
    }
    return this.enfermedadesRepository.update(id, updateEnfermedadDto);
  }


  async remove(id: number) {
    return await this.enfermedadesRepository.delete(id);
  }
}