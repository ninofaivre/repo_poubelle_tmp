"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscussionsModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("../users/users.module");
const discussions_controller_1 = require("./discussions.controller");
const discussions_service_1 = require("./discussions.service");
const prisma_service_1 = require("../prisma.service");
let DiscussionsModule = class DiscussionsModule {
};
DiscussionsModule = __decorate([
    (0, common_1.Module)({
        imports: [(0, common_1.forwardRef)(() => users_module_1.UsersModule)],
        controllers: [discussions_controller_1.DiscussionsController],
        providers: [discussions_service_1.DiscussionsService, prisma_service_1.PrismaService],
        exports: [discussions_service_1.DiscussionsService]
    })
], DiscussionsModule);
exports.DiscussionsModule = DiscussionsModule;
//# sourceMappingURL=discussions.module.js.map