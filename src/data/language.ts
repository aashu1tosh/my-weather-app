import { LabelType } from '../types/global.types'
import bs from 'bikram-sambat';

const date: Date = new Date
export const weatherLabel: LabelType = {
    title: {
        en: 'Weather Application',
        np: 'मौसम आवेदन'
    },
    footer: {
        en: 'Designed and Devloped by Aashutosh Parajuli',
        np: 'आशुतोष पराजुली द्वारा डिजाइन र विकास'
    },
    date: {
        en: bs.toBik_euro(date.toJSON().split('T')[0]),
        np: bs.toBik_dev(date.toJSON().split('T')[0]),
    },

    Kathmandu: {
        en: 'Kathmandu',
        np: 'काठमाडौं'
    },

    Pokhara: {
        en: 'Pokhara',
        np: 'पोखरा'
    },

    Dhangadhi: {
        en: 'Dhangadhi',
        np: 'धाङदी'
    },

    Surkhet: {
        en: 'Surkhet',
        np: 'सुर्खेत'
    },

    light_rain: {
        en: 'Light Rain',
        np: 'हल्का वर्षा'
    },

    "thunderstorm_with_light_rain": {
        "en": "Thunderstorm with light rain",
        "np": "थप्डरस्टर्म विथ लाइट वर्षा"
    },
    "thunderstorm_with_rain": {
        "en": "Thunderstorm with rain",
        "np": "थप्डरस्टर्म विथ वर्षा"
    },
    "thunderstorm_with_heavy_rain": {
        "en": "Thunderstorm with heavy rain",
        "np": "थप्डरस्टर्म विथ हेभी वर्षा"
    },
    "light_thunderstorm": {
        "en": "Light thunderstorm",
        "np": "लाइट थप्डरस्टर्म"
    },
    "thunderstorm": {
        "en": "Thunderstorm",
        "np": "थप्डरस्टर्म"
    },
    "heavy_thunderstorm": {
        "en": "Heavy thunderstorm",
        "np": "हेभी थप्डरस्टर्म"
    },
    "ragged_thunderstorm": {
        "en": "Ragged thunderstorm",
        "np": "रैग्ड थप्डरस्टर्म"
    },
    "thunderstorm_with_light_drizzle": {
        "en": "Thunderstorm with light drizzle",
        "np": "थप्डरस्टर्म विथ लाइट ड्रिजल"
    },
    "thunderstorm_with_drizzle": {
        "en": "Thunderstorm with drizzle",
        "np": "थप्डरस्टर्म विथ ड्रिजल"
    },
    "thunderstorm_with_heavy_drizzle": {
        "en": "Thunderstorm with heavy drizzle",
        "np": "थप्डरस्टर्म विथ हेभी ड्रिजल"
    },
    "light_intensity_drizzle": {
        "en": "Light intensity drizzle",
        "np": "लाइट इन्टेन्सिटी ड्रिजल"
    },
    "drizzle": {
        "en": "Drizzle",
        "np": "ड्रिजल"
    },
    "heavy_intensity_drizzle": {
        "en": "Heavy intensity drizzle",
        "np": "हेभी इन्टेन्सिटी ड्रिजल"
    },
    "light_intensity_drizzle_rain": {
        "en": "Light intensity drizzle rain",
        "np": "लाइट इन्टेन्सिटी ड्रिजल वर्षा"
    },
    "drizzle_rain": {
        "en": "Drizzle rain",
        "np": "ड्रिजल वर्षा"
    },
    "heavy_intensity_drizzle_rain": {
        "en": "Heavy intensity drizzle rain",
        "np": "हेभी इन्टेन्सिटी ड्रिजल वर्षा"
    },
    "shower_rain_and_drizzle": {
        "en": "Shower rain and drizzle",
        "np": "शावर वर्षा एण्ड ड्रिजल"
    },
    "heavy_shower_rain_and_drizzle": {
        "en": "Heavy shower rain and drizzle",
        "np": "हेभी शावर वर्षा एण्ड ड्रिजल"
    },
    "shower_drizzle": {
        "en": "Shower drizzle",
        "np": "शावर ड्रिजल"
    },
    "moderate_rain": {
        "en": "Moderate rain",
        "np": "मध्यम वर्षा"
    },
    "heavy_intensity_rain": {
        "en": "Heavy intensity rain",
        "np": "हेभी इन्टेन्सिटी वर्षा"
    },
    "very_heavy_rain": {
        "en": "Very heavy rain",
        "np": "बहुत हेभी वर्षा"
    },
    "extreme_rain": {
        "en": "Extreme rain",
        "np": "अत्यन्त वर्षा"
    },
    "freezing_rain": {
        "en": "Freezing rain",
        "np": "फ्रीजिंग वर्षा"
    },
    "light_intensity_shower_rain": {
        "en": "Light intensity shower rain",
        "np": "लाइट इन्टेन्सिटी शावर वर्षा"
    },
    "shower_rain": {
        "en": "Shower rain",
        "np": "शावर वर्षा"
    },
    "heavy_intensity_shower_rain": {
        "en": "Heavy intensity shower rain",
        "np": "हेभी इन्टेन्सिटी शावर वर्षा"
    },
    "ragged_shower_rain": {
        "en": "Ragged shower rain",
        "np": "रैग्ड शावर वर्षा"
    },
    "light_snow": {
        "en": "Light snow",
        "np": "लाइट हिम"
    },
    "snow": {
        "en": "Snow",
        "np": "हिम"
    },
    "heavy_snow": {
        "en": "Heavy snow",
        "np": "हेभी हिम"
    },
    "sleet": {
        "en": "Sleet",
        "np": "स्लीट"
    },
    "light_shower_sleet": {
        "en": "Light shower sleet",
        "np": "लाइट शावर स्लीट"
    },
    "shower_sleet": {
        "en": "Shower sleet",
        "np": "शावर स्लीट"
    },
    "light_rain_and_snow": {
        "en": "Light rain and snow",
        "np": "लाइट वर्षा एण्ड हिम"
    },
    "rain_and_snow": {
        "en": "Rain and snow",
        "np": "वर्षा एण्ड हिम"
    },
    "light_shower_snow": {
        "en": "Light shower snow",
        "np": "लाइट शावर हिम"
    },
    "shower_snow": {
        "en": "Shower snow",
        "np": "शावर हिम"
    },
    "heavy_shower_snow": {
        "en": "Heavy shower snow",
        "np": "हेभी शावर हिम"
    },
    "few_clouds": {
        "en": "Few clouds",
        "np": "केही बादलहरू"
    },
    "scattered_clouds": {
        "en": "Scattered clouds",
        "np": "छिटो बादलहरू"
    },
    "broken_clouds": {
        "en": "Broken clouds",
        "np": "टुक्रिएका बादलहरू"
    },
    "overcast_clouds": {
        "en": "Overcast clouds",
        "np": "मेघफल्गु बादलहरू"
    },
    "clear_sky": {
        "en": "Clear sky",
        "np": "स्पष्ट आकाश"
    },
    "mist": {
        "en": "Mist",
        "np": "धुंध"
    },
    "smoke": {
        "en": "Smoke",
        "np": "धुवाँ"
    },
    "haze": {
        "en": "Haze",
        "np": "हेज"
    },
    "fog": {
        "en": "Fog",
        "np": "कोही"
    },
    "sand": {
        "en": "Sand",
        "np": "रेत"
    },
    "dust": {
        "en": "Dust",
        "np": "धुलो"
    },
    "volcanic_ash": {
        "en": "Volcanic ash",
        "np": "ज्वालामुखी राख"
    },
    "squalls": {
        "en": "Squalls",
        "np": "स्क्वल्स"
    },
    "tornado": {
        "en": "Tornado",
        "np": "टोर्नेडो"
    }
}
