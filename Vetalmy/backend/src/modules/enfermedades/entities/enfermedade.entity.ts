import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Historial } from '../../historial/entities/historial.entity';
import { Usuario } from '../../usuarios/usuario.entity';


@Entity('enfermedades')
export class Enfermedad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    fecha_diagnostico: string;

    @Column({ type: 'date', nullable: true })
    fecha_alta: string; // Puede ser null si aún está enfermo

    @Column('text', { nullable: true })
    observaciones: string; // Ej: "Inflamación severa en oído izquierdo"

    // --- RELACIÓN 1: ¿DÓNDE SE GUARDA? (En el Historial) ---
    @ManyToOne(() => Historial, (historial) => historial.enfermedad, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'historial_id' })
    historial: Historial;

    @Column({ name: 'historial_id' })
    historialId: number;

    // --- RELACIÓN 2: ¿QUIÉN LO DIAGNOSTICÓ? (El Veterinario) ---
    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'veterinario_id' })
    veterinario: Usuario;

    @Column({ name: 'veterinario_id', nullable: true })
    veterinarioId: number;
}