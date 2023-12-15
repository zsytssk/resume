export class A {
  private a = 1;
  protected b = 1;
  public c = 1;
  public testInner() {
    this.a = 1;
  }
}

export class B extends A {
  public test() {
    super.testInner();
    this.b = 1;
    this.c = 1;
  }
}

let b = new B();
b.c;
