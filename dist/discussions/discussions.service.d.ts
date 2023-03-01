import { PrismaService } from '../prisma.service';
import { CreateDiscussionDTO } from './dto/createDiscussion.dto';
import { UsersService } from '../users/users.service';
export declare class DiscussionsService {
    private usersService;
    private readonly prisma;
    constructor(usersService: UsersService, prisma: PrismaService);
    getAllUsers(id: number): Promise<import(".prisma/client").User[]>;
    createDiscussion(username: string, createDiscussionDTO: CreateDiscussionDTO): Promise<import(".prisma/client").Discussion>;
}
