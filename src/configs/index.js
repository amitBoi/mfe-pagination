import { defaultConfig } from './config';

const cache = {};

export const mergeConfig = (config) => {
  const existingConfig = cache['config'] || {};
  const newConfig = { ...defaultConfig, ...existingConfig, ...config };
  cache['config'] = newConfig;
};

export const getConfig = () => cache['config'] || {};
