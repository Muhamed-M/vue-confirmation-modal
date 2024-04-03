import { reactive } from 'vue';
import { Option } from '../types';

export const globalOptions = reactive<Option | {}>({});
