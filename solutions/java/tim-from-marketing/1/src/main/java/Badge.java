class Badge {
    public String print(Integer id, String name, String department) {
        if(department==null){department="OWNER";}
        else{ department= department.toUpperCase();}
        
    if(id!=null && name!=null){
        return "["+id+"] - "+name+" - "+ department;
    }
    else if(id==null){
         return name+" - "+ department;
    }
    else{
        return name+" - "+ department;
    }
    
    }
}
