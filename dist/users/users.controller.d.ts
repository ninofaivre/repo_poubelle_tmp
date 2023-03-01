import { MessageEvent } from '@nestjs/common';
import { UsersService } from './users.service';
import { DiscussionsService } from '../discussions/discussions.service';
import { MessagesService } from '../messages/messages.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { CreateDiscussionDTO } from '../discussions/dto/createDiscussion.dto';
import { Observable } from 'rxjs';
export declare class UsersController {
    private usersService;
    private discussionsService;
    private messagesService;
    constructor(usersService: UsersService, discussionsService: DiscussionsService, messagesService: MessagesService);
    myName(req: any): Promise<{
        data: any;
    }>;
    createUser(user: CreateUserDTO): Promise<import(".prisma/client").User>;
    getAllDiscussions(req: any): Promise<any[]>;
    createDiscussion(req: any, createDiscussionDTO: CreateDiscussionDTO): Promise<import(".prisma/client").Discussion>;
    createMessage(req: any, dto: {
        discussionId: number;
        content: string;
    }): Promise<import(".prisma/client").Message>;
    getnMessages(req: any, dto: {
        discussionId: number;
        start: number;
        n: number;
    }): Promise<import(".prisma/client").Message[]>;
    getUpdate(req: any): Observable<MessageEvent>;
}
