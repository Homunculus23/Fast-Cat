import { defineComponent } from "vue";
import s from "./TagEditor.module.scss";
export const TagEditor = defineComponent({
  props: {
    name: {},
  },
  setup: (props, context) => {
    return () => <div class={s.wrapper}></div>;
  },
});
