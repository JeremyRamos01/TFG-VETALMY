import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuariosRepository: Repository<Usuario>,
    ) { }

    async create(createUsuarioDto: CreateUsuarioDto) {
        try {
            const { contrasenia, ...datosUsuario } = createUsuarioDto;
            const contraseniaHash = await bcrypt.hash(contrasenia, 10);
            const usuario = this.usuariosRepository.create({
                ...datosUsuario,
                contrasenia: contraseniaHash,
            });
            await this.usuariosRepository.save(usuario);
            delete (usuario as any).contrasenia;
            return usuario;
        } catch (error) {
            this.handleDBErrors(error);
        }
    }

    async findAll() {
        const usuarios = await this.usuariosRepository.find();

        return usuarios.map(u => {
            delete (u as any).contrasenia;
            return u;
        });
    }

    async findOne(id: number) {
        const usuario = await this.usuariosRepository.findOneBy({ id });
        if (!usuario) {
            throw new BadRequestException('Usuario no encontrado');
        }
        delete (usuario as any).contrasenia;
        return usuario;
    }

    async update(id: number, updateUsuarioDto: any) {
        const usuario = await this.usuariosRepository.findOneBy({ id });
        if (!usuario) {
            throw new BadRequestException('Usuario no encontrado');
        }

        if (updateUsuarioDto.contrasenia) {
            updateUsuarioDto.contrasenia = bcrypt.hashSync(updateUsuarioDto.contrasenia, 10);
        }
        this.usuariosRepository.merge(usuario, updateUsuarioDto);

        const actualizado = await this.usuariosRepository.save(usuario);
        delete (actualizado as any).contrasenia;
        return actualizado;
    }

    async remove(id: number) {
        const usuario = await this.findOne(id);
        await this.usuariosRepository.remove(usuario);
        return { message: `Usuario #${id} eliminado correctamente` };
    }


    private handleDBErrors(error: any): never {
        if (error.code === '23505') {
            throw new BadRequestException('Ya existe un usuario con ese email');
        }
        console.log(error);
        throw new InternalServerErrorException('Error al crear usuario (revisar logs)');
    }
}