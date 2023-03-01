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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const users_service_1 = require("./users.service");
const discussions_service_1 = require("../discussions/discussions.service");
const messages_service_1 = require("../messages/messages.service");
const createUser_dto_1 = require("./dto/createUser.dto");
const createDiscussion_dto_1 = require("../discussions/dto/createDiscussion.dto");
const swagger_1 = require("@nestjs/swagger");
const rxjs_1 = require("rxjs");
let UsersController = class UsersController {
    constructor(usersService, discussionsService, messagesService) {
        this.usersService = usersService;
        this.discussionsService = discussionsService;
        this.messagesService = messagesService;
    }
    async myName(req) {
        return { data: req.user.username };
    }
    async createUser(user) {
        return this.usersService.createUser(user);
    }
    async getAllDiscussions(req) {
        return this.usersService.getAllDiscussions(req.user.username);
    }
    async createDiscussion(req, createDiscussionDTO) {
        return this.discussionsService.createDiscussion(req.user.username, createDiscussionDTO);
    }
    async createMessage(req, dto) {
        return this.messagesService.createMessage(dto.discussionId, req.user.username, dto.content);
    }
    async getnMessages(req, dto) {
        return this.messagesService.getnMessages(dto.discussionId, dto.start, dto.n);
    }
    getUpdate(req) {
        this.usersService.updateTest[req.user.username] = { discussions: [], messages: [] };
        return (0, rxjs_1.interval)(100).pipe((0, rxjs_1.map)((_) => ({ data: this.usersService.getUpdate(req.user.username) })));
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Get)('/myName'),
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "myName", null);
__decorate([
    (0, common_1.Post)('/sign-up'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Get)('/getAllDiscussions'),
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllDiscussions", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Post)('/createDiscussion'),
    __param(0, (0, common_2.Request)()),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createDiscussion_dto_1.CreateDiscussionDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createDiscussion", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Post)('/createMessage'),
    __param(0, (0, common_2.Request)()),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createMessage", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Post)('/getnMessages'),
    __param(0, (0, common_2.Request)()),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getnMessages", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Sse)('/sse'),
    __param(0, (0, common_2.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], UsersController.prototype, "getUpdate", null);
UsersController = __decorate([
    (0, common_2.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        discussions_service_1.DiscussionsService,
        messages_service_1.MessagesService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map