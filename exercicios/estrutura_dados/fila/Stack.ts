export class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  count(): number {
    return this.items.length;
  }

  printStack(): void {
    this.items.forEach(item => console.log(item));
  }

  clear(): void {
    this.items = [];
  }
}