/**
 * HIMANSHU & ANJANI — WEDDING INVITATION INTERACTION SCRIPT
 * Royal Blush Experience (English by Default with Bilingual Support)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Translations & Language Dictionary (English Default)
  // ------------------------------------------------------------------------
  const TRANSLATIONS = {
    en: {
      siteTitle: "Himanshu & Anjani — Wedding Invitation | 30 November 2026",
      openingPreTitle: "Together with their families",
      openingInviteLine: "invite you to celebrate their wedding",
      openingDate: "30 NOVEMBER 2026",
      openingSealLabel: "Open",
      openingSkip: "Skip to Invitation",
      navHome: "Home",
      navStory: "Our Story",
      navEvents: "Programmes",
      navCountdown: "Countdown",
      navWedding: "Wedding Day",
      navFamily: "Family",
      heroEyebrow: "Together with their families",
      heroWeds: "WEDS",
      heroDate: "30 NOVEMBER 2026 · MONDAY",
      heroTagline: "\"Two hearts, one beautiful beginning.\"",
      heroBtnEvents: "View Programmes",
      heroBtnWedding: "The Wedding Day",
      storyEyebrow: "A Sacred Beginning",
      storyTitle: "Our Story",
      storyMainText: "\"With the blessings of their families,<br>Himanshu and Anjani begin a new chapter together.\"",
      storySubText: "Two hearts united in love, guided by the warmth, affection, and prayers of everyone they hold dear. We invite you to be part of the moments that will shape a lifetime.",
      storySignature: "Himanshu & Anjani",
      eventsEyebrow: "Auspicious Ceremonies",
      eventsTitle: "Wedding Programmes",
      programmesIntroSaprem: "Cordially Invited",
      programmesIntroText: "On the joyous and auspicious occasion of the wedding,<br>you and your family are cordially invited<br>to grace the celebrations with your presence.",
      event1Badge: "Day 1 · Divine Invocation",
      event1Title: "Hanuman Aradhana",
      event1Sub: "Sacred Prayer & Blessings",
      event1Date: "28 November 2026",
      event1Time: "10:00 AM",
      event2Badge: "Day 1 · Sacred Ritual",
      event2Title: "Puja Matkor",
      event2Sub: "Traditional Ceremony",
      event2Date: "28 November 2026",
      event2Time: "5:00 PM",
      event3Badge: "Day 1 · Auspicious Turmeric Celebration",
      event3Title: "Haldi Ceremony",
      event3Sub: "Turmeric & Joy",
      event3Date: "28 November 2026",
      event3Time: "8:00 PM",
      event4Badge: "Day 2 · Grand Procession",
      event4Title: "Baarat Departure",
      event4Sub: "Wedding Procession",
      event4Date: "29 November 2026",
      event4Time: "5:00 PM",
      baaratLocationTitle: "Departure Venue:",
      baaratLocationDesc: "Bus will depart from residence.",
      baaratAttendanceNote: "All family members and friends are warmly requested to assemble on time to join the Baarat procession.",
      countdownEyebrow: "Countdown to the Sacred Vows",
      countdownTarget: "30 NOVEMBER 2026",
      countdownDays: "Days",
      countdownHours: "Hours",
      countdownMinutes: "Minutes",
      countdownSeconds: "Seconds",
      countdownNote: "Counting every sacred moment until the auspicious wedding celebration.",
      weddingEyebrow: "THE WEDDING DAY",
      weddingDateMain: "30 NOVEMBER 2026",
      weddingDateSub: "Monday · Auspicious Wedding Ceremony",
      weddingGroom: "Himanshu Sharma",
      weddingWeds: "Weds",
      weddingBride: "Anjani Sharma",
      weddingVenueNote: "Auspicious Wedding Ceremony · Venue details and ceremony timings will be communicated soon.",
      familyTitle: "With Best Compliments & Blessings",
      familySubtitle: "With deepest affection and warm wishes from our beloved elders & family",
      familyMember1: "Mr. Shambhu Sharma & Mrs. Sunita Sharma",
      familyMember2: "Mr. Vishwanath Sharma",
      familyMember3: "Mrs. Meena Devi",
      familyMember4: "Mr. Omprakash Sharma",
      familyMember5: "Mrs. Babita Devi",
      familyMember6: "Aditya Sharma, Kirti Sharma",
      familyMember7: "Sanjay Sharma & Subhash Sharma",
      familyMember8: "All Members of the Sharma Family",
      closingBlessing: "We warmly request the honor of your presence and blessings with your family<br>to grace these auspicious occasions.",
      closingNames: "HIMANSHU & ANJANI",
      closingDate: "30 NOVEMBER 2026",
      closingEmotionalLine: "\"With love, we invite you to celebrate with us.\"",
      btnWhatsapp: "Share on WhatsApp",
      btnCalendar: "Save Date (.ICS)",
      btnWishes: "Send Blessings",
      footerNote: "Himanshu & Anjani · 30 November 2026 · With Love & Gratitude",
      modalTitle: "Send Your Blessings",
      modalSubtitle: "Share your warm wishes and love for Himanshu & Anjani",
      formNameLabel: "Your Name",
      formMessageLabel: "Your Blessings / Message",
      formSubmit: "Send Blessings to Couple",
      modalSuccessTitle: "Blessings Received!",
      modalSuccessText: "Thank you for blessing Himanshu & Anjani with your heartfelt love."
    },
    hi: {
      siteTitle: "हिमांशु शर्मा Weds अंजनी शर्मा — शुभ विवाह निमंत्रण | ३० नवम्बर २०२६",
      openingPreTitle: "शुभ विवाह",
      openingInviteLine: "के पावन उपलक्ष्य में आप सपरिवार सादर आमंत्रित हैं",
      openingDate: "३० नवम्बर २०२६",
      openingSealLabel: "खोलें",
      openingSkip: "सीधे निमंत्रण देखें",
      navHome: "मुख्य",
      navStory: "शुभ प्रसंग",
      navEvents: "मांगलिक कार्यक्रम",
      navCountdown: "शुभ मुहूर्त",
      navWedding: "शुभ विवाह",
      navFamily: "शुभाशीषाकांक्षी",
      heroEyebrow: "शुभ विवाह",
      heroWeds: "संग",
      heroDate: "३० नवम्बर २०२६ · सोमवार",
      heroTagline: "\"दो हृदयों का पावन मिलन, एक सुंदर शुरुआत।\"",
      heroBtnEvents: "मांगलिक कार्यक्रम",
      heroBtnWedding: "शुभ विवाह दिवस",
      storyEyebrow: "पावन शुरुआत",
      storyTitle: "शुभ प्रसंग",
      storyMainText: "\"अपने परिवारों के शुभाशीर्वाद से,<br>हिमांशु और अंजनी अपने जीवन के नए अध्याय की शुरुआत कर रहे हैं।\"",
      storySubText: "परिवार और अपनों के स्नेह और शुभाशीर्वाद से, हिमांशु और अंजनी अपने जीवन के नए अध्याय की शुरुआत कर रहे हैं।",
      storySignature: "हिमांशु एवं अंजनी",
      eventsEyebrow: "शुभ आयोजन",
      eventsTitle: "मांगलिक कार्यक्रम",
      programmesIntroSaprem: "सप्रेम निमंत्रण",
      programmesIntroText: "शुभ विवाह के मंगलमय उपलक्ष्य में<br>आयोजित मांगलिक कार्यक्रमों में<br>आप सपरिवार सादर आमंत्रित हैं।",
      event1Badge: "दिवस १ · श्री हनुमान आराधना",
      event1Title: "हनुमान आराधना",
      event1Sub: "श्री हनुमान जी का पूजन",
      event1Date: "२८ नवम्बर २०२६",
      event1Time: "प्रातः १०:०० बजे",
      event2Badge: "दिवस १ · पूजा मटकोर",
      event2Title: "पूजा मटकोर",
      event2Sub: "मातृका पूजन एवं मटकोर",
      event2Date: "२८ नवम्बर २०२६",
      event2Time: "सायं ५:०० बजे",
      event3Badge: "दिवस १ · हल्दी समारोह",
      event3Title: "हल्दी समारोह",
      event3Sub: "मंगल हल्दी लेपन",
      event3Date: "२८ नवम्बर २०२६",
      event3Time: "रात्रि ८:०० बजे",
      event4Badge: "दिवस २ · बारात प्रस्थान",
      event4Title: "बारात प्रस्थान",
      event4Sub: "शुभ बारात प्रस्थान",
      event4Date: "२९ नवम्बर २०२६",
      event4Time: "सायं ५:०० बजे",
      baaratLocationTitle: "स्थान:",
      baaratLocationDesc: "निवास स्थान से बस प्रस्थान करेगी।",
      baaratAttendanceNote: "सभी परिजन समय पर उपस्थित होकर बारात में सम्मिलित हों।",
      countdownEyebrow: "शुभ लग्न का उल्टी गिनती",
      countdownTarget: "३० नवम्बर २०२६",
      countdownDays: "दिन",
      countdownHours: "घंटे",
      countdownMinutes: "मिनट",
      countdownSeconds: "सेकंड",
      countdownNote: "शुभ विवाह के पावन पलों की प्रतीक्षा में।",
      weddingEyebrow: "शुभ विवाह दिवस",
      weddingDateMain: "३० नवम्बर २०२६",
      weddingDateSub: "सोमवार · शुभ पाणिग्रहण संस्कार",
      weddingGroom: "हिमांशु शर्मा",
      weddingWeds: "संग",
      weddingBride: "अंजनी शर्मा",
      weddingVenueNote: "शुभ विवाह समारोह · कार्यक्रम स्थल एवं शुभ मुहूर्त की जानकारी शीघ्र साझा की जाएगी।",
      familyTitle: "स्नेह एवं शुभाशीषाकांक्षी",
      familySubtitle: "समस्त परिजनों एवं बुजुर्गों का हार्दिक स्नेह एवं आशीर्वाद",
      familyMember1: "श्री शंभु शर्मा एवं श्रीमती सुनीता शर्मा",
      familyMember2: "विश्वनाथ शर्मा",
      familyMember3: "श्रीमती मीना देवी",
      familyMember4: "श्री ओमप्रकाश शर्मा",
      familyMember5: "श्रीमती बबीता देवी",
      familyMember6: "आदित्य शर्मा, कीर्ति शर्मा",
      familyMember7: "संजय शर्मा एवं सुभाष शर्मा",
      familyMember8: "समस्त शर्मा परिवार",
      closingBlessing: "सपरिवार पधारकर इन शुभ अवसरों की<br>शोभा बढ़ाएं एवं अपना आशीर्वाद दें।",
      closingNames: "हिमांशु एवं अंजनी",
      closingDate: "३० नवम्बर २०२६",
      closingEmotionalLine: "\"सस्नेह, हम आपको हमारे साथ इस पावन अवसर को मनाने के लिए आमंत्रित करते हैं।\"",
      btnWhatsapp: "व्हाट्सएप पर साझा करें",
      btnCalendar: "कैलेंडर में जोड़ें",
      btnWishes: "आशीर्वाद संदेश भेजें",
      footerNote: "हिमांशु एवं अंजनी · ३० नवम्बर २०२६ · सप्रेम सादर",
      modalTitle: "अपना शुभाशीर्वाद भेजें",
      modalSubtitle: "हिमांशु और अंजनी के लिए अपनी शुभकामनाएं प्रेषित करें",
      formNameLabel: "आपका नाम",
      formMessageLabel: "आपका आशीर्वाद / संदेश",
      formSubmit: "आशीर्वाद भेजें",
      modalSuccessTitle: "आशीर्वाद प्राप्त हुआ!",
      modalSuccessText: "हिमांशु और अंजनी को आपके स्नेहपूर्ण आशीर्वाद के लिए हार्दिक धन्यवाद।"
    }
  };

  let currentLang = 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

    document.documentElement.lang = lang;
    document.title = t.siteTitle;

    if (lang === 'hi') {
      document.body.classList.add('lang-hindi');
    } else {
      document.body.classList.remove('lang-hindi');
    }

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    // Update HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key]) el.innerHTML = t[key];
    });

    // Update switcher pill UI
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
      const enCode = langBtn.querySelector('.lang-code.en');
      const hiCode = langBtn.querySelector('.lang-code.hi');
      if (enCode && hiCode) {
        if (lang === 'hi') {
          enCode.classList.remove('active');
          hiCode.classList.add('active');
        } else {
          hiCode.classList.remove('active');
          enCode.classList.add('active');
        }
      }
    }

    try {
      localStorage.setItem('wedding_lang', lang);
    } catch (e) {}
  }

  // ------------------------------------------------------------------------
  // 2. DOM Elements
  // ------------------------------------------------------------------------
  const openingOverlay = document.getElementById('openingOverlay');
  const waxSealBtn = document.getElementById('waxSealBtn');
  const openingSkipBtn = document.getElementById('openingSkipBtn');
  const coupleOverlay = document.getElementById('coupleTransitionOverlay');
  const weddingWebsiteWrapper = document.getElementById('weddingWebsiteWrapper');
  const siteHeader = document.getElementById('siteHeader');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const weddingAudio = document.getElementById('weddingAudio');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileDrawerLinks = document.querySelectorAll('.mobile-drawer-link');
  const langToggleBtn = document.getElementById('langToggleBtn');
  const wishesModalBackdrop = document.getElementById('wishesModalBackdrop');
  const openWishesModalBtn = document.getElementById('openWishesModalBtn');
  const closeWishesModalBtn = document.getElementById('closeWishesModalBtn');
  const wishesForm = document.getElementById('wishesForm');
  const wishesSuccessMessage = document.getElementById('wishesSuccessMessage');
  const whatsappShareBtn = document.getElementById('whatsappShareBtn');
  const addToCalendarBtn = document.getElementById('addToCalendarBtn');

  // Initialize Language (Default: English)
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('wedding_lang') || 'en';
  } catch (e) {}
  applyLanguage(savedLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'hi' : 'en';
      applyLanguage(nextLang);
    });
  }

  // Lock body scroll initially until invitation is opened
  document.body.classList.add('locked');

  // ------------------------------------------------------------------------
  // 3. Opening Screen Interaction & Cinematic Couple Horizontal Wipe Reveal
  // ------------------------------------------------------------------------
  let isOpening = false;

  function openInvitation() {
    if (isOpening) return;
    isOpening = true;

    // Start background music on user gesture
    if (weddingAudio && !isPlaying) {
      weddingAudio.play().then(() => {
        isPlaying = true;
        if (musicToggleBtn) {
          musicToggleBtn.classList.add('playing');
          const tooltip = musicToggleBtn.querySelector('.music-tooltip');
          if (tooltip) tooltip.textContent = 'Music: On';
        }
      }).catch(() => {});
    }

    // Check for prefers-reduced-motion accessibility setting
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Immediately reveal hero section elements so they are present in DOM under the mask
    document.querySelectorAll('#hero .reveal').forEach(el => {
      el.classList.add('revealed', 'in-view');
    });

    // 2. Start moving spatial mask wipe on the Home Page DOM
    if (weddingWebsiteWrapper) {
      weddingWebsiteWrapper.classList.add('revealing');
    }

    // 3. Activate transparent couple overlay
    if (coupleOverlay) {
      coupleOverlay.style.display = 'block';
      coupleOverlay.classList.add('active');
    }

    // 4. Dissolve opening start card overlay over 0.28s
    if (openingOverlay) {
      openingOverlay.classList.add('opening');
    }

    // 5. Smooth cinematic timing: 750ms for reduced motion, 2800ms for cinematic sweep
    const transitionDuration = prefersReducedMotion ? 750 : 2800;

    setTimeout(() => {
      // Cleanly unmount couple overlay so no invisible layers block interaction
      if (coupleOverlay) {
        coupleOverlay.classList.remove('active');
        coupleOverlay.style.display = 'none';
      }

      // Remove mask from wrapper so Home Page is 100% normal interactive DOM
      if (weddingWebsiteWrapper) {
        weddingWebsiteWrapper.classList.remove('revealing');
      }

      // Mark opening card overlay as completely revealed & hidden
      if (openingOverlay) {
        openingOverlay.classList.add('revealed');
      }

      // Unlock body scrolling
      document.body.classList.remove('locked');

      // Auto trigger initial reveals for all sections
      triggerScrollReveals();
    }, transitionDuration);
  }

  if (waxSealBtn) {
    waxSealBtn.addEventListener('click', openInvitation);
  }

  if (openingSkipBtn) {
    openingSkipBtn.addEventListener('click', () => {
      isOpening = true;
      if (coupleOverlay) {
        coupleOverlay.classList.remove('active');
        coupleOverlay.style.display = 'none';
      }
      if (weddingWebsiteWrapper) {
        weddingWebsiteWrapper.classList.remove('revealing');
      }
      if (openingOverlay) {
        openingOverlay.classList.add('revealed');
        openingOverlay.classList.remove('opening');
      }
      document.body.classList.remove('locked');
      document.querySelectorAll('#hero .reveal').forEach(el => {
        el.classList.add('revealed', 'in-view');
      });
      triggerScrollReveals();
    });
  }

  // ------------------------------------------------------------------------
  // 4. Audio / Music Controller (OFF by default)
  // ------------------------------------------------------------------------
  let isPlaying = false;

  function toggleMusic() {
    if (!weddingAudio) return;

    if (isPlaying) {
      weddingAudio.pause();
      musicToggleBtn.classList.remove('playing');
      musicToggleBtn.setAttribute('aria-label', 'Play Background Music');
      const tooltip = musicToggleBtn.querySelector('.music-tooltip');
      if (tooltip) tooltip.textContent = 'Music: Off';
      isPlaying = false;
    } else {
      weddingAudio.play().then(() => {
        musicToggleBtn.classList.add('playing');
        musicToggleBtn.setAttribute('aria-label', 'Pause Background Music');
        const tooltip = musicToggleBtn.querySelector('.music-tooltip');
        if (tooltip) tooltip.textContent = 'Music: Playing';
        isPlaying = true;
      }).catch(err => {
        console.log('Audio playback prevented or waiting for user interaction:', err);
      });
    }
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', toggleMusic);
  }

  // ------------------------------------------------------------------------
  // 5. Scroll Management (Header Hide/Show & Progress Bar)
  // ------------------------------------------------------------------------
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Update Progress Bar
    if (scrollProgressBar && maxScroll > 0) {
      const progress = Math.min(100, Math.max(0, (currentScrollY / maxScroll) * 100));
      scrollProgressBar.style.width = `${progress}%`;
    }

    // Auto Hide/Show Header
    if (siteHeader) {
      if (currentScrollY > 150 && currentScrollY > lastScrollY) {
        // Scrolling down -> hide
        siteHeader.classList.add('hidden');
      } else {
        // Scrolling up -> show
        siteHeader.classList.remove('hidden');
      }
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // ------------------------------------------------------------------------
  // 6. Mobile Navigation Drawer
  // ------------------------------------------------------------------------
  function toggleMobileNav() {
    const isOpen = mobileDrawer.classList.contains('open');
    if (isOpen) {
      mobileDrawer.classList.remove('open');
      mobileToggle.classList.remove('active');
    } else {
      mobileDrawer.classList.add('open');
      mobileToggle.classList.add('active');
    }
  }

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', toggleMobileNav);

    // Close when clicking outside sheet
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        toggleMobileNav();
      }
    });

    // Close when clicking any nav link
    mobileDrawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ------------------------------------------------------------------------
  // 7. Scroll Reveal Observer (IntersectionObserver)
  // ------------------------------------------------------------------------
  function triggerScrollReveals() {
    const revealElements = document.querySelectorAll('.reveal');

    const checkVisibility = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= vh * 0.95) {
          el.classList.add('revealed', 'in-view');
        }
      });
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed', 'in-view');
          }
        });
      }, {
        threshold: 0.05,
        rootMargin: '80px 0px 80px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
    }

    // Run checkVisibility immediately and bind scroll/resize fallbacks
    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });
  }

  triggerScrollReveals();

  // ------------------------------------------------------------------------
  // 8. Live Countdown Clock to 30 November 2026
  // ------------------------------------------------------------------------
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minEl = document.getElementById('countMinutes');
  const secEl = document.getElementById('countSeconds');

  // Target: 30 November 2026 00:00:00 IST
  const targetWeddingDate = new Date('2026-11-30T00:00:00+05:30').getTime();

  function updateCountdown() {
    const now = Date.now();
    const diff = targetWeddingDate - now;

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minEl) minEl.textContent = '00';
      if (secEl) secEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = (num) => String(num).padStart(2, '0');

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minEl) minEl.textContent = pad(minutes);
    if (secEl) secEl.textContent = pad(seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ------------------------------------------------------------------------
  // 9. Add to Calendar (ICS Generator)
  // ------------------------------------------------------------------------
  if (addToCalendarBtn) {
    addToCalendarBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const eventDetails = {
        title: 'Wedding of Himanshu Sharma & Anjani Sharma',
        description: 'Wedding ceremony of Himanshu Sharma Weds Anjani Sharma. Together with their families, we invite you to celebrate.',
        location: 'Wedding Ceremony',
        startDate: '20261130T043000Z', // 10:00 AM IST in UTC
        endDate: '20261130T173000Z'    // 11:00 PM IST in UTC
      };

      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Himanshu & Anjani Wedding Invitation//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `SUMMARY:${eventDetails.title}`,
        `DESCRIPTION:${eventDetails.description}`,
        `LOCATION:${eventDetails.location}`,
        `DTSTART:${eventDetails.startDate}`,
        `DTEND:${eventDetails.endDate}`,
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', 'Himanshu-Anjani-Wedding-30Nov2026.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Individual event calendar triggers
  document.querySelectorAll('.event-cal-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const eventName = this.dataset.event || 'Wedding Event';
      const eventDate = this.dataset.date || '20261128T043000Z';
      
      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Himanshu & Anjani Wedding Invitation//EN',
        'BEGIN:VEVENT',
        `SUMMARY:${eventName} — Himanshu & Anjani Wedding`,
        `DESCRIPTION:Wedding Programme: ${eventName}. Celebrations on the occasion of the wedding.`,
        `DTSTART:${eventDate}`,
        `DTEND:${eventDate}`,
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', `${eventName.replace(/\s+/g, '_')}-Himanshu-Anjani.ics`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });

  // ------------------------------------------------------------------------
  // 10. WhatsApp Share Intent (English Default)
  // ------------------------------------------------------------------------
  if (whatsappShareBtn) {
    whatsappShareBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const shareUrl = window.location.href;
      const shareText = `💍 *Wedding Invitation | Himanshu Sharma & Anjani Sharma* 💍\n\nTogether with our families, you are warmly invited to celebrate the wedding celebrations of:\n\n*HIMANSHU SHARMA WEDS ANJANI SHARMA*\n\n📅 *Wedding Day:* Monday, 30 November 2026\n\nKindly open our digital invitation to view the Wedding Programmes and celebrate with us:\n👉 ${shareUrl}`;
      
      const encodedUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
      window.open(encodedUrl, '_blank');
    });
  }

  // ------------------------------------------------------------------------
  // 11. Guest Wishes & Blessings Modal
  // ------------------------------------------------------------------------
  function openWishesModal() {
    if (wishesModalBackdrop) {
      wishesModalBackdrop.classList.add('open');
      document.body.classList.add('locked');
    }
  }

  function closeWishesModal() {
    if (wishesModalBackdrop) {
      wishesModalBackdrop.classList.remove('open');
      document.body.classList.remove('locked');
    }
  }

  if (openWishesModalBtn) openWishesModalBtn.addEventListener('click', openWishesModal);
  if (closeWishesModalBtn) closeWishesModalBtn.addEventListener('click', closeWishesModal);

  if (wishesModalBackdrop) {
    wishesModalBackdrop.addEventListener('click', (e) => {
      if (e.target === wishesModalBackdrop) closeWishesModal();
    });
  }

  if (wishesForm) {
    wishesForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('guestName').value.trim();
      const message = document.getElementById('guestMessage').value.trim();

      if (!name || !message) return;

      // Save to localStorage
      try {
        const stored = JSON.parse(localStorage.getItem('wedding_wishes_himanshu_anjani') || '[]');
        stored.push({ name, message, time: new Date().toISOString() });
        localStorage.setItem('wedding_wishes_himanshu_anjani', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage error:', err);
      }

      // Show success message
      wishesForm.style.display = 'none';
      if (wishesSuccessMessage) wishesSuccessMessage.classList.add('active');

      setTimeout(() => {
        closeWishesModal();
        wishesForm.reset();
        wishesForm.style.display = 'flex';
        if (wishesSuccessMessage) wishesSuccessMessage.classList.remove('active');
      }, 2500);
    });
  }

  // ------------------------------------------------------------------------
  // 12. Subtle Ambient Falling Petals Generator
  // ------------------------------------------------------------------------
  const petalsContainer = document.getElementById('petalsContainer');

  if (petalsContainer) {
    const petalColors = ['#E2B2B8', '#D6949C', '#F3D2D6', '#EBC2C7', '#C97B85'];
    const totalPetals = 16;

    for (let i = 0; i < totalPetals; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal-particle';

      const left = Math.random() * 100;
      const size = 12 + Math.random() * 14;
      const duration = 10 + Math.random() * 12;
      const delay = Math.random() * 14;
      const swayDx = 15 + Math.random() * 30;
      const swayDuration = 3 + Math.random() * 4;
      const opacity = 0.5 + Math.random() * 0.35;
      const rot = 180 + Math.random() * 360;
      const color = petalColors[i % petalColors.length];

      petal.style.left = `${left}%`;
      petal.style.width = `${size}px`;
      petal.style.height = `${size * 1.3}px`;
      petal.style.animationDuration = `${duration}s`;
      petal.style.animationDelay = `${delay}s`;
      petal.style.setProperty('--petal-opacity', opacity);
      petal.style.setProperty('--petal-rot', `${rot}deg`);
      petal.style.setProperty('--sway-dx', `${swayDx}px`);
      petal.style.setProperty('--sway-duration', `${swayDuration}s`);

      petal.innerHTML = `
        <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C4 8 0 16 0 24C0 28.4183 5.37258 32 12 32C18.6274 32 24 28.4183 24 24C24 16 20 8 12 0Z" fill="${color}" fill-opacity="0.85"/>
        </svg>
      `;

      petalsContainer.appendChild(petal);
    }
  }
});
