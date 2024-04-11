import { reactive } from 'vue';
import { Options } from '../types';

export const globalOptions = reactive<Options | {}>({});
