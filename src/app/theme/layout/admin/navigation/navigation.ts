import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'OVERVIEW',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item',
      }
    ]
  },

  {
    id: 'ui-element',
    title: 'APPS',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'email',
        title: 'Email',
        type: 'collapse',
        icon: 'feather icon-mail',
        children: [
          {
            id: 'inbox',
            title: 'Inbox',
            type: 'item',
            url: '/email/inbox'
          },
          {
            id: 'eread',
            title: 'Email Read',
            type: 'item',
            url: '/email/eread'
          },
          {
            id: 'ecomp',
            title: 'Email Compose',
            type: 'item',
            url: '/email/ecomp'
          }




        ]
      },


      {
        id: 'Calendar',
        title: 'Calendar',
        type: 'item',
        url: '/calendar',
        icon: 'feather icon-calendar',
        classes: 'nav-item',
      },

      {
        id: 'ecommerce',
        title: 'Ecommerce',
        type: 'collapse',
        icon: 'feather icon-shopping-cart',
        children: [
          {
            id: 'product',
            title: 'Products',
            type: 'item',
            url: '/ecommerce/product'
          },
          {
            id: 'productl',
            title: 'Products List',
            type: 'item',
            url: '/ecommerce/productl'
          },
          {
            id: 'order',
            title: 'order',
            type: 'item',
            url: '/ecommerce/order'
          },
          {
            id: 'costumers',
            title: 'costumers',
            type: 'item',
            url: '/ecommerce/costumers'
          },
          {
            id: 'producte',
            title: ' producte',
            type: 'item',
            url: '/ecommerce/producte'
          }



        ]
      },
      {
        id: 'projects',
        title: 'Projects',
        type: 'item',
        url: '/ecommerce/projects',
        icon: 'feather icon-clipboard',
        classes: 'nav-item',
      }

    ]
  },

  {
    id: 'ui-element',
    title: 'PAGES',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-wifi',
        children: [
          {
            id: 'button',
            title: 'Login',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'badges',
            title: 'Register',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'recover',
            title: 'Recover Password',
            type: 'item',
            url: '/otherP/recover',
            target: true,
            breadcrumbs: false
          },

          {
            id: 'lock',
            title: 'Lock Screen',
            type: 'item',
            url: '/otherP/lock',
            target: true,
            breadcrumbs: false
          }


        ]
      },


      {
        id: 'basic',
        title: 'Extra Pages',
        type: 'collapse',
        icon: 'feather icon-copy',
        children: [
          {
            id: 'blank',
            title: 'Blank Page',
            type: 'item',
            url: '/extra/blank'
          },
          {
            id: 'timeline',
            title: 'Timeline',
            type: 'item',
            url: '/extra/timeline'
          },
          {
            id: 'invoice',
            title: 'Invoice',
            type: 'item',
            url: '/extra/invoice'
          },

          {
            id: 'pricing',
            title: 'Pricing',
            type: 'item',
            url: '/extra/pricing'
          },
          {
            id: 'maintenance',
            title: 'Maintenance',
            type: 'item',
            url: '/otherP/maintenance',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'faq',
            title: 'Faq',
            type: 'item',
            url: '/extra/faq'
          },
          {
            id: 'e404',
            title: 'Error 404',
            type: 'item',
            url: '/otherP/e404',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'e505',
            title: 'Error 500',
            type: 'item',
            url: '/otherP/e505',
            target: true,
            breadcrumbs: false
          }


        ]
      },

      {
        id: 'templates',
        title: 'Email Templates',
        type: 'collapse',
        icon:'feather icon-navigation',
        children: [
          {
            id: 'emailbasic',
            title: 'Basic Email',
            type: 'item',
            url: '/templates/emailbasic'
          },
          {
            id: 'emailalert',
            title: 'Alert Email',
            type: 'item',
            url: '/templates/emailalert'
          },
          {
            id: 'emailbilling',
            title: 'Billing Email',
            type: 'item',
            url: '/templates/emailbilling'
          }

        ]
      },


    ]
  },

  {
    id: 'navigation',
    title: 'COMPONENTS ',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'ui',
        title: 'UI Elements',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'alerts',
            title: 'Alerts',
            type: 'item',
            url: '/ui/alerts'
          },
          {
            id: 'buttons',
            title: 'Buttons',
            type: 'item',
            url: '/ui/buttons'
          },
          {
            id: 'cards',
            title: 'Cards',
            type: 'item',
            url: '/ui/cards'
          },
          {
            id: 'carousel',
            title: 'Carousel',
            type: 'item',
            url: '/ui/carousel'
          },
          {
            id: 'generalui',
            title: 'General UI',
            type: 'item',
            url: '/ui/generalui'
          },
          {
            id: 'grid',
            title: 'Grid',
            type: 'item',
            url: '/ui/grid'
          }

        ]
      },
      {
        id: 'forms',
        title: 'Forms',
        type: 'collapse',
        icon: 'feather icon-file-text',
        children: [
          {
            id: 'felement',
            title: 'Form Elements',
            type: 'item',
            url: '/forms/felement'
          },
          {
            id: 'fvalid',
            title: 'Form Validation',
            type: 'item',
            url: '/forms/fvalid'
          },
          {
            id: 'fadvanced',
            title: 'Form Advanced',
            type: 'item',
            url: '/forms/fadvanced'
          }

        ]
      },
      {
        id: 'charts',
        title: 'Charts',
        type: 'collapse',
        icon: 'feather icon-activity',
        children: [
          {
            id: 'apex',
            title: 'Apex Chart',
            type: 'item',
            url: '/charts/apex'
          },
          {
            id: 'echart',
            title: 'E - Chart',
            type: 'item',
            url: '/charts/echart'
          },
          {
            id: 'morchart',
            title: 'Morris Chart',
            type: 'item',
            url: '/charts/morchart'
          },

          {
            id: 'charchart',
            title: 'Chartist Chart',
            type: 'item',
            url: '/charts/charchart'
          }

        ]
      },
      {
        id: 'tables',
        title: 'Tables',
        type: 'collapse',
        icon: 'feather icon-list',
        children: [
          {
            id: 'basict',
            title: 'Basic Tables',
            type: 'item',
            url: '/tables/basict'
          },
          {
            id: 'tabledat',
            title: 'Data Table',
            type: 'item',
            url: '/tables/tabledat'
          },
          {
            id: 'tableres',
            title: 'Responsive Table',
            type: 'item',
            url: '/tables/tableres'
          },
          {
            id: 'tabledit',
            title: 'Editable Table',
            type: 'item',
            url: '/tables/tabledit'
          }

        ]
      },

      {
        id: 'icons',
        title: 'Icons',
        type: 'collapse',
        icon: 'feather icon-anchor',
        children: [
          {
            id: 'md',
            title: 'Material Design',
            type: 'item',
            url: '/icons/md'
          },
          {
            id: 'fontaw',
            title: 'Font Awesome',
            type: 'item',
            url: '/icons/fontaw'
          },
          {
            id: 'ion',
            title: 'Ion Icons',
            type: 'item',
            url: '/icons/ion'
          },
          {
            id: 'themify',
            title: 'Themify Icons',
            type: 'item',
            url: '/icons/themify'
          }

        ]
      },

      {
        id: 'maps',
        title: 'Maps',
        type: 'collapse',
        icon: 'feather icon-map-pin',
        children: [
          {
            id: 'googlemap',
            title: 'Google Map',
            type: 'item',
            url: '/maps/googlemap'
          },
          {
            id: 'vector',
            title: 'Vector Map',
            type: 'item',
            url: '/maps/vector'
          }


        ]
      },



    ]
  },

//----------------------------------------------------------
//----------------------------------------------------------------------
//-------------------------------------------------------------------------------------

];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
