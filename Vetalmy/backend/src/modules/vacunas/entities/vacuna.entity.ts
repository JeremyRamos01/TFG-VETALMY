import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Historial } from '../../historial/entities/historial.entity';

@Entity('vacunas')
export class Vacuna {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column('text', { nullable: true })
    descripción: string;

    @Column({ nullable: true })
    periodicidad: string;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    fecha_aplicacion: string;


    @ManyToOne(() => Historial, (historial) => historial.vacuna, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'historial_id' })
    historial: Historial;

    @Column({ name: 'historial_id' })
    historialId: number;
}