class A {
  private a = 1;
  protected b = 1;
  public c = 1;
}

class B extends A {
  public test() {
    this.b = 1;
  }
}
