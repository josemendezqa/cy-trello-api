import { OrganizationsEndpointsConstants } from '../constants/organizations-endpoints-constants'

export class OrganizationsApiHelper {
	getBoardsInOrganization() {
		return cy
			.getRequest(OrganizationsEndpointsConstants.GET_BOARDS_IN_ORGANIZATION)
			.as('getBoardsInOrganization')
	}
}
