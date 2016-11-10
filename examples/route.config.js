import navConfig from './nav.config.json';
import startConfig from './start.config.json';
import styleConfig from './style.config.json';

const registerRoute = (config) => {
  let route = [{
    path: '/component',
    redirect: '/component/radio',
    component: require('./pages/component.vue'),
    children: []
  }];

  function addRoute(page) {
    const component = page.path === '/changelog' ? require('./pages/changelog.vue') : require(`./docs${page.path}.md`);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      component: component.default || component
    };

    route[0].children.push(child);
  }

  config
    .map(nav => {
      if (nav.groups) {
        nav.groups.map(group => {
          group.list.map(page => {
            addRoute(page);
          });
        });
      } else if (nav.children) {
        nav.children.map(page => {
          addRoute(page);
        });
      } else {
        addRoute(nav);

      }
    });

  return { route, navs: config };
};

const route = registerRoute(navConfig);

const guideRoute = (config) => {
  let route = {
    path: '/guide',
    name: '指南',
    redirect: '/guide/design',
    component: require('./pages/guide.vue'),
    children: [{
      path: 'design',
      name: '设计原则',
      component: require('./pages/design.vue')
    }, {
      path: 'nav',
      name: '导航',
      component: require('./pages/nav.vue')
    }]
  };

  return route;
};

const startRoute = (config) => {
  let route = [{
    path: '/start',
    name: '开始使用',
    redirect: '/start/quick',
    component: require('./pages/start.vue'),
    children: []
  }];

  function addRoute(page) {
    const component = require(`./start${page.path}.md`);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      component: component.default || component
    };

    route[0].children.push(child);
  }

  config
    .map(nav => {
      if (nav.groups) {
        nav.groups.map(group => {
          group.list.map(page => {
            addRoute(page);
          });
        });
      } else if (nav.children) {
        nav.children.map(page => {
          addRoute(page);
        });
      } else {
        addRoute(nav);

      }
    });

  return route[0];
};

const styleRoute = (config) => {
  let route = [{
    path: '/style',
    name: '样式',
    redirect: '/style/layout',
    component: require('./pages/style.vue'),
    children: []
  }];

  function addRoute(page) {
    const component = require(`./style${page.path}.md`);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      component: component.default || component
    };

    route[0].children.push(child);
  }

  config
    .map(nav => {
      if (nav.groups) {
        nav.groups.map(group => {
          group.list.map(page => {
            addRoute(page);
          });
        });
      } else if (nav.children) {
        nav.children.map(page => {
          addRoute(page);
        });
      } else {
        addRoute(nav);

      }
    });

  console.log(route[0]);
  return route[0];
};

const resourceRoute = (config) => {
  let route = {
    path: '/resource',
    name: '资源',
    component: require('./pages/resource.vue')
  };

  return route;
};

const modulesRoute = (config) => {
  let route = {
    path: '/modules',
    name: '模块',
    redirect: '/modules/comment',
    component: require('./pages/modules.vue'),
    children: [
      {
        path: 'comment',
        name: '评论',
        component: require('./modules/comment.md')
      },
      {
        path: 'share',
        name: '分享',
        component: require('./modules/share.md')
      },
      {
        path: 'search',
        name: '搜索',
        component: require('./modules/search.md')
      },
      {
        path: 'header',
        name: '搜索',
        component: require('./modules/header.md')
      }
    ]
  };

  return route;
};

let indexRoute = {
  path: '/',
  name: '首页',
  component: require('./pages/index.vue')
};

route.route = route.route.concat([indexRoute, guideRoute(), startRoute(startConfig), styleRoute(styleConfig), modulesRoute(), resourceRoute()]);

route.route.push({
  path: '*',
  component: require('./docs/home.md')
});

export const navs = route.navs;
export default route.route;
