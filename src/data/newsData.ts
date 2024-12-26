export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  description: string;
  content: string;
  image: string;
  category: string;
}

export const newsData: NewsArticle[] = [
  {
    id: 1,
    title: 'New Advanced MRI Machine Installation',
    date: 'Mar 15, 2024',
    description: 'Our facility has installed a state-of-the-art MRI machine, enhancing our diagnostic capabilities.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80',
    category: 'Facility Updates'
  },
  {
    id: 2,
    title: 'Tips for Managing Seasonal Allergies',
    date: 'Mar 12, 2024',
    description: 'Learn effective strategies to cope with seasonal allergies and maintain your well-being.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.

    Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere.

    Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.`,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80',
    category: 'Health Tips'
  },
  {
    id: 3,
    title: 'Community Health Fair Announcement',
    date: 'Mar 10, 2024',
    description: 'Join us for our annual health fair featuring free screenings and educational sessions.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.

    Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum.

    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.`,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    category: 'Events'
  },
  {
    id: 4,
    title: 'Breakthrough in Cancer Research',
    date: 'Mar 8, 2024',
    description: 'Our research team has made significant progress in understanding cancer cell behavior.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.

    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue.

    Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.`,
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80',
    category: 'Research'
  }
];