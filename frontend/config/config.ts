const Config = {
  get isProduction() {
    return process.env.NODE_ENV === 'production';
  },

  get apiServer() {
    const isSSR = typeof window === 'undefined';

    // we are in production build with SSR enabled
    if (isSSR && Config.isProduction) {
      const PORT = process.env.PORT || 8000;
      const apiPath = process.env.API_PATH || '/api';

      return `http://localhost:${PORT}${apiPath}`;
    }

    return process.env.NEXT_PUBLIC_BACKEND_ORIGIN || '/api';
  },

  // set 'NEXT_PUBLIC_IS_DEMO=true' and 'NEXT_PUBLIC_SIGNUP_ENABLED=true' in frontend/.env
  isDemoSite: process.env.NEXT_PUBLIC_IS_DEMO === 'true' || false,
  // prefer NEXT_PUBLIC_SIGNUP_ENABLED for client availability; fall back to SIGNUP_ENABLED on server
  signupEnabled: process.env.SIGNUP_ENABLED || 'false',
};

export default Config;
