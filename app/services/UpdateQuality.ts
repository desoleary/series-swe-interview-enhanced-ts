import { ServiceBroker } from 'moleculer'

class UpdateQuality {
  private broker: ServiceBroker;

  constructor() {
    this.broker = this._initializedBroker();
  }

  // -----=====[ Public Methods ]=====-----
  run() {
    this.broker.start()
      // Call service
      .then(() => this.broker.call("math.add", { a: 5, b: 3 }))
      .then(res => console.log("5 + 3 =", res))
      .catch(err => console.error(`Error occurred! ${err.message}`));
  }

  // -----=====[ Private Methods ]=====-----

  _initializedBroker() {
    const broker = new ServiceBroker()
    broker.createService({
      name: "math",
      actions: {
        add(ctx) {
          return Number(ctx.params.a) + Number(ctx.params.b);
        }
      }
    });

    return broker
  }

}

export default UpdateQuality
