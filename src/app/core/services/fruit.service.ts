export const fruits = [
  {
    name: 'apple',
    price: 10000,
    amount: 1,
    discount: [
      {
        value: 5,
        amount: 1,
      },
      {
        value: 10,
        amount: 2,
      },
    ],
  },
  {
    name: 'orange',
    price: 20000,
    amount: 1,
    discount: [
      {
        value: 10,
        amount: 2,
      },
      {
        value: 20,
        amount: 5,
      },
    ],
  },
];

export const banana = {
  name: 'banana',
  price: 20000,
  amount: 1,
  discount: [
    {
      value: 10,
      amount: 2,
    },
    {
      value: 20,
      amount: 5,
    },
  ],
};

export class Fruit {
  name: string;
  price: number;
  amount: number;
  discount: {
    value: number,
    amount: number,
  }[];

  constructor(name: string, price: number, amount: number, discount: { value: number, amount: number }[]) {
    this.name = name;
    this.price = price;
    this.amount = amount
    this.discount = discount;
  }
}

export class FruitStore {
  fruitList: Fruit[] = [];

  constructor(data: Fruit[]) {
    this.fruitList = [...data];
  }

  addFruit(fruit: Fruit, amount: number): void {
    if (amount <= 0) {
      return;
    }

    const existedItemIndex = this.fruitList.findIndex(
      (item: Fruit) => item.name === fruit.name
    );
    if (existedItemIndex >= 0) {
      this.fruitList[existedItemIndex].amount += amount;
    } else {
      this.fruitList.push({ ...fruit, amount });
    }
  }

  removeFruit(fruit: Fruit): void {
    const existedItemIndex = this.fruitList.findIndex(
      (item: Fruit) => item.name === fruit.name
    );
    if (existedItemIndex >= 0) {
      this.fruitList.splice(existedItemIndex, 1);
    }
  }

  editFruit(fruit: Fruit, amount: number): void {
    if (amount <= 0) {
      return;
    }
    const existedItemIndex = this.fruitList.findIndex(
      (item: Fruit) => item.name === fruit.name
    );
    if (existedItemIndex >= 0) {
      this.fruitList[existedItemIndex].amount = amount;
    }
  }

  getDiscount (fruit: Fruit): number {
    let discount = 0;
    fruit.discount.forEach((item: { value: number, amount: number }) => {
      if (fruit.amount >= item.amount && item.value > discount) {
        discount = item.value;
      }
    });
    return discount;
  }

  getTotalPayment(): number {
    const totalCost = this.fruitList.reduce(
      (total, fruit) =>
      total + (fruit.amount * fruit.price * (100 - this.getDiscount(fruit))) / 100,
      0
    );
    return totalCost;
  }

  clear(): void {
    this.fruitList = [];
  }
}
