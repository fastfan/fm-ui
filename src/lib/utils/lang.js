import Locale from 'element-ui/src/locale';
import zhCN from 'element-ui/src/locale/lang/zh-CN';
import enUS from 'element-ui/src/locale/lang/en';

const langMap = {
  'en-US': {
    title: 'CUI - A Vue.js 2.0 UI at CCI',
    messages: enUS
  },
  'zh-CN': {
    title: 'CUI - 城云 Vue 组件库',
    messages: zhCN
  }
};
let currentLang = '';

setLang(getDefaultLang());

function getDefaultLang() {
  const langs = Object.keys(langMap);
  const hash = location.hash;

  for (let i = 0; i < langs.length; i++) {
    if (hash.indexOf(langs[i]) !== -1) {
      return langs[i];
    }
  }

  const userLang = localStorage.getItem('C_LANGUAGE') || navigator.language || 'en-US';
  return userLang.indexOf('zh-') !== -1 ? 'zh-CN' : 'en-US';
}

export function setLang(lang) {
  if (currentLang === lang) {
    return;
  }

  currentLang = lang;
  if (window.localStorage) {
    localStorage.setItem('C_LANGUAGE', lang);
  }
  Locale.use(lang, langMap[lang].messages);
  document.title = langMap[lang].title;
}
