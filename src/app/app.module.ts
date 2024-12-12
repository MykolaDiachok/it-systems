import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { createTranslateLoader } from './shared/translation-loader';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    LandingPageComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    CommonModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translate: TranslateService) {
    const browserLanguage = this.translate.getBrowserCultureLang()?.substring(0, 2) || 'en';
    if (['en', 'hr', 'de'].includes(browserLanguage)) {
      this.translate.use(browserLanguage);
    } else {
      this.translate.use('hr');
    }
  }
}
