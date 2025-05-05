package br.com.company.algorithms.techmahindra;

class Water {
    public static int min(int left, int right){
        if(left < right){
            return left;
        }
        return right;
    }

    public static int maxArea(int[] height) {
        int lastMathArea = 0;
        int lastMathVolumeArea = 0;

        for(int i = 0; i < height.length; i++){
            int leftValue = height[i];

            for(int j = height.length -1; j >= 0; j--){
                int rightValue = height[j];
                int xAxysBase = (j+1) - i;

                // b x h
                int mathArea = xAxysBase * (min(leftValue, rightValue));
                if(lastMathArea < mathArea){
                    lastMathArea = mathArea;
                    lastMathVolumeArea = (min(leftValue, rightValue)) * (min(leftValue, rightValue));
                }

            }
        }

        return lastMathVolumeArea;
    }

    public static void main(String[] args) {
        System.out.println("expected: 49, " + maxArea(new int[]{1, 8, 6, 2, 5, 4, 8, 3, 7}));
        System.out.println("expected: 1, " + maxArea(new int[]{1,1}));
    }
}