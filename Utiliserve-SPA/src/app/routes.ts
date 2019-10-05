import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail-resolver';
import { MemberListResolver } from './_resolvers/member-list-resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit-resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormListResolver } from './_resolvers/form-list-resolver';
import { FormListComponent } from './forms/form-list/form-list.component';
import { ApiComponent } from './api/api.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'admin', component: ApiComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'registerUser', component: RegisterComponent, resolve: {users: MemberListResolver}},
            {path: 'forms', component: FormListComponent, resolve: {forms: FormListResolver}},
            {path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            {path: 'members/:id', component: MemberDetailComponent, resolve: { user: MemberDetailResolver}},
            {path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver}
                , canDeactivate: [PreventUnsavedChanges]},
            {path: 'messages', component: MessagesComponent},
            {path: 'lists', component: ListsComponent},
        ]
    },
    {path: '**', redirectTo: '/home', pathMatch: 'full'}

];
