import { FruitStore, banana, fruits } from "../app/core/services/fruit.service";


describe('Test order', () => {
  let order: FruitStore;

  beforeEach(() => {
    const defaultOrder = JSON.parse(JSON.stringify(fruits));
    order = new FruitStore(defaultOrder);
  });

  it('Init Order', () => {
    expect(order.fruitList.length).toBe(2);
  })

  describe('Add and edit fruit', () => {
    it('Add fruit exitsting in store with amount 0', () => {
      const newFruit = {
        ...fruits[0],
      };
      order.addFruit(newFruit, 0);
      expect(order.fruitList.length).toBe(2);
      expect(order.fruitList[0].amount).toBe(1);
    })

    it('Add fruit exitsting in store with amount 1', () => {
      const newFruit = {
        ...fruits[1],
      };
      order.addFruit(newFruit, 1);
      expect(order.fruitList.length).toBe(2);
      expect(order.fruitList[1].amount).toBe(2);
    })

    it('Add fruit exitsting in store with amount > 1', () => {
      const newFruit = {
        ...fruits[0],
      };
      order.addFruit(newFruit, 4);
      expect(order.fruitList.length).toBe(2);
      expect(order.fruitList[0].amount).toBe(5);
    })

    it('Add fruit not exitsting in store with amount 0', () => {
      order.addFruit(banana, 0);
      expect(order.fruitList.length).toBe(2);
      expect(order.fruitList[2]).toBe(undefined);
    })

    it('Add fruit not exitsting in store with amount 1', () => {
      order.addFruit(banana, 1);
      expect(order.fruitList.length).toBe(3);
      expect(order.fruitList[2].amount).toBe(1);
    })

    it('Add fruit not exitsting in store with amount > 1', () => {
      order.addFruit(banana, 2);
      expect(order.fruitList.length).toBe(3);
      expect(order.fruitList[2].amount).toBe(2);
    })
  })

  describe('Remove fruit', () => {
    it('Remove fruit exitsting in store', () => {
      const removeFruit = {
        ...fruits[0],
      }
      order.removeFruit(removeFruit);
      expect(order.fruitList.length).toBe(1);
      expect(order.fruitList[0].name).toBe('orange');
    })

    it('Remove after add fruit', () => {
      order.addFruit(banana, 2);
      order.removeFruit(banana);
      expect(order.fruitList.length).toBe(2);
      expect(order.fruitList[0].name).toBe('apple');
    });

    it('Remove other fruit after add fruit', () => {
      const removeFruit = {
        ...fruits[0],
      }
      order.addFruit(banana, 2);
      order.removeFruit(removeFruit);
      expect(order.fruitList.length).toBe(2);
      expect(order.fruitList[0].name).toBe('orange');
    });
  });

  describe('Payment', () => {
    it('init payment', () => {
      expect(order.getTotalPayment()).toBe(29500);
    })

    it('Add 1 fruit with amount 1', () => {
      order.addFruit(banana, 1);
      expect(order.getTotalPayment()).toBe(49500);
    })

    it('Add 1 fruit exists with amount 1', () => {
      const newFruit = {
        ...fruits[0],
      };
      order.addFruit(newFruit, 1);
      expect(order.getTotalPayment()).toBe(38000);
    })

    it('Add 1 fruit with amount > 1', () => {
      order.addFruit(banana, 2);
      expect(order.getTotalPayment()).toBe(65500);
    })

    it('Add 1 fruit exists with amount > 1', () => {
      const newFruit = {
        ...fruits[0],
      };
      order.addFruit(newFruit, 2);
      expect(order.getTotalPayment()).toBe(47000);
    })

    it('Remove fruit exitsting in store', () => {
      const removeFruit = {
        ...fruits[0],
      }
      order.removeFruit(removeFruit);
      expect(order.getTotalPayment()).toBe(20000);
    })

    it('Remove after add fruit', () => {
      order.addFruit(banana, 2);
      order.removeFruit(banana);
      expect(order.getTotalPayment()).toBe(29500);
    });

    it('Remove other fruit after add fruit', () => {
      const removeFruit = {
        ...fruits[0],
      }
      order.addFruit(banana, 2);
      order.removeFruit(removeFruit);
      expect(order.getTotalPayment()).toBe(56000);
    });
  })
});
