import { Module } from '@nestjs/common';
import { EnfermedadesService } from './enfermedades.service';
import { EnfermedadesController } from './enfermedades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enfermedad } from './entities/enfermedade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enfermedad])],
  controllers: [EnfermedadesController],
  providers: [EnfermedadesService],
})
export class EnfermedadesModule { }
