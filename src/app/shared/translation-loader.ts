import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TranslationLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`/assets/i18n/app/${lang}.json`);
  }
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslationLoader(http);
}
