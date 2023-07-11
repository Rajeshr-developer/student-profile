import Config from "../config";
class ApiCalls {
  constructor() {
    this.config = Config;
  }
  async getDepartmentData(val) {
    try {
      const response = await fetch(
        `http://${this.config.local.host}:${this.config.local.port}/getDepartmentData?name=` +
          val
      );
      return await response.json();
    } catch (err) {
      return err;
    }
  }
}

export default ApiCalls;
