package br.com.company.algorithms.youngchill;


import java.util.HashMap;
import java.util.Map;

public class FullStackStartupExercise {

    public static Character firstUniqueChar(String word){
        char[] letters = word.toCharArray();
        int left = 0;
        int right = letters.length - 1;

        Map<Character, Integer> counterMatrix = new HashMap<>();
        while(left < right){
            char charAtRight = letters[right];
            char charAtLeft = letters[left];

            if(counterMatrix.get(charAtLeft) == null){
                counterMatrix.put(charAtLeft, 1);
            }else{
                int updatedCounter = counterMatrix.get(charAtLeft) +1;
                counterMatrix.put(charAtLeft, updatedCounter );
            }

            if(counterMatrix.get(charAtRight) == null){
                counterMatrix.put(charAtRight, 1);
            }else{
                int updatedCounter = counterMatrix.get(charAtRight) +1;
                counterMatrix.put(charAtRight, updatedCounter );
            }

            left++;
            right--;
        }

        for(int i = 0; i<= letters.length - 1; i++){
            Character currentChar = letters[i];
            if(counterMatrix.get(currentChar) == 1){
                return currentChar;
            }
        }

        return null;
    }

    public static void main(String[] args) {
        System.out.println(firstUniqueChar("aabbccddeefg"));
        System.out.println(firstUniqueChar("aabb"));
    }
}
