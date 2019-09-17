class topmodule {
  static magie(stuff) {
    return "MOCKED topmodule";
  }

  static magieProm(stuff) {
    return Promise.resolve("gg");
    /*return new Promise((res, err) => {
      res("MOCKED chose promise");
    });*/
  }
}

export default topmodule;
