import { Module } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mascota } from './entities/mascota.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Mascota])
  ],
  controllers: [MascotasController],
  providers: [MascotasService],
})
export class MascotasModule { }
