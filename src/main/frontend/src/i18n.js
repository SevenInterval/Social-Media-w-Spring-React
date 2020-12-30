import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Sign Up': 'Sign Up',
                'Password mismatch': 'Password mismatch',
                'Username': 'Username',
                'Display Name': 'Display Name',
                'Password': 'Password',
                'Password Repeat': 'Password Repeat',
                'Login': 'Login',
                'Logout': 'Logout',
                'Users': 'Users',
                'Next': 'next >',
                'Previous': '< previous',
                'Load Failure': 'Load Failure',
                'User not found': 'User not found',
                'Edit': 'Edit',
                'Save': 'Save',
                'Cancel': 'Cancel',
                'Change Display Name': 'Change Display Name'
            }
        },
        tr: {
            translations: {
                'Sign Up': 'Kayıt Ol',
                'Password mismatch': 'Aynı şifreyi giriniz',
                'Username': 'Kullanıcı Adı',
                'Display Name': 'Tercih Edilen Ad',
                'Password': 'Şifre',
                'Password Repeat': 'Şifre Tekrar',
                'Login': 'Giriş',
                'Logout': 'Çıkış',
                'Users': 'Kullanıcılar',
                'Next': 'sonraki >',
                'Previous': '< önceki',
                'Load Failure': 'Liste alınamadı',
                'User not found': 'Kullanıcı bulunamadı',
                'Edit': 'Düzenle',
                'Save': 'Kaydet',
                'Cancel': 'İptal',
                'Change Display Name': 'Görünür İsminizi Değiştirin'
            }
        }
    },
    fallbackLng: 'tr',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});

export default i18n;