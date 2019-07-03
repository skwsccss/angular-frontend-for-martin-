import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
// import { HeaderComponent } from './layouts/header/header.component';
import { PagesComponent } from './pages.component';
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContractComponent } from './contract/contract.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent, ChangePassword } from './navbar/navbar.component';
import { AppendixComponent } from './appendix/appendix.component';
import { InvoiceComponent } from './invoice/invoice.component';
// import { SettingsComponent } from './settings/settings.component';
// import { NotificationComponent } from './notification/notification.component';
// import { HowtouseComponent } from './howtouse/howtouse.component';

@NgModule({
    declarations:[
        PagesComponent,
        NavbarComponent,
        MainpageComponent,
        ContractComponent,
        ChangePassword,
        AppendixComponent,
        InvoiceComponent,

    ],
    entryComponents:[
        ChangePassword,

    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule.forChild([
            {
                path:'',
                component: PagesComponent,
                children: [
                    {
                        path:'',
                        component: MainpageComponent
                    },
                    {
                        path: 'contract',
                        component: ContractComponent
                    },
                    {
                        path: 'appendix',
                        component: AppendixComponent
                    },
                    {
                        path: 'invoice',
                        component: InvoiceComponent
                    }
                ]
            }
        ])
    ],
    bootstrap: [PagesComponent]
})

export class PagesModule {}
