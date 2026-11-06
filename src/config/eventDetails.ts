/**
 * स्नेहल आणि रोहन — डोहाळे जेवण निमंत्रण तपशील
 * Event Configuration File
 */

export interface GalleryPhoto {
  id: string;
  src: string;
  srcWebp: string;
  alt: string;
  title: string;
  caption: string;
  category: 'traditional' | 'modern';
  isFeatured?: boolean;
}

export interface EventConfig {
  meta: {
    siteTitle: string;
    siteDescription: string;
    canonicalUrl?: string;
  };
  eventDateISO: string; // ISO format for countdown timer: 2026-11-11T11:00:00+05:30
  invocation: string;
  poeticCouplet: {
    line1: string;
    line2: string;
  };
  eventTitle: string;
  eventSubtitle: string;
  coupleNames: string;
  motherName: string;
  fatherName: string;
  invitationMessage: {
    paragraph1: string;
    paragraph2: string;
  };
  details: {
    dateLabel: string;
    dateValue: string; // बुधवार, ११ नोव्हेंबर २०२६
    timeLabel: string;
    timeValue: string; // सकाळी ११ वाजता
    venueLabel: string;
    venueName: string; // बालाजी मंगल कार्यालय
    venueCity: string; // दहिवडी
    mapsUrl: string; // https://maps.app.goo.gl/e9V8UtT39Br83LEa9?g_st=aw
    mapsButtonText: string;
    calendarButtonText: string;
  };
  gallery: {
    heading: string;
    subheading: string;
    photos: GalleryPhoto[];
  };
  closing: {
    hostLabel: string;
    hostName: string; // उंडाळे परिवार
    blessingLine1: string;
    blessingLine2: string;
  };
  sharing: {
    shareButtonText: string;
    shareSuccessToast: string;
    shareTitle: string;
    shareText: string;
  };
  music: {
    audioSrcM4a: string;
    audioSrcMp4: string;
    audioSrcMp3?: string;
    audioSrcWavFallback: string;
    playLabel: string;
    pauseLabel: string;
    ariaLabel: string;
  };
  photographerCredit: string;
}

