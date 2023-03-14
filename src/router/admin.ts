import { LocalStorage, LocalStorageItem } from './../models/LocalStorage';
import { NavigationGuard, RouteRecordRaw } from 'vue-router';

export const adminRoutes: Array<RouteRecordRaw> = [
	{
		path: '',
		component: () => import('../views/admin/AdminView.vue'),
	},
	{
		path: 'groups',
		component: () => import('../views/admin/groups/AdminGroupsView.vue'),
	},
	{
		path: 'scopes',
		component: () => import('../views/admin/scopes/AdminScopesView.vue'),
	},
	{
		path: 'group/:id(\\d+)',
		component: () => import('../views/admin/group/AdminGroupView.vue'),
	},
];

export const adminHandler: NavigationGuard = to => {
	if (to.path.startsWith('/admin')) {
		if (!LocalStorage.get(LocalStorageItem.Token)) {
			return { path: '/auth' };
		}
	}
};
