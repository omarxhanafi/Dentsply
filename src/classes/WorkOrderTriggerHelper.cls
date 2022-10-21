/*-------------------------------------------------------------------------------------------------------
Author:         NISREEN ALSALEH (support@avity.com) 8-Aug-2022
Description:    WorkOrder Trigger Helper Class   
History
--------------------------------------------------------------------------------------------------------*/

public class WorkOrderTriggerHelper {
     
    public static void defaultEntitlement(WorkOrder[] newWO) {
        Set<Id> contactIds = new Set<Id>();
        Set<Id> acctIds = new Set<Id>();
        
        for (WorkOrder w : newWO) {
            contactIds.add(w.ContactId);
            acctIds.add(w.AccountId);
        }
        List <EntitlementContact> entlContacts = [Select e.EntitlementId,e.ContactId,e.Entitlement.AssetId
                                                  From EntitlementContact e
                                                  Where e.ContactId in :contactIds
                                                  And e.Entitlement.EndDate >= Today
                                                  And e.Entitlement.StartDate <= Today];
        if(entlContacts.isEmpty()==false){
            for(WorkOrder w : newWO){
                if(w.EntitlementId == null && w.ContactId != null){
                    for(EntitlementContact ec:entlContacts){
                        if(ec.ContactId==w.ContactId){
                            w.EntitlementId = ec.EntitlementId;
                            break;
                        }
                    }
                }
            }
        }else{
            List <Entitlement> entls = [Select e.StartDate, e.Id, e.EndDate, e.AccountId, e.AssetId
                                        From Entitlement e
                                        Where e.AccountId in :acctIds And e.EndDate >= Today
                                        And e.StartDate <= Today AND SlaProcess.SobjectType = 'WorkOrder'];
            if(entls.isEmpty()==false){
                for(WorkOrder w : newWO){
                    if((w.AccountId != null)){
                        for(Entitlement e:entls){
                            if((e.AccountId==w.AccountId) || (w.EntitlementId != e.Id)){
                                w.EntitlementId = e.Id;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
}