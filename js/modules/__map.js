let center = [37.82060012571335, -122.25055228644594]

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 13
    });

    let placemark = new ymaps.Placemark([37.81120368772096, -122.26274024420962], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../../img/placemark.svg',
        iconImageSize: [27, 42],
        iconImageOffset: [-5, -50]
    })

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}

ymaps.ready(init)