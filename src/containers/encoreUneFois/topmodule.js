class topmodule {
  static magie(stuff) {
    return "topmodule";
  }

  static magieProm(stuff) {
    return new Promise((res, err) => {
      setTimeout(() => {
        res("promise");
      }, 1000);
    });
  }
}

export default topmodule;
