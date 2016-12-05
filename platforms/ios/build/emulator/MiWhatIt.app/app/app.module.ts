import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

//router
import { router } from './shared/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

//components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CreateUserComponent } from './login/create.user.component';
import { ChatListadoComponent } from './chats/listado.component';
@NgModule({
    declarations: [
            AppComponent,
            LoginComponent,
            CreateUserComponent,
            ChatListadoComponent
        ],
    bootstrap: [AppComponent],
    imports: [
            NativeScriptModule,
            NativeScriptRouterModule,
            NativeScriptRouterModule.forRoot(router)
            ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }