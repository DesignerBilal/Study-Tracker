// Study Planner App - Main JavaScript File

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Advanced Study Planner App...');
    
    // DOM Elements - Main UI
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const exportBtn = document.getElementById('export-btn');
    const notificationToggle = document.getElementById('notification-toggle');
    const settingsBtn = document.getElementById('settings-btn');
    const monthTabs = document.querySelectorAll('.month-tab');
    const subjectsGrid = document.getElementById('subjects-grid');
    const weeklyRotation = document.getElementById('weekly-rotation');
    const subjectDetail = document.getElementById('subject-detail');
    const backToSubjects = document.getElementById('back-to-subjects');
    const overallProgressBar = document.getElementById('overall-progress-bar');
    const timeRemainingValue = document.getElementById('time-remaining-value');
    const currentMonthDifficulty = document.getElementById('current-month-difficulty');
    const currentMonthFocus = document.getElementById('current-month-focus');
    const currentSubjectName = document.getElementById('current-subject-name');
    const subjectProgressBar = document.getElementById('subject-progress-bar');
    const chapterList = document.getElementById('chapter-list');
    const subjectNotes = document.getElementById('subject-notes');
    const saveNotesBtn = document.getElementById('save-notes');
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    const notificationClose = document.getElementById('notification-close');
    const progressChart = document.getElementById('progress-chart');
    
    // DOM Elements - New Features
    const checkInBtn = document.getElementById('check-in-btn');
    const currentStreakValue = document.getElementById('current-streak-value');
    const timerToggle = document.getElementById('timer-toggle');
    const rotationToggle = document.getElementById('rotation-toggle');
    const analyticsToggle = document.getElementById('analytics-toggle');
    const goalsToggle = document.getElementById('goals-toggle');
    const analyticsSection = document.getElementById('analytics');
    const goalsSection = document.getElementById('goals');
    const pomodoroContainer = document.getElementById('pomodoro-container');
    const closePomodoro = document.getElementById('close-pomodoro');
    const timer = document.getElementById('timer');
    const timerLabel = document.getElementById('timer-label');
    const startTimer = document.getElementById('start-timer');
    const pauseTimer = document.getElementById('pause-timer');
    const resetTimer = document.getElementById('reset-timer');
    const focusTimeInput = document.getElementById('focus-time');
    const breakTimeInput = document.getElementById('break-time');
    const longBreakTimeInput = document.getElementById('long-break-time');
    const sessionsInput = document.getElementById('sessions');
    const flashcardsList = document.getElementById('flashcards-list');
    const addFlashcardBtn = document.getElementById('add-flashcard-btn');
    const studyFlashcardsBtn = document.getElementById('study-flashcards-btn');
    const flashcardModal = document.getElementById('flashcard-modal');
    const closeFlashcardModal = document.getElementById('close-flashcard-modal');
    const flashcardQuestion = document.getElementById('flashcard-question');
    const flashcardAnswer = document.getElementById('flashcard-answer');
    const saveFlashcard = document.getElementById('save-flashcard');
    const cancelFlashcard = document.getElementById('cancel-flashcard');
    const studyFlashcardsModal = document.getElementById('study-flashcards-modal');
    const closeStudyFlashcardsModal = document.getElementById('close-study-flashcards-modal');
    const flashcardFront = document.getElementById('flashcard-front');
    const flashcardBack = document.getElementById('flashcard-back');
    const flashcardFrontText = document.getElementById('flashcard-front-text');
    const flashcardBackText = document.getElementById('flashcard-back-text');
    const flipFlashcard = document.getElementById('flip-flashcard');
    const prevFlashcard = document.getElementById('prev-flashcard');
    const nextFlashcard = document.getElementById('next-flashcard');
    const flashcardCounter = document.getElementById('flashcard-counter');
    const hardRating = document.getElementById('hard-rating');
    const goodRating = document.getElementById('good-rating');
    const easyRating = document.getElementById('easy-rating');
    const goalsList = document.getElementById('goals-list');
    const addGoalBtn = document.getElementById('add-goal-btn');
    const goalModal = document.getElementById('goal-modal');
    const closeGoalModal = document.getElementById('close-goal-modal');
    const goalTitle = document.getElementById('goal-title');
    const goalDescription = document.getElementById('goal-description');
    const goalDeadline = document.getElementById('goal-deadline');
    const goalPriority = document.getElementById('goal-priority');
    const saveGoal = document.getElementById('save-goal');
    const cancelGoal = document.getElementById('cancel-goal');
    const exportModal = document.getElementById('export-modal');
    const closeExportModal = document.getElementById('close-export-modal');
    const doExport = document.getElementById('do-export');
    const cancelExport = document.getElementById('cancel-export');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsModal = document.getElementById('close-settings-modal');
    const themeSelect = document.getElementById('theme-select');
    const accentColor = document.getElementById('accent-color');
    const enableNotifications = document.getElementById('enable-notifications');
    const reminderTime = document.getElementById('reminder-time');
    const autoBackup = document.getElementById('auto-backup');
    const backupNow = document.getElementById('backup-now');
    const restoreData = document.getElementById('restore-data');
    const resetData = document.getElementById('reset-data');
    const saveSettings = document.getElementById('save-settings');
    const cancelSettings = document.getElementById('cancel-settings');
    const achievementsModal = document.getElementById('achievements-modal');
    const closeAchievementsModal = document.getElementById('close-achievements-modal');
    const achievementsGrid = document.getElementById('achievements-grid');
    const closeAchievements = document.getElementById('close-achievements');
    const achievementPopup = document.getElementById('achievement-popup');
    const achievementTitle = document.getElementById('achievement-title');
    const achievementDescription = document.getElementById('achievement-description');
    
    // App State
    let currentLanguage = 'en';
    let currentMonth = 1;
    let currentSubject = null;
    let notificationsEnabled = false;
    let currentFlashcardIndex = 0;
    let flashcardsToStudy = [];
    let timerInterval = null;
    let timerRunning = false;
    let timerMode = 'focus';
    let timerSeconds = 25 * 60;
    let currentSession = 1;
    let editingGoalId = null;
    let studyData = {
        subjects: {},
        notes: {},
        flashcards: {},
        goals: [],
        streak: {
            current: 0,
            lastCheckIn: null
        },
        studyTime: 0,
        achievements: {},
        settings: {
            theme: 'light',
            accentColor: '#ff9a3c',
            notifications: false,
            reminderTime: '18:00',
            autoBackup: false
        },
        lastUpdated: new Date().toISOString()
    };

    // Translations
    const translations = {
        en: {
            appTitle: '6-Month Study Planner',
            dashboard: 'Dashboard',
            overallProgress: 'Overall Progress',
            timeRemaining: 'Time Remaining',
            currentStreak: 'Current Streak',
            checkInToday: 'Check-in Today',
            studyTimeline: 'Study Timeline',
            subjectProgress: 'Subject Progress',
            weeklyRotation: 'Weekly Rotation Schedule',
            day: 'Day',
            subjects: 'Subjects',
            back: 'Back',
            subjectDetails: 'Subject Details',
            chapters: 'Chapters',
            notes: 'Notes',
            flashcards: 'Flashcards',
            saveNotes: 'Save Notes',
            addNotes: 'Add your notes here...',
            days: 'days',
            completed: 'Completed',
            notSaved: 'Changes not saved',
            notesSaved: 'Notes saved successfully',
            exportSuccess: 'Data exported successfully',
            notificationsEnabled: 'Notifications enabled',
            notificationsDisabled: 'Notifications disabled',
            addFlashcard: 'Add Flashcard',
            studyFlashcards: 'Study Flashcards',
            question: 'Question',
            answer: 'Answer',
            save: 'Save',
            cancel: 'Cancel',
            flipCard: 'Flip Card',
            hard: 'Hard',
            good: 'Good',
            easy: 'Easy',
            addGoal: 'Add Goal',
            goalTitle: 'Goal Title',
            description: 'Description',
            deadline: 'Deadline',
            priority: 'Priority',
            low: 'Low',
            medium: 'Medium',
            high: 'High',
            studyAnalytics: 'Study Analytics',
            totalStudyTime: 'Total Study Time',
            completionRate: 'Completion Rate',
            bestSubject: 'Best Subject',
            focusSubject: 'Focus Subject',
            hours: 'hours',
            pomodoroTimer: 'Pomodoro Timer',
            focusTime: 'Focus Time',
            breakTime: 'Break Time',
            longBreak: 'Long Break',
            sessions: 'Sessions before long break',
            achievementUnlocked: 'Achievement Unlocked!',
            settings: 'Settings',
            appearance: 'Appearance',
            theme: 'Theme',
            accentColor: 'Accent Color',
            notifications: 'Notifications',
            enableNotifications: 'Enable Notifications',
            dailyReminder: 'Daily Reminder Time',
            dataManagement: 'Data Management',
            autoBackup: 'Auto Backup',
            backupNow: 'Backup Now',
            restoreData: 'Restore Data',
            resetData: 'Reset All Data',
            confirmReset: 'Are you sure you want to reset all data? This cannot be undone.',
            dataReset: 'All data has been reset',
            settingsSaved: 'Settings saved successfully',
            streakUpdated: 'Streak updated! Current streak: ',
            flashcardAdded: 'Flashcard added successfully',
            goalAdded: 'Goal added successfully',
            goalCompleted: 'Goal completed!'
        },
        ur: {
            appTitle: '6 ماہ کا مطالعہ منصوبہ',
            dashboard: 'ڈیش بورڈ',
            overallProgress: 'مجموعی پیشرفت',
            timeRemaining: 'باقی وقت',
            currentStreak: 'موجودہ سلسلہ',
            checkInToday: 'آج چیک ان کریں',
            studyTimeline: 'مطالعہ ٹائم لائن',
            subjectProgress: 'مضامین کی پیشرفت',
            weeklyRotation: 'ہفتہ وار روٹیشن شیڈول',
            day: 'دن',
            subjects: 'مضامین',
            back: 'واپس',
            subjectDetails: 'مضمون کی تفصیلات',
            chapters: 'ابواب',
            notes: 'نوٹس',
            flashcards: 'فلیش کارڈز',
            saveNotes: 'نوٹس محفوظ کریں',
            addNotes: 'اپنے نوٹس یہاں شامل کریں...',
            days: 'دن',
            completed: 'مکمل',
            notSaved: 'تبدیلیاں محفوظ نہیں ہوئیں',
            notesSaved: 'نوٹس کامیابی سے محفوظ ہو گئے',
            exportSuccess: 'ڈیٹا کامیابی سے برآمد ہو گیا',
            notificationsEnabled: 'نوٹیفکیشنز فعال',
            notificationsDisabled: 'نوٹیفکیشنز غیر فعال',
            addFlashcard: 'فلیش کارڈ شامل کریں',
            studyFlashcards: 'فلیش کارڈز کا مطالعہ کریں',
            question: 'سوال',
            answer: 'جواب',
            save: 'محفوظ کریں',
            cancel: 'منسوخ کریں',
            flipCard: 'کارڈ پلٹیں',
            hard: 'مشکل',
            good: 'اچھا',
            easy: 'آسان',
            addGoal: 'مقصد شامل کریں',
            goalTitle: 'مقصد کا عنوان',
            description: 'تفصیل',
            deadline: 'آخری تاریخ',
            priority: 'ترجیح',
            low: 'کم',
            medium: 'درمیانہ',
            high: 'زیادہ',
            studyAnalytics: 'مطالعہ تجزیات',
            totalStudyTime: 'کل مطالعہ وقت',
            completionRate: 'تکمیل کی شرح',
            bestSubject: 'بہترین مضمون',
            focusSubject: 'فوکس مضمون',
            hours: 'گھنٹے',
            pomodoroTimer: 'پومودورو ٹائمر',
            focusTime: 'فوکس ٹائم',
            breakTime: 'وقفہ کا وقت',
            longBreak: 'طویل وقفہ',
            sessions: 'طویل وقفے سے پہلے سیشنز',
            achievementUnlocked: 'کامیابی حاصل کی!',
            settings: 'ترتیبات',
            appearance: 'ظاہری شکل',
            theme: 'تھیم',
            accentColor: 'نمایاں رنگ',
            notifications: 'نوٹیفکیشنز',
            enableNotifications: 'نوٹیفکیشنز فعال کریں',
            dailyReminder: 'روزانہ یاد دہانی کا وقت',
            dataManagement: 'ڈیٹا مینجمنٹ',
            autoBackup: 'آٹو بیک اپ',
            backupNow: 'ابھی بیک اپ لیں',
            restoreData: 'ڈیٹا بحال کریں',
            resetData: 'تمام ڈیٹا ری سیٹ کریں',
            confirmReset: 'کیا آپ واقعی تمام ڈیٹا ری سیٹ کرنا چاہتے ہیں؟ یہ واپس نہیں کیا جا سکتا۔',
            dataReset: 'تمام ڈیٹا ری سیٹ کر دیا گیا ہے',
            settingsSaved: 'ترتیبات کامیابی سے محفوظ ہو گئیں',
            streakUpdated: 'سلسلہ اپ ڈیٹ ہو گیا! موجودہ سلسلہ: ',
            flashcardAdded: 'فلیش کارڈ کامیابی سے شامل کر دیا گیا',
            goalAdded: 'مقصد کامیابی سے شامل کر دیا گیا',
            goalCompleted: 'مقصد مکمل ہو گیا!'
        }
    };

    // Study Plan Data
    const studyPlan = {
        1: {
            difficulty: 'easy',
            focus: 'Focus on Basics + Light Topics',
            subjects: {
                'Mathematics': ['Ch 1: Quadratic Eq.', 'Ch 2: Theory of Quadratic Eq.'],
                'Physics': ['Ch 1: Simple Harmonic Motion'],
                'Chemistry': ['Ch 1: Chemical Equilibrium'],
                'English': ['Ch 1', 'Ch 2'],
                'Urdu': ['Ch 1', 'Ch 2'],
                'Computer': ['Ch 1: Intro to Programming'],
                'Pak Studies': ['Ch 1: History of Pakistan'],
                'Tarjuma': ['Para 1', 'Para 2']
            }
        },
        2: {
            difficulty: 'medium',
            focus: 'Focus Increases | Start Conceptual Topics',
            subjects: {
                'Mathematics': ['Ch 3: Variations', 'Ch 4: Partial Fractions'],
                'Physics': ['Ch 2: Sound'],
                'Chemistry': ['Ch 2: Acids, Bases & Salts'],
                'English': ['Ch 3', 'Ch 4'],
                'Urdu': ['Ch 3', 'Ch 4', 'Ch 5'],
                'Computer': ['Ch 2: User Interaction'],
                'Pak Studies': ['Ch 2: Pakistan and World Affairs'],
                'Tarjuma': ['Para 3', 'Para 4', 'Para 5']
            }
        },
        3: {
            difficulty: 'medium',
            focus: 'Mid-Syllabus Progress',
            subjects: {
                'Mathematics': ['Ch 5: Sets & Functions', 'Ch 6: Basic Statistics'],
                'Physics': ['Ch 3: Geometrical Optics'],
                'Chemistry': ['Ch 3: Organic Chemistry'],
                'English': ['Ch 5', 'Ch 6'],
                'Urdu': ['Ch 6', 'Ch 7', 'Ch 8'],
                'Computer': ['Ch 3: Conditional Logic'],
                'Pak Studies': ['Ch 3: Economic Development'],
                'Tarjuma': ['Para 6', 'Para 7', 'Para 8']
            }
        },
        4: {
            difficulty: 'hard',
            focus: 'Stronger Focus | Deeper Topics',
            subjects: {
                'Mathematics': ['Ch 7: Trigonometry', 'Ch 8: Projections'],
                'Physics': ['Ch 4: Electrostatics', 'Ch 5: Current Electricity'],
                'Chemistry': ['Ch 4: Hydrocarbons'],
                'English': ['Ch 7', 'Ch 8'],
                'Urdu': ['Ch 9', 'Ch 10', 'Ch 11'],
                'Computer': ['Ch 4: Data & Repetition'],
                'Pak Studies': ['Ch 4: Population & Culture'],
                'Tarjuma': ['Para 9', 'Para 10', 'Para 11', 'Para 12']
            }
        },
        5: {
            difficulty: 'hard',
            focus: 'Full Load | Final Chapters',
            subjects: {
                'Mathematics': ['Ch 9: Circles', 'Ch 10: Geometry', 'Ch 11: Advanced Geometry'],
                'Physics': ['Ch 6: Electromagnetism', 'Ch 7: Basic Electronics'],
                'Chemistry': ['Ch 5: Biochemistry', 'Ch 6: Atmosphere'],
                'English': ['Ch 9', 'Ch 10'],
                'Urdu': ['Ch 12', 'Ch 13', 'Ch 14'],
                'Computer': ['Ch 5: Functions'],
                'Pak Studies': ['Ch 5: Culture & Society'],
                'Tarjuma': ['Para 13', 'Para 14', 'Para 15']
            }
        },
        6: {
            difficulty: 'revision',
            focus: 'Full Revision + Mock Tests',
            subjects: {
                'Mathematics': ['Ch 12: Final Review', 'Ch 13: Past Papers', 'Formula Review'],
                'Physics': ['Ch 8: Comprehensive Review', 'Ch 9: Numericals Practice', 'Formula Review'],
                'Chemistry': ['Ch 7: Reactions Review', 'Ch 8: Comprehensive Review'],
                'English': ['Ch 11', 'Ch 12', 'Ch 13', 'Grammar Practice'],
                'Urdu': ['Quick Review Ch 15-26'],
                'Computer': ['Programming Logic Practice', 'Final Review'],
                'Pak Studies': ['Full Revision', 'Notes Review'],
                'Tarjuma': ['Para 16', 'Para 17', 'Para 18', 'Tafseer Practice']
            }
        }
    };

    // Subject Icons
    const subjectIcons = {
        'Mathematics': 'fa-square-root-variable',
        'Physics': 'fa-atom',
        'Chemistry': 'fa-flask',
        'English': 'fa-book',
        'Urdu': 'fa-pen-nib',
        'Computer': 'fa-laptop-code',
        'Pak Studies': 'fa-landmark',
        'Tarjuma': 'fa-book-quran'
    };

    // Achievements Data
    const achievementsData = [
        {
            id: 'first_login',
            name: 'First Steps',
            description: 'Log in to the Study Planner for the first time',
            icon: 'fa-shoe-prints'
        },
        {
            id: 'streak_7',
            name: 'Weekly Warrior',
            description: 'Maintain a 7-day study streak',
            icon: 'fa-fire'
        },
        {
            id: 'streak_30',
            name: 'Monthly Master',
            description: 'Maintain a 30-day study streak',
            icon: 'fa-fire-flame-curved'
        },
        {
            id: 'complete_subject',
            name: 'Subject Specialist',
            description: 'Complete all chapters in a subject',
            icon: 'fa-graduation-cap'
        },
        {
            id: 'complete_month',
            name: 'Monthly Milestone',
            description: 'Complete all chapters for a month',
            icon: 'fa-calendar-check'
        },
        {
            id: 'create_10_flashcards',
            name: 'Flashcard Fanatic',
            description: 'Create 10 flashcards',
            icon: 'fa-layer-group'
        },
        {
            id: 'study_time_10',
            name: 'Dedicated Learner',
            description: 'Accumulate 10 hours of study time',
            icon: 'fa-clock'
        },
        {
            id: 'complete_5_goals',
            name: 'Goal Getter',
            description: 'Complete 5 study goals',
            icon: 'fa-bullseye'
        },
        {
            id: 'half_syllabus',
            name: 'Halfway Hero',
            description: 'Complete 50% of the entire syllabus',
            icon: 'fa-medal'
        },
        {
            id: 'complete_syllabus',
            name: 'Syllabus Conqueror',
            description: 'Complete the entire 6-month syllabus',
            icon: 'fa-trophy'
        }
    ];

    // Load data from localStorage
    function loadData() {
        const savedData = localStorage.getItem('studyPlannerData');
        if (savedData) {
            try {
                studyData = JSON.parse(savedData);
                
                // Ensure all required properties exist
                if (!studyData.flashcards) studyData.flashcards = {};
                if (!studyData.goals) studyData.goals = [];
                if (!studyData.streak) studyData.streak = { current: 0, lastCheckIn: null };
                if (!studyData.studyTime) studyData.studyTime = 0;
                if (!studyData.achievements) studyData.achievements = {};
                if (!studyData.settings) {
                    studyData.settings = {
                        theme: 'light',
                        accentColor: '#ff9a3c',
                        notifications: false,
                        reminderTime: '18:00',
                        autoBackup: false
                    };
                }
            } catch (e) {
                console.error('Error loading data:', e);
                showNotification('Error loading saved data. Starting fresh.');
                initializeData();
            }
        } else {
            initializeData();
        }
    }

    // Initialize data structure
    function initializeData() {
        studyData = {
            subjects: {},
            notes: {},
            flashcards: {},
            goals: [],
            streak: {
                current: 0,
                lastCheckIn: null
            },
            studyTime: 0,
            achievements: {},
            settings: {
                theme: 'light',
                accentColor: '#ff9a3c',
                notifications: false,
                reminderTime: '18:00',
                autoBackup: false
            },
            lastUpdated: new Date().toISOString()
        };
        
        // Initialize subjects and chapters
        for (let month = 1; month <= 6; month++) {
            const monthData = studyPlan[month];
            Object.keys(monthData.subjects).forEach(subject => {
                if (!studyData.subjects[subject]) {
                    studyData.subjects[subject] = {
                        chapters: {},
                        progress: 0
                    };
                }
                
                monthData.subjects[subject].forEach(chapter => {
                    if (!studyData.subjects[subject].chapters[chapter]) {
                        studyData.subjects[subject].chapters[chapter] = {
                            completed: false,
                            month: month
                        };
                    }
                });
            });
        }
        
        // Unlock first achievement
        unlockAchievement('first_login');
        
        saveData();
    }

    // Save data to localStorage
    function saveData() {
        studyData.lastUpdated = new Date().toISOString();
        localStorage.setItem('studyPlannerData', JSON.stringify(studyData));
        
        // Auto backup if enabled
        if (studyData.settings.autoBackup) {
            const backupData = JSON.stringify(studyData);
            localStorage.setItem('studyPlannerBackup_' + new Date().toISOString(), backupData);
        }
    }

    // Update UI elements
    function updateUI() {
        updateLanguage();
        updateOverallProgress();
        renderSubjects();
        updateStreak();
        updateSettings();
        applyTheme();
    }

    // Update language text
    function updateLanguage() {
        const lang = translations[currentLanguage];
        
        // Update header elements
        document.getElementById('app-title').textContent = lang.appTitle;
        document.getElementById('current-lang').textContent = currentLanguage.toUpperCase();
        
        // Update dashboard elements
        document.getElementById('dashboard-title').textContent = lang.dashboard;
        document.getElementById('overall-progress-title').textContent = lang.overallProgress;
        document.getElementById('time-remaining-title').textContent = lang.timeRemaining;
        document.getElementById('current-streak-title').textContent = lang.currentStreak;
        document.getElementById('check-in-text').textContent = lang.checkInToday;
        
        // Update month selector
        document.getElementById('month-selector-title').textContent = lang.studyTimeline;
        
        // Update subject progress
        document.getElementById('subject-progress-title').textContent = lang.subjectProgress;
        
        // Update weekly rotation
        document.getElementById('weekly-rotation-title').textContent = lang.weeklyRotation;
        document.getElementById('day-header').textContent = lang.day;
        document.getElementById('subjects-header').textContent = lang.subjects;
        
        // Update subject detail
        document.getElementById('back-text').textContent = lang.back;
        document.getElementById('subject-detail-title').textContent = lang.subjectDetails;
        
        // Update tabs
        document.querySelectorAll('.tab')[0].textContent = lang.chapters;
        document.querySelectorAll('.tab')[1].textContent = lang.notes;
        document.querySelectorAll('.tab')[2].textContent = lang.flashcards;
        
        // Update notes
        document.getElementById('subject-notes').placeholder = lang.addNotes;
        document.getElementById('save-notes').textContent = lang.saveNotes;
        
        // Update flashcards
        document.getElementById('add-flashcard-text').textContent = lang.addFlashcard;
        document.getElementById('study-flashcards-text').textContent = lang.studyFlashcards;
        document.getElementById('flashcard-modal-title').textContent = lang.addFlashcard;
        document.getElementById('flashcard-question-label').textContent = lang.question;
        document.getElementById('flashcard-answer-label').textContent = lang.answer;
        document.getElementById('save-flashcard').textContent = lang.save;
        document.getElementById('cancel-flashcard').textContent = lang.cancel;
        document.getElementById('study-flashcards-modal-title').textContent = lang.studyFlashcards;
        document.getElementById('flip-text').textContent = lang.flipCard;
        document.getElementById('hard-text').textContent = lang.hard;
        document.getElementById('good-text').textContent = lang.good;
        document.getElementById('easy-text').textContent = lang.easy;
        
        // Update goals
        document.getElementById('goals-title').textContent = lang.studyGoals;
        document.getElementById('add-goal-text').textContent = lang.addGoal;
        document.getElementById('goal-modal-title').textContent = lang.addGoal;
        document.getElementById('goal-title-label').textContent = lang.goalTitle;
        document.getElementById('goal-description-label').textContent = lang.description;
        document.getElementById('goal-deadline-label').textContent = lang.deadline;
        document.getElementById('goal-priority-label').textContent = lang.priority;
        document.getElementById('save-goal').textContent = lang.save;
        document.getElementById('cancel-goal').textContent = lang.cancel;
        
        // Update analytics
        document.getElementById('analytics-title').textContent = lang.studyAnalytics;
        document.getElementById('study-time-title').textContent = lang.totalStudyTime;
        document.getElementById('completion-rate-title').textContent = lang.completionRate;
        document.getElementById('best-subject-title').textContent = lang.bestSubject;
        document.getElementById('focus-subject-title').textContent = lang.focusSubject;
        
        // Update pomodoro
        document.getElementById('pomodoro-title').textContent = lang.pomodoroTimer;
        document.getElementById('focus-time-label').textContent = lang.focusTime;
        document.getElementById('break-time-label').textContent = lang.breakTime;
        document.getElementById('long-break-time-label').textContent = lang.longBreak;
        document.getElementById('sessions-label').textContent = lang.sessions;
        
        // Update settings
        document.getElementById('settings-modal-title').textContent = lang.settings;
        document.getElementById('appearance-title').textContent = lang.appearance;
        document.getElementById('theme-label').textContent = lang.theme;
        document.getElementById('accent-color-label').textContent = lang.accentColor;
        document.getElementById('notifications-title').textContent = lang.notifications;
        document.getElementById('enable-notifications-label').textContent = lang.enableNotifications;
        document.getElementById('reminder-time-label').textContent = lang.dailyReminder;
        document.getElementById('data-title').textContent = lang.dataManagement;
        document.getElementById('auto-backup-label').textContent = lang.autoBackup;
        document.getElementById('backup-now-text').textContent = lang.backupNow;
        document.getElementById('restore-data-text').textContent = lang.restoreData;
        document.getElementById('reset-data-text').textContent = lang.resetData;
        document.getElementById('save-settings').textContent = lang.save;
        document.getElementById('cancel-settings').textContent = lang.cancel;
        
        // Update achievements
        document.getElementById('achievements-modal-title').textContent = lang.achievements;
        document.getElementById('close-achievements').textContent = lang.close;
        document.getElementById('achievement-title').textContent = lang.achievementUnlocked;
    }

    // Calculate and update overall progress
    function updateOverallProgress() {
        let totalChapters = 0;
        let completedChapters = 0;
        
        Object.keys(studyData.subjects).forEach(subject => {
            const subjectData = studyData.subjects[subject];
            const chapters = subjectData.chapters;
            
            Object.keys(chapters).forEach(chapter => {
                totalChapters++;
                if (chapters[chapter].completed) {
                    completedChapters++;
                }
            });
        });
        
        const progress = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
        overallProgressBar.style.width = `${progress}%`;
        overallProgressBar.textContent = `${progress}%`;
        
        // Check for achievements
        if (progress >= 50) {
            unlockAchievement('half_syllabus');
        }
        if (progress >= 100) {
            unlockAchievement('complete_syllabus');
        }
        
        // Calculate time remaining (assuming 180 days total for 6 months)
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 1); // Assume started 1 month ago
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 6);  // 6 months from start
        const today = new Date();
        
        const totalDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
        const daysElapsed = Math.round((today - startDate) / (1000 * 60 * 60 * 24));
        const daysRemaining = Math.max(0, totalDays - daysElapsed);
        
        timeRemainingValue.textContent = `${daysRemaining} ${translations[currentLanguage].days}`;
        
        // Update analytics
        updateAnalytics();
        
        // Update chart if it exists
        if (window.myChart) {
            updateChart();
        }
    }

    // Update streak information
    function updateStreak() {
        currentStreakValue.textContent = `${studyData.streak.current} ${translations[currentLanguage].days}`;
        
        // Check if check-in is available today
        const today = new Date().toDateString();
        const lastCheckIn = studyData.streak.lastCheckIn ? new Date(studyData.streak.lastCheckIn).toDateString() : null;
        
        if (today === lastCheckIn) {
            checkInBtn.disabled = true;
            checkInBtn.style.opacity = '0.5';
        } else {
            checkInBtn.disabled = false;
            checkInBtn.style.opacity = '1';
        }
    }

    // Update settings UI
    function updateSettings() {
        themeSelect.value = studyData.settings.theme;
        accentColor.value = studyData.settings.accentColor;
        enableNotifications.checked = studyData.settings.notifications;
        reminderTime.value = studyData.settings.reminderTime;
        autoBackup.checked = studyData.settings.autoBackup;
    }

    // Apply theme settings
    function applyTheme() {
        // Apply theme
        if (studyData.settings.theme === 'dark' || 
            (studyData.settings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        // Apply accent color
        document.documentElement.style.setProperty('--accent-color', studyData.settings.accentColor);
    }

    // Render subjects grid
    function renderSubjects() {
        subjectsGrid.innerHTML = '';
        
        const monthData = studyPlan[currentMonth];
        const subjects = Object.keys(monthData.subjects);
        
        subjects.forEach(subject => {
            const subjectData = studyData.subjects[subject] || { progress: 0 };
            const chapters = monthData.subjects[subject];
            let completedCount = 0;
            
            chapters.forEach(chapter => {
                if (subjectData.chapters && subjectData.chapters[chapter] && subjectData.chapters[chapter].completed) {
                    completedCount++;
                }
            });
            
            const progress = chapters.length > 0 ? Math.round((completedCount / chapters.length) * 100) : 0;
            
            const subjectCard = document.createElement('div');
            subjectCard.className = 'subject-card';
            subjectCard.dataset.subject = subject;
            
            subjectCard.innerHTML = `
                <div class="subject-icon">
                    <i class="fas ${subjectIcons[subject]}"></i>
                </div>
                <div class="subject-name">${subject}</div>
                <div class="subject-progress">${progress}%</div>
            `;
            
            subjectsGrid.appendChild(subjectCard);
        });
    }

    // Set current month and update UI
    function setCurrentMonth(month) {
        currentMonth = month;
        
        // Update active tab
        monthTabs.forEach(tab => {
            if (parseInt(tab.dataset.month) === month) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // Update difficulty indicator
        const monthData = studyPlan[month];
        let difficultyClass = 'easy';
        let difficultyEmoji = '🟢';
        
        if (monthData.difficulty === 'medium') {
            difficultyClass = 'medium';
            difficultyEmoji = '🟡';
        } else if (monthData.difficulty === 'hard') {
            difficultyClass = 'hard';
            difficultyEmoji = '🔴';
        } else if (monthData.difficulty === 'revision') {
            difficultyClass = 'medium';
            difficultyEmoji = '🔁';
        }
        
        currentMonthDifficulty.className = `difficulty ${difficultyClass}`;
        currentMonthDifficulty.textContent = `${difficultyEmoji} ${monthData.difficulty.charAt(0).toUpperCase() + monthData.difficulty.slice(1)}`;
        currentMonthFocus.textContent = monthData.focus;
        
        // Render subjects for this month
        renderSubjects();
    }

    // Show subject detail
    function showSubjectDetail(subject) {
        currentSubject = subject;
        const subjectData = studyData.subjects[subject];
        
        // Hide subjects grid and show detail view
        document.getElementById('subject-progress').classList.add('hidden');
        subjectDetail.classList.remove('hidden');
        
        // Update subject name and progress
        currentSubjectName.textContent = subject;
        
        // Calculate subject progress
        const chapters = Object.keys(subjectData.chapters);
        let completedCount = 0;
        
        chapters.forEach(chapter => {
            if (subjectData.chapters[chapter].completed) {
                completedCount++;
            }
        });
        
        const progress = chapters.length > 0 ? Math.round((completedCount / chapters.length) * 100) : 0;
        subjectProgressBar.style.width = `${progress}%`;
        subjectProgressBar.textContent = `${progress}%`;
        
        // Check for achievement
        if (progress === 100) {
            unlockAchievement('complete_subject');
        }
        
        // Render chapters for current month
        renderChapters();
        
        // Load notes
        subjectNotes.value = studyData.notes[subject] || '';
        
        // Render flashcards
        renderFlashcards();
    }

    // Render chapters for current subject
    function renderChapters() {
        chapterList.innerHTML = '';
        
        const subjectData = studyData.subjects[currentSubject];
        const monthChapters = studyPlan[currentMonth].subjects[currentSubject] || [];
        
        monthChapters.forEach(chapter => {
            const chapterData = subjectData.chapters[chapter] || { completed: false };
            
            const chapterItem = document.createElement('div');
            chapterItem.className = `chapter-item ${chapterData.completed ? 'completed' : ''}`;
            
            chapterItem.innerHTML = `
                <input type="checkbox" class="chapter-checkbox" data-chapter="${chapter}" ${chapterData.completed ? 'checked' : ''}>
                <span class="chapter-name">${chapter}</span>
            `;
            
            chapterList.appendChild(chapterItem);
        });
    }

    // Render flashcards for current subject
    function renderFlashcards() {
        flashcardsList.innerHTML = '';
        
        const subjectFlashcards = studyData.flashcards[currentSubject] || [];
        
        if (subjectFlashcards.length === 0) {
            flashcardsList.innerHTML = `<p class="empty-state">No flashcards yet. Add your first flashcard!</p>`;
            return;
        }
        
        subjectFlashcards.forEach((flashcard, index) => {
            const flashcardItem = document.createElement('div');
            flashcardItem.className = 'flashcard-item';
            flashcardItem.dataset.index = index;
            
            flashcardItem.innerHTML = `
                <div class="flashcard-question">${flashcard.question}</div>
                <div class="flashcard-answer">${flashcard.answer}</div>
            `;
            
            flashcardsList.appendChild(flashcardItem);
        });
    }

    // Initialize chart
    function initializeChart() {
        if (!progressChart || !progressChart.getContext) {
            console.error('Canvas element not found or context not available');
            return;
        }
        
        try {
            const ctx = progressChart.getContext('2d');
            window.myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(studyPlan[1].subjects),
                    datasets: [{
                        label: 'Progress (%)',
                        data: [],
                        backgroundColor: 'rgba(74, 111, 165, 0.7)',
                        borderColor: 'rgba(74, 111, 165, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
            
            updateChart();
        } catch (e) {
            console.error('Error initializing chart:', e);
        }
    }

    // Initialize analytics chart
    function initializeAnalyticsChart() {
        if (!document.getElementById('analytics-chart') || !document.getElementById('analytics-chart').getContext) {
            console.error('Analytics chart canvas element not found or context not available');
            return;
        }
        
        try {
            const ctx = document.getElementById('analytics-chart').getContext('2d');
            window.analyticsChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
                    datasets: [{
                        label: 'Monthly Progress',
                        data: [],
                        backgroundColor: 'rgba(255, 154, 60, 0.2)',
                        borderColor: 'rgba(255, 154, 60, 1)',
                        borderWidth: 2,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
            
            updateAnalyticsChart();
        } catch (e) {
            console.error('Error initializing analytics chart:', e);
        }
    }

    // Update chart data
    function updateChart() {
        if (!window.myChart) {
            return;
        }
        
        try {
            const subjects = Object.keys(studyPlan[1].subjects);
            const progressData = [];
            
            subjects.forEach(subject => {
                const subjectData = studyData.subjects[subject];
                const chapters = Object.keys(subjectData.chapters);
                let completedCount = 0;
                
                chapters.forEach(chapter => {
                    if (subjectData.chapters[chapter].completed) {
                        completedCount++;
                    }
                });
                
                const progress = chapters.length > 0 ? Math.round((completedCount / chapters.length) * 100) : 0;
                progressData.push(progress);
            });
            
            window.myChart.data.datasets[0].data = progressData;
            window.myChart.update();
        } catch (e) {
            console.error('Error updating chart:', e);
        }
    }

    // Update analytics chart
    function updateAnalyticsChart() {
        if (!window.analyticsChart) {
            return;
        }
        
        try {
            const monthlyProgress = [];
            
            for (let month = 1; month <= 6; month++) {
                const monthData = studyPlan[month];
                let totalChapters = 0;
                let completedChapters = 0;
                
                Object.keys(monthData.subjects).forEach(subject => {
                    const chapters = monthData.subjects[subject];
                    chapters.forEach(chapter => {
                        totalChapters++;
                        if (studyData.subjects[subject] && 
                            studyData.subjects[subject].chapters[chapter] && 
                            studyData.subjects[subject].chapters[chapter].completed) {
                            completedChapters++;
                        }
                    });
                });
                
                const progress = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
                monthlyProgress.push(progress);
            }
            
            window.analyticsChart.data.datasets[0].data = monthlyProgress;
            window.analyticsChart.update();
        } catch (e) {
            console.error('Error updating analytics chart:', e);
        }
    }

    // Update analytics data
    function updateAnalytics() {
        // Calculate total study time
        document.getElementById('study-time-value').textContent = `${studyData.studyTime} ${translations[currentLanguage].hours}`;
        
        // Calculate completion rate
        let totalChapters = 0;
        let completedChapters = 0;
        
        Object.keys(studyData.subjects).forEach(subject => {
            const chapters = Object.keys(studyData.subjects[subject].chapters);
            totalChapters += chapters.length;
            
            chapters.forEach(chapter => {
                if (studyData.subjects[subject].chapters[chapter].completed) {
                    completedChapters++;
                }
            });
        });
        
        const completionRate = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
        document.getElementById('completion-rate-value').textContent = `${completionRate}%`;
        
        // Find best subject
        let bestSubject = '-';
        let bestProgress = 0;
        
        Object.keys(studyData.subjects).forEach(subject => {
            const chapters = Object.keys(studyData.subjects[subject].chapters);
            let subjectCompleted = 0;
            
            chapters.forEach(chapter => {
                if (studyData.subjects[subject].chapters[chapter].completed) {
                    subjectCompleted++;
                }
            });
            
            const progress = chapters.length > 0 ? Math.round((subjectCompleted / chapters.length) * 100) : 0;
            
            if (progress > bestProgress) {
                bestProgress = progress;
                bestSubject = subject;
            }
        });
        
        document.getElementById('best-subject-value').textContent = bestSubject;
        
        // Find focus subject (least progress)
        let focusSubject = '-';
        let lowestProgress = 100;
        
        Object.keys(studyData.subjects).forEach(subject => {
            const chapters = Object.keys(studyData.subjects[subject].chapters);
            let subjectCompleted = 0;
            
            chapters.forEach(chapter => {
                if (studyData.subjects[subject].chapters[chapter].completed) {
                    subjectCompleted++;
                }
            });
            
            const progress = chapters.length > 0 ? Math.round((subjectCompleted / chapters.length) * 100) : 0;
            
            if (progress < lowestProgress && progress < 100) {
                lowestProgress = progress;
                focusSubject = subject;
            }
        });
        
        document.getElementById('focus-subject-value').textContent = focusSubject;
        
        // Update analytics chart
        if (window.analyticsChart) {
            updateAnalyticsChart();
        }
    }

    // Render goals
    function renderGoals() {
        goalsList.innerHTML = '';
        
        if (studyData.goals.length === 0) {
            goalsList.innerHTML = `<p class="empty-state">No goals yet. Add your first goal!</p>`;
            return;
        }
        
        // Sort goals by deadline
        const sortedGoals = [...studyData.goals].sort((a, b) => {
            if (a.completed && !b.completed) return 1;
            if (!a.completed && b.completed) return -1;
            return new Date(a.deadline) - new Date(b.deadline);
        });
        
        sortedGoals.forEach((goal, index) => {
            const goalItem = document.createElement('div');
            goalItem.className = `goal-item ${goal.priority}`;
            if (goal.completed) {
                goalItem.classList.add('completed');
            }
            
            const deadlineDate = new Date(goal.deadline);
            const formattedDeadline = deadlineDate.toLocaleDateString();
            
            goalItem.innerHTML = `
                <div class="goal-header">
                    <div class="goal-title">${goal.title}</div>
                    <div class="goal-priority ${goal.priority}">${translations[currentLanguage][goal.priority]}</div>
                </div>
                <div class="goal-description">${goal.description}</div>
                <div class="goal-deadline">${formattedDeadline}</div>
                <div class="goal-controls">
                    ${!goal.completed ? `
                        <button class="secondary-button complete-goal-btn" data-index="${index}">
                            <i class="fas fa-check"></i>
                        </button>
                    ` : ''}
                    <button class="secondary-button edit-goal-btn" data-index="${index}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="danger-button delete-goal-btn" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            
            goalsList.appendChild(goalItem);
        });
        
        // Add event listeners
        document.querySelectorAll('.complete-goal-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                completeGoal(index);
            });
        });
        
        document.querySelectorAll('.edit-goal-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                editGoal(index);
            });
        });
        
        document.querySelectorAll('.delete-goal-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                deleteGoal(index);
            });
        });
    }

    // Complete a goal
    function completeGoal(index) {
        studyData.goals[index].completed = true;
        saveData();
        renderGoals();
        showNotification(translations[currentLanguage].goalCompleted);
        
        // Check for achievement
        const completedGoals = studyData.goals.filter(goal => goal.completed).length;
        if (completedGoals >= 5) {
            unlockAchievement('complete_5_goals');
        }
    }

    // Edit a goal
    function editGoal(index) {
        const goal = studyData.goals[index];
        editingGoalId = index;
        
        goalTitle.value = goal.title;
        goalDescription.value = goal.description;
        goalDeadline.value = goal.deadline;
        goalPriority.value = goal.priority;
        
        goalModal.classList.remove('hidden');
    }

    // Delete a goal
    function deleteGoal(index) {
        if (confirm('Are you sure you want to delete this goal?')) {
            studyData.goals.splice(index, 1);
            saveData();
            renderGoals();
        }
    }

    // Render achievements
    function renderAchievements() {
        achievementsGrid.innerHTML = '';
        
        achievementsData.forEach(achievement => {
            const isUnlocked = studyData.achievements[achievement.id];
            
            const achievementItem = document.createElement('div');
            achievementItem.className = `achievement-item ${isUnlocked ? 'unlocked' : ''}`;
            
            achievementItem.innerHTML = `
                <div class="achievement-icon">
                    <i class="fas ${achievement.icon}"></i>
                </div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.description}</div>
            `;
            
            achievementsGrid.appendChild(achievementItem);
        });
    }

    // Unlock an achievement
    function unlockAchievement(achievementId) {
        if (studyData.achievements[achievementId]) {
            return; // Already unlocked
        }
        
        const achievement = achievementsData.find(a => a.id === achievementId);
        if (!achievement) {
            return;
        }
        
        studyData.achievements[achievementId] = true;
        saveData();
        
        // Show achievement popup
        achievementTitle.textContent = translations[currentLanguage].achievementUnlocked;
        achievementDescription.textContent = achievement.name;
        achievementPopup.classList.remove('hidden');
        
        setTimeout(() => {
            achievementPopup.classList.add('hidden');
        }, 3000);
    }

    // Format timer display
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Update timer display
    function updateTimer() {
        timer.textContent = formatTime(timerSeconds);
        
        if (timerMode === 'focus') {
            timerLabel.textContent = 'Focus Time';
        } else if (timerMode === 'break') {
            timerLabel.textContent = 'Break Time';
        } else if (timerMode === 'longBreak') {
            timerLabel.textContent = 'Long Break';
        }
    }

    // Start timer
    function startPomodoroTimer() {
        if (timerRunning) return;
        
        timerRunning = true;
        startTimer.classList.add('hidden');
        pauseTimer.classList.remove('hidden');
        
        timerInterval = setInterval(() => {
            timerSeconds--;
            
            if (timerSeconds <= 0) {
                clearInterval(timerInterval);
                timerRunning = false;
                
                // Play sound
                const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
                audio.play().catch(e => console.log('Audio play failed:', e));
                
                // Show notification
                if (notificationsEnabled) {
                    if (timerMode === 'focus') {
                        showNotification('Focus session completed! Take a break.');
                        
                        // Add study time
                        const focusMinutes = parseInt(focusTimeInput.value);
                        studyData.studyTime += focusMinutes / 60; // Convert to hours
                        saveData();
                        
                        // Check for achievement
                        if (studyData.studyTime >= 10) {
                            unlockAchievement('study_time_10');
                        }
                    } else {
                        showNotification('Break time over! Ready to focus again?');
                    }
                }
                
                // Switch modes
                if (timerMode === 'focus') {
                    currentSession++;
                    
                    if (currentSession > parseInt(sessionsInput.value)) {
                        // Long break
                        timerMode = 'longBreak';
                        timerSeconds = parseInt(longBreakTimeInput.value) * 60;
                        currentSession = 1;
                    } else {
                        // Regular break
                        timerMode = 'break';
                        timerSeconds = parseInt(breakTimeInput.value) * 60;
                    }
                } else {
                    // Back to focus
                    timerMode = 'focus';
                    timerSeconds = parseInt(focusTimeInput.value) * 60;
                }
                
                updateTimer();
                startTimer.classList.remove('hidden');
                pauseTimer.classList.add('hidden');
            } else {
                updateTimer();
            }
        }, 1000);
    }

    // Pause timer
    function pausePomodoroTimer() {
        if (!timerRunning) return;
        
        clearInterval(timerInterval);
        timerRunning = false;
        startTimer.classList.remove('hidden');
        pauseTimer.classList.add('hidden');
    }

    // Reset timer
    function resetPomodoroTimer() {
        clearInterval(timerInterval);
        timerRunning = false;
        timerMode = 'focus';
        timerSeconds = parseInt(focusTimeInput.value) * 60;
        currentSession = 1;
        updateTimer();
        startTimer.classList.remove('hidden');
        pauseTimer.classList.add('hidden');
    }

    // Show notification
    function showNotification(message) {
        notificationMessage.textContent = message;
        notification.classList.remove('hidden');
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }

    // Export data to file
    function exportData() {
        try {
            const exportType = document.querySelector('input[name="export-type"]:checked').value;
            const exportContent = Array.from(document.querySelectorAll('input[name="export-content"]:checked')).map(el => el.value);
            
            if (exportType === 'json') {
                // Create export data
                const exportData = {
                    studyData: studyData,
                    exportDate: new Date().toISOString()
                };
                
                // Convert to JSON
                const jsonData = JSON.stringify(exportData, null, 2);
                
                // Create blob and download link
                const blob = new Blob([jsonData], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = 'study-planner-export.json';
                document.body.appendChild(a);
                a.click();
                
                // Clean up
                setTimeout(() => {
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }, 100);
            } else if (exportType === 'pdf') {
                // Create PDF using jsPDF
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                
                doc.setFontSize(22);
                doc.text('Study Planner Report', 20, 20);
                
                doc.setFontSize(16);
                doc.text('Generated on: ' + new Date().toLocaleDateString(), 20, 30);
                
                let yPos = 40;
                
                if (exportContent.includes('progress')) {
                    doc.setFontSize(14);
                    doc.text('Overall Progress', 20, yPos);
                    yPos += 10;
                    
                    let totalChapters = 0;
                    let completedChapters = 0;
                    
                    Object.keys(studyData.subjects).forEach(subject => {
                        const chapters = Object.keys(studyData.subjects[subject].chapters);
                        totalChapters += chapters.length;
                        
                        chapters.forEach(chapter => {
                            if (studyData.subjects[subject].chapters[chapter].completed) {
                                completedChapters++;
                            }
                        });
                    });
                    
                    const progress = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;
                    
                    doc.setFontSize(12);
                    doc.text(`Completion: ${progress}% (${completedChapters}/${totalChapters} chapters)`, 30, yPos);
                    yPos += 10;
                    
                    // Subject progress
                    doc.setFontSize(14);
                    doc.text('Subject Progress', 20, yPos);
                    yPos += 10;
                    
                    Object.keys(studyData.subjects).forEach(subject => {
                        const chapters = Object.keys(studyData.subjects[subject].chapters);
                        let subjectCompleted = 0;
                        
                        chapters.forEach(chapter => {
                            if (studyData.subjects[subject].chapters[chapter].completed) {
                                subjectCompleted++;
                            }
                        });
                        
                        const subjectProgress = chapters.length > 0 ? Math.round((subjectCompleted / chapters.length) * 100) : 0;
                        
                        doc.setFontSize(12);
                        doc.text(`${subject}: ${subjectProgress}% (${subjectCompleted}/${chapters.length})`, 30, yPos);
                        yPos += 8;
                        
                        if (yPos > 270) {
                            doc.addPage();
                            yPos = 20;
                        }
                    });
                }
                
                if (exportContent.includes('notes') && yPos < 270) {
                    yPos += 10;
                    doc.setFontSize(14);
                    doc.text('Notes', 20, yPos);
                    yPos += 10;
                    
                    Object.keys(studyData.notes).forEach(subject => {
                        if (studyData.notes[subject]) {
                            doc.setFontSize(12);
                            doc.text(`${subject}:`, 30, yPos);
                            yPos += 8;
                            
                            const noteLines = doc.splitTextToSize(studyData.notes[subject], 150);
                            
                            if (yPos + noteLines.length * 7 > 270) {
                                doc.addPage();
                                yPos = 20;
                            }
                            
                            doc.setFontSize(10);
                            doc.text(noteLines, 40, yPos);
                            yPos += noteLines.length * 7 + 10;
                            
                            if (yPos > 270) {
                                doc.addPage();
                                yPos = 20;
                            }
                        }
                    });
                }
                
                doc.save('study-planner-report.pdf');
            } else if (exportType === 'excel') {
                // Create Excel using SheetJS
                const XLSX = window.XLSX;
                const wb = XLSX.utils.book_new();
                
                if (exportContent.includes('progress')) {
                    // Progress worksheet
                    const progressData = [['Subject', 'Completed', 'Total', 'Progress']];
                    
                    Object.keys(studyData.subjects).forEach(subject => {
                        const chapters = Object.keys(studyData.subjects[subject].chapters);
                        let subjectCompleted = 0;
                        
                        chapters.forEach(chapter => {
                            if (studyData.subjects[subject].chapters[chapter].completed) {
                                subjectCompleted++;
                            }
                        });
                        
                        const subjectProgress = chapters.length > 0 ? Math.round((subjectCompleted / chapters.length) * 100) : 0;
                        
                        progressData.push([subject, subjectCompleted, chapters.length, `${subjectProgress}%`]);
                    });
                    
                    const ws = XLSX.utils.aoa_to_sheet(progressData);
                    XLSX.utils.book_append_sheet(wb, ws, 'Progress');
                }
                
                if (exportContent.includes('notes')) {
                    // Notes worksheet
                    const notesData = [['Subject', 'Notes']];
                    
                    Object.keys(studyData.notes).forEach(subject => {
                        if (studyData.notes[subject]) {
                            notesData.push([subject, studyData.notes[subject]]);
                        }
                    });
                    
                    const ws = XLSX.utils.aoa_to_sheet(notesData);
                    XLSX.utils.book_append_sheet(wb, ws, 'Notes');
                }
                
                if (exportContent.includes('flashcards')) {
                    // Flashcards worksheet
                    const flashcardsData = [['Subject', 'Question', 'Answer']];
                    
                    Object.keys(studyData.flashcards).forEach(subject => {
                        studyData.flashcards[subject].forEach(flashcard => {
                            flashcardsData.push([subject, flashcard.question, flashcard.answer]);
                        });
                    });
                    
                    const ws = XLSX.utils.aoa_to_sheet(flashcardsData);
                    XLSX.utils.book_append_sheet(wb, ws, 'Flashcards');
                }
                
                if (exportContent.includes('goals')) {
                    // Goals worksheet
                    const goalsData = [['Title', 'Description', 'Deadline', 'Priority', 'Completed']];
                    
                    studyData.goals.forEach(goal => {
                        goalsData.push([
                            goal.title,
                            goal.description,
                            goal.deadline,
                            goal.priority,
                            goal.completed ? 'Yes' : 'No'
                        ]);
                    });
                    
                    const ws = XLSX.utils.aoa_to_sheet(goalsData);
                    XLSX.utils.book_append_sheet(wb, ws, 'Goals');
                }
                
                XLSX.writeFile(wb, 'study-planner-data.xlsx');
            }
            
            showNotification(translations[currentLanguage].exportSuccess);
            exportModal.classList.add('hidden');
        } catch (e) {
            console.error('Export error:', e);
            showNotification('Error exporting data: ' + e.message);
        }
    }

    // Toggle notifications
    function toggleNotifications() {
        if ('Notification' in window) {
            if (Notification.permission === 'granted') {
                notificationsEnabled = !notificationsEnabled;
                studyData.settings.notifications = notificationsEnabled;
                saveData();
                showNotification(
                    notificationsEnabled ? 
                    translations[currentLanguage].notificationsEnabled : 
                    translations[currentLanguage].notificationsDisabled
                );
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        notificationsEnabled = true;
                        studyData.settings.notifications = true;
                        saveData();
                        showNotification(translations[currentLanguage].notificationsEnabled);
                    }
                });
            }
        } else {
            showNotification('Notifications not supported in this browser');
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        // Dark mode toggle
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                const isDarkMode = document.body.classList.contains('dark-mode');
                document.body.classList.toggle('dark-mode');
                
                if (isDarkMode) {
                    studyData.settings.theme = 'light';
                    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                } else {
                    studyData.settings.theme = 'dark';
                    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                }
                
                saveData();
            });
        }
        
        // Language toggle
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                currentLanguage = currentLanguage === 'en' ? 'ur' : 'en';
                document.getElementById('current-lang').textContent = currentLanguage.toUpperCase();
                updateLanguage();
            });
        }
        
        // Export button
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                exportModal.classList.remove('hidden');
            });
        }
        
        // Notification toggle
        if (notificationToggle) {
            notificationToggle.addEventListener('click', toggleNotifications);
        }
        
        // Settings button
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                settingsModal.classList.remove('hidden');
            });
        }
        
        // Check-in button
        if (checkInBtn) {
            checkInBtn.addEventListener('click', () => {
                const today = new Date();
                const lastCheckIn = studyData.streak.lastCheckIn ? new Date(studyData.streak.lastCheckIn) : null;
                
                // Check if this is a consecutive day
                if (lastCheckIn) {
                    const dayDiff = Math.floor((today - lastCheckIn) / (1000 * 60 * 60 * 24));
                    
                    if (dayDiff === 1) {
                        // Consecutive day
                        studyData.streak.current++;
                    } else if (dayDiff > 1) {
                        // Streak broken
                        studyData.streak.current = 1;
                    }
                } else {
                    // First check-in
                    studyData.streak.current = 1;
                }
                
                studyData.streak.lastCheckIn = today.toISOString();
                saveData();
                updateStreak();
                
                showNotification(translations[currentLanguage].streakUpdated + studyData.streak.current);
                
                // Check for achievements
                if (studyData.streak.current >= 7) {
                    unlockAchievement('streak_7');
                }
                if (studyData.streak.current >= 30) {
                    unlockAchievement('streak_30');
                }
            });
        }
        
        // Month tabs
        monthTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const month = parseInt(tab.dataset.month);
                setCurrentMonth(month);
            });
        });
        
        // Subject cards
        if (subjectsGrid) {
            subjectsGrid.addEventListener('click', (e) => {
                const subjectCard = e.target.closest('.subject-card');
                if (subjectCard) {
                    const subject = subjectCard.dataset.subject;
                    showSubjectDetail(subject);
                }
            });
        }
        
        // Back button
        if (backToSubjects) {
            backToSubjects.addEventListener('click', () => {
                subjectDetail.classList.add('hidden');
                document.getElementById('subject-progress').classList.remove('hidden');
                currentSubject = null;
            });
        }
        
        // Chapter checkboxes
        if (chapterList) {
            chapterList.addEventListener('change', (e) => {
                if (e.target.classList.contains('chapter-checkbox')) {
                    const chapter = e.target.dataset.chapter;
                    const completed = e.target.checked;
                    
                    // Update data
                    studyData.subjects[currentSubject].chapters[chapter].completed = completed;
                    saveData();
                    
                    // Update UI
                    e.target.closest('.chapter-item').classList.toggle('completed', completed);
                    updateOverallProgress();
                    renderSubjects();
                    
                    // Check for month completion
                    checkMonthCompletion();
                }
            });
        }
        
        // Save notes button
        if (saveNotesBtn) {
            saveNotesBtn.addEventListener('click', () => {
                if (currentSubject) {
                    studyData.notes[currentSubject] = subjectNotes.value;
                    saveData();
                    showNotification(translations[currentLanguage].notesSaved);
                }
            });
        }
        
        // Tabs
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                tabContents.forEach(content => content.classList.add('hidden'));
                tabContents[index].classList.remove('hidden');
            });
        });
        
        // Notification close
        if (notificationClose) {
            notificationClose.addEventListener('click', () => {
                notification.classList.add('hidden');
            });
        }
        
        // Floating buttons
        if (timerToggle) {
            timerToggle.addEventListener('click', () => {
                pomodoroContainer.classList.toggle('hidden');
            });
        }
        
        if (rotationToggle) {
            rotationToggle.addEventListener('click', () => {
                weeklyRotation.classList.toggle('hidden');
                if (!weeklyRotation.classList.contains('hidden')) {
                    weeklyRotation.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        
        if (analyticsToggle) {
            analyticsToggle.addEventListener('click', () => {
                analyticsSection.classList.toggle('hidden');
                if (!analyticsSection.classList.contains('hidden')) {
                    analyticsSection.scrollIntoView({ behavior: 'smooth' });
                    if (!window.analyticsChart) {
                        initializeAnalyticsChart();
                    }
                }
            });
        }
        
        if (goalsToggle) {
            goalsToggle.addEventListener('click', () => {
                goalsSection.classList.toggle('hidden');
                if (!goalsSection.classList.contains('hidden')) {
                    goalsSection.scrollIntoView({ behavior: 'smooth' });
                    renderGoals();
                }
            });
        }
        
        // Pomodoro timer
        if (closePomodoro) {
            closePomodoro.addEventListener('click', () => {
                pomodoroContainer.classList.add('hidden');
            });
        }
        
        if (startTimer) {
            startTimer.addEventListener('click', startPomodoroTimer);
        }
        
        if (pauseTimer) {
            pauseTimer.addEventListener('click', pausePomodoroTimer);
        }
        
        if (resetTimer) {
            resetTimer.addEventListener('click', resetPomodoroTimer);
        }
        
        // Timer settings
        [focusTimeInput, breakTimeInput, longBreakTimeInput, sessionsInput].forEach(input => {
            input.addEventListener('change', () => {
                if (timerMode === 'focus') {
                    timerSeconds = parseInt(focusTimeInput.value) * 60;
                } else if (timerMode === 'break') {
                    timerSeconds = parseInt(breakTimeInput.value) * 60;
                } else if (timerMode === 'longBreak') {
                    timerSeconds = parseInt(longBreakTimeInput.value) * 60;
                }
                updateTimer();
            });
        });
        
        // Flashcards
        if (addFlashcardBtn) {
            addFlashcardBtn.addEventListener('click', () => {
                flashcardQuestion.value = '';
                flashcardAnswer.value = '';
                flashcardModal.classList.remove('hidden');
            });
        }
        
        if (closeFlashcardModal) {
            closeFlashcardModal.addEventListener('click', () => {
                flashcardModal.classList.add('hidden');
            });
        }
        
        if (cancelFlashcard) {
            cancelFlashcard.addEventListener('click', () => {
                flashcardModal.classList.add('hidden');
            });
        }
        
        if (saveFlashcard) {
            saveFlashcard.addEventListener('click', () => {
                if (!flashcardQuestion.value.trim() || !flashcardAnswer.value.trim()) {
                    showNotification('Please enter both question and answer');
                    return;
                }
                
                if (!studyData.flashcards[currentSubject]) {
                    studyData.flashcards[currentSubject] = [];
                }
                
                studyData.flashcards[currentSubject].push({
                    question: flashcardQuestion.value.trim(),
                    answer: flashcardAnswer.value.trim(),
                    difficulty: 'medium',
                    lastReviewed: null
                });
                
                saveData();
                renderFlashcards();
                flashcardModal.classList.add('hidden');
                showNotification(translations[currentLanguage].flashcardAdded);
                
                // Check for achievement
                let totalFlashcards = 0;
                Object.keys(studyData.flashcards).forEach(subject => {
                    totalFlashcards += studyData.flashcards[subject].length;
                });
                
                if (totalFlashcards >= 10) {
                    unlockAchievement('create_10_flashcards');
                }
            });
        }
        
        // Flashcard list
        if (flashcardsList) {
            flashcardsList.addEventListener('click', (e) => {
                const flashcardItem = e.target.closest('.flashcard-item');
                if (flashcardItem) {
                    flashcardItem.classList.toggle('expanded');
                }
            });
        }
        
        if (studyFlashcardsBtn) {
            studyFlashcardsBtn.addEventListener('click', () => {
                if (!studyData.flashcards[currentSubject] || studyData.flashcards[currentSubject].length === 0) {
                    showNotification('No flashcards to study');
                    return;
                }
                
                flashcardsToStudy = [...studyData.flashcards[currentSubject]];
                currentFlashcardIndex = 0;
                
                // Shuffle flashcards
                for (let i = flashcardsToStudy.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [flashcardsToStudy[i], flashcardsToStudy[j]] = [flashcardsToStudy[j], flashcardsToStudy[i]];
                }
                
                updateStudyFlashcard();
                studyFlashcardsModal.classList.remove('hidden');
            });
        }
        
        if (closeStudyFlashcardsModal) {
            closeStudyFlashcardsModal.addEventListener('click', () => {
                studyFlashcardsModal.classList.add('hidden');
                document.getElementById('flashcard-study').classList.remove('flipped');
            });
        }
        
        if (flipFlashcard) {
            flipFlashcard.addEventListener('click', () => {
                document.getElementById('flashcard-study').classList.toggle('flipped');
            });
        }
        
        if (prevFlashcard) {
            prevFlashcard.addEventListener('click', () => {
                if (currentFlashcardIndex > 0) {
                    currentFlashcardIndex--;
                    updateStudyFlashcard();
                    document.getElementById('flashcard-study').classList.remove('flipped');
                }
            });
        }
        
        if (nextFlashcard) {
            nextFlashcard.addEventListener('click', () => {
                if (currentFlashcardIndex < flashcardsToStudy.length - 1) {
                    currentFlashcardIndex++;
                    updateStudyFlashcard();
                    document.getElementById('flashcard-study').classList.remove('flipped');
                } else {
                    // End of deck
                    studyFlashcardsModal.classList.add('hidden');
                    document.getElementById('flashcard-study').classList.remove('flipped');
                    showNotification('Flashcard study session completed!');
                }
            });
        }
        
        // Flashcard ratings
        [hardRating, goodRating, easyRating].forEach(btn => {
            btn.addEventListener('click', () => {
                // Move to next card
                if (currentFlashcardIndex < flashcardsToStudy.length - 1) {
                    currentFlashcardIndex++;
                    updateStudyFlashcard();
                    document.getElementById('flashcard-study').classList.remove('flipped');
                } else {
                    // End of deck
                    studyFlashcardsModal.classList.add('hidden');
                    document.getElementById('flashcard-study').classList.remove('flipped');
                    showNotification('Flashcard study session completed!');
                }
            });
        });
        
        // Goals
        if (addGoalBtn) {
            addGoalBtn.addEventListener('click', () => {
                editingGoalId = null;
                goalTitle.value = '';
                goalDescription.value = '';
                goalDeadline.value = '';
                goalPriority.value = 'medium';
                goalModal.classList.remove('hidden');
            });
        }
        
        if (closeGoalModal) {
            closeGoalModal.addEventListener('click', () => {
                goalModal.classList.add('hidden');
            });
        }
        
        if (cancelGoal) {
            cancelGoal.addEventListener('click', () => {
                goalModal.classList.add('hidden');
            });
        }
        
        if (saveGoal) {
            saveGoal.addEventListener('click', () => {
                if (!goalTitle.value.trim()) {
                    showNotification('Please enter a goal title');
                    return;
                }
                
                const newGoal = {
                    title: goalTitle.value.trim(),
                    description: goalDescription.value.trim(),
                    deadline: goalDeadline.value,
                    priority: goalPriority.value,
                    completed: false,
                    createdAt: new Date().toISOString()
                };
                
                if (editingGoalId !== null) {
                    // Update existing goal
                    studyData.goals[editingGoalId] = newGoal;
                } else {
                    // Add new goal
                    studyData.goals.push(newGoal);
                }
                
                saveData();
                renderGoals();
                goalModal.classList.add('hidden');
                showNotification(translations[currentLanguage].goalAdded);
            });
        }
        
        // Export modal
        if (closeExportModal) {
            closeExportModal.addEventListener('click', () => {
                exportModal.classList.add('hidden');
            });
        }
        
        if (cancelExport) {
            cancelExport.addEventListener('click', () => {
                exportModal.classList.add('hidden');
            });
        }
        
        if (doExport) {
            doExport.addEventListener('click', exportData);
        }
        
        // Settings modal
        if (closeSettingsModal) {
            closeSettingsModal.addEventListener('click', () => {
                settingsModal.classList.add('hidden');
            });
        }
        
        if (cancelSettings) {
            cancelSettings.addEventListener('click', () => {
                settingsModal.classList.add('hidden');
            });
        }
        
        if (saveSettings) {
            saveSettings.addEventListener('click', () => {
                studyData.settings.theme = themeSelect.value;
                studyData.settings.accentColor = accentColor.value;
                studyData.settings.notifications = enableNotifications.checked;
                studyData.settings.reminderTime = reminderTime.value;
                studyData.settings.autoBackup = autoBackup.checked;
                
                saveData();
                applyTheme();
                settingsModal.classList.add('hidden');
                showNotification(translations[currentLanguage].settingsSaved);
            });
        }
        
        if (backupNow) {
            backupNow.addEventListener('click', () => {
                const backupData = JSON.stringify(studyData);
                localStorage.setItem('studyPlannerBackup_' + new Date().toISOString(), backupData);
                showNotification('Backup created successfully');
            });
        }
        
        if (restoreData) {
            restoreData.addEventListener('click', () => {
                // Get all backups
                const backups = [];
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key.startsWith('studyPlannerBackup_')) {
                        backups.push({
                            key: key,
                            date: key.replace('studyPlannerBackup_', '')
                        });
                    }
                }
                
                if (backups.length === 0) {
                    showNotification('No backups found');
                    return;
                }
                
                // Sort by date (newest first)
                backups.sort((a, b) => new Date(b.date) - new Date(a.date));
                
                // Create backup selection
                const backupSelect = document.createElement('select');
                backupSelect.id = 'backup-select';
                
                backups.forEach(backup => {
                    const option = document.createElement('option');
                    option.value = backup.key;
                    option.textContent = new Date(backup.date).toLocaleString();
                    backupSelect.appendChild(option);
                });
                
                // Create modal
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.innerHTML = `
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3>Restore Backup</h3>
                            <button class="close-button" id="close-restore-modal">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Select a backup to restore:</p>
                            <div class="form-group">
                                ${backupSelect.outerHTML}
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="primary-button" id="do-restore">Restore</button>
                            <button class="secondary-button" id="cancel-restore">Cancel</button>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(modal);
                
                // Add event listeners
                document.getElementById('close-restore-modal').addEventListener('click', () => {
                    document.body.removeChild(modal);
                });
                
                document.getElementById('cancel-restore').addEventListener('click', () => {
                    document.body.removeChild(modal);
                });
                
                document.getElementById('do-restore').addEventListener('click', () => {
                    const selectedBackup = document.getElementById('backup-select').value;
                    const backupData = localStorage.getItem(selectedBackup);
                    
                    try {
                        studyData = JSON.parse(backupData);
                        saveData();
                        updateUI();
                        showNotification('Backup restored successfully');
                    } catch (e) {
                        showNotification('Error restoring backup: ' + e.message);
                    }
                    
                    document.body.removeChild(modal);
                });
            });
        }
        
        if (resetData) {
            resetData.addEventListener('click', () => {
                if (confirm(translations[currentLanguage].confirmReset)) {
                    initializeData();
                    updateUI();
                    showNotification(translations[currentLanguage].dataReset);
                }
            });
        }
        
        // Check for dark mode preference
        applyTheme();
    }

    // Update study flashcard
    function updateStudyFlashcard() {
        if (flashcardsToStudy.length === 0) return;
        
        const flashcard = flashcardsToStudy[currentFlashcardIndex];
        flashcardFrontText.textContent = flashcard.question;
        flashcardBackText.textContent = flashcard.answer;
        flashcardCounter.textContent = `${currentFlashcardIndex + 1}/${flashcardsToStudy.length}`;
    }

    // Check for month completion
    function checkMonthCompletion() {
        const monthData = studyPlan[currentMonth];
        let totalChapters = 0;
        let completedChapters = 0;
        
        Object.keys(monthData.subjects).forEach(subject => {
            const chapters = monthData.subjects[subject];
            chapters.forEach(chapter => {
                totalChapters++;
                if (studyData.subjects[subject] && 
                    studyData.subjects[subject].chapters[chapter] && 
                    studyData.subjects[subject].chapters[chapter].completed) {
                    completedChapters++;
                }
            });
        });
        
        if (totalChapters > 0 && completedChapters === totalChapters) {
            unlockAchievement('complete_month');
        }
    }

    // Initialize the app
    function initApp() {
        console.log('Initializing Advanced Study Planner App...');
        
        try {
            loadData();
            updateLanguage();
            updateOverallProgress();
            renderSubjects();
            updateStreak();
            setupEventListeners();
            
            // Set default month
            setCurrentMonth(1);
            
            // Initialize timer
            timerSeconds = parseInt(focusTimeInput.value) * 60;
            updateTimer();
            
            // Initialize chart with a slight delay to ensure DOM is ready
            setTimeout(() => {
                try {
                    initializeChart();
                } catch (e) {
                    console.error('Error initializing chart:', e);
                }
            }, 500);
            
            // Check if notifications are supported
            if ('Notification' in window) {
                if (Notification.permission === 'granted') {
                    notificationsEnabled = studyData.settings.notifications;
                }
            }
            
            console.log('App initialized successfully');
        } catch (e) {
            console.error('Error initializing app:', e);
            alert('There was an error initializing the app. Please check the console for details.');
        }
    }

    // Start the app
    initApp();
});