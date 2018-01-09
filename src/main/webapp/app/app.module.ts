import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { BeerCounterApplicationSharedModule, UserRouteAccessService } from './shared';
import { BeerCounterApplicationAppRoutingModule} from './app-routing.module';
import { BeerCounterApplicationHomeModule } from './home/home.module';
import { BeerCounterApplicationAdminModule } from './admin/admin.module';
import { BeerCounterApplicationAccountModule } from './account/account.module';
import { BeerCounterApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        BeerCounterApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        BeerCounterApplicationSharedModule,
        BeerCounterApplicationHomeModule,
        BeerCounterApplicationAdminModule,
        BeerCounterApplicationAccountModule,
        BeerCounterApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class BeerCounterApplicationAppModule {}
