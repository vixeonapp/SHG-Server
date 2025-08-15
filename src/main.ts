import { NestFactory } from '@nestjs/core';
import { SHGSModule } from './modules/shgs.module';

async function bootstrap() {
  const app = await NestFactory.create(SHGSModule);
  await app.listen(process.env.PORT ?? 5002);
}
void bootstrap();
