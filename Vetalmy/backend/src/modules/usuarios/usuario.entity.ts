import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Mascota } from "../mascotas/entities/mascota.entity";
import { Cita } from "../citas/entities/cita.entity";
import { IsOptional } from "class-validator";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido1: string;

    @Column()
    @IsOptional()
    apellido2: string;

    @Column()
    email: string;

    @Column({ name: 'contraseña' })
    contrasenia: string;

    @Column()
    rol: string;

    @OneToMany(() => Mascota, (mascota) => mascota.usuario)
    mascotas: Mascota[];

    @OneToMany(() => Cita, (cita) => cita.cliente)
    citas: Cita[];
}