import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Chat } from '../../chat/entities/chat.entity';
import { Usuario } from '../../usuarios/usuario.entity';

@Entity('mensajes')
export class Mensaje {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    mensaje: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha: Date;

    @Column({ default: false })
    leido: boolean;

    @ManyToOne(() => Chat, (chat) => chat.mensajes, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'chat_id' })
    chat: Chat;

    @Column({ name: 'chat_id' })
    chatId: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @Column({ name: 'usuario_id' })
    usuarioId: number;
}