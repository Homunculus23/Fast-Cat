import { defineComponent } from "vue";
import s from "./HomePage.module.scss";
export const HomePage = defineComponent({
  props: {
    name: {},
  },
  setup: (props, context) => {
    return () => (
      <>
        <header class="top_header">
          <div class="top_div">
            <div class="activate_reset">
              <svg class="icon" style=" width: 3em; height: 3em;"></svg>
              <span class="text">清空缓存</span>
            </div>
            <div class="activate_delete">
              <svg class="icon" style=" width: 3em; height: 3em;"></svg>
              <span class="text">删除</span>
            </div>
          </div>
          <div class="div_fm">
            <form
              class="fm"
              method="get"
              action="https://www.baidu.com/s"
              target="_blank"
            >
              <input name="wd" type="text" class="input_search"></input>
              <button type="submit" class="button_search">
                百度搜索
              </button>
            </form>
          </div>
        </header>

        <main class="top_main">
          <div class="icon_wrapper">
            <div class="add_url icon_Click">
              <span class="icon_icon">
                <svg class="icon"></svg>
              </span>
              <div class="text">新增网址</div>
            </div>
          </div>
        </main>
      </>
    );
  },
});
