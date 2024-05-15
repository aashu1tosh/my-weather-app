import { LabelType } from '@type/global.types'
import bs from 'bikram-sambat';

const date: Date = new Date
export const weatherLabel: LabelType = {
    title: {
        en: 'Weather Application',
        ne: 'मौसम आवेदन'
    },
    footer: {
        en: 'Designed and Devloped by Aashutosh Parajuli',
        ne: 'आशुतोष पराजुली द्वारा डिजाइन र विकास'
    },
    date: {
        en: bs.toBik_euro(date.toJSON().split('T')[0]),
        ne: bs.toBik_dev(date.toJSON().split('T')[0]),
    },

    Kathmandu: {
        en: 'Kathmandu',
        ne: 'काठमाडौं'
    },

    Pokhara: {
        en: 'Pokhara',
        ne: 'पोखरा'
    },

    Dhangadhi: {
        en: 'Dhangadhi',
        ne: 'धाङदी'
    },

    Surkhet: {
        en: 'Surkhet',
        ne: 'सुर्खेत'
    },

    light_rain: {
        en: 'Light Rain',
        ne: 'हल्का वर्षा'
    },

    "thunderstorm_with_light_rain": {
        "en": "Thunderstorm with light rain",
        "ne": "थप्डरस्टर्म विथ लाइट वर्षा"
    },
    "thunderstorm_with_rain": {
        "en": "Thunderstorm with rain",
        "ne": "थप्डरस्टर्म विथ वर्षा"
    },
    "thunderstorm_with_heavy_rain": {
        "en": "Thunderstorm with heavy rain",
        "ne": "थप्डरस्टर्म विथ हेभी वर्षा"
    },
    "light_thunderstorm": {
        "en": "Light thunderstorm",
        "ne": "लाइट थप्डरस्टर्म"
    },
    "thunderstorm": {
        "en": "Thunderstorm",
        "ne": "थप्डरस्टर्म"
    },
    "heavy_thunderstorm": {
        "en": "Heavy thunderstorm",
        "ne": "हेभी थप्डरस्टर्म"
    },
    "ragged_thunderstorm": {
        "en": "Ragged thunderstorm",
        "ne": "रैग्ड थप्डरस्टर्म"
    },
    "thunderstorm_with_light_drizzle": {
        "en": "Thunderstorm with light drizzle",
        "ne": "थप्डरस्टर्म विथ लाइट ड्रिजल"
    },
    "thunderstorm_with_drizzle": {
        "en": "Thunderstorm with drizzle",
        "ne": "थप्डरस्टर्म विथ ड्रिजल"
    },
    "thunderstorm_with_heavy_drizzle": {
        "en": "Thunderstorm with heavy drizzle",
        "ne": "थप्डरस्टर्म विथ हेभी ड्रिजल"
    },
    "light_intensity_drizzle": {
        "en": "Light intensity drizzle",
        "ne": "लाइट इन्टेन्सिटी ड्रिजल"
    },
    "drizzle": {
        "en": "Drizzle",
        "ne": "ड्रिजल"
    },
    "heavy_intensity_drizzle": {
        "en": "Heavy intensity drizzle",
        "ne": "हेभी इन्टेन्सिटी ड्रिजल"
    },
    "light_intensity_drizzle_rain": {
        "en": "Light intensity drizzle rain",
        "ne": "लाइट इन्टेन्सिटी ड्रिजल वर्षा"
    },
    "drizzle_rain": {
        "en": "Drizzle rain",
        "ne": "ड्रिजल वर्षा"
    },
    "heavy_intensity_drizzle_rain": {
        "en": "Heavy intensity drizzle rain",
        "ne": "हेभी इन्टेन्सिटी ड्रिजल वर्षा"
    },
    "shower_rain_and_drizzle": {
        "en": "Shower rain and drizzle",
        "ne": "शावर वर्षा एण्ड ड्रिजल"
    },
    "heavy_shower_rain_and_drizzle": {
        "en": "Heavy shower rain and drizzle",
        "ne": "हेभी शावर वर्षा एण्ड ड्रिजल"
    },
    "shower_drizzle": {
        "en": "Shower drizzle",
        "ne": "शावर ड्रिजल"
    },
    "moderate_rain": {
        "en": "Moderate rain",
        "ne": "मध्यम वर्षा"
    },
    "heavy_intensity_rain": {
        "en": "Heavy intensity rain",
        "ne": "हेभी इन्टेन्सिटी वर्षा"
    },
    "very_heavy_rain": {
        "en": "Very heavy rain",
        "ne": "बहुत हेभी वर्षा"
    },
    "extreme_rain": {
        "en": "Extreme rain",
        "ne": "अत्यन्त वर्षा"
    },
    "freezing_rain": {
        "en": "Freezing rain",
        "ne": "फ्रीजिंग वर्षा"
    },
    "light_intensity_shower_rain": {
        "en": "Light intensity shower rain",
        "ne": "लाइट इन्टेन्सिटी शावर वर्षा"
    },
    "shower_rain": {
        "en": "Shower rain",
        "ne": "शावर वर्षा"
    },
    "heavy_intensity_shower_rain": {
        "en": "Heavy intensity shower rain",
        "ne": "हेभी इन्टेन्सिटी शावर वर्षा"
    },
    "ragged_shower_rain": {
        "en": "Ragged shower rain",
        "ne": "रैग्ड शावर वर्षा"
    },
    "light_snow": {
        "en": "Light snow",
        "ne": "लाइट हिम"
    },
    "snow": {
        "en": "Snow",
        "ne": "हिम"
    },
    "heavy_snow": {
        "en": "Heavy snow",
        "ne": "हेभी हिम"
    },
    "sleet": {
        "en": "Sleet",
        "ne": "स्लीट"
    },
    "light_shower_sleet": {
        "en": "Light shower sleet",
        "ne": "लाइट शावर स्लीट"
    },
    "shower_sleet": {
        "en": "Shower sleet",
        "ne": "शावर स्लीट"
    },
    "light_rain_and_snow": {
        "en": "Light rain and snow",
        "ne": "लाइट वर्षा एण्ड हिम"
    },
    "rain_and_snow": {
        "en": "Rain and snow",
        "ne": "वर्षा एण्ड हिम"
    },
    "light_shower_snow": {
        "en": "Light shower snow",
        "ne": "लाइट शावर हिम"
    },
    "shower_snow": {
        "en": "Shower snow",
        "ne": "शावर हिम"
    },
    "heavy_shower_snow": {
        "en": "Heavy shower snow",
        "ne": "हेभी शावर हिम"
    },
    "few_clouds": {
        "en": "Few clouds",
        "ne": "केही बादलहरू"
    },
    "scattered_clouds": {
        "en": "Scattered clouds",
        "ne": "छिटो बादलहरू"
    },
    "broken_clouds": {
        "en": "Broken clouds",
        "ne": "टुक्रिएका बादलहरू"
    },
    "overcast_clouds": {
        "en": "Overcast clouds",
        "ne": "मेघफल्गु बादलहरू"
    },
    "clear_sky": {
        "en": "Clear sky",
        "ne": "स्पष्ट आकाश"
    },
    "mist": {
        "en": "Mist",
        "ne": "धुंध"
    },
    "smoke": {
        "en": "Smoke",
        "ne": "धुवाँ"
    },
    "haze": {
        "en": "Haze",
        "ne": "हेज"
    },
    "fog": {
        "en": "Fog",
        "ne": "कोही"
    },
    "sand": {
        "en": "Sand",
        "ne": "रेत"
    },
    "dust": {
        "en": "Dust",
        "ne": "धुलो"
    },
    "volcanic_ash": {
        "en": "Volcanic ash",
        "ne": "ज्वालामुखी राख"
    },
    "squalls": {
        "en": "Squalls",
        "ne": "स्क्वल्स"
    },
    "tornado": {
        "en": "Tornado",
        "ne": "टोर्नेडो"
    }
}
