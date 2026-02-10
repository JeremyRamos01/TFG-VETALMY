import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacunasService } from './vacunas.service';
import { VacunasController } from './vacunas.controller';
import { Vacuna } from './entities/vacuna.entity';
import { Historial } from '../historial/entities/historial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vacuna, Historial])],
  controllers: [VacunasController],
  providers: [VacunasService],
})
export class VacunasModule { }