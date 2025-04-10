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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const token_service_1 = require("../token/token.service");
let AuthService = class AuthService {
    userService;
    tokenService;
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async signup(signupData) {
        const { email, password } = signupData;
        const existingUser = await this.userService.findUserByEmail(email);
        if (existingUser) {
            throw new common_1.UnauthorizedException({ message: "Email Already Exist!!" });
        }
        const hashedPassword = await this.tokenService.hash(password);
        return await this.userService.createUser({ ...signupData, password: hashedPassword });
    }
    async login(credential) {
        const { email, password } = credential;
        const existingUser = await this.userService.findUserByEmail(email);
        if (!existingUser) {
            throw new common_1.NotFoundException({ message: "Email Invalid Credentials!!" });
        }
        const isValid = await this.tokenService.compare(password, existingUser.password);
        if (!isValid)
            throw new common_1.UnauthorizedException({ message: "Invalid Credentials" });
        const payload = { userId: existingUser._id, role: existingUser.role };
        const accessToken = await this.tokenService.sign(payload);
        existingUser.isActive = true;
        existingUser.save();
        return { accessToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map