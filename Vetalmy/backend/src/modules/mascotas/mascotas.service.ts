import { Injectable } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mascota } from './entities/mascota.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MascotasService {
  constructor(
    @InjectRepository(Mascota)
    private readonly mascotasRepository: Repository<Mascota>,
  ) { }

  async create(createMascotaDto: CreateMascotaDto) {
    const mascota = this.mascotasRepository.create(createMascotaDto);
    return await this.mascotasRepository.save(mascota);
  }

  async findAll() {
    return await this.mascotasRepository.find({
      relations: ['usuario'],
    });
  }

  async findOne(id: number) {
    return await this.mascotasRepository.findOne({
      where: { id },
      relations: ['usuario'],
    });
  }

  async remove(id: number) {
    return await this.mascotasRepository.delete(id);
  }

  update(id: number, updateMascotaDto: UpdateMascotaDto) {
    const mascota = this.mascotasRepository.findOne({ where: { id } });
    if (!mascota) {
      throw new Error('Mascota no encontrada');
    }
    return this.mascotasRepository.update(id, updateMascotaDto);
  }
}