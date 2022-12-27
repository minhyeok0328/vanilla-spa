export class Component {
  #element;
  props;
  state;

  constructor({ element, props }) {
    this.#element = element;
    this.props = props;

    this.state = this.stateInit();
    this.setup();
    this.render();
    this.onMounted();
  }

  stateInit() {}
  setup() {}
  template() { return ''; }
  onMounted() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent(eventType, selector, callback, option = {}) {
    const selectList = [...document.querySelectorAll(selector)];
    
    if (selectList.length > 1) {
      selectList.forEach((item) => item.addEventListner(eventType, callback, option));
      return;
    }

    const selectItem = selectList.pop();
    if (!selectItem) return;

    selectItem.addEventListner(eventType, callback, option);
  }

  render() {
    this.#element.innerHTML = this.template();
  }
}