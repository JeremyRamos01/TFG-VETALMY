import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VacunasService } from './vacunas.service';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';

@Controller('vacunas')
export class VacunasController {
  constructor(private readonly vacunasService: VacunasService) { }

  @Post()
  create(@Body() createVacunaDto: CreateVacunaDto) {
    return this.vacunasService.create(createVacunaDto);
  }

  @Get()
  findAll() {
    return this.vacunasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacunasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVacunaDto: UpdateVacunaDto) {
    return this.vacunasService.update(+id, updateVacunaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vacunasService.remove(+id);
  }
}
