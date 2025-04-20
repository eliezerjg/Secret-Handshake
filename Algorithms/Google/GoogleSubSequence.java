
import java.util.HashSet;
import java.util.Set;

public class GoogleSubSequence{
    public static Integer countSubSequences(String word, String[] subsequences) {
        int subSequencesCounter = 0;

        for(String subSequence : subsequences){

            if(subSequence.length() > word.length()){
                continue;
            }

            int timesFound = 0;


            Set<Integer> usedPositions = new HashSet<>();
            for(int i = 0; i <= subSequence.length() -1; i++){
                char currentChar = subSequence.charAt(i);

                for(int j = 0; j <= word.length() -1; j++){
                    char wordChar = word.charAt(j);

                    if(currentChar == wordChar && !usedPositions.contains(j) ){
                        usedPositions.add(j);
                        timesFound++;
                    }
                }

            }

            if(timesFound == subSequence.length()){
                subSequencesCounter++;
            }

        }

        return subSequencesCounter;
    }

    public static void main(String[] args) {
        int result = countSubSequences("abcde", new String[]{"a"});
        System.out.println("result:" + result);
    }
}