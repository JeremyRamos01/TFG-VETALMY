import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitasService } from './citas.service';
import { CitasController } from './citas.controller';
import { Cita } from './entities/cita.entity';
import { CitasGateway } from './citas.gateway';

@Module({

  imports: [TypeOrmModule.forFeature([Cita])],

  controllers: [CitasController],

  providers: [CitasService, CitasGateway],
})
export class CitasModule { }