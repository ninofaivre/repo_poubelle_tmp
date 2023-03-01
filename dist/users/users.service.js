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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const common_2 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
        this.updateTest = [];
    }
    async getUserByNameOrThrow(name) {
        const user = await this.getUserByName(name);
        if (!user)
            throw new common_2.NotFoundException(`user ${name} not found !`);
        return user;
    }
    async getUserByName(name) {
        return this.prisma.user.findUnique({ where: { name: name } });
    }
    async createUser(user) {
        if (await this.getUserByName(user.name))
            throw new common_2.UnauthorizedException("user already exist");
        user.password = await (0, bcrypt_1.hash)(user.password, 10);
        return this.prisma.user.create({ data: user });
    }
    async getAllDiscussions(username) {
        let res = [];
        for (let currDiscussion of (await this.prisma.user.findUnique({ where: { name: username } }).discussions({ include: { users: true } }))) {
            let userNames = [];
            for (let currUser of currDiscussion.users)
                userNames.push(currUser.name);
            const { users } = currDiscussion, newDiscussion = __rest(currDiscussion, ["users"]);
            newDiscussion["users"] = userNames;
            res.push(newDiscussion);
        }
        return res;
    }
    getUpdate(username) {
        let tmp = this.updateTest[username];
        this.updateTest[username] = { discussions: [], messages: [] };
        return { test: tmp };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map