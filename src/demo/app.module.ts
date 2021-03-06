// import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// App components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeatureFlagModule } from '../app/feature-flag.module';
import { FABRIC8_FEATURE_TOGGLES_API_URL, FeatureTogglesService } from '../app/service/feature-toggles.service';
import { AUTH_API_URL, AuthenticationService, REALM, SSO_API_URL } from 'ngx-login-client';
import { Broadcaster } from 'ngx-base';
import { DemoComponentsModule } from './welcome/demo-components.module';
import { NavbarModule } from './navbar/navbar.module';
import { FeatureToggleExampleModule } from './feature-toggle/feature-toggle.example.module';
import { FeatureTogglesServiceMock } from './service/feature-toggles-mock.service';
import { FeatureToggleLoaderExampleModule } from './feature-toggle-loader/feature-toggle-loader.example.module';
import { FeatureToggleServiceExampleModule } from './feature-toggle-service/feature-toggle-service.example.module';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DemoComponentsModule,
    NavbarModule,
    FeatureFlagModule,
    FeatureToggleExampleModule,
    FeatureToggleLoaderExampleModule,
    FeatureToggleServiceExampleModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  providers: [
    {provide: AUTH_API_URL, useValue: 'https://auth.prod-preview.openshift.io/api/'},
    {provide: SSO_API_URL, useValue: 'https://sso.prod-preview.openshift.io/api/'},
    {provide: REALM, useValue: ''},
    {provide: FABRIC8_FEATURE_TOGGLES_API_URL, useValue: 'https://api.prod-preview.openshift.io/api/'},
    Broadcaster,
    AuthenticationService,
    // FeatureTogglesService //uncomment if you want to use prod-preview service
    {provide: FeatureTogglesService, useClass: FeatureTogglesServiceMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