export const eventDetails: EventConfig = {
  meta: {
    siteTitle: 'स्नेहलचे डोहाळे जेवण | सप्रेम निमंत्रण — रोहन आणि स्नेहल',
    siteDescription:
      'आईच्या आनंदाचा, बाळाच्या आगमनाचा, हा खास सोहळा प्रेमाचा… स्नेहलचे डोहाळे जेवण. बुधवार, ११ नोव्हेंबर २०२६, सकाळी ११ वाजता, बालाजी मंगल कार्यालय, दहिवडी.',
    canonicalUrl: '',
  },

  eventDateISO: '2026-11-11T11:00:00+05:30',

  invocation: '॥ श्री गणेशाय नमः ॥',

  poeticCouplet: {
    line1: '“आईच्या आनंदाचा, बाळाच्या आगमनाचा,',
    line2: 'हा खास सोहळा प्रेमाचा…”',
  },

  eventTitle: 'स्नेहलचे डोहाळे जेवण',
  eventSubtitle: 'सप्रेम निमंत्रण',
  coupleNames: 'रोहन आणि स्नेहल',
  motherName: 'स्नेहल',
  fatherName: 'रोहन',

  invitationMessage: {
    paragraph1:
      'आमच्या घरी लवकरच छोट्याशा पाहुण्याचे आगमन होणार आहे. या आनंदाच्या क्षणी आपल्या उपस्थितीने आमचा सोहळा शोभून जावा, हीच मनःपूर्वक इच्छा आहे.',
    paragraph2: 'या आनंदसोहळ्यास आपण सहर्ष उपस्थित राहावे, ही विनंती!',
  },

  details: {
    dateLabel: 'दिनांक',
    dateValue: 'बुधवार, ११ नोव्हेंबर २०२६',
    timeLabel: 'वेळ',
    timeValue: 'सकाळी ११ वाजता',
    venueLabel: 'स्थळ',
    venueName: 'बालाजी मंगल कार्यालय',
    venueCity: 'दहिवडी',
    mapsUrl: 'https://maps.app.goo.gl/e9V8UtT39Br83LEa9?g_st=aw',
    mapsButtonText: 'स्थळाचा मार्ग पाहा',
    calendarButtonText: 'कॅलेंडरमध्ये जोडा',
  },

  gallery: {
    heading: 'आनंदाचे क्षण',
    subheading: 'मातृत्वाचा गोडवा आणि या सुंदर प्रवासातील काही सुखद आठवणी',
    photos: [
      {
        id: 'couple-traditional',
        src: '/images/hero-rohan-snehal.jpg',
        srcWebp: '/images/hero-rohan-snehal.webp',
        alt: 'रोहन आणि स्नेहल यांचे डोहाळे जेवणाचे पारंपरिक छायाचित्र',
        title: 'सप्रेम साथ',
        caption: 'हिरवा कुर्ता आणि मोरपंखी पैठणीमधील सोज्वळ रूप',
        category: 'traditional',
        isFeatured: true,
      },
      {
        id: 'supporting-traditional',
        src: '/images/supporting-snehal-peacock.jpg',
        srcWebp: '/images/supporting-snehal-peacock.webp',
        alt: 'स्नेहलचे मोरपीस हातात धरलेले पारंपरिक छायाचित्र',
        title: 'मातृत्वाचे तेज',
        caption: 'मयूरपिसाच्या पवित्र साक्षीत स्नेहलचे मनमोहक हास्य',
        category: 'traditional',
      },
      {
        id: 'seated-traditional',
        src: '/images/gallery-snehal-seated.jpg',
        srcWebp: '/images/gallery-snehal-seated.webp',
        alt: 'स्नेहलचे बसलेल्या पोझमधील पारंपरिक छायाचित्र',
        title: 'वात्सल्याचा सुंदर क्षण',
        caption: 'शांत वातावरणात ग्रंथ वाचनाचा पवित्र क्षण',
        category: 'traditional',
      },
      {
        id: 'mauve-solo',
        src: '/images/gallery-snehal-mauve.jpg',
        srcWebp: '/images/gallery-snehal-mauve.webp',
        alt: 'स्नेहलचे सुंदर मऊ जांभळट (Mauve) गाऊनमधील छायाचित्र',
        title: 'नव्या पर्वाची चाहूल',
        caption: 'छोट्याशा पाहुण्याच्या स्वागताची गोड आतुरता',
        category: 'modern',
      },
      {
        id: 'couple-mauve',
        src: '/images/gallery-couple-mauve.jpg',
        srcWebp: '/images/gallery-couple-mauve.webp',
        alt: 'रोहन आणि स्नेहल यांचे आधुनिक वेशातील प्रेमळ छायाचित्र',
        title: 'एकत्र प्रवासाचे गोड पर्व',
        caption: 'आयुष्याच्या नव्या प्रवासातील प्रेमळ सोबती',
        category: 'modern',
      },
    ],
  },

  closing: {
    hostLabel: 'निमंत्रक',
    hostName: 'उंडाळे परिवार',
    blessingLine1: 'तुमच्या येण्याने आमच्या आनंदात',
    blessingLine2: 'भर पडावी हीच अपेक्षा!',
  },

  sharing: {
    shareButtonText: 'निमंत्रण शेअर करा',
    shareSuccessToast: 'निमंत्रणाची लिंक कॉपी झाली.',
    shareTitle: 'स्नेहलचे डोहाळे जेवण — सप्रेम निमंत्रण',
    shareText:
      'स्नेहलचे डोहाळे जेवण — रोहन आणि स्नेहल. बुधवार, ११ नोव्हेंबर २०२६, सकाळी ११ वाजता, बालाजी मंगल कार्यालय, दहिवडी. या आनंदसोहळ्यास आपण सहर्ष उपस्थित राहावे!',
  },

  music: {
    // पारंपरिक मराठी डोहाळे गीत (Marathi Dohale Geet)
    // To use your own MP3 song: drop it into public/audio/ and update path below
    audioSrcM4a: '/audio/marathi-dohale-geet.m4a',
    audioSrcMp4: '/audio/marathi-dohale-geet.mp4',
    audioSrcMp3: '/audio/marathi-dohale-geet.mp3',
    audioSrcWavFallback: '/audio/marathi-dohale-geet-fallback.wav',
    playLabel: 'डोहाळे गीत ऐका',
    pauseLabel: 'संगीत बंद करा',
    ariaLabel: 'पारंपरिक मराठी डोहाळे गीत नियंत्रण',
  },

  photographerCredit: 'प्रेम डिजिटल PHOTOGRAPHY & FILM',
};
