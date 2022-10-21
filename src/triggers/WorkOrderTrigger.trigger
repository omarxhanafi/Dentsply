/*------------------------------------------------------------  
Author:         Nisreen Al Saleh (support@avity.com) 2022-July-31   
Description:    Generic Trigger for WorkOrder (Following Trigger Framework)
------------------------------------------------------------*/

trigger WorkOrderTrigger on WorkOrder (before insert,before update,before delete,
    								   after insert,after update,after delete,after undelete)
									{ 
                                        new WorkOrderTriggerHandler().run();
                                    }