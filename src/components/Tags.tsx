import { defineComponent } from "vue";
import s from "./Tags.module.scss";
export const Tags = defineComponent({
  props: {
    name: {},
  },
  setup: (props, context) => {
    return () => <div class={s.wrapper}></div>;
  },
});
