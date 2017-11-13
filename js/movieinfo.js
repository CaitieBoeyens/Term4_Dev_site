$(function(){
    
    var id = getUrlVars()["id"];
    
    function getUrlVars(){
        
        var vars = {};
        
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            
            vars[key] = value;
            
        });
        
        return vars;
    }
    
    console.log(id);
    
});