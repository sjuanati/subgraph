import { setUser } from '../setters/users'
import { setApprovalTx } from '../setters/transactions';
import { ApprovalEvent } from '../utils/types';

export const manageApproval = (
    ev: ApprovalEvent,
    token: string
): void => {

    // Step 1: Manage User
    setUser(ev.ownerAddress);

    //Step 2: Manage Transaction
    setApprovalTx(ev, token);
}
