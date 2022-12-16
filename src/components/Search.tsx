import { defineComponent } from "vue";
import s from "./Search.module.scss";
export const Search = defineComponent({
  props: {
    name: {},
  },
  setup: (props, context) => {
    return () => <div class={s.wrapper}></div>;
  },
});
