import baseAPI from './api';
import baseURLs from '../configs/baseURLs';

class SettingsService {
  constructor() {
    this.api = baseAPI(baseURLs.API_ACCOUNTS);
  }

  // get : configurações do domínio
  async get() {
    const result = await this.api.get('accounts/settings');

    return result.data;
  }

  // addAccountEmail: adicionar uma conta de e-mail
  async addAcountEmail(accountEmailModel) {
    const result = await this.api.put('accounts/settings/accountEmails', accountEmailModel);

    return result.data;
  }

  // getOneAccountEmail: retorna uma conta de e-mail
  async getOneAccountEmail(accountEmailId) {
    const result = await this.api.get(`accounts/settings/accountEmails/${accountEmailId}`);

    return result.data;
  }

  // getAllAccountEmail: retorna todas as contas de e-mail
  async getAllAccountEmail() {
    const result = await this.api.get('accounts/settings/accountEmails');

    return result.data;
  }
}

export default SettingsService;