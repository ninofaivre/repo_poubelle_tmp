import { PrismaService } from '../prisma.service';
import { UsersService } from '../users/users.service';
export declare class MessagesService {
    private readonly prisma;
    private usersService;
    constructor(prisma: PrismaService, usersService: UsersService);
    getnMessages(discussionId: number, start: number, n: number): Promise<import(".prisma/client").Message[]>;
    createMessage(discussionId: number, username: string, content: string): Promise<import(".prisma/client").Message>;
}
