import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  searchService = inject(SearchService);
  searchValue = '';

  onSearchChange() {
    this.searchService.updateSearchTerm(this.searchValue);
  }

  clearSearch() {
    this.searchValue = '';
    this.searchService.updateSearchTerm('');
  }

  highlightText(text: string): string {
    const searchTerm = this.searchService.getSearchTerm();
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
}
