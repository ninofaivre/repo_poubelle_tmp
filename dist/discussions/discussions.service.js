"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscussionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const users_service_1 = require("../users/users.service");
const common_2 = require("@nestjs/common");
let DiscussionsService = class DiscussionsService {
    constructor(usersService, prisma) {
        this.usersService = usersService;
        this.prisma = prisma;
    }
    async getAllUsers(id) {
        return this.prisma.discussion.findUnique({ where: { id: id } }).users();
    }
    async createDiscussion(username, createDiscussionDTO) {
        if (createDiscussionDTO.users.includes(username))
            throw new common_2.UnauthorizedException("you can't add yourself twice to the discussion");
        const users = [];
        for (let currUser of createDiscussionDTO.users)
            users.push(this.usersService.getUserByNameOrThrow(currUser));
        await Promise.all(users);
        createDiscussionDTO.users.push(username);
        for (let currDiscussion of await this.usersService.getAllDiscussions(username)) {
            if (currDiscussion.users.length === createDiscussionDTO.users.length &&
                currDiscussion.users.every((val) => createDiscussionDTO.users.includes(val)))
                throw new common_2.UnauthorizedException("Discussion already exist !");
        }
        let connect = [];
        for (let currUser of createDiscussionDTO.users)
            connect.push({ id: (await this.usersService.getUserByName(currUser)).id });
        let tmp = await this.prisma.discussion.create({ data: { users: { connect: connect } } });
        tmp["users"] = createDiscussionDTO.users;
        for (let i of createDiscussionDTO.users) {
            if (this.usersService.updateTest[i])
                this.usersService.updateTest[i]["discussions"].push(tmp);
        }
        return tmp;
    }
};
DiscussionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        prisma_service_1.PrismaService])
], DiscussionsService);
exports.DiscussionsService = DiscussionsService;
//# sourceMappingURL=discussions.service.js.map