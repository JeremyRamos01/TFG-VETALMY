import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/usuario.entity';
import { Cita } from '../../citas/entities/cita.entity';

@Entity('mascotas')
export class Mascota {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    animal: string;

    @Column({ nullable: true })
    raza: string;

    @Column({ nullable: true })
    edad: number;

    @Column('decimal', { precision: 5, scale: 2, nullable: true })
    peso: number;


    @ManyToOne(() => Usuario, (usuario) => usuario.mascotas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @Column({ name: 'usuario_id' })
    usuarioId: number;

    @OneToMany(() => Cita, (cita) => cita.mascota)
    citas: Cita[];
}