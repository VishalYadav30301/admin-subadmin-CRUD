import { OnApplicationBootstrap } from '@nestjs/common';
import { UserService } from './modules/user/user.service';
export declare class AppModule implements OnApplicationBootstrap {
    private userService;
    constructor(userService: UserService);
    onApplicationBootstrap(): Promise<void>;
}
