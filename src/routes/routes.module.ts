import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';

@Module({
  imports: [PrismaModule],
  exports: [RoutesService],
  controllers: [RoutesController],
  providers: [RoutesService],
})
export class RoutesModule {}
