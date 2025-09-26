import { Injectable, signal, computed } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTerm = signal<string>('');

  private articles = signal<Article[]>([
    {
      id: 1,
      title: 'Understanding the difference between grid-template and grid-auto',
      content: 'With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to do...',
      date: 'Oct 09, 2024'
    },
    {
      id: 2,
      title: 'Recreating the GitHub Contribution Graph with CSS Grid Layout',
      content: 'Learn how to recreate the famous GitHub contribution graph using modern CSS Grid techniques and responsive design principles for modern web applications.',
      date: 'Nov 15, 2024'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: When to Use Which',
      content: 'A comprehensive guide to understanding when to use CSS Grid versus Flexbox for your layout needs. Grid is perfect for two-dimensional layouts.',
      date: 'Dec 20, 2024'
    },
    {
      id: 4,
      title: 'Advanced Grid Techniques for Responsive Design',
      content: 'Explore advanced CSS Grid techniques including grid areas, implicit grids, and responsive grid layouts that adapt to any screen size.',
      date: 'Jan 10, 2025'
    },
    {
      id: 5,
      title: 'Building Complex Layouts with CSS Grid',
      content: 'Master complex web layouts using CSS Grid. Learn about grid lines, grid tracks, and how to create sophisticated grid-based designs.',
      date: 'Feb 05, 2025'
    }
  ]);

  filteredArticles = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return [];

    return this.articles().filter(article =>
      article.title.toLowerCase().includes(term) ||
      article.content.toLowerCase().includes(term)
    );
  });

  updateSearchTerm(term: string) {
    this.searchTerm.set(term);
  }

  getSearchTerm() {
    return this.searchTerm();
  }

  getResultCount() {
    return this.filteredArticles().length;
  }
}
