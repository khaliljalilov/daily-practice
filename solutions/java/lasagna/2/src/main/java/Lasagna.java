public class Lasagna {

    private static final int EXPECTED_MINUTES_IN_OVEN = 40;
    private static final int PREPARATION_TIME_PER_LAYER = 2;
 
    public int expectedMinutesInOven(){
        return EXPECTED_MINUTES_IN_OVEN;
    }

 
    public int remainingMinutesInOven(int a){
        return expectedMinutesInOven()-a;
    }
    


    public int preparationTimeInMinutes(int layers){
        return (PREPARATION_TIME_PER_LAYER*layers);
    }


    public int totalTimeInMinutes(int lasagna,int time){
        return preparationTimeInMinutes(lasagna)+time;
    }
}
