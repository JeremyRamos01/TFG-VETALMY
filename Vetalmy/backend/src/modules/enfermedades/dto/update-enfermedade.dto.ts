import { PartialType } from '@nestjs/mapped-types';
import { CreateEnfermedadDto } from './create-enfermedade.dto';

export class UpdateEnfermedadDto extends PartialType(CreateEnfermedadDto) { }
