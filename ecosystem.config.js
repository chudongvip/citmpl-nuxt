module.exports = {
  apps: [
    {
      name: 'anyrtc.io',
      exec_mode: 'cluster',
      // instances: 'max', // Or a number of instances
      instances: 1, // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: false,
    },
  ],

  deploy: {
    dev: {
      user: 'root',
      host: [
        {
          host: '120.77.18.113',
          port: '39622',
        },
      ],
      ssh_options: 'StrictHostKeyChecking=no',
      ref: 'origin/master',
      repo: 'git@gitlab.agrtc.cn:anyrtc-frontend/anyrtc-website4.0.git',
      path: '/usr/local/anyrtc-website4.0',
      // 'pre-setup': 'rm -rf /usr/local/anyrtc-website44.0/source',
      'post-setup': 'ls -la',
      'pre-deploy-local': 'echo "This is a local executed command"',
      'post-deploy':
        'git pull && npm install && npm run build  && pm2 startOrRestart ecosystem.config.js --only anyrtc.io --env production',
      // env: {
      //   NODE_ENV: 'production',
      // },
    },
    production: {
      user: 'root',
      host: [
        {
          host: '39.107.42.205',
          port: '39622',
        },
      ],
      ssh_options: 'StrictHostKeyChecking=no',
      ref: 'origin/master',
      repo: 'git@gitlab.agrtc.cn:anyrtc-frontend/anyrtc-website4.0.git',
      path: '/usr/local/anyrtc-website4.0',
      // 'pre-setup': 'rm -rf /usr/local/anyrtc-website44.0/source',
      'post-setup': 'ls -la',
      'pre-deploy-local': 'echo "This is a local executed command"',
      'post-deploy':
        'git pull && npm install && npm run build && pm2 startOrRestart ecosystem.config.js --only anyrtc.io',
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}
