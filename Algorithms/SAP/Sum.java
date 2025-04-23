package br.com.company.algorithms.techmahindra;

import java.util.Arrays;
/*

Question 1
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

* */
public class Sum {
    public static int[] sum(int[] digits) {
        int lastPos = digits.length - 1;

        if(digits[lastPos] == 9){
            int lastPosWithNine = lastPos;
            for(int i = lastPos; i >= 0; i--){
                if(digits[i] != 9){
                    break;
                }
                digits[i] = 0;
                lastPosWithNine = i;
            }

            boolean outOfBounds = lastPosWithNine == 0;
            if(outOfBounds){
                int[] newDigits = new int[digits.length + 1];
                newDigits[0] = 1;
                return newDigits;
            }

            digits[lastPosWithNine - 1] = digits[lastPosWithNine -1] + 1;
            return digits;
        }

        int lastValue = digits[lastPos];

        digits[lastPos] = lastValue+1;
        return digits;
    }


    public static void main(String[] args) {
        int[] input = {1,2,3};
        int[] out = sum(input);
        System.out.println("result: " + Arrays.toString(out));
    }
}
