export let katakana = () => {
  let chars = [
    { token: 'ア', name: 'a'},
    { token: 'イ', name: 'i'},
    { token: 'ウ', name: 'u'},
    { token: 'エ', name: 'e'},
    { token: 'オ', name: 'o'},
    { token: 'カ', name: 'ka'},
    { token: 'キ', name: 'ki'},
    { token: 'ク', name: 'ku'},
    { token: 'ケ', name: 'ke'},
    { token: 'コ', name: 'ko'},
    { token: 'サ', name: 'sa'},
    { token: 'シ', name: 'si'},
    { token: 'ス', name: 'su'},
    { token: 'セ', name: 'se'},
    { token: 'ソ', name: 'so'},
    { token: 'タ', name: 'ta'},
    { token: 'チ', name: 'ti'},
    { token: 'ツ', name: 'tu'},
    { token: 'テ', name: 'te'},
    { token: 'ト', name: 'to'},
    { token: 'ナ', name: 'na'},
    { token: 'ニ', name: 'ni'},
    { token: 'ヌ', name: 'nu'},
    { token: 'ネ', name: 'ne'},
    { token: 'ノ', name: 'no'},
    { token: 'ハ', name: 'ha'},
    { token: 'ヒ', name: 'hi'},
    { token: 'フ', name: 'hu'},
    { token: 'ヘ', name: 'he'},
    { token: 'ホ', name: 'ho'},
    { token: 'マ', name: 'ma'},
    { token: 'ミ', name: 'mi'},
    { token: 'ム', name: 'mu'},
    { token: 'メ', name: 'me'},
    { token: 'モ', name: 'mo'},
    { token: 'ヤ', name: 'ya'},
    { token: 'ユ', name: 'yu'},
    { token: 'ヨ', name: 'yo'},
    { token: 'ラ', name: 'ra'},
    { token: 'リ', name: 'ri'},
    { token: 'ル', name: 'ru'},
    { token: 'レ', name: 're'},
    { token: 'ロ', name: 'ro'},
    { token: 'ワ', name: 'wa'},
    { token: 'ヰ', name: 'wi'},
    { token: 'ヱ', name: 'we'},
    { token: 'ヲ', name: 'wo'},
    { token: 'ン', name: 'n'},
  ]
  return {
    getSize: () => chars.length,
    getChar: (index) => chars[index],
  }
}