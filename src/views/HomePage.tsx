import { Icon } from "./../shared/Icon";
import { defineComponent } from "vue";
import s from "./HomePage.module.scss";
export const HomePage = defineComponent({
  props: {
    name: {},
  },
  setup: (props, context) => {
    return () => (
      <>
        <div class={s.wrapper}>
          <header class={s.top_header}>
            <div class={s.top_div}>
              <div class={s.activate_reset}>
                <svg class={s.icon} style=" width: 3em; height: 3em;"></svg>
                <span class={s.text}>清空缓存</span>
              </div>
              <div class={s.activate_delete}>
                <svg class={s.icon} style=" width: 3em; height: 3em;"></svg>
                <span class={s.text}>删除</span>
              </div>
            </div>
            <div class={s.div_fm}>
              <form
                class={s.fm}
                method="get"
                action="https://www.baidu.com/s"
                target="_blank"
              >
                <input name="wd" type="text" class={s.input_search}></input>
                <button type="submit" class={s.button_search}>
                  百度搜索
                </button>
              </form>
            </div>
          </header>

          <main class={s.top_main}>
            <div class={s.icon_wrapper}>
              <div class={[s.add_url, s.icon_Click]}>
                <span class={s.icon_icon}>
                  <Icon name="add" class={s.icon} />
                </span>
                <div class={s.text}>新增网址</div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  },
});
