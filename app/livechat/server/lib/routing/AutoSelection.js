import { RoutingManager } from '../RoutingManager';
import { LivechatDepartmentAgents, Users } from '../../../../models/server';

/* Auto Selection Queuing method:
	*
	* default method where the agent with the least number
	* of open chats is paired with the incoming livechat
*/
class AutoSelection {
	constructor() {
		this.config = {
			previewRoom: false,
			showConnecting: false,
			showQueue: false,
			showQueueLink: true,
			returnQueue: false,
			enableTriggerAction: true,
			autoAssignAgent: true,
		};
	}

	getNextAgent(department, ignoredUserId) {
		if (department) {
			return LivechatDepartmentAgents.getNextAgentForDepartment(department, ignoredUserId);
		}

		return Users.getNextAgent(ignoredUserId);
	}

	delegateAgent(agent) {
		return agent;
	}
}

RoutingManager.registerMethod('Auto_Selection', AutoSelection);
