import { AppButtonCategory } from './../models';
import { BaseApi } from '../BaseApi';

class NavbarApi extends BaseApi {
	constructor() {
		super(import.meta.env.VITE_APP_API_NAVBAR);
		this.url = import.meta.env.VITE_APP_API_NAVBAR;
	}

	public async getApps() {
		return this.get<AppButtonCategory[]>('/apps');
	}
}

export const navbarApi = new NavbarApi();
