import { defineComponent, computed, ref, onMounted, onUnmounted } from 'vue';
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
    },
    animation: {
      type: String
    }
  },
  setup(props) {
    const modalRef = ref();
    const isClosing = ref(false);
    const containerClassName = computed(() => [
      `${Default.CSS_NAMESPACE}__modal-container`,
      `${Default.CSS_NAMESPACE}__${props.theme}-theme`
    ]);

    const modalClassName = computed(() => [
      `${Default.CSS_NAMESPACE}__modal`,
      props.animation !== 'none' ? `${Default.CSS_NAMESPACE}__modal__${props.animation}` : '',
      isClosing.value ? `${Default.CSS_NAMESPACE}__modal__${props.animation}-out` : ''
    ]);

    const titleId = `${Default.CSS_NAMESPACE}__modal-title`;
    const descriptionId = `${Default.CSS_NAMESPACE}__modal-description`;

    const handleClosingAnimation = (resolvePromise: Function) => {
      isClosing.value = true;

      const onAnimationEnd = () => {
        modalRef.value.removeEventListener('animationend', onAnimationEnd);
        // resolve the promise
        resolvePromise();
      };

      if (props.animation !== 'none') {
        // use animationend event to wait for the animation to finish and then close the modal
        modalRef.value.addEventListener('animationend', onAnimationEnd);
      } else {
        resolvePromise();
      }
    };

    const rejectHandler = () => {
      handleClosingAnimation(props.reject);
    };

    const confirmHandler = () => {
      handleClosingAnimation(props.confirm);
    };

    // Close modal on `Escape` key
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        rejectHandler();
      }
    };

    // Manage listeners and `aria-hidden` state
    onMounted(() => {
      window.addEventListener('keydown', handleKeydown);
    });

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeydown);
    });

    return () => (
      <div class={containerClassName.value}>
        <div
          ref={modalRef}
          class={modalClassName.value}
          role="modal"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          <div>
            <div class="vue-cm__modal-header">
              <div class="vue-cm__warning">
                {/* icon */}
                <svg width="30px" height="30px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.5 10V14M12.5 17V15.5M14.2483 5.64697L20.8493 17.5287C21.5899 18.8618 20.6259 20.5 19.101 20.5H5.89903C4.37406 20.5 3.41013 18.8618 4.15072 17.5287L10.7517 5.64697C11.5137 4.27535 13.4863 4.27535 14.2483 5.64697Z"
                    stroke="#DC2625"
                    stroke-width="1.1"
                  />
                </svg>
              </div>
              <h2 id={titleId} class="vue-cm__title">
                {props.title}
              </h2>
            </div>
            <div>
              <div class="vue-cm__modal-body">
                <p id={descriptionId}>{props.text}</p>
              </div>
              <div class="vue-cm__modal-actions">
                <button onClick={rejectHandler} class="vue-cm__btn-secondary">
                  Cancel
                </button>
                <button onClick={confirmHandler} class="vue-cm__btn-primary">
                  {props.primaryBtnText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
