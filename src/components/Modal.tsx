import { defineComponent, computed } from 'vue';
import { Default } from '../utils/constants';
import '../styles/main.css';

export const Modal = defineComponent({
  name: 'Modal',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    primaryBtnText: {
      type: String,
      required: true
    },
    confirm: { type: Function, required: true },
    reject: { type: Function, required: true },
    theme: {
      type: String
    }
  },
  setup(props) {
    const className = computed(() => [
      `${Default.CSS_NAMESPACE}__modal-container`,
      `${Default.CSS_NAMESPACE}__${props.theme}-theme`
    ]);

    const rejectHandler = () => {
      props.reject();
    };

    const confirmHandler = () => {
      props.confirm();
    };

    return () => (
      <div class={className.value}>
        <div className="vue-cm__modal">
          <div className="vue-cm__warning">
            {/* icon */}
            <svg width="30px" height="30px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5 10V14M12.5 17V15.5M14.2483 5.64697L20.8493 17.5287C21.5899 18.8618 20.6259 20.5 19.101 20.5H5.89903C4.37406 20.5 3.41013 18.8618 4.15072 17.5287L10.7517 5.64697C11.5137 4.27535 13.4863 4.27535 14.2483 5.64697Z"
                stroke="#DC2625"
                stroke-width="1.1"
              />
            </svg>
          </div>
          <div>
            <div className="vue-cm__modal-header">
              <h2 className="vue-cm__title">{props.title}</h2>
            </div>
            <div className="vue-cm__modal-body">
              <p>{props.text}</p>
            </div>
            <div className="vue-cm__modal-actions">
              <button onClick={rejectHandler} className="vue-cm__btn-secondary">
                Cancel
              </button>
              <button onClick={confirmHandler} className="vue-cm__btn-primary">
                {props.primaryBtnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
