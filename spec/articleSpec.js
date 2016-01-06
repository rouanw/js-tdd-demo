var article = function(title){
  return {
    getSlug: function() {
      return title
        .replace(/[^a-zA-Z0-9]/g,'-')
        .replace('trump', '')
        .toLowerCase();
    }
  };
};

describe('article', function(){
  it('should have a lowercase slug', function(){
    var anArticle = article('CAT');

    expect(anArticle.getSlug()).toBe('cat');
  });

  it('should have dashes instead of spaces in the slug', function(){
    var anArticle = article('something with spaces');

    expect(anArticle.getSlug()).toBe('something-with-spaces');
  });

  it('should have dashes instead of any special character in the slug', function(){
    var anArticle = article('something$with%special#characters');

    expect(anArticle.getSlug()).toBe('something-with-special-characters');
  });

  it('should remove the word trump in the slug', function(){
    var anArticle = article('something with the word trump');

    expect(anArticle.getSlug()).toBe('something-with-the-word-');
  });
});
