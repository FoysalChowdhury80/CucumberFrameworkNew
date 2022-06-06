package Pages;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class JavaInterviewSample {

    /**
     * Find a method to return duplicated string with counts
     */


    String sentence = " I am am programmer, who who is learning new new technology";

    public static void getDuplicateWithCount(String str){
        String[] words = str.split(" ");

        Map<String, Integer> newStr = new HashMap<String,Integer>();
        for (String key : words){
            if (newStr.containsKey(key)){
                newStr.put(key,newStr.get(key)+1);
            }else {
                newStr.put(key,1);
            }
        }

        Set<String> allKeys = newStr.keySet();
        for (String key: allKeys){
            if (newStr.get(key)>1){
                System.out.println("The word :"+ key +" is repeated: "+newStr.get(key)+" times");
            }
        }
    }


    /**
     * Count the occurance of a particular character in a String
     * @param args
     */

    String str = "Java is an object oriented programming language";
    public static int getCount( String str){
        int count = 0;
       String[] charcters = str.split("");
       for(int i = 0; i<charcters.length; i++){
           if (charcters[i].equals("a")){
               count++;
           }
       }
       return count;
    }

    /**
     * another way
     * @param
     */

    public static int countDuplicateCharcter(String str){
        int count = str.length()-str.replaceAll("a","").length();
        return count;
    }


    /**
     * write a method to see if two strings are anagram
     * @param
     */

    public static boolean isAnagram(String str1, String str2){
        boolean isAnagram = false;
        char[] strC1 = str1.toLowerCase().toCharArray();
        char[] strC2 = str2.toLowerCase().toCharArray();
        Arrays.sort(strC1);
        Arrays.sort(strC2);

        if (Arrays.equals(strC1,strC2)){
            isAnagram= true;

        }else {
            isAnagram= false;
        }

        return isAnagram;


    }

    /**
     * create a method to find first non-repeated character
     * @param
     */

    String word = "swiss";

    public static String firstNonRepeatedChar(String input){
        String nonRepeated = "";
        for (String c : input.split("")){
            if (input.indexOf(c)==input.lastIndexOf(c)){
               nonRepeated = c;
               break;
            }

        }
        return nonRepeated;
    }

    /**
     * write a method to reverse a Strin
     * @param
     */

    public static String getReverse(String input){
        String reverse ="";
        String[] characters =input.split("");

        for (int i = characters.length-1; i>=0; i--){
            reverse = reverse+ characters[i];
        }
        return reverse;
    }

    /**
     * create a method to reverse every letter of sentence keeping the word format and index same
     * @param
     */

    public static String reverseFormatSentence(String input){
        String reverse ="";

        String[] words = input.split(" ");
        for (String str : words){
            String reverseword = "";
           String [] chars = str.split("");
            for (int i = chars.length-1; i>=0; i--){
                reverseword = reverseword + chars[i];
            }
            reverse = reverse+ reverseword+" ";
        }

        return reverse;
    }

    /**
     * Find the largest and smallest integers in an array
     * @param
     *
     */

    public static void smallestAndLargest(int[] arr){
        int largest = arr[0];
        int smallest = arr[0];

        for (int i = 1; i<arr.length; i++){
            if (arr[i]>largest){
                largest= arr[i];
            } else if (arr[i]<smallest) {
                smallest= arr[i];

            }
        }
        System.out.println(largest);
        System.out.println(smallest);
    }




    public static void main(String[] args) {
        String sentence = " I am am programmer, who who is learning new new technology";
        getDuplicateWithCount(sentence);
        System.out.println( getCount(sentence));
        System.out.println( countDuplicateCharcter(sentence));
        String word = "swiss";
        System.out.println(firstNonRepeatedChar(word));
        System.out.println(getReverse(word));
        System.out.println(reverseFormatSentence(sentence).trim());


    }
}
