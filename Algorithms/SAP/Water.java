package br.com.company.algorithms.techmahindra;

class Water {

    public static int maxArea(int[] height) {
        int maxArea = 0;
        int left = 0;
        int right = height.length - 1;

        while (left < right) {
            int minHeight = Math.min(height[left], height[right]);
            int width = right - left;
            int area = minHeight * width;

            maxArea = Math.max(maxArea, area);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }

    public static void main(String[] args) {
        System.out.println("expected: 49, actual: " + maxArea(new int[]{1,8,6,2,5,4,8,3,7}));
        System.out.println("expected: 1, actual: " + maxArea(new int[]{1,1}));
        System.out.println("expected: 2, actual: " + maxArea(new int[]{1,2,1}));
    }
}
