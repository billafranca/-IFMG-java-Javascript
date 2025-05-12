package Java;

import java.util.*;

public class Calculo {
    
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        double num1 = sc.nextDouble();
        System.out.print("First number: ");

        double num2 = sc.nextDouble();
        System.out.print("Second number: ");

        double result = (num1 + num2);
        System.out.println("the result is"+ result);
    }
}
