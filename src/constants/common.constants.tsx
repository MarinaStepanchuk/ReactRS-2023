const Paths = {
  main: {
    path: '/',
    title: 'Главная',
  },
  about: {
    path: '/about',
    title: 'О нас',
  },
  error: {
    path: '*',
    title: 'Error',
  },
  critiques: {
    path: '/critiques',
    title: 'Рецензии',
  },
};

const Content = {
  rating: 'Рейтинг: ',
  year: 'Год выпуска: ',
  country: 'Страна: ',
  genres: 'Жанры: ',
  movieLength: 'Продолжительность: ',
  duration: 'мин.',
  greeting: 'Введите фильм, который вы ищете, поиск производится по названию.',
  about:
    'MovieSearch — уникальная платформа для поиска фильмов. Здесь вы найдете фильм или мультфильм на любой вкус. Мы позаботимся о добавлении новых выпусков, как только они будут выпущены. Воспользуйтесь нашим поиском, чтобы найти фильм, который понравится сегодня вечером.',
  critiquesTitle: 'Здесь вы можете оставить свой отзыв и прочитать отзывы других пользователей.',
  formTitle: 'Оставьте отзыв: ',
  critique: {
    nameLabel: 'Ваши фамилия и имя: ',
    dateLabel: 'Дата просмотра: ',
    movieLabel: 'Фильм: ',
    reviewLabel: 'Ваш отзыв: ',
    recommend: 'рекомендую',
    unrecommended: 'не рекомендую',
    personalDate: 'Я даю согласие на использование моих персональных данных',
    country: 'Страна проживания: ',
    photo: 'Фото профиля: ',
    cardMovie: 'Фильм: ',
    cardRecommended: 'Рекомендовано к просмотру: ',
    cardDate: 'Дата просмотра: ',
    cardReview: 'Рецензия: ',
    recommendedMovie: 'да',
    unrecommendedMovie: 'нет',
  },
  formSubmit: 'Отправить рецензию',
};

const InputName = {
  name: 'name',
  country: 'country',
  photo: 'photo',
  movie: 'movie',
  date: 'date',
  review: 'review',
  personalDate: 'personal',
};

const ImageFormats = '.jpg,.jpeg,.png';

const Pages = {
  main: 'Главная',
  about: 'О нас',
  error: '404 Страница не найдена',
  critiques: 'Рецензии',
};

const LocalStorageKeys = {
  search: 'search',
};

const Countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bangladesh',
  'Barbados',
  'Bahamas',
  'Bahrain',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burma',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo-Brazzaville',
  'Congo-Kinshasa',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cura?ao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'El Salvador',
  'Egypt',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Federated States of Micronesia',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Lands',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard and McDonald Islands',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'R?union',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Barth?lemy',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin',
  'Saint Pierre and Miquelon',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'S?o Tom? and Pr?ncipe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Swaziland',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Vietnam',
  'Venezuela',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const ErrorMessages = {
  emptyLine: 'Поле не может быть пустым',
  invalidName: 'Необходимо ввести 2 слова с большой буквы, минимум 4 символа каждое',
  missingPhoto: 'Загрузите фото',
  wrongDate: 'Дата не должна быть больше текущей',
  recommended: 'Необходимо оставить рекомендации',
  personalData: 'Вы должны дать согласие на обработку персональных данных',
};

const RegName = /^([A-Z А-Я][a-zа-я]{2,})[ ]([A-Z А-Я][a-zа-я]{2,})(([A-Z А-Я][a-zа-я]{0,}){0,})/gm;

const ApiErrorMessage = {
  unknownError: 'Что-то пошло не так, попробуйте отправить запрос через некоторое время',
  notFound: 'Не найдено данных, соответствующих запросу',
};

const DefaultValuesCard = 'нет данных';

const DefaultValuesDescription = 'Описание отсутствует';

const StarIcon = '★';

export {
  Paths,
  Content,
  InputName,
  Pages,
  LocalStorageKeys,
  Countries,
  ErrorMessages,
  RegName,
  ImageFormats,
  ApiErrorMessage,
  DefaultValuesCard,
  DefaultValuesDescription,
  StarIcon,
};
