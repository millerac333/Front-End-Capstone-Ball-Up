import GeneralManager from "./GeneralManager";

export default Object.create(GeneralManager, {
  get: {
    value: function(id) {
      return this.getSingleDataBlock("locations", id);
    }
  },
  all: {
    value: function() {
      return this.getAllData("locations");
    }
  },
  add: {
    value: function(resource) {
      return this.postData("locations", resource);
    }
  }
});
