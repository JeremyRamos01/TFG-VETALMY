import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnfermedadesService } from './enfermedades.service';
import { CreateEnfermedadDto } from './dto/create-enfermedade.dto';
import { UpdateEnfermedadDto } from './dto/update-enfermedade.dto';

@Controller('enfermedades')
export class EnfermedadesController {
  constructor(private readonly enfermedadesService: EnfermedadesService) { }

  @Post()
  create(@Body() createEnfermedadDto: CreateEnfermedadDto) {
    return this.enfermedadesService.create(createEnfermedadDto);
  }

  @Get()
  findAll() {
    return this.enfermedadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enfermedadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnfermedadDto: UpdateEnfermedadDto) {
    return this.enfermedadesService.update(+id, updateEnfermedadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfermedadesService.remove(+id);
  }
}
