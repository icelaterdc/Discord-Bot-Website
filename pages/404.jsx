import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Bu Sayfa Geçici Olarak Kapalı!',
        'Bu Sayfa Geçici Olarak Kapalı!',
        'Bu Sayfa Geçici Olarak Kapalı!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa Bulunamadı!"} />
}

export default UnkownPage;

