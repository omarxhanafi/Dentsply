public class VFMapAnythingController {
    public string query{get; set;}
    
    public pagereference init(){
        
        query=ApexPages.currentPage().getParameters().get('query');
        return null;
    }    
}