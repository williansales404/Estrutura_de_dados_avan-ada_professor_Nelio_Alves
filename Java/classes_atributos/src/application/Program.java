package application;

import java.util.Locale;

import model.entities.Product;

public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		
		Product p1 = new Product("Laptop", 500.0, 2);
		Product p2 = new Product("radio", 300.0, 1);
		
		System.out.printf("%s, %.2f, %d%n",p1.getName(),p1.getValue(),p1.getQuantity());
		p1.productPercent(10);
		System.out.println(p1.getValue());
	}

}
