import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Laptop {
    private String model;
    private int ozuGb;
    private int volume of 1GB;
 private String Operating system;
 private String color;

 //
Public Laptop constructor(String model, int GB, int volume GB, String Operating system, String color) {
    this.model = model;
    this.ozuGb = ozuGb;
    this.Volume of GB = Volume of GB;
    this.Operating System = Operating system;
    this.color = color;
}

 // Getters and setters (if needed)

 // Example of creating a set of notebooks
public static Set < Notebook > Create a set of notebooks() {
    Set < Notebook > Set of notebooks = new HashSet <> ();

 // Adding laptops to the set
 Set of laptops.add(new Laptop("Model1", 8, 512, "Windows", "Black"));
 Set of laptops.add(new Laptop("Model2", 16, 1024, "macOS", "Silver"));
    //// Add more laptops by analogy

    return of a set of sounds;
}

// Laptop filtering method
public static Set < Laptop > Filter notebooks(Set < Laptop > laptops, Map < String, Object > filter) {
    Set < Laptop > result = new HashSet <> (laptops);

    for (Map.Entry < String, Object > entry : filter.entrySet()) {
String criterion = entry.getKey();
Object Minimum value = entry.getValue();

the result.removeIf(laptop -> !Meets the criteria(laptop, criterion, minimum value));
    }

    return result;
}

// An auxiliary method for verifying compliance with the criteria
private static boolean meets the criteria(Laptop laptop, String criterion, Object minimum value) {
    switch (criterion) {
        case "RAM":
            return laptop.OSGB >= (int) Minimum value;
        case "Volume of data":
            return the laptop.Volume of GB >= (int) Minimum value;
        case "Operating system":
            return laptop.The operating system.equals(Minimum value);
        case "Color":
            return laptop.color.equals(Minimum value);
        // Add new criteria by analogy
        default:
            return false;
    }
}

 public static void main(String[] args) {
    Set < Laptop > laptops = Create a set of notebooks();

    // Example of using filtering
    Map < String, Object > criteria = new HashMap <> ();
    criteria.put("RAM", 12);
    criteria.put("Volume of work", 750);

    Set < Laptop > Filtered Notebooks = Filtered notebooks(laptops, criteria);

 // Output the results
of filtered outbooks.forEach(System.out:: println);
}
}