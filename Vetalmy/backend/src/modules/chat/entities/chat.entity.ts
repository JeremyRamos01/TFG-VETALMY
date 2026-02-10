import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/usuario.entity';
import { Mensaje } from '../../mensajes/entities/mensaje.entity';

@Entity('chat')
export class Chat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: 'abierto' })
    estado: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_creacion: Date;
    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'cliente_id' })
    cliente: Usuario;

    @Column({ name: 'cliente_id' })
    clienteId: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'veterinario_id' })
    veterinario: Usuario;

    @Column({ name: 'veterinario_id' })
    veterinarioId: number;

    @OneToMany(() => Mensaje, (mensaje) => mensaje.chat)
    mensajes: Mensaje[];
}