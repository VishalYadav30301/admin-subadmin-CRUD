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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../models/user.schema");
const user_schema_2 = require("../../models/user.schema");
const token_service_1 = require("../token/token.service");
let UserService = class UserService {
    userModel;
    configService;
    tokenService;
    constructor(userModel, configService, tokenService) {
        this.userModel = userModel;
        this.configService = configService;
        this.tokenService = tokenService;
    }
    async createSuperAdmin() {
        let password = this.configService.get("superAdmin.password");
        let hashedPassword = await this.tokenService.hash(password);
        await this.userModel.create({
            name: "SuperAdmin",
            email: this.configService.get("superAdmin.email"),
            password: hashedPassword,
            role: user_schema_2.UserRole.SUPER_ADMIN
        });
        console.log(`Super Admin Registered`);
    }
    async createUser(userData) {
        return await this.userModel.create(userData);
    }
    async findAllUser() {
        return await this.userModel.find({});
    }
    async findUserById(id) {
        return await this.userModel.findById(id);
    }
    async findUserByEmail(email) {
        return await this.userModel.findOne({ email });
    }
    async deleteUserById(id) {
        return await this.userModel.findByIdAndDelete(id);
    }
    async deleteUserByEmail(email) {
        return await this.userModel.findOneAndDelete({ email });
    }
    async findUserByRole(role) {
        return await this.userModel.findOne({ role });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService,
        token_service_1.TokenService])
], UserService);
//# sourceMappingURL=user.service.js.map