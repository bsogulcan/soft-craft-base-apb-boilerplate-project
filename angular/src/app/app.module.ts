import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {NgxPaginationModule} from 'ngx-pagination';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceProxyModule} from '@shared/service-proxies/service-proxy.module';
import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from '@app/home/home.component';
import {AboutComponent} from '@app/about/about.component';
import {TenantsComponent} from '@app/tenants/tenants.component';
import {CreateTenantDialogComponent} from './tenants/create-tenant/create-tenant-dialog.component';
import {EditTenantDialogComponent} from './tenants/edit-tenant/edit-tenant-dialog.component';
import {RolesComponent} from '@app/roles/roles.component';
import {CreateRoleDialogComponent} from './roles/create-role/create-role-dialog.component';
import {EditRoleDialogComponent} from './roles/edit-role/edit-role-dialog.component';
import {UsersComponent} from '@app/users/users.component';
import {CreateUserDialogComponent} from '@app/users/create-user/create-user-dialog.component';
import {EditUserDialogComponent} from '@app/users/edit-user/edit-user-dialog.component';
import {ChangePasswordComponent} from './users/change-password/change-password.component';
import {ResetPasswordDialogComponent} from './users/reset-password/reset-password.component';
import {HeaderComponent} from './layout/header.component';
import {HeaderLeftNavbarComponent} from './layout/header-left-navbar.component';
import {HeaderLanguageMenuComponent} from './layout/header-language-menu.component';
import {HeaderUserMenuComponent} from './layout/header-user-menu.component';
import {FooterComponent} from './layout/footer.component';
import {SidebarComponent} from './layout/sidebar.component';
import {SidebarLogoComponent} from './layout/sidebar-logo.component';
import {SidebarUserPanelComponent} from './layout/sidebar-user-panel.component';
import {SidebarMenuComponent} from './layout/sidebar-menu.component';
import {ListboxModule} from 'primeng-lts/listbox';
import {CheckboxModule} from 'primeng-lts/checkbox';
import {TableModule} from 'primeng-lts/table';
import {ToastModule} from 'primeng-lts/toast';
import {CalendarModule} from 'primeng-lts/calendar';
import {SliderModule} from 'primeng-lts/slider';
import {MultiSelectModule} from 'primeng-lts/multiselect';
import {ContextMenuModule} from 'primeng-lts/contextmenu';
import {DialogModule} from 'primeng-lts/dialog';
import {ButtonModule} from 'primeng-lts/button';
import {DropdownModule} from 'primeng-lts/dropdown';
import {ProgressBarModule} from 'primeng-lts/progressbar';
import {InputTextModule} from 'primeng-lts/inputtext';
import {FileUploadModule} from 'primeng-lts/fileupload';
import {ToolbarModule} from 'primeng-lts/toolbar';
import {RatingModule} from 'primeng-lts/rating';
import {RadioButtonModule} from 'primeng-lts/radiobutton';
import {InputNumberModule} from 'primeng-lts/inputnumber';
import {ConfirmDialogModule} from 'primeng-lts/confirmdialog';
import {CardModule} from 'primeng-lts/card';
import {DialogService, DynamicDialogComponent, DynamicDialogModule} from 'primeng-lts/dynamicdialog';
import {TabViewModule} from 'primeng-lts/tabview';
import {ScrollPanelModule} from 'primeng-lts/scrollpanel';
import {InputMaskModule} from 'primeng-lts/inputmask';
import {InputTextareaModule} from 'primeng-lts/inputtextarea';
import {ConfirmationService} from 'primeng-lts/api';
import {MessageService} from 'primeng-lts/api';
import {DataGridComponent} from '../shared/components/dataGrid/dataGrid.component';
import {InputSwitchModule} from 'primeng-lts/inputswitch';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TenantsComponent,
        CreateTenantDialogComponent,
        EditTenantDialogComponent,
        RolesComponent,
        CreateRoleDialogComponent,
        EditRoleDialogComponent,
        UsersComponent,
        CreateUserDialogComponent,
        EditUserDialogComponent,
        ChangePasswordComponent,
        ResetPasswordDialogComponent,
        HeaderComponent,
        HeaderLeftNavbarComponent,
        HeaderLanguageMenuComponent,
        HeaderUserMenuComponent,
        FooterComponent,
        SidebarComponent,
        SidebarLogoComponent,
        SidebarUserPanelComponent,
        SidebarMenuComponent,
		DataGridComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ModalModule.forChild(),
        BsDropdownModule,
        CollapseModule,
        TabsModule,
        AppRoutingModule,
        ServiceProxyModule,
        SharedModule,
        NgxPaginationModule,
        ListboxModule,
        CheckboxModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        ToastModule,
        InputTextModule,
        ProgressBarModule,
        HttpClientModule,
        FileUploadModule,
        ToolbarModule,
        RatingModule,
        FormsModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        InputTextareaModule,
        TabViewModule,
        DynamicDialogModule,
        CardModule,
        ScrollPanelModule,
        InputMaskModule,
		InputSwitchModule,
    ],
    providers: [ConfirmationService, MessageService, DialogService],
    entryComponents: [
        // tenants
        CreateTenantDialogComponent,
        EditTenantDialogComponent,
        // roles
        CreateRoleDialogComponent,
        EditRoleDialogComponent,
        // users
        CreateUserDialogComponent,
        EditUserDialogComponent,
        ResetPasswordDialogComponent,
    ],
})
export class AppModule {
}
