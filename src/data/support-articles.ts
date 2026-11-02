// Support Center navigation. Each article lives at /support-center/<slug>/.
// Add new articles here so they appear on the Support Center index.

export interface SupportLink {
  title: string;
  description: string;
  /** Article slug under /support-center/, or an absolute/root path via `href` */
  slug?: string;
  href?: string;
}

export interface SupportGroup {
  title: string;
  links: SupportLink[];
}

export interface SupportAudience {
  id: 'athletes' | 'coaches' | 'clubs' | 'account';
  label: string;
  intro: string;
  groups: SupportGroup[];
}

const a = {
  gettingStarted: { slug: 'getting-started', title: 'Getting Started with Chiron', description: 'Create your account, connect Strava and find your way around the app' },
  planWorkout: { slug: 'planning-a-workout', title: 'Planning a Workout', description: 'Add a run, session or strength workout to your schedule' },
  repeatWorkout: { slug: 'repeating-a-workout', title: 'Repeating a Workout', description: 'Schedule a workout once, or repeat it on chosen days for several weeks' },
  library: { slug: 'creating-your-workout-library', title: 'Creating Your Workout Library', description: 'Build a reusable library of workouts you can schedule at any time' },
  scheduleFromLibrary: { slug: 'scheduling-from-workout-library', title: 'Scheduling Workouts from the Workout Library', description: "Schedule a library workout to your own or an athlete's calendar" },
  notes: { slug: 'creating-notes', title: 'Creating Notes', description: 'Log how you felt, niggles, travel or anything else alongside your training' },
  race: { slug: 'planning-for-a-race', title: 'Planning for a Race', description: 'Add a race to your schedule, set goals, build a checklist and upload attachments' },
  importResults: { slug: 'how-to-import-race-results-bulk-paste-spreadsheet', title: 'Importing Race Results in Bulk', description: 'Paste your race history from Google Sheets, Excel or Numbers in minutes' },
  pbs: { slug: 'personal-bests', title: 'Personal Bests and Best Performances', description: 'How Chiron works out your PBs, and how to manage your official results' },
  strava: { slug: 'syncing-with-strava', title: 'Syncing Your Training with Strava', description: 'Connect Strava, sync new activities automatically and import your history' },
  complete: { slug: 'completing-a-workout', title: 'Completing a Workout', description: 'How planned workouts are completed by Strava, and how to mark one complete yourself' },
  merge: { slug: 'merging-workouts', title: 'Merging Workouts', description: 'Combine several activities from the same day into a single workout' },
  strength: { slug: 'strength-and-conditioning', title: 'Strength & Conditioning in Chiron', description: 'Create strength and physio workouts and build your Exercise Library' },
  recordStrength: { slug: 'recording-a-strength-workout', title: 'Recording a Strength Workout', description: 'Check off exercises or log every set with reps and load' },
  withCoach: { slug: 'working-with-a-coach', title: 'Working with a Coach', description: 'Accept a coaching invitation, see what your coach can access, or remove a coach' },
  comments: { slug: 'workout-and-note-comments', title: 'Comments on Workouts and Notes', description: 'Talk through a session or a note with your coach or athlete' },
  becomeCoach: { slug: 'becoming-a-coach', title: 'Becoming a Coach in Chiron', description: 'How Coach Preview works and how to get a free access code' },
  invite: { slug: 'inviting-athletes', title: 'Inviting Athletes', description: 'Invite athletes by email and track pending invitations' },
  roster: { slug: 'managing-your-athlete-roster', title: 'Managing Your Athlete Roster', description: 'View your athletes, pause coaching, remove an athlete and keep private notes' },
  planAthlete: { slug: 'planning-athlete-training', title: "Viewing and Planning an Athlete's Training", description: "Switch to an athlete's schedule and plan their workouts and races" },
  password: { slug: 'resetting-your-password', title: 'Resetting Your Password', description: 'Forgotten your password, or want to change it' },
  deleteAccount: { slug: 'deleting-your-account', title: 'Deleting Your Account', description: 'Permanently delete your Chiron account and data' },
  report: { href: '/support-center/contact/', title: 'Report a Problem', description: 'Tell us about a bug, ask a question or share feedback' },
  betaGuide: { slug: 'beta-guide', title: 'TestFlight Beta Guide', description: 'For beta testers using the Chiron Beta app through Apple TestFlight' },
} satisfies Record<string, SupportLink>;

export const supportAudiences: SupportAudience[] = [
  {
    id: 'athletes',
    label: "I'm an athlete",
    intro: 'Plan your training, prepare for races and keep your training data in one place.',
    groups: [
      { title: 'Getting started', links: [a.gettingStarted, a.strava] },
      { title: 'Planning your training', links: [a.planWorkout, a.repeatWorkout, a.library, a.scheduleFromLibrary, a.notes] },
      { title: 'Races and results', links: [a.race, a.importResults, a.pbs] },
      { title: 'Completed training', links: [a.complete, a.merge] },
      { title: 'Strength & conditioning', links: [a.strength, a.recordStrength] },
      { title: 'Working with a coach', links: [a.withCoach, a.comments] },
    ],
  },
  {
    id: 'coaches',
    label: "I'm a coach",
    intro: 'Set up your coach account, build your roster and plan training for your athletes.',
    groups: [
      { title: 'Getting set up', links: [a.becomeCoach, a.invite, a.roster] },
      { title: 'Planning training', links: [a.planAthlete, a.library, a.scheduleFromLibrary] },
      { title: 'Communicating with athletes', links: [a.comments] },
    ],
  },
  {
    id: 'clubs',
    label: 'I organise races',
    intro: 'Start lists, race-day timing and published results for club races.',
    groups: [
      {
        title: 'Setting up',
        links: [
          { slug: 'create-and-manage-a-club', title: 'Create and Manage a Club', description: 'Set up your club, keep its details up to date, and add the people who help you run it' },
          { slug: 'create-and-manage-a-race-series', title: 'Create and Manage a Race Series', description: 'Group events into a series and keep standings across every round' },
          { href: '/race-organisers/', title: 'Race Timing with Chiron', description: 'What Chiron offers clubs and race organisers' },
        ],
      },
      {
        title: 'Running an event',
        links: [
          { slug: 'create-and-manage-a-race-event', title: 'Create and Manage a Race Event', description: 'Create an event, build its start list, set up relay teams, and publish results' },
          { slug: 'import-bulk-entries', title: 'Import Bulk Entries', description: 'Paste a whole start list from a spreadsheet into a race event in one go' },
          { slug: 'race-event-public-registration-form', title: 'Race Event Public Registration Form', description: 'Let entrants register themselves on a page hosted by Chiron, straight onto your start list' },
          { slug: 'app-race-timing', title: 'App Race Timing', description: 'Start the race, record finishes, correct results and publish them from the app' },
        ],
      },
    ],
  },
  {
    id: 'account',
    label: 'Account & app',
    intro: 'Sign-in, account management and getting help.',
    groups: [
      { title: 'Your account', links: [a.password, a.deleteAccount] },
      { title: 'Help', links: [a.report, a.betaGuide] },
    ],
  },
];

export function supportHref(link: SupportLink): string {
  return link.href ?? `/support-center/${link.slug}/`;
}
