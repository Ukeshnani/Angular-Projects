import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Client,
  CreateMessageModel,
  StringIdentifierModel,
} from './hrx-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiFacadeService {
  constructor() {}

  client = inject(Client);

  public getAiChatv2(
    createMessageModel: CreateMessageModel
  ): Observable<StringIdentifierModel> {
    return this.client.aiChat(createMessageModel);
  }
}
