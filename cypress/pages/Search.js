class Search {
    get SearchBox (){
        return cy.get("#search_query_top")
    }
}
typeSearchPhrase (searchValue) ; {
    this.searchBox.type(searchValue);
}

clearSearchPhrase() ;{
    this.searchBox.clear();
}