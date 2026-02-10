import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Mascota } from '../../mascotas/entities/mascota.entity';
import { Usuario } from '../../usuarios/usuario.entity';

@Entity('citas')
export class Cita {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('timestamp')
    fecha: Date;

    @Column({ nullable: true })
    tipo: string;

    @Column('text', { nullable: true })
    motivo: string;

    @ManyToOne(() => Mascota, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'mascota_id' })
    mascota: Mascota;

    @Column({ name: 'mascota_id' })
    mascotaId: number;

    @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'cliente_id' })
    cliente: Usuario;

    @Column({ name: 'cliente_id' })
    clienteId: number;

    @ManyToOne(() => Usuario, { nullable: true })
    @JoinColumn({ name: 'veterinario_id' })
    veterinario: Usuario;

    @Column({ name: 'veterinario_id', nullable: true })
    veterinarioId: number;
}
