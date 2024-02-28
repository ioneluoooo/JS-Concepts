const obj = {
  name: "Ion",
  getName: () => {
    console.log(`Hi ${this.name}`);
  },
};

obj.getName();
