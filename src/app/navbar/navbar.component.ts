import {Component} from '@angular/core';

@Component({
  selector: 'slwg-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isNavbarCollapsed = true;

  navbarContent = [
    {
      'title': 'Home',
      'href': 'home'
    },
    {
      'title': 'About',
      'subs': [
        {
          'title': 'About Us',
          'href': 'about'
        },
        {
          'title': 'Contact Us',
          'href': 'contact'
        },
        {
          'title': 'Sponsors & Member Benefits',
          'href': 'sponsor-benefits'
        },
        {
          'title': 'Join the Guild',
          'href': 'join'
        },
        {
          'title': 'Meetings & Events',
          'href': 'calendar'
        }
      ]
    },
    {
      'title': 'Community',
      'subs': [
        {
          'title': 'Bring Me a Book STL',
          'href': 'bring-me-a-book-stl'
        },
        {
          'title': 'Faust Park',
          'href': 'faust-park'
        },
        {
          'title': 'St. Louis Museum of Transportation',
          'href': 'stl-museum-of-transportation'
        },
        {
          'title': 'Toy Program',
          'href': 'toy-program'
        }
      ]
    },
    {
      'title': 'Blog',
      'href': 'blog.slwg.org'
    },
    {
      'title': 'Gallery',
      'href': 'gallery.slwg.org'
    },
    {
      'title': 'Forums',
      'href': 'forums.slwg.org'
    },
    {
      'title': 'Private Site',
      'href': 'https://sites.google.com/site/stlwoodworkersguild/'
    },
    {
      'title': 'External Resources',
      'subs': [
        {
          'title': 'Corporations',
          'href': 'coorporations'
        },
        {
          'title': 'Guilds and Clubs',
          'href': 'guilds-and-clubs'
        },
        {
          'title': 'Info Sources',
          'href': 'info-sources'
        },
        {
          'title': 'Nearby Professionals',
          'href': 'professionals'
        },
        {
          'title': 'Kits/Supplies',
          'href': 'supplies'
        },
        {
          'title': 'Member\'s Websites',
          'href': 'member-websites'
        }
      ]
    }
  ];
}
