export let hiragana = () => {
  let chars = [
    { token: 'あ', name: 'a' },
    { token: 'い', name: 'i' },
    { token: 'う', name: 'u' },
    { token: 'え', name: 'e' },
    { token: 'お', name: 'o' },
    { token: 'か', name: 'ka' },
    { token: 'き', name: 'ki' },
    { token: 'く', name: 'ku' },
    { token: 'け', name: 'ke' },
    { token: 'こ', name: 'ko' },
    { token: 'さ', name: 'sa' },
    { token: 'し', name: 'si' },
    { token: 'す', name: 'su' },
    { token: 'せ', name: 'se' },
    { token: 'そ', name: 'so' },
    { token: 'た', name: 'ta' },
    { token: 'ち', name: 'ti' },
    { token: 'つ', name: 'tu' },
    { token: 'て', name: 'te' },
    { token: 'と', name: 'to' },
    { token: 'な', name: 'na' },
    { token: 'に', name: 'ni' },
    { token: 'ぬ', name: 'nu' },
    { token: 'ね', name: 'ne' },
    { token: 'の', name: 'no' },
    { token: 'は', name: 'ha' },
    { token: 'ひ', name: 'hi' },
    { token: 'ふ', name: 'hu' },
    { token: 'へ', name: 'he' },
    { token: 'ほ', name: 'ho' },
    { token: 'ま', name: 'ma' },
    { token: 'み', name: 'mi' },
    { token: 'む', name: 'mu' },
    { token: 'め', name: 'me' },
    { token: 'も', name: 'mo' },
    { token: 'や', name: 'ya' },
    { token: 'ゆ', name: 'yu' },
    { token: 'よ', name: 'yo' },
    { token: 'ら', name: 'ra' },
    { token: 'り', name: 'ri' },
    { token: 'る', name: 'ru' },
    { token: 'れ', name: 're' },
    { token: 'ろ', name: 'ro' },
    { token: 'わ', name: 'wa' },
    { token: 'ゐ', name: 'wi' },
    { token: 'ゑ', name: 'we' },
    { token: 'を', name: 'wo' },
    { token: 'ん', name: 'n' },
  ]
  return {
    getSize: () => chars.length,
    getChar: (index) => chars[index],
  }
}