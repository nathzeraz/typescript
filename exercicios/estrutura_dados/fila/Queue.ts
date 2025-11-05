export class Queue<T> {
  private items: T[] = [];

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  count(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  printQueue(): void {
    this.items.forEach(item => console.log(item));
  }

  contains(element: T): boolean {
    return this.items.includes(element);
  }

  clear(): void {
    this.items = [];
  }
}