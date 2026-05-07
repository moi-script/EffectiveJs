
//UTF8
// UTF16
// UTF32


// encodeURI,
// decodeURI, 
// encodeURIComponent
// decodeURIComponent.


// string --> 16 bit code units 

// Unicode point 2 ^ 16 -> two code points -> surrogate pair

// Surrogate pairs affects string length, 
// "😄".length === 2 // true
// "😄".charAt(0); // first half (invalid alone)
// "😄".charAt(1); // second half (invalid alone)



// "😄".charCodeAt(0); // high surrogate
// "😄".charCodeAt(1); // low surrogate

// "😄".match(/./g); // ["�", "�"]




// HOW to USE

// codePointAt(0)
// "😄".codePointAt(0); // correct full code point

// Array.from / spread the value
// [..."😄"].length // 1 ✅
// Array.from("😄") // ["😄"]



// "😄".match(/./gu); // ["😄"] ✅




function getCodePoints(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const code = str.codePointAt(i);
    result.push(code);

    if (code > 0xffff) i++; // skip surrogate pair
  }
  return result;
}



// For multi code points like "👨‍👩‍👧‍👦" // family emoji


import GraphemeSplitter from "grapheme-splitter";

const splitter = new GraphemeSplitter();
splitter.splitGraphemes("👨‍👩‍👧‍👦"); // ["👨‍👩‍👧‍👦"]



class SafeString {
  constructor(str) {
    this.chars = Array.from(str);
  }

  length() {
    return this.chars.length;
  }

  charAt(i) {
    return this.chars[i];
  }

  slice(start, end) {
    return this.chars.slice(start, end).join('');
  }
}



// Intl.Segmenter
const segmenter = new Intl.Segmenter('en', {
  granularity: 'grapheme'
});

const segments = [...segmenter.segment("👨‍👩‍👧‍👦")];

segments.map(s => s.segment); // ["👨‍👩‍👧‍👦"] 







