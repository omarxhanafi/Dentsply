public class UpdateOpportunityOwnerCTRL {
	ApexPages.StandardSetController setCon;
	public boolean isSuccess = false;
    public UpdateOpportunityOwnerCTRL(ApexPages.StandardSetController controller) {
        setCon = controller;
        /*if(setCon.save() != null) {
            isSuccess = true;
        }*/
    }
	public boolean getIsSuccess() {
                return isSuccess;
    }
    public integer getMySelectedSize() {
                return setCon.getSelected().size();
        }
       
    public integer getMyRecordsSize() {
        return setCon.getRecords().size();
    }

}