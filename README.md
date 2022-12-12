# CENSURE class
Dirty words - filter.   
A JavaScript class to filter out dirty, vulgar, obscene, profane words in russian or english texts.

### Key features:
 - Find profanity (in Russian and English texts) and hide it with *** symbols.  
 - Find profanity (in Russian texts) and replace it with normative vocabulary.

### Some examples:
```JavaScript
// Searches if there any abusive words in the text
Censure.is_bad('Original phrase with abusive words'); // return: bool

// Replace abusive words from string
Censure.replace('Original phrase with abusive words'); // return: string (cleaned text)

// Clean indexes in $_POST from abusive words
Censure.cleanPost('Unlimited number of arguments to match indexes in $_POST to clean'); // return: void

// Fixing abusive words inside string
Censure.fix('Original phrase with abusive words'); // return: string (fixed text)
```
