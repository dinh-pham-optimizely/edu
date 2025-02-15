import { PluginOption } from 'vite';

const handleHotUpdate = (): PluginOption => {
  // console.log('[INIT] handleHotUpdate');

  return {
    name: 'xpack-hot-update',
    enforce: 'post',

    handleHotUpdate({ file, server }) {
      // console.log('handleHotUpdate');

      console.log(file, 'handleHotUpdate');
      if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.json') || file.endsWith('.svg'))
        server.ws.send({
          type: 'full-reload',
          path: '*',
        });
    },
  };
};

export default handleHotUpdate;
