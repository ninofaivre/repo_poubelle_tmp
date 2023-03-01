import { CreateUserDTO } from './dto/createUser.dto';
import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUserByNameOrThrow(name: string): Promise<import(".prisma/client").User>;
    getUserByName(name: string): Promise<import(".prisma/client").User>;
    createUser(user: CreateUserDTO): Promise<import(".prisma/client").User>;
    getAllDiscussions(username: string): Promise<any[]>;
    updateTest: any[];
    getUpdate(username: string): {
        test: any;
    };
}
