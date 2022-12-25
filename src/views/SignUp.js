import { onMounted, reactive } from '../hooks/useHooks.js';

export default function SignUp() {
  const state = reactive({
    test: 1234,
  });
  console.log(state, state.test);
  onMounted(() => {

    state.test = 999;
    console.log(state.test);
  });

  return `
    ${state.test}
    <input type="text" name="id" placeholder="ID" />
    <input type="password" name="password" placeholder="Password" />
    <input type="email" name="email" placeholder="Email" />
    <button class="signup" type="buttom">signup</button>
  `;
}