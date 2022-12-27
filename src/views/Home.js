import { onMounted, reactive, observe } from '../hooks/useHooks.js';

export default {
  setup() {
    this.state = reactive({
      list: [],
      item: {},
      test: 1234,
    });

    const qwe = () => {
      console.log('qwe!!');
    };

    observe(qwe);

    onMounted(() => {
      setTimeout(() => {
        this.state.test = 555;
      }, 1000);
    });
  },
  render() {
    return `Home ${console.log(this)}`;
  }
}