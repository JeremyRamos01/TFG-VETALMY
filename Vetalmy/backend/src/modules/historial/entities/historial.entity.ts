import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Mascota } from '../../mascotas/entities/mascota.entity';
import { Vacuna } from '../../vacunas/entities/vacuna.entity';
import { Enfermedad } from '../../enfermedades/entities/enfermedade.entity';

@Entity('historial')
export class Historial {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text', { nullable: true })
    observaciones: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_creacion: Date;

    @OneToOne(() => Mascota, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'mascota_id' })
    mascota: Mascota;

    @Column({ name: 'mascota_id' })
    mascotaId: number;

    @OneToMany(() => Vacuna, (vacuna) => vacuna.historial)
    vacuna: Vacuna[];

    @OneToMany(() => Enfermedad, (enfermedad) => enfermedad.historial)
    enfermedad: Enfermedad[];
}