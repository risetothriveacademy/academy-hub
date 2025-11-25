// HubSpot Tracking Service
// NO GoHighLevel - HubSpot ONLY

declare global {
  interface Window {
    _hsq?: any[];
  }
}

export const hubspot = {
  // Initialize HubSpot tracking
  init(portalId: string) {
    if (typeof window === 'undefined') return;

    // Load HubSpot tracking code
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = `//js.hs-scripts.com/${portalId}.js`;
    document.head.appendChild(script);
  },

  // Track page view
  trackPageView(pageName: string) {
    if (typeof window === 'undefined' || !window._hsq) return;

    window._hsq = window._hsq || [];
    window._hsq.push(['setPath', window.location.pathname]);
    window._hsq.push(['trackPageView']);

    console.log('[HubSpot] Page view tracked:', pageName);
  },

  // Track course access
  trackCourseAccess(courseName: string, day?: number) {
    if (typeof window === 'undefined' || !window._hsq) return;

    window._hsq = window._hsq || [];
    window._hsq.push([
      'trackEvent',
      {
        id: 'course_access',
        value: {
          course: courseName,
          day: day || 'dashboard',
          timestamp: new Date().toISOString(),
        },
      },
    ]);

    console.log('[HubSpot] Course access tracked:', courseName, day);
  },

  // Track video play
  trackVideoPlay(videoId: string, videoTitle: string, courseDay: number) {
    if (typeof window === 'undefined' || !window._hsq) return;

    window._hsq = window._hsq || [];
    window._hsq.push([
      'trackEvent',
      {
        id: 'video_play',
        value: {
          video_id: videoId,
          video_title: videoTitle,
          course_day: courseDay,
          timestamp: new Date().toISOString(),
        },
      },
    ]);

    console.log('[HubSpot] Video play tracked:', videoTitle);
  },

  // Track assignment completion
  trackAssignmentComplete(day: number) {
    if (typeof window === 'undefined' || !window._hsq) return;

    window._hsq = window._hsq || [];
    window._hsq.push([
      'trackEvent',
      {
        id: 'assignment_complete',
        value: {
          day: day,
          timestamp: new Date().toISOString(),
        },
      },
    ]);

    console.log('[HubSpot] Assignment complete tracked:', day);
  },

  // Track course progress
  trackCourseProgress(completedDays: number[], totalDays: number) {
    if (typeof window === 'undefined' || !window._hsq) return;

    const progressPercent = (completedDays.length / totalDays) * 100;

    window._hsq = window._hsq || [];
    window._hsq.push([
      'trackEvent',
      {
        id: 'course_progress',
        value: {
          completed_days: completedDays.length,
          total_days: totalDays,
          progress_percent: progressPercent,
          timestamp: new Date().toISOString(),
        },
      },
    ]);

    console.log('[HubSpot] Course progress tracked:', progressPercent + '%');
  },

  // Track user registration
  trackRegistration(email: string, name: string) {
    if (typeof window === 'undefined' || !window._hsq) return;

    window._hsq = window._hsq || [];
    window._hsq.push(['identify', { email, name }]);
    window._hsq.push([
      'trackEvent',
      {
        id: 'user_registration',
        value: {
          timestamp: new Date().toISOString(),
        },
      },
    ]);

    console.log('[HubSpot] Registration tracked:', email);
  },

  // Track user login
  trackLogin(email: string) {
    if (typeof window === 'undefined' || !window._hsq) return;

    window._hsq = window._hsq || [];
    window._hsq.push(['identify', { email }]);
    window._hsq.push([
      'trackEvent',
      {
        id: 'user_login',
        value: {
          timestamp: new Date().toISOString(),
        },
      },
    ]);

    console.log('[HubSpot] Login tracked:', email);
  },
};
