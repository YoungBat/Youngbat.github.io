// 主题管理模块
const ThemeManager = {
    init() {
        document.body.dataset.theme = localStorage.getItem('theme') || 'light';
    },

    toggle() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    },
    
    get currentTheme() {
        return document.body.dataset.theme;
    }
}

// 初始化主题
document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
