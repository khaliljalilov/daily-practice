public class JedliksToyCar {
    private int distance = 0;
    private int percent = 100;
    public static JedliksToyCar buy() {
        return new JedliksToyCar();
    }

    public String distanceDisplay() {
        return "Driven "+distance+" meters";
    }

    public String batteryDisplay() {
        if(percent==0){
            return "Battery empty";
        }
        else{
        return "Battery at "+percent+"%";
        }
    }

    public void drive() {
        if(percent>0){
        distance = distance+20;
        percent = percent-1;
        }
    }
}
