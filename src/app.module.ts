import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from './auth/auth.module'
import { join } from 'path'
import { MessagesModule } from './messages/messages.module';
import { GameModule } from './game/game.module';

@Module({
	imports:
	[
		ServeStaticModule.forRoot(
		{
			rootPath: join(__dirname, '..', 'client'),
			exclude: ['/api*'],
		}),
		AuthModule,
		MessagesModule,
		GameModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
