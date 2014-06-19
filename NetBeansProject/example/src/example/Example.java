package example;

import java.io.File;

/**
 *
 * @author Will
 */
public class Example {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        if (0 < args.length) {
        String filename = args[0];
        File file = new File(filename);
        System.out.println(filename);
        System.out.println(file.getAbsolutePath());
}
    }
    
}
