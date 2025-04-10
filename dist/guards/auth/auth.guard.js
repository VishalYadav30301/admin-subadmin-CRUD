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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const token_service_1 = require("../../modules/token/token.service");
let AuthGuard = class AuthGuard {
    tokenService;
    reflector;
    constructor(tokenService, reflector) {
        this.tokenService = tokenService;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const accessToken = request.headers.authorization?.split(" ")[1];
        if (!accessToken)
            return false;
        const requiredRole = this.reflector.getAllAndOverride("role", [context.getHandler(), context.getClass()]);
        try {
            const payload = await this.tokenService.verify(accessToken);
            const { userId, role } = payload;
            console.log({ requiredRole, role });
            request.userId = userId;
            return role === requiredRole;
        }
        catch (err) {
            throw new common_1.UnauthorizedException("Login Required!!");
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        core_1.Reflector])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map