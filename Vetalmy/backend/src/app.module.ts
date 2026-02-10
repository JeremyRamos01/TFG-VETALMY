import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { Usuario } from './modules/usuarios/usuario.entity';
import { MascotasModule } from './modules/mascotas/mascotas.module';
import { Mascota } from './modules/mascotas/entities/mascota.entity';
import { CitasModule } from './modules/citas/citas.module';
import { Cita } from './modules/citas/entities/cita.entity';
import { HistorialModule } from './modules/historial/historial.module';
import { Historial } from './modules/historial/entities/historial.entity';
import { ChatModule } from './modules/chat/chat.module';
import { VacunasModule } from './modules/vacunas/vacunas.module';
import { EnfermedadesModule } from './modules/enfermedades/enfermedades.module';
import { Vacuna } from './modules/vacunas/entities/vacuna.entity';
import { Enfermedad } from './modules/enfermedades/entities/enfermedade.entity';
import { MensajesModule } from './modules/mensajes/mensajes.module';
import { Mensaje } from './modules/mensajes/entities/mensaje.entity';
import { Chat } from './modules/chat/entities/chat.entity';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'vet_db',
      entities: [Usuario, Mascota, Cita, Historial, Vacuna, Enfermedad, Mensaje, Chat],
      synchronize: true,
    }),


    UsuariosModule,
    MascotasModule,
    CitasModule,
    HistorialModule,
    ChatModule,
    VacunasModule,
    EnfermedadesModule,
    MensajesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }