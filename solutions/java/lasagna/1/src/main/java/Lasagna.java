public class Lasagna {
    // TODO: define the 'expectedMinutesInOven()' 
    public int expectedMinutesInOven(){
        return 40;
    }

    // TODO: define the 'remainingMinutesInOven()' method
    public int remainingMinutesInOven(int a){
        return expectedMinutesInOven()-a;
    }
    

    // TODO: define the 'preparationTimeInMinutes()' method
    public int preparationTimeInMinutes(int layers){
        return (2*layers);
    }

    // TODO: define the 'totalTimeInMinutes()' method
    public int totalTimeInMinutes(int lazanya,int time){
        return preparationTimeInMinutes(lazanya)+time;
    }
}
