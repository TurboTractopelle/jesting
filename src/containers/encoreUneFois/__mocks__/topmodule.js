class topmodule {
  static magie(stuff) {
    return "MOCKED topmodule";
  }

  static magieProm(stuff) {
    return Promise.resolve("MOCKED promise");
  }
}

export default topmodule;
