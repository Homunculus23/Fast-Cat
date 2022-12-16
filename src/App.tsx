import { defineComponent, ref } from "vue";
export const App = defineComponent({
  setup: (props, context) => {
    const refCount = ref(0);
    const onClick = () => {
      refCount.value++;
    };
    return () => (
      <>
        <div>{refCount.value}</div>
        <div>
          <button onClick={onClick}>+1</button>
        </div>
      </>
    );
  },
});
