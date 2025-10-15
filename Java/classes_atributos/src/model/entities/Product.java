package model.entities;

public class Product {
	private String name;
	private Double value;
	private Integer quantity;
	
	public Product() {
		// TODO Auto-generated constructor stub
	}

	public Product(String name, Double value, Integer quantity) {
		super();
		this.name = name;
		this.value = value;
		this.quantity = quantity;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	public Double productTotal() {
		return value * quantity;
	}
	
	public void productPercent(int percent) {
		setValue(getValue() * (1 + percent / 100.0));
	}
}
